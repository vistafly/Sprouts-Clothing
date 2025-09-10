// ===== FIREBASE MANAGER WITH PROFILE INTEGRATION =====

class FirebaseManager {
    constructor() {
        this.app = null;
        this.db = null;
        this.auth = null;
        this.analytics = null;
        this.isInitialized = false;
        this.profileManager = null;
        this.currentProfile = null;
        
        // Collections
        this.collections = {
            profiles: 'user_profiles',
            products: 'products',
            orders: 'orders',
            analytics: 'analytics',
            inventory: 'inventory_alerts',
            reports: 'daily_reports'
        };
    }

    async initialize() {
    try {
        // Initialize Firebase
        this.app = firebase.initializeApp(FIREBASE_CONFIG);
        this.db = firebase.firestore();
        this.auth = firebase.auth();
        
        // Only initialize Analytics in production or if explicitly needed
        try {
            if (firebase.analytics && !window.location.hostname.includes('localhost')) {
                this.analytics = firebase.analytics();
            }
        } catch (analyticsError) {
            console.warn('Analytics not available (this is normal for local development):', analyticsError.message);
        }
        
        // Initialize Profile Manager
        this.profileManager = new FirebaseProfileManager(this.db, this.auth);
        
        // Set up auth state listener
        this.setupAuthStateListener();
        
        // Initialize user profile
        await this.initializeUserProfile();
        
        this.isInitialized = true;
        console.log('Firebase Manager initialized successfully');
        
        return this;
    } catch (error) {
        console.error('Firebase initialization failed:', error);
        // Fallback to offline profile manager
        this.profileManager = new OfflineProfileManager();
        await this.initializeUserProfile();
        throw error;
    }
}

    setupAuthStateListener() {
        this.auth.onAuthStateChanged(async (user) => {
            console.log('Auth state changed:', user ? 'User logged in' : 'User logged out');
            
            if (this.profileManager) {
                await this.profileManager.handleAuthChange(user);
                this.currentProfile = await this.profileManager.getCurrentProfile();
            }
        });
    }

    async initializeUserProfile() {
        try {
            this.currentProfile = await this.profileManager.initializeProfile();
            console.log('User profile initialized:', this.currentProfile?.type);
            return this.currentProfile;
        } catch (error) {
            console.error('Failed to initialize user profile:', error);
            throw error;
        }
    }

    // ===== PROFILE MANAGEMENT METHODS =====
    
    async getCurrentProfile() {
        return this.profileManager ? await this.profileManager.getCurrentProfile() : null;
    }

    async updateProfile(updates) {
        if (!this.profileManager) return null;
        
        const updatedProfile = await this.profileManager.updateProfile(updates);
        this.currentProfile = updatedProfile;
        return updatedProfile;
    }

    async trackAction(action, data = {}) {
        if (this.profileManager) {
            await this.profileManager.trackAction(action, data);
        }
    }

    async trackPageView(pageName, data = {}) {
        if (this.profileManager) {
            await this.profileManager.trackPageView(pageName, data);
        }
    }

    async trackProductView(productId, productData = {}) {
        if (this.profileManager) {
            await this.profileManager.trackProductView(productId, productData);
        }
    }

    // ===== CART MANAGEMENT =====
    
    async addToCart(productId, quantity = 1) {
        if (this.profileManager) {
            await this.profileManager.addToCart(productId, quantity);
        }
    }

    async removeFromCart(productId) {
        if (this.profileManager) {
            await this.profileManager.removeFromCart(productId);
        }
    }

    async updateCartQuantity(productId, quantity) {
        if (this.profileManager) {
            await this.profileManager.updateCartQuantity(productId, quantity);
        }
    }

    async clearCart() {
        if (this.profileManager) {
            await this.profileManager.clearCart();
        }
    }

    // ===== WISHLIST MANAGEMENT =====
    
