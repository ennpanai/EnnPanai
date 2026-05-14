// document.addEventListener("DOMContentLoaded", function () {

//     const images = {
//         extraction: {
//             src: 'Fibre-Extraction.jpg',
//             title: 'Step 04 — Fibre Extraction',
//             sub: 'Proprietary technique · Long-staple fibre separation · Viruppatchi, Dindigul'
//         },

//         drying: {
//             src: 'Solar-Drying.jpg',
//             title: 'Step 05 — Solar Drying',
//             sub: 'Chemical-free · Sun-dried · Zero artificial energy'
//         },

//         spinning: {
//             src: 'Spinning.jpg',
//             title: 'Step 07 — Spinning',
//             sub: '90:10 Cotton-Palmyra Blend · Ring-frame Spun · Apparel Grade'
//         }
//     };

//     // Make available globally if called from HTML onclick
//     window.openOverlay = function (key) {
//         const d = images[key];

//         const overlayImg = document.getElementById('overlayImg');
//         const overlayTitle = document.getElementById('overlayTitle');
//         const overlaySub = document.getElementById('overlaySub');
//         const imgOverlay = document.getElementById('imgOverlay');

//         if (!overlayImg || !overlayTitle || !overlaySub || !imgOverlay) return;

//         overlayImg.src = d.src;
//         overlayTitle.textContent = d.title;
//         overlaySub.textContent = d.sub;

//         imgOverlay.classList.add('active');
//         document.body.style.overflow = 'hidden';
//     };

//     window.closeOverlay = function () {
//         const imgOverlay = document.getElementById('imgOverlay');
//         const process = document.getElementById('process');

//         if (imgOverlay) {
//             imgOverlay.classList.remove('active');
//         }

//         document.body.style.overflow = '';

//         if (process) {
//             process.scrollIntoView({
//                 behavior: 'smooth'
//             });
//         }
//     };


//     // Overlay click
//     const imgOverlay = document.getElementById('imgOverlay');

//     if (imgOverlay) {
//         imgOverlay.addEventListener('click', function (e) {
//             if (e.target === this) {
//                 closeOverlay();
//             }
//         });
//     }


//     // Contact dropdown
//     const contactNavBtn = document.getElementById('contactNavBtn');

//     if (contactNavBtn) {
//         contactNavBtn.addEventListener('click', function () {
//             const item = document.getElementById('contactNavItem');

//             if (!item) return;

//             const isOpen = item.classList.contains('open');
//             item.classList.toggle('open', !isOpen);
//         });
//     }


//     // Close dropdown outside click
//     document.addEventListener('click', function (e) {
//         const item = document.getElementById('contactNavItem');

//         if (item && !item.contains(e.target)) {
//             item.classList.remove('open');
//         }
//     });


//     // Mobile menu
//     const navHamburger = document.getElementById('navHamburger');

//     if (navHamburger) {
//         navHamburger.addEventListener('click', function () {
//             const navLinks = document.getElementById('navLinks');

//             this.classList.toggle('open');

//             if (navLinks) {
//                 navLinks.classList.toggle('mobile-open');
//             }
//         });
//     }


//     // Close mobile menu on link click
//     document.querySelectorAll('#navLinks a').forEach(function (link) {
//         link.addEventListener('click', function () {
//             const navHamburger = document.getElementById('navHamburger');
//             const navLinks = document.getElementById('navLinks');

//             if (navHamburger) {
//                 navHamburger.classList.remove('open');
//             }

//             if (navLinks) {
//                 navLinks.classList.remove('mobile-open');
//             }
//         });
//     });

// });


document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       IMAGE OVERLAY
    ========================== */

    const images = {
        extraction: {
            src: "Fibre-Extraction.jpg",
            title: "Step 04 — Fibre Extraction",
            sub: "Proprietary technique · Long-staple fibre separation · Viruppatchi, Dindigul"
        },

        drying: {
            src: "Solar-Drying.jpg",
            title: "Step 05 — Solar Drying",
            sub: "Chemical-free · Sun-dried · Zero artificial energy"
        },

        spinning: {
            src: "Spinning.jpg",
            title: "Step 07 — Spinning",
            sub: "90:10 Cotton-Palmyra Blend · Ring-frame Spun · Apparel Grade"
        }
    };

    window.openOverlay = function (key) {
        const data = images[key];
        if (!data) return;

        const overlay = document.getElementById("imgOverlay");
        const img = document.getElementById("overlayImg");
        const title = document.getElementById("overlayTitle");
        const sub = document.getElementById("overlaySub");

        if (!overlay || !img || !title || !sub) return;

        img.src = data.src;
        title.textContent = data.title;
        sub.textContent = data.sub;

        overlay.classList.add("active");
        document.body.style.overflow = "hidden";
    };

    window.closeOverlay = function () {
        const overlay = document.getElementById("imgOverlay");

        if (overlay) {
            overlay.classList.remove("active");
        }

        document.body.style.overflow = "";
    };

    const imgOverlay = document.getElementById("imgOverlay");

    if (imgOverlay) {
        imgOverlay.addEventListener("click", function (e) {
            if (e.target === this) {
                closeOverlay();
            }
        });
    }


    /* =========================
       CONTACT DROPDOWN
    ========================== */

    const contactBtn = document.getElementById("contactNavBtn");
    const contactItem = document.getElementById("contactNavItem");

    if (contactBtn && contactItem) {
        contactBtn.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();

            contactItem.classList.toggle("open");
        });
    }


    /* =========================
       MOBILE NAV
    ========================== */

    const hamburger = document.getElementById("navHamburger");
    const navLinks = document.getElementById("navLinks");

    if (hamburger && navLinks) {

        hamburger.addEventListener("click", function (e) {

            e.stopPropagation();

            hamburger.classList.toggle("open");
            navLinks.classList.toggle("mobile-open");
        });

    }


    /* =========================
       CLOSE NAV ON LINK CLICK
    ========================== */

    const navItems = document.querySelectorAll("#navLinks a");

    navItems.forEach(link => {

        link.addEventListener("click", function () {

            if (hamburger) {
                hamburger.classList.remove("open");
            }

            if (navLinks) {
                navLinks.classList.remove("mobile-open");
            }

        });

    });


    /* =========================
       CLOSE ON OUTSIDE CLICK
    ========================== */

    document.addEventListener("click", function (e) {

        // close contact dropdown
        if (contactItem && !contactItem.contains(e.target)) {
            contactItem.classList.remove("open");
        }

        // close mobile nav
        if (
            hamburger &&
            navLinks &&
            !hamburger.contains(e.target) &&
            !navLinks.contains(e.target)
        ) {
            hamburger.classList.remove("open");
            navLinks.classList.remove("mobile-open");
        }

    });

});