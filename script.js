// ===== STRIPE & INVENTORY MANAGEMENT SYSTEM =====

// ===== CONFIGURATION =====
const CONFIG = {
    stripe: {
        publishableKey: 'pk_test_51S5YU8FKyDLT77ug2RZh3OVCAzDsHVPZIvyBWxjuTcylKHLcza1XhFTjEzpWbdgilo5fpTl16ivKardNXM23c6AI00eknKjdiV'
    },
    webhook: {
        url: 'https://hook.us2.make.com/lowxqmqavxlrkc9c82pf4h8c8a58ax88'
    },
    inventory: {
        lowStockThreshold: 5,
        ownerEmail: 'maezron54@gmail.com'
    }
};

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
        description: "Premium heritage denim with vintage wash",
        sku: "HDJ-001",
        weight: 0.8,
        dimensions: "Medium fit"
    },
    { 
        id: 2, 
        name: "Organic Cotton Polo", 
        category: "boys", 
        price: 45.99, 
        stock: 8, 
        image: "https://images.unsplash.com/photo-1503944168849-ce5ccdaeb477?w=600&h=800&fit=crop&auto=format", 
        description: "Sustainably sourced organic cotton polo",
        sku: "OCP-002",
        weight: 0.3,
        dimensions: "Regular fit"
    },
    { 
        id: 3, 
        name: "Performance Joggers", 
        category: "boys", 
        price: 65.99, 
        stock: 15, 
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop&auto=format", 
        description: "Technical fabric with moisture-wicking properties",
        sku: "PJ-003",
        weight: 0.4,
        dimensions: "Athletic fit"
    },
    { 
        id: 4, 
        name: "Artist Series Tee", 
        category: "boys", 
        price: 38.99, 
        stock: 3, 
        image: "https://images.unsplash.com/photo-1576253566935-e4e1789ad4ac?w=600&h=800&fit=crop&auto=format", 
        description: "Limited edition artist collaboration",
        sku: "AST-004",
        weight: 0.2,
        dimensions: "Regular fit"
    },
    { 
        id: 5, 
        name: "Tailored Chino Shorts", 
        category: "boys", 
        price: 52.99, 
        stock: 0, 
        image: "https://images.unsplash.com/photo-1506629905607-bb4d88e96b2c?w=600&h=800&fit=crop&auto=format", 
        description: "Precisely tailored summer essential", 
        preorder: true,
        sku: "TCS-005",
        weight: 0.3,
        dimensions: "Tailored fit"
    },
    { 
        id: 6, 
        name: "Merino Wool Hoodie", 
        category: "boys", 
        price: 98.99, 
        stock: 20, 
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop&auto=format", 
        description: "Ultra-soft merino wool blend",
        sku: "MWH-006",
        weight: 0.6,
        dimensions: "Relaxed fit"
    },
    { 
        id: 7, 
        name: "Oxford Button-Down", 
        category: "boys", 
        price: 68.99, 
        stock: 6, 
        image: "https://images.unsplash.com/photo-1503944168849-ce5ccdaeb477?w=600&h=800&fit=crop&auto=format", 
        description: "Classic Oxford weave in premium cotton",
        sku: "OBD-007",
        weight: 0.4,
        dimensions: "Classic fit"
    },
    { 
        id: 8, 
        name: "Adventure Cargo Pants", 
        category: "boys", 
        price: 75.99, 
        stock: 11, 
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop&auto=format", 
        description: "Durable ripstop fabric with functional pockets",
        sku: "ACP-008",
        weight: 0.5,
        dimensions: "Relaxed fit"
    },
    { 
        id: 9, 
        name: "Wool Baseball Cap", 
        category: "boys", 
        price: 42.99, 
        stock: 25, 
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop&auto=format", 
        description: "Premium wool blend with leather strap",
        sku: "WBC-009",
        weight: 0.1,
        dimensions: "Adjustable"
    },
    { 
        id: 10, 
        name: "Italian Leather Sneakers", 
        category: "boys", 
        price: 124.99, 
        stock: 4, 
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=800&fit=crop&auto=format", 
        description: "Handcrafted Italian leather construction",
        sku: "ILS-010",
        weight: 0.7,
        dimensions: "True to size"
    },
    { 
        id: 11, 
        name: "Technical Track Suit", 
        category: "boys", 
        price: 89.99, 
        stock: 9, 
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop&auto=format", 
        description: "Performance fabric with moisture management",
        sku: "TTS-011",
        weight: 0.9,
        dimensions: "Athletic fit"
    },
    { 
        id: 12, 
        name: "Down Puffer Jacket", 
        category: "boys", 
        price: 145.99, 
        stock: 7, 
        image: "https://images.unsplash.com/photo-1516962126636-27ad087061cc?w=600&h=800&fit=crop&auto=format", 
        description: "Responsibly sourced down insulation",
        sku: "DPJ-012",
        weight: 1.2,
        dimensions: "Regular fit"
    },
    { 
        id: 13, 
        name: "Chambray School Shirt", 
        category: "boys", 
        price: 48.99, 
        stock: 18, 
        image: "https://images.unsplash.com/photo-1503944168849-ce5ccdaeb477?w=600&h=800&fit=crop&auto=format", 
        description: "Elevated chambray with mother-of-pearl buttons",
        sku: "CSS-013",
        weight: 0.3,
        dimensions: "School fit"
    },
    { 
        id: 14, 
        name: "Quick-Dry Swim Shorts", 
        category: "boys", 
        price: 39.99, 
        stock: 14, 
        image: "https://images.unsplash.com/photo-1506629905607-bb4d88e96b2c?w=600&h=800&fit=crop&auto=format", 
        description: "Technical swim fabric with UPF protection",
        sku: "QDS-014",
        weight: 0.2,
        dimensions: "Swim fit"
    },
    { 
        id: 15, 
        name: "Silk Bow Tie", 
        category: "boys", 
        price: 35.99, 
        stock: 2, 
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop&auto=format", 
        description: "Hand-tied silk in classic patterns",
        sku: "SBT-015",
        weight: 0.05,
        dimensions: "Adjustable"
    },

    // Girls Clothing (15 items)
    { 
        id: 16, 
        name: "Liberty Print Dress", 
        category: "girls", 
        price: 95.99, 
        stock: 10, 
        image: "https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?w=600&h=800&fit=crop&auto=format", 
        description: "Authentic Liberty of London print",
        sku: "LPD-016",
        weight: 0.4,
        dimensions: "A-line fit"
    },
    { 
        id: 17, 
        name: "Vintage Denim Overall", 
        category: "girls", 
        price: 78.99, 
        stock: 5, 
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=800&fit=crop&auto=format", 
        description: "Heritage denim with vintage-inspired details",
        sku: "VDO-017",
        weight: 0.6,
        dimensions: "Relaxed fit"
    },
    { 
        id: 18, 
        name: "Tulle Party Skirt", 
        category: "girls", 
        price: 58.99, 
        stock: 8, 
        image: "https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?w=600&h=800&fit=crop&auto=format", 
        description: "Multi-layer tulle with silk lining",
        sku: "TPS-018",
        weight: 0.3,
        dimensions: "Flare fit"
    },
    { 
        id: 19, 
        name: "Cashmere Cardigan", 
        category: "girls", 
        price: 125.99, 
        stock: 12, 
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=800&fit=crop&auto=format", 
        description: "Pure cashmere in seasonal colors",
        sku: "CC-019",
        weight: 0.4,
        dimensions: "Regular fit"
    },
    { 
        id: 20, 
        name: "Organic Cotton Leggings", 
        category: "girls", 
        price: 35.99, 
        stock: 0, 
        image: "https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?w=600&h=800&fit=crop&auto=format", 
        description: "Certified organic cotton with stretch",
        sku: "OCL-020",
        weight: 0.2,
        dimensions: "Stretch fit"
    },
    { 
        id: 21, 
        name: "Silk Party Dress", 
        category: "girls", 
        price: 165.99, 
        stock: 6, 
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=800&fit=crop&auto=format", 
        description: "Pure silk with hand-embroidered details",
        sku: "SPD-021",
        weight: 0.5,
        dimensions: "Princess fit"
    },
    { 
        id: 22, 
        name: "School Pinafore", 
        category: "girls", 
        price: 72.99, 
        stock: 16, 
        image: "https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?w=600&h=800&fit=crop&auto=format", 
        description: "Tailored pinafore in premium navy wool",
        sku: "SP-022",
        weight: 0.5,
        dimensions: "School fit"
    },
    { 
        id: 23, 
        name: "Bamboo Pajama Set", 
        category: "girls", 
        price: 68.99, 
        stock: 11, 
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=800&fit=crop&auto=format", 
        description: "Bamboo fiber with temperature regulation",
        sku: "BPS-023",
        weight: 0.4,
        dimensions: "Comfortable fit"
    },
    { 
        id: 24, 
        name: "Leather Ballet Flats", 
        category: "girls", 
        price: 89.99, 
        stock: 3, 
        image: "https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?w=600&h=800&fit=crop&auto=format", 
        description: "Italian leather with cushioned sole",
        sku: "LBF-024",
        weight: 0.4,
        dimensions: "True to size"
    },
    { 
        id: 25, 
        name: "Silk Hair Accessories", 
        category: "girls", 
        price: 28.99, 
        stock: 22, 
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=800&fit=crop&auto=format", 
        description: "Pure silk scrunchies and headbands",
        sku: "SHA-025",
        weight: 0.05,
        dimensions: "One size"
    },
    { 
        id: 26, 
        name: "Wool Blend Coat", 
        category: "girls", 
        price: 185.99, 
        stock: 4, 
        image: "https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?w=600&h=800&fit=crop&auto=format", 
        description: "Luxurious wool blend with satin lining",
        sku: "WBC-026",
        weight: 1.0,
        dimensions: "Regular fit"
    },
    { 
        id: 27, 
        name: "Performance Shorts", 
        category: "girls", 
        price: 44.99, 
        stock: 13, 
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=800&fit=crop&auto=format", 
        description: "Technical fabric for active wear",
        sku: "PS-027",
        weight: 0.2,
        dimensions: "Athletic fit"
    },
    { 
        id: 28, 
        name: "Linen Sundress", 
        category: "girls", 
        price: 85.99, 
        stock: 9, 
        image: "https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?w=600&h=800&fit=crop&auto=format", 
        description: "French linen with delicate embroidery",
        sku: "LS-028",
        weight: 0.3,
        dimensions: "Flowy fit"
    },
    { 
        id: 29, 
        name: "Pleated School Skirt", 
        category: "girls", 
        price: 65.99, 
        stock: 1, 
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=800&fit=crop&auto=format", 
        description: "Precisely pleated wool blend",
        sku: "PSS-029",
        weight: 0.4,
        dimensions: "School fit"
    },
    { 
        id: 30, 
        name: "Raincoat with Hood", 
        category: "girls", 
        price: 92.99, 
        stock: 7, 
        image: "https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?w=600&h=800&fit=crop&auto=format", 
        description: "Waterproof fabric with breathable lining",
        sku: "RH-030",
        weight: 0.6,
        dimensions: "Regular fit"
    },

    // Women's Jewelry (10 items)
    { 
        id: 31, 
        name: "Tahitian Pearl Necklace", 
        category: "women", 
        price: 285.99, 
        stock: 5, 
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop&auto=format", 
        description: "Lustrous Tahitian pearls with 18k clasp",
        sku: "TPN-031",
        weight: 0.1,
        dimensions: "18 inch length"
    },
    { 
        id: 32, 
        name: "Diamond Stud Earrings", 
        category: "women", 
        price: 445.99, 
        stock: 3, 
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop&auto=format", 
        description: "0.25ct diamonds in 14k white gold",
        sku: "DSE-032",
        weight: 0.02,
        dimensions: "6mm diameter"
    },
    { 
        id: 33, 
        name: "Vintage Gold Bracelet", 
        category: "women", 
        price: 195.99, 
        stock: 8, 
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop&auto=format", 
        description: "18k gold with vintage-inspired design",
        sku: "VGB-033",
        weight: 0.08,
        dimensions: "7.5 inch length"
    },
    { 
        id: 34, 
        name: "Sterling Silver Ring Set", 
        category: "women", 
        price: 125.99, 
        stock: 12, 
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop&auto=format", 
        description: "Handcrafted sterling silver collection",
        sku: "SSRS-034",
        weight: 0.05,
        dimensions: "Sizes 6-8"
    },
    { 
        id: 35, 
        name: "Sapphire Pendant", 
        category: "women", 
        price: 325.99, 
        stock: 0, 
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop&auto=format", 
        description: "Natural sapphire in 14k setting", 
        preorder: true,
        sku: "SP-035",
        weight: 0.03,
        dimensions: "16 inch chain"
    },
    { 
        id: 36, 
        name: "Gold Hoop Earrings", 
        category: "women", 
        price: 165.99, 
        stock: 15, 
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop&auto=format", 
        description: "14k gold hoops in three sizes",
        sku: "GHE-036",
        weight: 0.04,
        dimensions: "30mm diameter"
    },
    { 
        id: 37, 
        name: "Charm Bracelet", 
        category: "women", 
        price: 235.99, 
        stock: 6, 
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop&auto=format", 
        description: "Sterling silver with removable charms",
        sku: "CB-037",
        weight: 0.1,
        dimensions: "8 inch length"
    },
    { 
        id: 38, 
        name: "Statement Collar Necklace", 
        category: "women", 
        price: 385.99, 
        stock: 4, 
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop&auto=format", 
        description: "Bold design in mixed metals",
        sku: "SCN-038",
        weight: 0.15,
        dimensions: "16 inch collar"
    },
    { 
        id: 39, 
        name: "Diamond Tennis Bracelet", 
        category: "women", 
        price: 685.99, 
        stock: 2, 
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop&auto=format", 
        description: "1ct total weight in 14k white gold",
        sku: "DTB-039",
        weight: 0.12,
        dimensions: "7 inch length"
    },
    { 
        id: 40, 
        name: "Emerald Cocktail Ring", 
        category: "women", 
        price: 425.99, 
        stock: 7, 
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop&auto=format", 
        description: "Natural emerald with diamond accents",
        sku: "ECR-040",
        weight: 0.06,
        dimensions: "Size 7"
    },

    // Accessories (5 items)
    { 
        id: 41, 
        name: "Wide-Brim Sun Hat", 
        category: "accessories", 
        price: 58.99, 
        stock: 18, 
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop&auto=format", 
        description: "UPF 50+ protection with chin strap",
        sku: "WBSH-041",
        weight: 0.3,
        dimensions: "One size fits most"
    },
    { 
        id: 42, 
        name: "Merino Wool Beanie", 
        category: "accessories", 
        price: 45.99, 
        stock: 4, 
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop&auto=format", 
        description: "Ultra-soft merino wool in seasonal colors",
        sku: "MWB-042",
        weight: 0.1,
        dimensions: "One size"
    },
    { 
        id: 43, 
        name: "Leather School Backpack", 
        category: "accessories", 
        price: 125.99, 
        stock: 9, 
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop&auto=format", 
        description: "Full-grain leather with brass hardware",
        sku: "LSB-043",
        weight: 1.5,
        dimensions: "16x12x6 inches"
    },
    { 
        id: 44, 
        name: "Polarized Sunglasses", 
        category: "accessories", 
        price: 68.99, 
        stock: 13, 
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop&auto=format", 
        description: "UV protection with shatterproof lenses",
        sku: "PS-044",
        weight: 0.08,
        dimensions: "Medium frame"
    },
    { 
        id: 45, 
        name: "Italian Leather Belt", 
        category: "accessories", 
        price: 55.99, 
        stock: 1, 
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop&auto=format", 
        description: "Handcrafted Italian leather with brass buckle",
        sku: "ILB-045",
        weight: 0.2,
        dimensions: "Adjustable 28-34 inches"
    }
];

