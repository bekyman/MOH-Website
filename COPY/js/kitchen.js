// Initialize Lucide Icons
lucide.createIcons();

// Live Clock Logic
function updateClock() {
    const clockElement = document.getElementById('clock');
    if (clockElement) {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-GB', { hour12: false });
        clockElement.textContent = timeString;
    }
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock();

// Order Interaction Logic
function markProgress(btn) {
    if (btn.innerText === "Mark In Progress") {
        // Change button state to 'Complete'
        btn.innerText = "Complete Order";
        btn.classList.remove('bg-slate-900');
        btn.classList.add('bg-emerald-600');
        
        // Visual feedback on the card
        const card = btn.closest('.order-card');
        card.classList.add('ring-4', 'ring-emerald-500/10');
    } else {
        // Remove card with animation
        const card = btn.closest('.order-card');
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            card.remove();
        }, 300);
    }
}