document.addEventListener("DOMContentLoaded", function () {

    const images = {
        extraction: {
            src: 'Fibre-Extraction.jpg',
            title: 'Step 04 — Fibre Extraction',
            sub: 'Proprietary technique · Long-staple fibre separation · Viruppatchi, Dindigul'
        },

        drying: {
            src: 'Solar-Drying.jpg',
            title: 'Step 05 — Solar Drying',
            sub: 'Chemical-free · Sun-dried · Zero artificial energy'
        },

        spinning: {
            src: 'Spinning.jpg',
            title: 'Step 07 — Spinning',
            sub: '90:10 Cotton-Palmyra Blend · Ring-frame Spun · Apparel Grade'
        }
    };

    // Make available globally if called from HTML onclick
    window.openOverlay = function (key) {
        const d = images[key];

        const overlayImg = document.getElementById('overlayImg');
        const overlayTitle = document.getElementById('overlayTitle');
        const overlaySub = document.getElementById('overlaySub');
        const imgOverlay = document.getElementById('imgOverlay');

        if (!overlayImg || !overlayTitle || !overlaySub || !imgOverlay) return;

        overlayImg.src = d.src;
        overlayTitle.textContent = d.title;
        overlaySub.textContent = d.sub;

        imgOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    window.closeOverlay = function () {
        const imgOverlay = document.getElementById('imgOverlay');
        const process = document.getElementById('process');

        if (imgOverlay) {
            imgOverlay.classList.remove('active');
        }

        document.body.style.overflow = '';

        if (process) {
            process.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };


    // Overlay click
    const imgOverlay = document.getElementById('imgOverlay');

    if (imgOverlay) {
        imgOverlay.addEventListener('click', function (e) {
            if (e.target === this) {
                closeOverlay();
            }
        });
    }


    // Contact dropdown
    const contactNavBtn = document.getElementById('contactNavBtn');

    if (contactNavBtn) {
        contactNavBtn.addEventListener('click', function () {
            const item = document.getElementById('contactNavItem');

            if (!item) return;

            const isOpen = item.classList.contains('open');
            item.classList.toggle('open', !isOpen);
        });
    }


    // Close dropdown outside click
    document.addEventListener('click', function (e) {
        const item = document.getElementById('contactNavItem');

        if (item && !item.contains(e.target)) {
            item.classList.remove('open');
        }
    });


    // Mobile menu
    const navHamburger = document.getElementById('navHamburger');

    if (navHamburger) {
        navHamburger.addEventListener('click', function () {
            const navLinks = document.getElementById('navLinks');

            this.classList.toggle('open');

            if (navLinks) {
                navLinks.classList.toggle('mobile-open');
            }
        });
    }


    // Close mobile menu on link click
    document.querySelectorAll('#navLinks a').forEach(function (link) {
        link.addEventListener('click', function () {
            const navHamburger = document.getElementById('navHamburger');
            const navLinks = document.getElementById('navLinks');

            if (navHamburger) {
                navHamburger.classList.remove('open');
            }

            if (navLinks) {
                navLinks.classList.remove('mobile-open');
            }
        });
    });

});