// ===== GLOBAL STATE =====
let cart = [];
let currentFilter = 'all';
let stripe = null;

// ===== STRIPE INTEGRATION =====
class StripeIntegration {
    constructor() {
        this.publishableKey = CONFIG.stripe.publishableKey;
        this.stripe = null;
        this.elements = null;
    }

    async initialize() {
        try {
            // Load Stripe.js
            if (!window.Stripe) {
                await this.loadStripeJS();
            }
            
            this.stripe = window.Stripe(this.publishableKey);
            console.log('✅ Stripe initialized successfully');
            return this.stripe;
        } catch (error) {
            console.error('❌ Failed to initialize Stripe:', error);
            throw error;
        }
    }

    async loadStripeJS() {
        return new Promise((resolve, reject) => {
            if (window.Stripe) {
                resolve();
                return;
            }

            const script = document.createElement('script');
            script.src = 'https://js.stripe.com/v3/';
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    async createCheckoutSession(items, customerInfo = {}) {
        try {
            const lineItems = items.map(item => {
                const product = products.find(p => p.id === item.id);
                return {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: product.name,
                            description: product.description,
                            images: [product.image],
                            metadata: {
                                product_id: product.id,
                                sku: product.sku,
                                category: product.category
                            }
                        },
                        unit_amount: Math.round(product.price * 100) // Convert to cents
                    },
                    quantity: item.quantity
                };
            });

            // Calculate totals
            const subtotal = items.reduce((sum, item) => {
                const product = products.find(p => p.id === item.id);
                return sum + (product.price * item.quantity);
            }, 0);

            const shippingCost = this.calculateShipping(items);
            const tax = this.calculateTax(subtotal);
            const total = subtotal + shippingCost + tax;

            // Send checkout data to webhook
            const checkoutData = {
                event_type: 'checkout_initiated',
                timestamp: new Date().toISOString(),
                customer: customerInfo,
                items: items.map(item => {
                    const product = products.find(p => p.id === item.id);
                    return {
                        product_id: product.id,
                        name: product.name,
                        sku: product.sku,
                        price: product.price,
                        quantity: item.quantity,
                        total: product.price * item.quantity
                    };
                }),
                totals: {
                    subtotal,
                    shipping: shippingCost,
                    tax,
                    total
                }
            };

            await webhookManager.sendData(checkoutData);

            // Redirect to Stripe Checkout
            const { error } = await this.stripe.redirectToCheckout({
                lineItems,
                mode: 'payment',
                successUrl: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancelUrl: `${window.location.origin}/cart`,
                customerEmail: customerInfo.email,
                shippingAddressCollection: {
                    allowedCountries: ['US', 'CA']
                },
                metadata: {
                    order_source: 'all_seasons_sprouts',
                    customer_ip: await this.getClientIP()
                }
            });

            if (error) {
                throw error;
            }

        } catch (error) {
            console.error('Stripe checkout error:', error);
            throw error;
        }
    }

    calculateShipping(items) {
        const totalWeight = items.reduce((sum, item) => {
            const product = products.find(p => p.id === item.id);
            return sum + (product.weight * item.quantity);
        }, 0);

        // Simple shipping calculation
        if (totalWeight < 1) return 5.99;
        if (totalWeight < 3) return 8.99;
        if (totalWeight < 5) return 12.99;
        return 15.99;
    }

    calculateTax(subtotal) {
        // Simple tax calculation (8.5% - replace with actual tax service)
        return subtotal * 0.085;
    }

    async getClientIP() {
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            const data = await response.json();
            return data.ip;
        } catch (error) {
            return 'unknown';
        }
    }
}

