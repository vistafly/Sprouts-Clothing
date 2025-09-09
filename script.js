// ===== PRODUCT DATABASE =====
const products = [
    // Boys Clothing (15 items)
    { 
        id: 1, 
        name: "Heritage Denim Jacket", 
        category: "boys", 
        price: 89.99, 
        stock: 12, 
        image: "https://images.unsplash.com/photo-1516962126636-27ad087061cc?w=600&h=800&fit=crop&auto=format", 
        description: "Premium heritage denim with vintage wash" 
    },
    { 
        id: 2, 
        name: "Organic Cotton Polo", 
        category: "boys", 
        price: 45.99, 
        stock: 8, 
        image: "https://images.unsplash.com/photo-1503944168849-ce5ccdaeb477?w=600&h=800&fit=crop&auto=format", 
        description: "Sustainably sourced organic cotton polo" 
    },
    { 
        id: 3, 
        name: "Performance Joggers", 
        category: "boys", 
        price: 65.99, 
        stock: 15, 
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop&auto=format", 
        description: "Technical fabric with moisture-wicking properties" 
    },
    { 
        id: 4, 
        name: "Artist Series Tee", 
        category: "boys", 
        price: 38.99, 
        stock: 3, 
        image: "https://images.unsplash.com/photo-1576253566935-e4e1789ad4ac?w=600&h=800&fit=crop&auto=format", 
        description: "Limited edition artist collaboration" 
    },
    { 
        id: 5, 
        name: "Tailored Chino Shorts", 
        category: "boys", 
        price: 52.99, 
        stock: 0, 
        image: "https://images.unsplash.com/photo-1506629905607-bb4d88e96b2c?w=600&h=800&fit=crop&auto=format", 
        description: "Precisely tailored summer essential", 
        preorder: true 
    },
    { 
        id: 6, 
        name: "Merino Wool Hoodie", 
        category: "boys", 
        price: 98.99, 
        stock: 20, 
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop&auto=format", 
        description: "Ultra-soft merino wool blend" 
    },
    { 
        id: 7, 
        name: "Oxford Button-Down", 
        category: "boys", 
        price: 68.99, 
        stock: 6, 
        image: "https://images.unsplash.com/photo-1503944168849-ce5ccdaeb477?w=600&h=800&fit=crop&auto=format", 
        description: "Classic Oxford weave in premium cotton" 
    },
    { 
        id: 8, 
        name: "Adventure Cargo Pants", 
        category: "boys", 
        price: 75.99, 
        stock: 11, 
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop&auto=format", 
        description: "Durable ripstop fabric with functional pockets" 
    },
    { 
        id: 9, 
        name: "Wool Baseball Cap", 
        category: "boys", 
        price: 42.99, 
        stock: 25, 
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop&auto=format", 
        description: "Premium wool blend with leather strap" 
    },
    { 
        id: 10, 
        name: "Italian Leather Sneakers", 
        category: "boys", 
        price: 124.99, 
        stock: 4, 
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=800&fit=crop&auto=format", 
        description: "Handcrafted Italian leather construction" 
    },
    { 
        id: 11, 
        name: "Technical Track Suit", 
        category: "boys", 
        price: 89.99, 
        stock: 9, 
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop&auto=format", 
        description: "Performance fabric with moisture management" 
    },
    { 
        id: 12, 
        name: "Down Puffer Jacket", 
        category: "boys", 
        price: 145.99, 
        stock: 7, 
        image: "https://images.unsplash.com/photo-1516962126636-27ad087061cc?w=600&h=800&fit=crop&auto=format", 
        description: "Responsibly sourced down insulation" 
    },
    { 
        id: 13, 
        name: "Chambray School Shirt", 
        category: "boys", 
        price: 48.99, 
        stock: 18, 
        image: "https://images.unsplash.com/photo-1503944168849-ce5ccdaeb477?w=600&h=800&fit=crop&auto=format", 
        description: "Elevated chambray with mother-of-pearl buttons" 
    },
    { 
        id: 14, 
        name: "Quick-Dry Swim Shorts", 
        category: "boys", 
        price: 39.99, 
        stock: 14, 
        image: "https://images.unsplash.com/photo-1506629905607-bb4d88e96b2c?w=600&h=800&fit=crop&auto=format", 
        description: "Technical swim fabric with UPF protection" 
    },
    { 
        id: 15, 
        name: "Silk Bow Tie", 
        category: "boys", 
        price: 35.99, 
        stock: 2, 
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop&auto=format", 
        description: "Hand-tied silk in classic patterns" 
    },

    // Girls Clothing (15 items)
    { 
        id: 16, 
        name: "Liberty Print Dress", 
        category: "girls", 
        price: 95.99, 
        stock: 10, 
        image: "https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?w=600&h=800&fit=crop&auto=format", 
        description: "Authentic Liberty of London print" 
    },
    { 
        id: 17, 
        name: "Vintage Denim Overall", 
        category: "girls", 
        price: 78.99, 
        stock: 5, 
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=800&fit=crop&auto=format", 
        description: "Heritage denim with vintage-inspired details" 
    },
    { 
        id: 18, 
        name: "Tulle Party Skirt", 
        category: "girls", 
        price: 58.99, 
        stock: 8, 
        image: "https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?w=600&h=800&fit=crop&auto=format", 
        description: "Multi-layer tulle with silk lining" 
    },
    { 
        id: 19, 
        name: "Cashmere Cardigan", 
        category: "girls", 
        price: 125.99, 
        stock: 12, 
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=800&fit=crop&auto=format", 
        description: "Pure cashmere in seasonal colors" 
    },
    { 
        id: 20, 
        name: "Organic Cotton Leggings", 
        category: "girls", 
        price: 35.99, 
        stock: 0, 
        image: "https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?w=600&h=800&fit=crop&auto=format", 
        description: "Certified organic cotton with stretch" 
    },
    { 
        id: 21, 
        name: "Silk Party Dress", 
        category: "girls", 
        price: 165.99, 
        stock: 6, 
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=800&fit=crop&auto=format", 
        description: "Pure silk with hand-embroidered details" 
    },
    { 
        id: 22, 
        name: "School Pinafore", 
        category: "girls", 
        price: 72.99, 
        stock: 16, 
        image: "https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?w=600&h=800&fit=crop&auto=format", 
        description: "Tailored pinafore in premium navy wool" 
    },
    { 
        id: 23, 
        name: "Bamboo Pajama Set", 
        category: "girls", 
        price: 68.99, 
        stock: 11, 
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=800&fit=crop&auto=format", 
        description: "Bamboo fiber with temperature regulation" 
    },
    { 
        id: 24, 
        name: "Leather Ballet Flats", 
        category: "girls", 
        price: 89.99, 
        stock: 3, 
        image: "https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?w=600&h=800&fit=crop&auto=format", 
        description: "Italian leather with cushioned sole" 
    },
    { 
        id: 25, 
        name: "Silk Hair Accessories", 
        category: "girls", 
        price: 28.99, 
        stock: 22, 
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=800&fit=crop&auto=format", 
        description: "Pure silk scrunchies and headbands" 
    },
    { 
        id: 26, 
        name: "Wool Blend Coat", 
        category: "girls", 
        price: 185.99, 
        stock: 4, 
        image: "https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?w=600&h=800&fit=crop&auto=format", 
        description: "Luxurious wool blend with satin lining" 
    },
    { 
        id: 27, 
        name: "Performance Shorts", 
        category: "girls", 
        price: 44.99, 
        stock: 13, 
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=800&fit=crop&auto=format", 
        description: "Technical fabric for active wear" 
    },
    { 
        id: 28, 
        name: "Linen Sundress", 
        category: "girls", 
        price: 85.99, 
        stock: 9, 
        image: "https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?w=600&h=800&fit=crop&auto=format", 
        description: "French linen with delicate embroidery" 
    },
    { 
        id: 29, 
        name: "Pleated School Skirt", 
        category: "girls", 
        price: 65.99, 
        stock: 1, 
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=800&fit=crop&auto=format", 
        description: "Precisely pleated wool blend" 
    },
    { 
        id: 30, 
        name: "Raincoat with Hood", 
        category: "girls", 
        price: 92.99, 
        stock: 7, 
        image: "https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?w=600&h=800&fit=crop&auto=format", 
        description: "Waterproof fabric with breathable lining" 
    },

    // Women's Jewelry (10 items)
    { 
        id: 31, 
        name: "Tahitian Pearl Necklace", 
        category: "women", 
        price: 285.99, 
        stock: 5, 
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop&auto=format", 
        description: "Lustrous Tahitian pearls with 18k clasp" 
    },
    { 
        id: 32, 
        name: "Diamond Stud Earrings", 
        category: "women", 
        price: 445.99, 
        stock: 3, 
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop&auto=format", 
        description: "0.25ct diamonds in 14k white gold" 
    },
    { 
        id: 33, 
        name: "Vintage Gold Bracelet", 
        category: "women", 
        price: 195.99, 
        stock: 8, 
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop&auto=format", 
        description: "18k gold with vintage-inspired design" 
    },
    { 
        id: 34, 
        name: "Sterling Silver Ring Set", 
        category: "women", 
        price: 125.99, 
        stock: 12, 
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop&auto=format", 
        description: "Handcrafted sterling silver collection" 
    },
    { 
        id: 35, 
        name: "Sapphire Pendant", 
        category: "women", 
        price: 325.99, 
        stock: 0, 
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop&auto=format", 
        description: "Natural sapphire in 14k setting", 
        preorder: true 
    },
    { 
        id: 36, 
        name: "Gold Hoop Earrings", 
        category: "women", 
        price: 165.99, 
        stock: 15, 
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop&auto=format", 
        description: "14k gold hoops in three sizes" 
    },
    { 
        id: 37, 
        name: "Charm Bracelet", 
        category: "women", 
        price: 235.99, 
        stock: 6, 
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop&auto=format", 
        description: "Sterling silver with removable charms" 
    },
    { 
        id: 38, 
        name: "Statement Collar Necklace", 
        category: "women", 
        price: 385.99, 
        stock: 4, 
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop&auto=format", 
        description: "Bold design in mixed metals" 
    },
    { 
        id: 39, 
        name: "Diamond Tennis Bracelet", 
        category: "women", 
        price: 685.99, 
        stock: 2, 
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop&auto=format", 
        description: "1ct total weight in 14k white gold" 
    },
    { 
        id: 40, 
        name: "Emerald Cocktail Ring", 
        category: "women", 
        price: 425.99, 
        stock: 7, 
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop&auto=format", 
        description: "Natural emerald with diamond accents" 
    },

    // Accessories (5 items)
    { 
        id: 41, 
        name: "Wide-Brim Sun Hat", 
        category: "accessories", 
        price: 58.99, 
        stock: 18, 
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop&auto=format", 
        description: "UPF 50+ protection with chin strap" 
    },
    { 
        id: 42, 
        name: "Merino Wool Beanie", 
        category: "accessories", 
        price: 45.99, 
        stock: 4, 
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop&auto=format", 
        description: "Ultra-soft merino wool in seasonal colors" 
    },
    { 
        id: 43, 
        name: "Leather School Backpack", 
        category: "accessories", 
        price: 125.99, 
        stock: 9, 
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop&auto=format", 
        description: "Full-grain leather with brass hardware" 
    },
    { 
        id: 44, 
        name: "Polarized Sunglasses", 
        category: "accessories", 
        price: 68.99, 
        stock: 13, 
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop&auto=format", 
        description: "UV protection with shatterproof lenses" 
    },
    { 
        id: 45, 
        name: "Italian Leather Belt", 
        category: "accessories", 
        price: 55.99, 
        stock: 1, 
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop&auto=format", 
        description: "Handcrafted Italian leather with brass buckle" 
    }
];