    async addToWishlist(productId, productData = {}) {
        if (this.profileManager) {
            await this.profileManager.addToWishlist(productId, productData);
        }
    }

    async removeFromWishlist(productId) {
        if (this.profileManager) {
            await this.profileManager.removeFromWishlist(productId);
        }
    }

    // ===== PRODUCT MANAGEMENT =====
    
    async getProducts() {
    if (!this.db) {
        console.warn('Database not available, using fallback products');
        return this.getFallbackProducts();
    }
    
    try {
        const snapshot = await this.db.collection(this.collections.products).orderBy('created_at', 'desc').get();
        const products = [];
        
        snapshot.forEach(doc => {
            const data = doc.data();
            products.push({
                id: doc.id, // Use Firestore document ID
                name: data.name || 'Untitled Product',
                category: data.category || 'uncategorized',
                price: typeof data.price === 'number' ? data.price : 0,
                stock: typeof data.stock === 'number' && !isNaN(data.stock) ? data.stock : 0,
                image: data.image || 'https://via.placeholder.com/600x800?text=No+Image',
                description: data.description || 'No description available',
                sku: data.sku || `SKU-${doc.id}`,
                weight: data.weight || 0.5,
                dimensions: data.dimensions || 'Standard fit',
                created_at: data.created_at,
                updated_at: data.updated_at
            });
        });
        
        console.log(`Loaded ${products.length} products from Firebase`);
        return products;
    } catch (error) {
        console.error('Failed to load products from Firebase:', error);
        return this.getFallbackProducts();
    }
}

getFallbackProducts() {
    // Minimal fallback products if Firebase fails
    return [
        {
            id: 'fallback-1',
            name: 'Sample Product',
            category: 'boys',
            price: 29.99,
            stock: 5,
            image: 'https://via.placeholder.com/600x800?text=Sample+Product',
            description: 'Sample product for testing',
            sku: 'SAMPLE-001',
            weight: 0.5,
            dimensions: 'Standard fit'
        }
    ];
}
async updateProductStock(productId, newStock, reason = 'update') {
    if (!this.db) return;
    
    try {
        const productRef = this.db.collection(this.collections.products).doc(productId.toString());
        
        await productRef.update({
            stock: newStock,
            updated_at: new Date().toISOString(),
            update_reason: reason
        });
        
        // Log inventory change
        await this.logInventoryChange(productId, newStock, reason);
        
        console.log(`Product stock updated: ${productId} -> ${newStock}`);
        
    } catch (error) {
        console.error('Failed to update product stock:', error);
        throw error;
    }
}

async logInventoryChange(productId, newStock, reason) {
    if (!this.db) return;
    
    try {
        const product = products.find(p => p.id === productId);
        
        await this.db.collection(this.collections.inventory).add({
            product_id: productId,
            product_name: product?.name || 'Unknown',
            new_stock: newStock,
            reason,
            timestamp: new Date().toISOString(),
            profile_id: this.currentProfile?.id
        });
    } catch (error) {
        console.error('Failed to log inventory change:', error);
    }
}
// Add method to create products (for admin use)
async createProduct(productData) {
    if (!this.db) throw new Error('Database not available');
    
    try {
        const productWithTimestamps = {
            ...productData,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            stock: typeof productData.stock === 'number' && !isNaN(productData.stock) ? productData.stock : 0
        };
        
        const docRef = await this.db.collection(this.collections.products).add(productWithTimestamps);
        console.log('Product created with ID:', docRef.id);
        return docRef.id;
    } catch (error) {
        console.error('Failed to create product:', error);
        throw error;
    }
}

// Add method to update product
async updateProduct(productId, updates) {
    if (!this.db) throw new Error('Database not available');
    
    try {
        const updateData = {
            ...updates,
            updated_at: new Date().toISOString()
        };
        
        await this.db.collection(this.collections.products).doc(productId).update(updateData);
        console.log('Product updated:', productId);
        return true;
    } catch (error) {
        console.error('Failed to update product:', error);
        throw error;
    }
}

// Add method to delete product
async deleteProduct(productId) {
    if (!this.db) throw new Error('Database not available');
    
    try {
        await this.db.collection(this.collections.products).doc(productId).delete();
        console.log('Product deleted:', productId);
        return true;
    } catch (error) {
        console.error('Failed to delete product:', error);
        throw error;
    }
}