// ===== INVENTORY MANAGEMENT =====
class InventoryManager {
    constructor() {
        this.lowStockThreshold = CONFIG.inventory.lowStockThreshold;
        this.ownerEmail = CONFIG.inventory.ownerEmail;
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

    async updateStock(productId, quantitySold, reason = 'sale') {
        const product = products.find(p => p.id === productId);
        if (!product) return false;

        const previousStock = product.stock;
        const wasLowStock = previousStock <= this.lowStockThreshold;
        const wasInStock = previousStock > 0;

        // Update stock
        product.stock = Math.max(0, product.stock - quantitySold);

        // Send inventory update to webhook
        const inventoryData = {
            event_type: 'inventory_updated',
            timestamp: new Date().toISOString(),
            product: {
                id: product.id,
                name: product.name,
                sku: product.sku,
                category: product.category
            },
            inventory_change: {
                previous_stock: previousStock,
                new_stock: product.stock,
                quantity_sold: quantitySold,
                reason
            },
            alerts: {
                is_low_stock: product.stock <= this.lowStockThreshold,
                is_sold_out: product.stock === 0,
                needs_alert: false
            }
        };

        // Check if alerts are needed
        if (product.stock === 0 && wasInStock) {
            inventoryData.alerts.needs_alert = true;
            inventoryData.alerts.alert_type = 'sold_out';
            await this.sendSoldOutAlert(product);
        } else if (product.stock <= this.lowStockThreshold && !wasLowStock && product.stock > 0) {
            inventoryData.alerts.needs_alert = true;
            inventoryData.alerts.alert_type = 'low_stock';
            await this.sendLowStockAlert(product);
        }

        await webhookManager.sendData(inventoryData);

        console.log(`📦 Inventory updated: ${product.name} - ${product.stock} remaining`);
        return true;
    }

    async sendLowStockAlert(product) {
        const alertData = {
            event_type: 'low_stock_alert',
            timestamp: new Date().toISOString(),
            product: {
                id: product.id,
                name: product.name,
                sku: product.sku,
                category: product.category,
                current_stock: product.stock,
                threshold: this.lowStockThreshold
            },
            recipient: this.ownerEmail,
            priority: 'medium'
        };

        await webhookManager.sendData(alertData);
        console.log('⚠️ Low stock alert sent for:', product.name);
    }

    async sendSoldOutAlert(product) {
        const alertData = {
            event_type: 'sold_out_alert',
            timestamp: new Date().toISOString(),
            product: {
                id: product.id,
                name: product.name,
                sku: product.sku,
                category: product.category,
                current_stock: product.stock
            },
            recipient: this.ownerEmail,
            priority: 'high'
        };

        await webhookManager.sendData(alertData);
        console.log('🚨 Sold out alert sent for:', product.name);
    }

    generateDailyReport() {
        const lowStockItems = products.filter(p => 
            p.stock <= this.lowStockThreshold && p.stock > 0
        );
        const soldOutItems = products.filter(p => p.stock === 0);
        
        const report = {
            event_type: 'daily_inventory_report',
            timestamp: new Date().toISOString(),
            summary: {
                date: new Date().toLocaleDateString(),
                total_products: products.length,
                low_stock_count: lowStockItems.length,
                sold_out_count: soldOutItems.length,
                total_inventory_value: products.reduce((sum, p) => sum + (p.price * p.stock), 0)
            },
            low_stock_items: lowStockItems.map(p => ({
                id: p.id,
                name: p.name,
                sku: p.sku,
                category: p.category,
                current_stock: p.stock,
                price: p.price,
                value: p.price * p.stock
            })),
            sold_out_items: soldOutItems.map(p => ({
                id: p.id,
                name: p.name,
                sku: p.sku,
                category: p.category,
                price: p.price
            }))
        };

        webhookManager.sendData(report);
        console.log('📊 Daily inventory report generated');
        return report;
    }
}

// ===== WEBHOOK MANAGER =====
class WebhookManager {
    constructor() {
        this.webhookUrl = CONFIG.webhook.url;
        this.retryAttempts = 3;
        this.retryDelay = 1000; // 1 second
    }