// ===== GLOBAL STATE =====
let cart = [];
let currentFilter = 'all';
let isLoading = false;

// ===== SHOPIFY INTEGRATION =====
class ShopifyIntegration {
    constructor() {
        this.storeDomain = 'your-store.myshopify.com';
        this.accessToken = 'your-storefront-access-token';
        this.apiVersion = '2023-10';
    }

    async getProducts() {
        // Mock API call - replace with actual Shopify Storefront API
        return new Promise((resolve) => {
            setTimeout(() => resolve(products), 500);
        });
    }

    async createCheckout(lineItems) {
        console.log('Creating Shopify checkout with items:', lineItems);
        
        // Mock checkout - replace with actual Shopify checkout
        const checkoutUrl = `https://${this.storeDomain}/cart/${lineItems.map(item => 
            `${item.variantId}:${item.quantity}`
        ).join(',')}`;
        
        window.open(checkoutUrl, '_blank');
        return checkoutUrl;
    }

    async updateInventory(variantId, quantity) {
        console.log(`Updating inventory for variant ${variantId}: ${quantity} units sold`);
        // This would integrate with Shopify Admin API
        return true;
    }

    setupWebhooks() {
        console.log('Setting up Shopify webhooks for inventory management');
        // This would set up actual webhooks in production
    }
}