    // ===== ORDER MANAGEMENT =====
    
    async logOrder(orderData) {
        if (!this.db) return;
        
        try {
            const enrichedOrderData = {
                ...orderData,
                profile_id: this.currentProfile?.id,
                profile_type: this.currentProfile?.type,
                timestamp: new Date().toISOString(),
                status: 'pending',
                source: 'website'
            };
            
            const orderRef = await this.db.collection(this.collections.orders).add(enrichedOrderData);
            
            // Add to profile purchase history
            if (this.profileManager) {
                await this.profileManager.addPurchase({
                    order_id: orderRef.id,
                    ...enrichedOrderData
                });
            }
            
            console.log('Order logged successfully:', orderRef.id);
            return orderRef.id;
        } catch (error) {
            console.error('Failed to log order:', error);
            throw error;
        }
    }

    // ===== ANALYTICS & EVENTS =====
    
    async logEvent(eventName, eventData = {}) {
    try {
        const enrichedEventData = {
            event_name: eventName,
            event_data: eventData,
            timestamp: new Date().toISOString(),
            profile_id: this.currentProfile?.id || 'anonymous',  // Fix undefined issue
            profile_type: this.currentProfile?.type || 'unknown',
            session_id: this.currentProfile?.session_id || 'no_session',
            user_agent: navigator.userAgent,
            page_url: window.location.href,
            page_title: document.title
        };
        
        // Log to profile analytics
        if (this.profileManager) {
            await this.profileManager.trackAction(eventName, eventData);
        }
        
        // Log to Firebase Analytics collection
        if (this.db) {
            await this.db.collection(this.collections.analytics).add(enrichedEventData);
        }
        
        // Log to Firebase Analytics service (only if available)
        if (this.analytics) {
            this.analytics.logEvent(eventName, eventData);
        }
        
    } catch (error) {
        console.error('Failed to log event:', error);
    }
    }

    async trackCustomerBehavior(category, action, data = {}) {
        const behaviorData = {
            category,
            action,
            data,
            timestamp: new Date().toISOString(),
            profile_id: this.currentProfile?.id,
            session_id: this.currentProfile?.session_id
        };
        
        await this.logEvent('customer_behavior', behaviorData);
    }

    // ===== REPORTING =====
    
    async generateDailyReport() {
        if (!this.db) return;
        
        try {
            const today = new Date();
            const yesterday = new Date(today);
            yesterday.setDate(yesterday.getDate() - 1);
            
            const startOfDay = new Date(yesterday);
            startOfDay.setHours(0, 0, 0, 0);
            
            const endOfDay = new Date(yesterday);
            endOfDay.setHours(23, 59, 59, 999);
            
            // Get orders from yesterday
            const ordersSnapshot = await this.db.collection(this.collections.orders)
                .where('timestamp', '>=', startOfDay.toISOString())
                .where('timestamp', '<=', endOfDay.toISOString())
                .get();
            
            // Get analytics from yesterday
            const analyticsSnapshot = await this.db.collection(this.collections.analytics)
                .where('timestamp', '>=', startOfDay.toISOString())
                .where('timestamp', '<=', endOfDay.toISOString())
                .get();
            
            // Process data
            const orders = [];
            let totalRevenue = 0;
            
            ordersSnapshot.forEach(doc => {
                const order = doc.data();
                orders.push(order);
                totalRevenue += order.totals?.total || 0;
            });
            
            const events = [];
            const pageViews = new Set();
            const uniqueProfiles = new Set();
            
            analyticsSnapshot.forEach(doc => {
                const event = doc.data();
                events.push(event);
                
                if (event.event_name === 'page_view') {
                    pageViews.add(event.page_url);
                }
                
                if (event.profile_id) {
                    uniqueProfiles.add(event.profile_id);
                }
            });
            
            // Generate report
            const report = {
                date: yesterday.toISOString().split('T')[0],
                generated_at: new Date().toISOString(),
                orders: {
                    count: orders.length,
                    total_revenue: totalRevenue,
                    average_order_value: orders.length > 0 ? totalRevenue / orders.length : 0
                },
                traffic: {
                    unique_visitors: uniqueProfiles.size,
                    page_views: pageViews.size,
                    total_events: events.length
                },
                top_events: this.getTopEvents(events),
                inventory_alerts: await this.getInventoryAlerts(startOfDay, endOfDay)
            };
            
            // Save report
            await this.db.collection(this.collections.reports).add(report);
            
            console.log('Daily report generated:', report);
            return report;
            
        } catch (error) {
            console.error('Failed to generate daily report:', error);
        }
    }

