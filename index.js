/**
 * BrewCraft - Artisanal Coffee Roasters & Bakery JavaScript Engine
 * Author: Priyanshu Kumar Maurya
 */

(function () {
    'use strict';

    // SVG icon templates to guarantee crisp rendering with zero CDN dependencies
    const SVG = {
        star: '<svg class="svg-icon star-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>',
        plus: '<svg class="svg-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>',
        minus: '<svg class="svg-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M19 13H5v-2h14v2z"/></svg>',
        cup: '<svg class="svg-icon" style="width: 48px; height: 48px; fill: var(--primary);" viewBox="0 0 24 24"><path fill="currentColor" d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"/></svg>',
        check: '<svg class="toast-icon svg-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>',
        error: '<svg class="toast-icon svg-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>'
    };

    // =========================================================================
    // Coffee & Pastry Catalog Data
    // =========================================================================
    const coffeeItems = [
        {
            id: 'c1',
            name: 'Artisan Flat White',
            category: 'hot-coffee',
            price: 4.75,
            rating: 4.9,
            roast: 'Medium Roast',
            desc: 'Double ristretto shot with velvety microfoam poured with precision latte art.',
            img: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'c2',
            name: 'Spanish Honey Cinnamon Latte',
            category: 'hot-coffee',
            price: 5.50,
            rating: 4.8,
            roast: 'Dark Roast',
            desc: 'Espresso combined with condensed milk, organic wild honey, and ground Ceylon cinnamon.',
            img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'c3',
            name: 'Ethiopian Yirgacheffe V60 Pour Over',
            category: 'hot-coffee',
            price: 5.25,
            rating: 5.0,
            roast: 'Light Roast',
            desc: 'Single origin hand-dripped brew featuring delicate floral jasmine and bergamot notes.',
            img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'c4',
            name: 'Classic Velvet Cortado',
            category: 'hot-coffee',
            price: 4.25,
            rating: 4.8,
            roast: 'Medium-Dark',
            desc: 'Equal parts robust espresso and warm steamed milk to cut the acidity.',
            img: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'i1',
            name: 'Nitro Cascade Cold Brew',
            category: 'cold-coffee',
            price: 6.50,
            rating: 4.9,
            roast: 'Cold Steeped',
            desc: 'Nitrogen-infused cold brew poured on draft with a cascading creamy texture.',
            img: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'i2',
            name: 'Iced Vanilla Bean Frappé',
            category: 'cold-coffee',
            price: 5.95,
            rating: 4.7,
            roast: 'Blended',
            desc: 'Madagascar vanilla bean, double espresso, and ice blended with whipped cream topping.',
            img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'i3',
            name: 'Coconut Iced Tonic Americano',
            category: 'cold-coffee',
            price: 4.95,
            rating: 4.8,
            roast: 'Espresso Roast',
            desc: 'Sparkling tonic water, tender coconut water, and a fresh double shot of espresso over ice.',
            img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'b1',
            name: 'French Butter Croissant',
            category: 'bakery',
            price: 3.95,
            rating: 4.9,
            roast: 'Oven Fresh',
            desc: 'Flaky, buttery, 100% Normandy butter croissant baked golden every morning.',
            img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'b2',
            name: 'Pistachio Glazed Danish Pastry',
            category: 'bakery',
            price: 4.85,
            rating: 5.0,
            roast: 'Artisan Bake',
            desc: 'Layered puff pastry filled with pistachio cream and crushed Sicilian pistachios.',
            img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'b3',
            name: 'Double Dark Chocolate Brownie',
            category: 'bakery',
            price: 4.50,
            rating: 4.9,
            roast: 'Fudgy Dark',
            desc: 'Rich 70% Callebaut dark chocolate brownie with a gooey espresso fudge center.',
            img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 't1',
            name: 'Ceremonial Uji Matcha Latte',
            category: 'tea',
            price: 5.50,
            rating: 4.9,
            roast: 'Kyoto Green',
            desc: 'Stone-ground first harvest Kyoto matcha whisked with oat milk and agave nectar.',
            img: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 't2',
            name: 'Organic Spiced Chai Latte',
            category: 'tea',
            price: 4.75,
            rating: 4.8,
            roast: 'Infused Spices',
            desc: 'Black Assam tea brewed with cardamom, cloves, fresh ginger, and creamy oat foam.',
            img: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80'
        }
    ];

    const specialItems = {
        'spec-1': { id: 'spec-1', name: 'Caramel Velvet Macchiato', price: 5.95, img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80' },
        'spec-2': { id: 'spec-2', name: 'Nitro Cascade Cold Brew', price: 6.50, img: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80' },
        'spec-3': { id: 'spec-3', name: 'Almond Croissant & Cappuccino Combo', price: 8.25, img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80' }
    };

    // =========================================================================
    // State & LocalStorage
    // =========================================================================
    let cart = [];
    let activeCategory = 'all';
    let searchQuery = '';
    let appliedCoupon = null;

    try {
        const savedCart = localStorage.getItem('brewcraft_cart');
        if (savedCart) cart = JSON.parse(savedCart);
    } catch (e) {
        cart = [];
    }

    // =========================================================================
    // DOM References
    // =========================================================================
    const coffeeGrid = document.getElementById('coffee-grid');
    const categoryTabs = document.getElementById('category-tabs');
    const searchInput = document.getElementById('coffee-search-input');
    const cartBtn = document.getElementById('cart-btn');
    const cartDrawer = document.getElementById('cart-drawer');
    const cartOverlay = document.getElementById('cart-overlay');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const cartItemsList = document.getElementById('cart-items-list');
    const cartCounter = document.getElementById('cart-counter');
    const cartItemsCount = document.getElementById('cart-items-count');
    const billSubtotal = document.getElementById('bill-subtotal');
    const billDiscount = document.getElementById('bill-discount');
    const discountRow = document.getElementById('discount-row');
    const billTotal = document.getElementById('bill-total');
    const couponInput = document.getElementById('coupon-input');
    const applyCouponBtn = document.getElementById('apply-coupon-btn');
    const couponMsg = document.getElementById('coupon-msg');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    // Booking Modal
    const bookingModal = document.getElementById('booking-modal');
    const openBookingBtn = document.getElementById('open-booking-btn');
    const heroBookBtn = document.getElementById('hero-book-btn');
    const closeBookingBtn = document.getElementById('close-booking-btn');
    const bookingForm = document.getElementById('booking-form');

    // Order Success Modal
    const orderModal = document.getElementById('order-modal');
    const closeOrderModalBtn = document.getElementById('close-order-modal-btn');
    const modalOrderSummary = document.getElementById('modal-order-summary');

    // Mobile nav & Feedback
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    const toast = document.getElementById('toast');
    const newsletterForm = document.getElementById('newsletter-form');

    // =========================================================================
    // Render Functions
    // =========================================================================

    function renderMenu() {
        const filtered = coffeeItems.filter(item => {
            const matchesCategory = (activeCategory === 'all' || item.category === activeCategory);
            const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                  item.desc.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });

        if (filtered.length === 0) {
            coffeeGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 50px 20px; color: var(--text-muted);">
                    <div style="margin-bottom: 12px;">${SVG.cup}</div>
                    <h3>No coffee creations found</h3>
                    <p>Try searching for a different roast or explore our other beverage categories!</p>
                </div>
            `;
            return;
        }

        coffeeGrid.innerHTML = filtered.map(item => `
            <div class="coffee-card" data-id="${item.id}">
                <div class="coffee-img-wrap">
                    <img src="${item.img}" alt="${escapeHtml(item.name)}" loading="lazy">
                    <span class="roast-badge">${escapeHtml(item.roast)}</span>
                </div>
                <div class="coffee-card-body">
                    <div class="coffee-card-header">
                        <h3 class="coffee-card-title">${escapeHtml(item.name)}</h3>
                        <div class="coffee-rating">
                            ${SVG.star}
                            <span>${item.rating}</span>
                        </div>
                    </div>
                    <p class="coffee-desc">${escapeHtml(item.desc)}</p>
                    <div class="coffee-card-footer">
                        <span class="coffee-price">$${item.price.toFixed(2)}</span>
                        <button type="button" class="add-to-cart-btn" data-id="${item.id}" title="Add to Order">
                            ${SVG.plus}
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        coffeeGrid.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                const item = coffeeItems.find(c => c.id === id);
                if (item) addToCart(item);
            });
        });
    }

    function renderCart() {
        const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
        cartCounter.textContent = totalCount;
        cartItemsCount.textContent = totalCount;

        if (cart.length === 0) {
            cartItemsList.innerHTML = `
                <div class="cart-empty-state">
                    <div style="margin-bottom: 8px;">${SVG.cup}</div>
                    <h4>Your coffee cup is empty</h4>
                    <p>Choose from our fresh roasts and baked French pastries!</p>
                    <a href="#menu" class="btn btn-primary btn-sm" id="cart-browse-btn">View Menu</a>
                </div>
            `;
            const browseBtn = document.getElementById('cart-browse-btn');
            if (browseBtn) browseBtn.addEventListener('click', closeCart);

            billSubtotal.textContent = '$0.00';
            billDiscount.textContent = '-$0.00';
            discountRow.style.display = 'none';
            billTotal.textContent = '$0.00';
            return;
        }

        cartItemsList.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <img src="${item.img}" alt="${escapeHtml(item.name)}" class="cart-item-img">
                <div class="cart-item-details">
                    <div class="cart-item-title">${escapeHtml(item.name)}</div>
                    <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
                </div>
                <div class="cart-item-actions">
                    <button type="button" class="qty-btn minus-btn" data-index="${index}">${SVG.minus}</button>
                    <span class="qty-num">${item.qty}</span>
                    <button type="button" class="qty-btn plus-btn" data-index="${index}">${SVG.plus}</button>
                </div>
            </div>
        `).join('');

        cartItemsList.querySelectorAll('.minus-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.getAttribute('data-index'), 10);
                updateQty(idx, -1);
            });
        });

        cartItemsList.querySelectorAll('.plus-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.getAttribute('data-index'), 10);
                updateQty(idx, 1);
            });
        });

        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
        let discount = 0;

        if (appliedCoupon === 'BREW15') {
            discount = subtotal * 0.15;
            discountRow.style.display = 'flex';
            billDiscount.textContent = `-$${discount.toFixed(2)}`;
        } else {
            discountRow.style.display = 'none';
        }

        const ecoTax = 0.50;
        const total = Math.max(0, subtotal - discount + ecoTax);

        billSubtotal.textContent = `$${subtotal.toFixed(2)}`;
        billTotal.textContent = `$${total.toFixed(2)}`;
    }

    // =========================================================================
    // Cart Actions
    // =========================================================================

    function addToCart(item) {
        const existing = cart.find(c => c.id === item.id);
        if (existing) {
            existing.qty += 1;
        } else {
            cart.push({ ...item, qty: 1 });
        }
        saveCart();
        renderCart();
        showToast(`${item.name} added to coffee order!`);

        cartBtn.style.transform = 'scale(1.25)';
        setTimeout(() => { cartBtn.style.transform = 'scale(1)'; }, 200);
    }

    function updateQty(index, delta) {
        if (!cart[index]) return;
        cart[index].qty += delta;

        if (cart[index].qty <= 0) {
            cart.splice(index, 1);
        }
        saveCart();
        renderCart();
    }

    function saveCart() {
        try {
            localStorage.setItem('brewcraft_cart', JSON.stringify(cart));
        } catch (e) {}
    }

    function openCart() {
        cartDrawer.classList.add('open');
        cartOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeCart() {
        cartDrawer.classList.remove('open');
        cartOverlay.classList.remove('open');
        document.body.style.overflow = 'auto';
    }

    // =========================================================================
    // Feedback & Utilities
    // =========================================================================

    function showToast(text, isError = false) {
        toast.querySelector('.toast-text').textContent = text;
        const iconWrap = toast.querySelector('.toast-icon');
        if (iconWrap) {
            if (isError) {
                iconWrap.outerHTML = '<svg class="toast-icon svg-icon" viewBox="0 0 24 24" style="fill: #e74c3c;"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>';
            } else {
                iconWrap.outerHTML = '<svg class="toast-icon svg-icon" viewBox="0 0 24 24" style="fill: var(--primary);"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>';
            }
        }
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2500);
    }

    function escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    const bookDateInput = document.getElementById('book-date');
    if (bookDateInput) {
        const today = new Date().toISOString().split('T')[0];
        bookDateInput.value = today;
        bookDateInput.min = today;
    }

    // =========================================================================
    // Event Listeners
    // =========================================================================

    // Category Filter
    if (categoryTabs) {
        categoryTabs.addEventListener('click', (e) => {
            const btn = e.target.closest('.cat-tab');
            if (!btn) return;

            categoryTabs.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
            btn.classList.add('active');
            activeCategory = btn.getAttribute('data-category');
            renderMenu();
        });
    }

    // Live Search
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim();
            renderMenu();
        });
    }

    // Specials add buttons
    document.querySelectorAll('.btn-special-add').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            if (specialItems[id]) {
                addToCart(specialItems[id]);
            }
        });
    });

    // Cart Open / Close
    cartBtn.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);

    // Apply Promo Code
    if (applyCouponBtn) {
        applyCouponBtn.addEventListener('click', () => {
            const code = couponInput.value.trim().toUpperCase();
            if (code === 'BREW15') {
                appliedCoupon = 'BREW15';
                couponMsg.textContent = 'Promo BREW15 applied: 15% OFF!';
                couponMsg.style.color = '#2ecc71';
                renderCart();
                showToast('15% Discount applied!');
            } else if (code === '') {
                couponMsg.textContent = 'Please enter promo code';
                couponMsg.style.color = '#e5ba73';
            } else {
                couponMsg.textContent = 'Invalid promo code';
                couponMsg.style.color = '#e74c3c';
            }
        });
    }

    // Checkout Flow
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                showToast('Your cart is empty!', true);
                return;
            }

            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
            const discount = appliedCoupon === 'BREW15' ? subtotal * 0.15 : 0;
            const total = (subtotal - discount + 0.50).toFixed(2);
            const orderId = '#BC-' + Math.floor(100000 + Math.random() * 900000);

            modalOrderSummary.innerHTML = `
                <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                    <span>Order Receipt:</span> <strong>${orderId}</strong>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                    <span>Items Handcrafted:</span> <strong>${cart.length} coffee / pastry items</strong>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>Total Paid:</span> <strong style="color: var(--primary-light); font-size: 1.15rem;">$${total}</strong>
                </div>
            `;

            closeCart();
            orderModal.classList.add('open');

            cart = [];
            appliedCoupon = null;
            if (couponInput) couponInput.value = '';
            if (couponMsg) couponMsg.textContent = '';
            saveCart();
            renderCart();
        });
    }

    if (closeOrderModalBtn) {
        closeOrderModalBtn.addEventListener('click', () => {
            orderModal.classList.remove('open');
        });
    }

    // Table Booking Modals
    const openBooking = () => bookingModal.classList.add('open');
    const closeBooking = () => bookingModal.classList.remove('open');

    if (openBookingBtn) openBookingBtn.addEventListener('click', openBooking);
    if (heroBookBtn) heroBookBtn.addEventListener('click', openBooking);
    if (closeBookingBtn) closeBookingBtn.addEventListener('click', closeBooking);

    bookingModal.addEventListener('click', (e) => {
        if (e.target === bookingModal) closeBooking();
    });

    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('book-name').value;
            const guests = document.getElementById('book-guests').value;
            const date = document.getElementById('book-date').value;
            const resId = '#RES-' + Math.floor(1000 + Math.random() * 9000);

            closeBooking();
            bookingForm.reset();
            showToast(`Table reserved for ${name} (${guests}) on ${date}! Ref ${resId}`);
        });
    }

    // Mobile Navbar Menu
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('open');
        });
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
        });
    });

    // Newsletter Subscription
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            showToast(`Voucher sent to ${emailInput.value}`);
            newsletterForm.reset();
        });
    }

    // Scroll Spy for Nav Links
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 120;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    });

    // Initialize Menu & Cart
    renderMenu();
    renderCart();

})();