    async sendData(data, attempt = 1) {
        try {
            const response = await fetch(this.webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'User-Agent': 'AllSeasonsSpouts/1.0'
                },
                body: JSON.stringify({
                    ...data,
                    webhook_metadata: {
                        source: 'all_seasons_sprouts',
                        version: '1.0',
                        sent_at: new Date().toISOString(),
                        attempt: attempt
                    }
                })
            });

            if (!response.ok) {
                throw new Error(`Webhook failed with status: ${response.status}`);
            }

            console.log(`✅ Webhook sent successfully: ${data.event_type}`);
            return true;

        } catch (error) {
            console.error(`❌ Webhook failed (attempt ${attempt}):`, error);

            if (attempt < this.retryAttempts) {
                console.log(`🔄 Retrying webhook in ${this.retryDelay}ms...`);
                await new Promise(resolve => setTimeout(resolve, this.retryDelay));
                return this.sendData(data, attempt + 1);
            }

            console.error('❌ Webhook failed after all retry attempts');
            return false;
        }
    }

    async sendOrderData(orderData) {
        const data = {
            event_type: 'order_completed',
            timestamp: new Date().toISOString(),
            order: orderData
        };

        return this.sendData(data);
    }

    async sendCustomerData(customerData) {
        const data = {
            event_type: 'customer_action',
            timestamp: new Date().toISOString(),
            customer: customerData
        };

        return this.sendData(data);
    }
}

