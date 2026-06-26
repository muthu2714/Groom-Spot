

// =====================
// MOBILE MENU
// =====================
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');

if (btn && menu) {
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');

        const icon = btn.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars-staggered');
            icon.classList.toggle('fa-xmark');
        }
    });

    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
        });
    });
}



// =====================
// TOAST MESSAGE
// =====================
function showToast(message) {
    const container = document.getElementById('toast-container');

    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'bg-gray-900 border border-[gold] text-green-400 px-4 py-3 text-lg rounded shadow-lg';
    toast.innerHTML = `🍃 ${message}`;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateX(20px)";
        toast.style.transition = "0.5s";
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

// =====================
// BOOKING FORM (WHATSAPP)
// =====================
const form = document.getElementById('booking-form');

if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('form-name').value.trim();
        const phone = document.getElementById('form-phone').value.trim();
        const service = document.getElementById('form-service').value;
        const date = document.getElementById('form-date').value;

        // VALIDATION
        if (!name || !phone || service === "Not Specified" || !date) {
            showToast("Please complete all details");
            return;
        }

        // IMPORTANT: add country code
        const adminPhone = "916369283064";

        const message =
            `*AURUM BOOKING REQUEST*%0A` +
            `Name: ${name}%0A` +
            `Phone: ${phone}%0A` +
            `Service: ${service}%0A` +
            `Date: ${date}`;

        showToast("Redirecting to WhatsApp...");

        setTimeout(() => {
            window.open(
                `https://wa.me/${adminPhone}?text=${encodeURIComponent(message)}`,
                "_blank"
            );
        }, 800);
    });
}