// ===== INVENTORY MANAGEMENT =====
class InventoryManager {
    constructor() {
        this.lowStockThreshold = 5;
        this.ownerEmail = 'maezron54@gmail.com';
        this.shopify = new ShopifyIntegration();
    }

    getStockStatus(product) {
        if (product.preorder && product.stock === 0) return 'preorder';
        if (product.stock === 0) return 'out-of-stock';
        if (product.stock <= this.lowStockThreshold) return 'low-stock';
        return 'in-stock';
    }

    getStockBadgeInfo(product) {
        const status = this.getStockStatus(product);
        const badges = {
            'in-stock': { text: 'In Stock', class: 'in-stock' },
            'low-stock': { text: `Only ${product.stock} left`, class: 'low-stock' },
            'out-of-stock': { text: 'Sold Out', class: 'out-of-stock' },
            'preorder': { text: 'Preorder', class: 'preorder' }
        };
        return badges[status];
    }

    async sendLowStockAlert(product) {
        const alertData = {
            to: this.ownerEmail,
            subject: `Low Stock Alert: ${product.name}`,
            body: `
                Product: ${product.name}
                Current Stock: ${product.stock}
                Threshold: ${this.lowStockThreshold}
                
                Please restock this item soon.
            `
        };
        
        console.log('📧 Low Stock Alert Sent:', alertData);
        // In production, this would send an actual email
    }