// ===== INITIALIZE MANAGERS =====
const stripeIntegration = new StripeIntegration();
const inventoryManager = new InventoryManager();
const webhookManager = new WebhookManager();

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
        // Initialize Stripe
        await stripeIntegration.initialize();
        
        // Setup event listeners
        setupEventListeners();
        
        // Setup header scroll effect
        setupHeaderScroll();
        
        // Load products
        await loadProducts();
        
        // Hide loading screen
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 1500);
        
        // Setup daily inventory reporting
        scheduleDailyReport();
        
        // Send app initialization data
        await webhookManager.sendData({
            event_type: 'app_initialized',
            timestamp: new Date().toISOString(),
            user_agent: navigator.userAgent,
            screen_resolution: `${screen.width}x${screen.height}`,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        });
        
        console.log('✅ App initialized successfully');
        
    } catch (error) {
        console.error('❌ App initialization failed:', error);
        showNotification('Failed to initialize payment system', 'error');
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
        
        renderProducts();
        
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
    webhookManager.sendData({
        event_type: 'filter_used',
        timestamp: new Date().toISOString(),
        filter: newFilter,
        products_shown: getFilteredProducts().length
    });
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
        
        // Send add to cart event
        await webhookManager.sendData({
            event_type: 'item_added_to_cart',
            timestamp: new Date().toISOString(),
            product: {
                id: product.id,
                name: product.name,
                sku: product.sku,
                price: product.price,
                category: product.category
            },
            cart_total_items: cart.reduce((sum, item) => sum + item.quantity, 0),
            cart_total_value: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        });
        
        // Update UI
        updateCartCount();
        updateCartDisplay();
        showNotification(`${product.name} added to cart`);
        
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
        showNotification('Failed to add item to cart', 'error');
        
        // Reset button
        button.style.background = '';
        button.textContent = originalText;
        button.disabled = false;
    }
}

