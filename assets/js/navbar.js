/* ====================== HPB TUBES NAVBAR SCRIPTS ====================== */

// Language Dropdown Toggle
function toggleLanguageDropdown() {
    document.getElementById("languageDropdown").classList.toggle("show");
}

// Close language dropdown when clicking outside
window.addEventListener('click', function(event) {
    if (!event.target.closest('.language-selector-wrapper')) {
        var dropdown = document.getElementById("languageDropdown");
        if (dropdown) {
            dropdown.classList.remove("show");
        }
    }
});

// Change Language Function
function changeLanguage(lang) {
    console.log("Language changed to:", lang);
    
    // Language mapping
    var langNames = {
        'en': 'Global English',
        'pt': 'Português',
        'fr': 'Français',
        'es': 'Español'
    };
    
    // Update button text (optional)
    var btn = document.querySelector('.language-globe-btn span');
    if (btn) {
        btn.textContent = langNames[lang] ? langNames[lang].split(' ')[0] : 'Global';
    }
    
    // Store language preference
    localStorage.setItem('preferredLanguage', lang);
    
    // Close dropdown
    document.getElementById("languageDropdown").classList.remove("show");
    
    // Here you would add i18n translation logic
    console.log('Language preference saved:', lang);
}

// ====================== MOBILE MENU FUNCTIONALITY ======================

// Toggle Mobile Menu
function toggleMobileMenu() {
    var menu = document.querySelector('.mobile-nav-menu');
    var overlay = document.querySelector('.mobile-nav-overlay');
    
    if (menu && overlay) {
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    }
}

// Close Mobile Menu
function closeMobileMenu() {
    var menu = document.querySelector('.mobile-nav-menu');
    var overlay = document.querySelector('.mobile-nav-overlay');
    
    if (menu && overlay) {
        menu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Toggle Mobile Dropdown
function toggleMobileDropdown(element) {
    var parent = element.closest('.mobile-dropdown');
    if (parent) {
        parent.classList.toggle('open');
    }
}

// Create Mobile Menu HTML
function createMobileMenu() {
    // Check if mobile menu already exists
    if (document.querySelector('.mobile-nav-menu')) {
        return;
    }
    
    var mobileMenuHTML = `
        <div class="mobile-nav-overlay" onclick="closeMobileMenu()"></div>
        <div class="mobile-nav-menu">
            <div class="mobile-nav-header">
                <a href="index.html">
                    <img src="assets/images/HPB TUBES LLP logo final.png" alt="HPB Tubes">
                </a>
                <button class="mobile-nav-close" onclick="closeMobileMenu()">×</button>
            </div>
            <ul class="mobile-nav-list">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li class="mobile-dropdown">
                    <a href="#" onclick="toggleMobileDropdown(this); return false;">Products</a>
                    <ul class="mobile-dropdown-menu">
                        <li><a href="product.html#water-wall">Water Wall Panels</a></li>
                        <li><a href="product.html#economiser">Economisers Coils</a></li>
                        <li><a href="product.html#superheater">Superheater Coils</a></li>
                        <li><a href="product.html#studded">Studded Bed Coils & Tubes</a></li>
                        <li><a href="product.html#boiler-bank">Boiler Bank Tubes</a></li>
                        <li><a href="product.html#pipes">Pipes & Tubes</a></li>
                        <li><a href="product.html#finned">Finned Tubes</a></li>
                        <li><a href="product.html#headers">Headers</a></li>
                    </ul>
                </li>
                <li><a href="faq.html">Certifications</a></li>
                <li><a href="our-clients.html">Quality</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
            <div class="mobile-nav-actions">
                <a href="assets/images/HPB Tubes.pdf" class="th-btn style6" target="_blank">Download Brochure</a>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', mobileMenuHTML);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Create mobile menu
    createMobileMenu();
    
    // Attach click handler to mobile menu button
    var mobileBtn = document.querySelector('.tpp-mobile-menu-btn');
    if (mobileBtn) {
        mobileBtn.addEventListener('click', function(e) {
            e.preventDefault();
            toggleMobileMenu();
        });
    }
    
    // Load saved language preference
    var savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        console.log('Loaded saved language preference:', savedLang);
    }
    
    // Close mobile menu on window resize if desktop view
    window.addEventListener('resize', function() {
        if (window.innerWidth > 991) {
            closeMobileMenu();
        }
    });
    
    // Close mobile menu when clicking a link (except dropdowns)
    document.addEventListener('click', function(e) {
        if (e.target.matches('.mobile-nav-list > li > a:not(.mobile-dropdown > a)')) {
            closeMobileMenu();
        }
        if (e.target.matches('.mobile-dropdown-menu a')) {
            closeMobileMenu();
        }
    });
});
