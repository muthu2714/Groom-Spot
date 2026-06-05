

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
// REVIEWS SECTION
// =====================
const reviews = [
    { name: "Vivianne West", rating: 5, msg: "The level of detail at Aurum is unmatched." },
    { name: "Marcus Reed", rating: 5, msg: "Best cut experience ever." },
    { name: "Elena S.", rating: 5, msg: "Golden balayage is perfect!" },
    { name: "James Sterling", rating: 5, msg: "Exceptional service." }
];

const reviewContainer = document.getElementById('review-content');

function createReviewHTML(review) {
    let stars = "";

    for (let i = 0; i < 5; i++) {
        stars += `<i class="fa-solid fa-star ${i < review.rating ? 'text-[#D4AF37]' : 'text-stone-700'} text-[10px] mr-1"></i>`;
    }

    return `
        <div class="review-card mb-6">
            <div class="flex justify-between items-center mb-2">
                <span class="text-xs tracking-[0.3em] text-[#D4AF37] uppercase">${review.name}</span>
                <div>${stars}</div>
            </div>
            <p class="text-stone-400 italic text-sm">"${review.msg}"</p>
        </div>
    `;
}

if (reviewContainer) {
    const allReviews = [...reviews, ...reviews];
    reviewContainer.innerHTML = allReviews.map(createReviewHTML).join('');
}

// =====================
// TOAST MESSAGE
// =====================
function showToast(message) {
    const container = document.getElementById('toast-container');

    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'bg-black border border-[#D4AF37] text-white px-4 py-3 text-sm rounded shadow-lg';
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
        const adminPhone = "6369283064";

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