function removeFromCart(productId) {
    const removedItem = cart.find(item => item.id === productId);
    cart = cart.filter(item => item.id !== productId);
    
    updateCartCount();
    updateCartDisplay();
    
    // Send remove from cart event
    if (removedItem) {
        webhookManager.sendData({
            event_type: 'item_removed_from_cart',
            timestamp: new Date().toISOString(),
            product: {
                id: removedItem.id,
                name: removedItem.name,
                quantity_removed: removedItem.quantity
            },
            cart_total_items: cart.reduce((sum, item) => sum + item.quantity, 0),
            cart_total_value: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        });
    }
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    const oldQuantity = item.quantity;
    const newQuantity = item.quantity + change;
    
    if (newQuantity <= 0) {
        removeFromCart(productId);
    } else {
        item.quantity = newQuantity;
        updateCartCount();
        updateCartDisplay();
        
        // Send quantity update event
        webhookManager.sendData({
            event_type: 'cart_quantity_updated',
            timestamp: new Date().toISOString(),
            product: {
                id: item.id,
                name: item.name,
                old_quantity: oldQuantity,
                new_quantity: newQuantity
            },
            cart_total_items: cart.reduce((sum, item) => sum + item.quantity, 0),
            cart_total_value: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        });
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
    
    // Track cart open event
    webhookManager.sendData({
        event_type: 'cart_opened',
        timestamp: new Date().toISOString(),
        cart_items: cart.length,
        cart_value: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    });
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
        
        // Get customer IP for location data
        const customerInfo = {
            ip: await stripeIntegration.getClientIP(),
            user_agent: navigator.userAgent,
            timestamp: new Date().toISOString()
        };
        
        // Create Stripe checkout session
        await stripeIntegration.createCheckoutSession(cart, customerInfo);
        
    } catch (error) {
        console.error('Checkout failed:', error);
        showNotification('Checkout failed. Please try again.', 'error');
        
        // Send error to webhook
        webhookManager.sendData({
            event_type: 'checkout_error',
            timestamp: new Date().toISOString(),
            error: error.message,
            cart_items: cart.length,
            cart_value: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        });
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
    // Schedule daily inventory report
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

// ===== PERFORMANCE MONITORING =====
function measurePerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log(`⚡ Page load time: ${loadTime}ms`);
            
            // Send performance data to webhook
            webhookManager.sendData({
                event_type: 'performance_metrics',
                timestamp: new Date().toISOString(),
                metrics: {
                    page_load_time: loadTime,
                    user_agent: navigator.userAgent,
                    screen_resolution: `${screen.width}x${screen.height}`,
                    connection_type: navigator.connection?.effectiveType || 'unknown'
                }
            });
        });
    }
}

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('❌ Global error:', e.error);
    
    webhookManager.sendData({
        event_type: 'javascript_error',
        timestamp: new Date().toISOString(),
        error: {
            message: e.message,
            filename: e.filename,
            line: e.lineno,
            column: e.colno,
            stack: e.error?.stack
        }
    });
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('❌ Unhandled promise rejection:', e.reason);
    
    webhookManager.sendData({
        event_type: 'promise_rejection',
        timestamp: new Date().toISOString(),
        error: {
            reason: e.reason,
            stack: e.reason?.stack
        }
    });
});

// ===== INITIALIZE PERFORMANCE MONITORING =====
measurePerformance();

// ===== EXPOSE GLOBAL FUNCTIONS =====
// These functions need to be global for onclick handlers
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;