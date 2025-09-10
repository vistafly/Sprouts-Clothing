// ===== FIREBASE CONFIGURATION =====

const FIREBASE_CONFIG = {
    apiKey: "AIzaSyAP2Ffv7RpgPJXqZnoLCqdmsDazv-Lc6o4",
    authDomain: "sprouts-clothing.firebaseapp.com",
    projectId: "sprouts-clothing",
    storageBucket: "sprouts-clothing.firebasestorage.app",
    messagingSenderId: "443108962873",
    appId: "1:443108962873:web:eb086c41c9497d3665d3e8"
};

const INVENTORY_CONFIG = {
    lowStockThreshold: 5,
    ownerEmail: 'maezron54@gmail.com'
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { FIREBASE_CONFIG, INVENTORY_CONFIG };
}