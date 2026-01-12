document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const loginForm = document.getElementById('login-form');
    const resetForm = document.getElementById('reset-form');

    // Handle Login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userId = document.getElementById('userId').value.trim();
        if (!userId.startsWith('EMP-') && !userId.startsWith('CUST-')) {
            alert("ስህተት: መለያዎ በ EMP- ወይም CUST- መጀመር አለበት!");
        } else {
            alert("Logging in as " + userId);
        }
    });

    // Handle Reset Request
    resetForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const resetId = document.getElementById('reset-userId').value;
        alert("መመሪያ ወደ " + resetId + " ተልኳል።");
        toggleForms(); // Go back to login after sending
    });
});

/**
 * Toggles the visibility between Login and Reset forms
 */
function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const resetForm = document.getElementById('reset-form');

    // Toggle the 'hidden' class on both
    loginForm.classList.toggle('hidden');
    resetForm.classList.toggle('hidden');
}