    async sendSoldOutAlert(product) {
        const alertData = {
            to: this.ownerEmail,
            subject: `Sold Out Alert: ${product.name}`,
            body: `
                Product: ${product.name}
                Status: SOLD OUT
                
                Consider restocking or enabling preorders.
            `
        };
        
        console.log('📧 Sold Out Alert Sent:', alertData);
        // In production, this would send an actual email
    }

    async updateStock(productId, quantitySold) {
        const product = products.find(p => p.id === productId);
        if (!product) return false;

        const previousStock = product.stock;
        const wasLowStock = previousStock <= this.lowStockThreshold;
        const wasInStock = previousStock > 0;

        // Update stock
        product.stock = Math.max(0, product.stock - quantitySold);

        // Send alerts if needed
        if (product.stock === 0 && wasInStock) {
            await this.sendSoldOutAlert(product);
        } else if (product.stock <= this.lowStockThreshold && !wasLowStock && product.stock > 0) {
            await this.sendLowStockAlert(product);
        }

        // Update Shopify inventory
        await this.shopify.updateInventory(product.id, product.stock);

        return true;
    }

    generateDailyReport() {
        const lowStockItems = products.filter(p => 
            p.stock <= this.lowStockThreshold && p.stock > 0
        );
        const soldOutItems = products.filter(p => p.stock === 0);
        
        const report = {
            date: new Date().toLocaleDateString(),
            totalProducts: products.length,
            lowStockCount: lowStockItems.length,
            soldOutCount: soldOutItems.length,
            lowStockItems,
            soldOutItems,
            totalValue: products.reduce((sum, p) => sum + (p.price * p.stock), 0)
        };

        console.log('📊 Daily Inventory Report:', report);
        return report;
    }
}

// ===== INITIALIZE MANAGERS =====
const shopify = new ShopifyIntegration();
const inventoryManager = new InventoryManager();

// ===== DOM ELEMENTS =====
const loadingScreen = document.getElementById('loadingScreen');
const header = document.getElementById('header');
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const productsGrid = document.getElementById('productsGrid');
const filterTabs = document.querySelectorAll('.filter-tab');
const notification = document.getElementById('notification');
const notificationText = document.getElementById('notificationText');

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

async function initializeApp() {
    try {
        // Setup event listeners
        setupEventListeners();
        
        // Setup header scroll effect
        setupHeaderScroll();
        
        // Load products
        await loadProducts();
        
        // Setup Shopify webhooks
        shopify.setupWebhooks();
        
        // Hide loading screen
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 1500);
        
        // Setup daily inventory reporting
        scheduleDailyReport();
        
        console.log('✅ App initialized successfully');
        
    } catch (error) {
        console.error('❌ App initialization failed:', error);
    }
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Filter tabs
    filterTabs.forEach(tab => {
        tab.addEventListener('click', handleFilterChange);
    });

    // Cart functionality
    cartBtn.addEventListener('click', openCart);
    cartClose.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);
    checkoutBtn.addEventListener('click', proceedToCheckout);

    // Hero CTA
    const heroCTA = document.querySelector('.hero-cta');
    if (heroCTA) {
        heroCTA.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('collections').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);

    // Mobile menu (placeholder for future implementation)
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
}

function setupHeaderScroll() {
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollY = currentScrollY;
    }, { passive: true });
}

