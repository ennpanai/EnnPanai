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
        const img     = document.getElementById("overlayImg");
        const title   = document.getElementById("overlayTitle");
        const sub     = document.getElementById("overlaySub");

        if (!overlay || !img || !title || !sub) return;

        img.src           = data.src;
        title.textContent = data.title;
        sub.textContent   = data.sub;

        overlay.classList.add("active");
        document.body.style.overflow = "hidden";
    };

    window.closeOverlay = function () {
        const overlay = document.getElementById("imgOverlay");
        if (overlay) overlay.classList.remove("active");
        document.body.style.overflow = "";
    };

    // Close overlay when clicking the backdrop
    const imgOverlay = document.getElementById("imgOverlay");
    if (imgOverlay) {
        imgOverlay.addEventListener("click", function (e) {
            if (e.target === this) window.closeOverlay();
        });
    }


    /* =========================
       MOBILE NAV
    ========================== */

    const hamburger = document.getElementById("navHamburger");
    const navLinks  = document.getElementById("navLinks");

    function openMobileNav() {
        hamburger.classList.add("open");
        navLinks.classList.add("mobile-open");
    }

    function closeMobileNav() {
        hamburger.classList.remove("open");
        navLinks.classList.remove("mobile-open");
    }

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", function (e) {
            e.stopPropagation();
            const isOpen = navLinks.classList.contains("mobile-open");
            isOpen ? closeMobileNav() : openMobileNav();
        });
    }

    // Close mobile nav when any nav link is clicked
    document.querySelectorAll("#navLinks a").forEach(function (link) {
        link.addEventListener("click", function () {
            closeMobileNav();
        });
    });


    /* =========================
       CONTACT DROPDOWN
    ========================== */

    const contactBtn  = document.getElementById("contactNavBtn");
    const contactItem = document.getElementById("contactNavItem");

    if (contactBtn && contactItem) {
        contactBtn.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            contactItem.classList.toggle("open");
        });
    }


    /* =========================
       CLOSE ON OUTSIDE CLICK
    ========================== */

    document.addEventListener("click", function (e) {

        // Close contact dropdown if clicking outside it
        if (contactItem && !contactItem.contains(e.target)) {
            contactItem.classList.remove("open");
        }

        // Close mobile nav if clicking outside nav area
        if (
            hamburger &&
            navLinks &&
            !hamburger.contains(e.target) &&
            !navLinks.contains(e.target)
        ) {
            closeMobileNav();
        }

    });


    /* =========================
       CLOSE MOBILE NAV ON RESIZE
       (prevents stuck-open state
        when rotating device)
    ========================== */

    window.addEventListener("resize", function () {
        if (window.innerWidth > 800) {
            closeMobileNav();
            // Also close all dropdowns
            document.querySelectorAll(".nav-item.open").forEach(function (item) {
                item.classList.remove("open");
            });
        }
    });

});