    getTopEvents(events) {
        const eventCounts = {};
        
        events.forEach(event => {
            const eventName = event.event_name;
            eventCounts[eventName] = (eventCounts[eventName] || 0) + 1;
        });
        
        return Object.entries(eventCounts)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 10)
            .map(([name, count]) => ({ name, count }));
    }

    async getInventoryAlerts(startDate, endDate) {
        if (!this.db) return [];
        
        try {
            const alertsSnapshot = await this.db.collection(this.collections.inventory)
                .where('timestamp', '>=', startDate.toISOString())
                .where('timestamp', '<=', endDate.toISOString())
                .get();
            
            const alerts = [];
            alertsSnapshot.forEach(doc => {
                alerts.push(doc.data());
            });
            
            return alerts;
        } catch (error) {
            console.error('Failed to get inventory alerts:', error);
            return [];
        }
    }

    // ===== USER AUTHENTICATION (Future Enhancement) =====
    
    async signUpUser(email, password, additionalInfo = {}) {
        if (!this.auth) throw new Error('Authentication not available');
        
        try {
            const userCredential = await this.auth.createUserWithEmailAndPassword(email, password);
            const user = userCredential.user;
            
            // Update profile with user info
            await this.updateProfile({
                personal_info: {
                    email: user.email,
                    ...additionalInfo
                }
            });
            
            await this.logEvent('user_signed_up', {
                uid: user.uid,
                email: user.email
            });
            
            return user;
        } catch (error) {
            console.error('Sign up failed:', error);
            throw error;
        }
    }

    async signInUser(email, password) {
        if (!this.auth) throw new Error('Authentication not available');
        
        try {
            const userCredential = await this.auth.signInWithEmailAndPassword(email, password);
            const user = userCredential.user;
            
            await this.logEvent('user_signed_in', {
                uid: user.uid,
                email: user.email
            });
            
            return user;
        } catch (error) {
            console.error('Sign in failed:', error);
            throw error;
        }
    }

    async signOutUser() {
        if (!this.auth) return;
        
        try {
            await this.auth.signOut();
            
            await this.logEvent('user_signed_out', {
                timestamp: new Date().toISOString()
            });
            
        } catch (error) {
            console.error('Sign out failed:', error);
            throw error;
        }
    }

    // ===== PROFILE EXPORT (for data portability) =====
    
    async exportProfileData() {
        if (!this.currentProfile) return null;
        
        const exportData = {
            profile: this.currentProfile,
            export_timestamp: new Date().toISOString(),
            export_version: '1.0'
        };
        
        await this.logEvent('profile_data_exported', {
            profile_id: this.currentProfile.id,
            export_size: JSON.stringify(exportData).length
        });
        
        return exportData;
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FirebaseManager;
}