// ===== PRODUCT LOADING & RENDERING =====
async function loadProducts() {
    try {
        showSkeletonLoading();
        
        // Simulate loading time for better UX
        await new Promise(resolve => setTimeout(resolve, 800));
        
        const loadedProducts = await shopify.getProducts();
        renderProducts(loadedProducts);
        
    } catch (error) {
        console.error('Failed to load products:', error);
        showErrorMessage('Failed to load products. Please try again.');
    }
}

function renderProducts(productsToRender = null) {
    const filteredProducts = productsToRender || getFilteredProducts();
    
    productsGrid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        showEmptyState();
        return;
    }
    
    filteredProducts.forEach((product, index) => {
        const productCard = createProductCard(product);
        productCard.style.opacity = '0';
        productCard.style.transform = 'translateY(20px)';
        productsGrid.appendChild(productCard);
        
        // Staggered animation
        setTimeout(() => {
            productCard.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            productCard.style.opacity = '1';
            productCard.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

function getFilteredProducts() {
    if (currentFilter === 'all') {
        return products;
    }
    return products.filter(product => product.category === currentFilter);
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const stockInfo = inventoryManager.getStockBadgeInfo(product);
    const isOutOfStock = product.stock === 0 && !product.preorder;
    
    card.innerHTML = `
        <div class="product-image-container">
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            <div class="stock-badge ${stockInfo.class}">${stockInfo.text}</div>
            <button class="quick-add-btn" onclick="addToCart(${product.id})" ${isOutOfStock ? 'disabled' : ''}>
                ${getAddToCartText(product)}
            </button>
        </div>
        <div class="product-info">
            <div class="product-category">${getCategoryDisplayName(product.category)}</div>
            <h3 class="product-title">${product.name}</h3>
            <div class="product-price">$${product.price.toFixed(2)}</div>
        </div>
    `;
    
    return card;
}

function getAddToCartText(product) {
    if (product.stock === 0 && !product.preorder) return 'Sold Out';
    if (product.preorder) return 'Preorder';
    return 'Add to Cart';
}

function getCategoryDisplayName(category) {
    const names = {
        'boys': 'Boys',
        'girls': 'Girls',
        'women': 'Women\'s Jewelry',
        'accessories': 'Accessories'
    };
    return names[category] || category;
}

function showSkeletonLoading() {
    productsGrid.innerHTML = '';
    
    for (let i = 0; i < 12; i++) {
        const skeleton = document.createElement('div');
        skeleton.className = 'skeleton-product';
        skeleton.innerHTML = `
            <div class="skeleton-image skeleton"></div>
            <div class="skeleton-category skeleton"></div>
            <div class="skeleton-title skeleton"></div>
            <div class="skeleton-price skeleton"></div>
        `;
        productsGrid.appendChild(skeleton);
    }
}

function showEmptyState() {
    productsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; color: #999;">
            <h3 style="margin-bottom: 1rem;">No products found</h3>
            <p>Try adjusting your filter selection.</p>
        </div>
    `;
}

function showErrorMessage(message) {
    productsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; color: #dc2626;">
            <h3 style="margin-bottom: 1rem;">Error</h3>
            <p>${message}</p>
        </div>
    `;
}

// ===== FILTER HANDLING =====
function handleFilterChange(e) {
    const newFilter = e.target.dataset.filter;
    
    // Update active tab
    filterTabs.forEach(tab => tab.classList.remove('active'));
    e.target.classList.add('active');
    
    // Update filter and re-render
    currentFilter = newFilter;
    renderProducts();
    
    // Track filter usage
    trackEvent('engagement', 'filter_used', newFilter);
}

// ===== CART FUNCTIONALITY =====
async function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || (product.stock === 0 && !product.preorder)) {
        return;
    }
    
    const button = event.target;
    const originalText = button.textContent;
    
    // Visual feedback
    button.style.background = '#2d5a27';
    button.textContent = 'Added!';
    button.disabled = true;
    
    try {
        // Update inventory if not preorder
        if (!product.preorder) {
            await inventoryManager.updateStock(productId, 1);
        }
        
        // Add to cart
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        
        // Update UI
        updateCartCount();
        updateCartDisplay();
        showNotification(`${product.name} added to cart`);
        
        // Track event
        trackEvent('ecommerce', 'add_to_cart', product.name);
        
        // Reset button after delay
        setTimeout(() => {
            button.style.background = '';
            button.textContent = originalText;
            button.disabled = false;
            
            // Re-render products to update stock display
            renderProducts();
        }, 1500);
        
    } catch (error) {
        console.error('Failed to add item to cart:', error);
        showNotification('Failed to add item to cart');
        
        // Reset button
        button.style.background = '';
        button.textContent = originalText;
        button.disabled = false;
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    updateCartDisplay();
    
    trackEvent('ecommerce', 'remove_from_cart', productId);
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    const newQuantity = item.quantity + change;
    
    if (newQuantity <= 0) {
        removeFromCart(productId);
    } else {
        item.quantity = newQuantity;
        updateCartCount();
        updateCartDisplay();
    }
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    if (totalItems > 0) {
        cartCount.classList.add('show');
        checkoutBtn.disabled = false;
    } else {
        cartCount.classList.remove('show');
        checkoutBtn.disabled = true;
    }
}

function updateCartDisplay() {
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                    <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"></path>
                    <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"></path>
                    <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"></path>
                </svg>
                <h4>Your cart is empty</h4>
                <p>Add some beautiful pieces to get started</p>
            </div>
        `;
        cartTotal.textContent = '$0.00';
        return;
    }
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${getCategoryDisplayName(item.category)}</p>
                </div>
                <div class="cart-item-controls">
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                    <div class="item-price">$${itemTotal.toFixed(2)}</div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

function openCart() {
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    trackEvent('engagement', 'cart_opened');
}

function closeCart() {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('show');
    document.body.style.overflow = '';
}

async function proceedToCheckout() {
    if (cart.length === 0) return;
    
    try {
        checkoutBtn.textContent = 'Processing...';
        checkoutBtn.disabled = true;
        
        const lineItems = cart.map(item => ({
            variantId: item.id,
            quantity: item.quantity
        }));
        
        await shopify.createCheckout(lineItems);
        
        // Track checkout
        trackEvent('ecommerce', 'begin_checkout', {
            value: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
            items: cart.length
        });
        
        // Clear cart
        cart = [];
        updateCartCount();
        updateCartDisplay();
        closeCart();
        
        showNotification('Redirecting to checkout...');
        
    } catch (error) {
        console.error('Checkout failed:', error);
        showNotification('Checkout failed. Please try again.');
    } finally {
        checkoutBtn.textContent = 'Proceed to Checkout';
        checkoutBtn.disabled = cart.length === 0;
    }
}

// ===== NOTIFICATIONS =====
function showNotification(message, type = 'success') {
    notificationText.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// ===== UTILITY FUNCTIONS =====
function handleKeyboardShortcuts(e) {
    // ESC key closes cart
    if (e.key === 'Escape' && cartSidebar.classList.contains('open')) {
        closeCart();
    }
}

function toggleMobileMenu() {
    // Placeholder for mobile menu functionality
    console.log('Mobile menu toggle (to be implemented)');
}

function scheduleDailyReport() {
    // Schedule daily inventory report (in production, this would be handled server-side)
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(9, 0, 0, 0); // 9 AM next day
    
    const msUntilTomorrow = tomorrow.getTime() - now.getTime();
    
    setTimeout(() => {
        inventoryManager.generateDailyReport();
        // Schedule next report
        setInterval(() => {
            inventoryManager.generateDailyReport();
        }, 24 * 60 * 60 * 1000); // Every 24 hours
    }, msUntilTomorrow);
}

// ===== ANALYTICS =====
function trackEvent(category, action, label = null) {
    // Google Analytics tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: label
        });
    }
    
    // Console logging for development
    console.log(`📊 Event tracked: ${category} > ${action}`, label);
}

// ===== PERFORMANCE MONITORING =====
function measurePerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log(`⚡ Page load time: ${loadTime}ms`);
            
            if (loadTime > 3000) {
                console.warn('⚠️ Page load time exceeds 3 seconds. Consider optimization.');
            }
            
            // Track performance
            trackEvent('performance', 'page_load', loadTime);
        });
    }
}

// ===== SERVICE WORKER (PWA) =====
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('✅ SW registered: ', registration);
                })
                .catch(registrationError => {
                    console.log('❌ SW registration failed: ', registrationError);
                });
        });
    }
}

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('❌ Global error:', e.error);
    trackEvent('error', 'javascript_error', e.message);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('❌ Unhandled promise rejection:', e.reason);
    trackEvent('error', 'promise_rejection', e.reason);
});

// ===== INITIALIZE PERFORMANCE MONITORING =====
measurePerformance();

// ===== EXPOSE GLOBAL FUNCTIONS =====
// These functions need to be global for onclick handlers
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;