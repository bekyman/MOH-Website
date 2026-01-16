const translations = {
    am: {
        "system-name": "የክፍያ እና የሽያጭ መቆጣጠሪያ",
        "role": "ካሸር",
        "type-visitor": "ለጎብኝ (Visitor)",
        "type-employee": "ለጤና ሚኒስቴር ሰራተኛ (MoH Employee)",
        "item-burger": "ልዩ በርገር",
        "item-pizza": "ፒዛ (ትልቅ)",
        "item-soft": "ለስላሳ መጠጥ",
        "sub-price": "የሰራተኛ ቅናሽ",
        "current-order": "የአሁኑ ትዕዛዝ",
        "empty-cart": "ምንም የተመረጠ ምርት የለም",
        "subtotal": "ድምር",
        "subsidy-label": "የሰራተኛ ድጎማ (Subsidy)",
        "total": "ጠቅላላ ሂሳብ",
        "pay-mobile": "በሞባይል",
        "pay-cash": "በጥሬ ገንዘብ",
        "btn-pay": "ክፍያ ፈጽም",
        "success-title": "ክፍያው ተጠናቋል!",
        "success-msg": "ስለጎበኙን እናመሰግናለን። ደረሰኝዎ በኤስኤምኤስ ተልኳል።",
        "btn-back": "ተመለስ"
    },
    en: {
        "system-name": "Payment & Sales Control",
        "role": "Cashier",
        "type-visitor": "Visitor",
        "type-employee": "MoH Employee",
        "item-burger": "Special Burger",
        "item-pizza": "Pizza (Large)",
        "item-soft": "Soft Drink",
        "sub-price": "Employee Discount",
        "current-order": "Current Order",
        "empty-cart": "No items selected",
        "subtotal": "Subtotal",
        "subsidy-label": "Employee Subsidy",
        "total": "Total Balance",
        "pay-mobile": "Mobile",
        "pay-cash": "Cash",
        "btn-pay": "Complete Payment",
        "success-title": "Payment Successful!",
        "success-msg": "Thank you for visiting. Your receipt has been sent via SMS.",
        "btn-back": "Back"
    }
};

let currentLang = 'am';
let customerType = 'visitor'; // 'visitor' or 'employee'
let order = [];

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) el.textContent = translations[lang][key];
    });

    const btnAm = document.getElementById('lang-am');
    const btnEn = document.getElementById('lang-en');
    if(lang === 'am') {
        btnAm.className = "px-4 py-1.5 rounded-lg text-xs font-bold transition-all bg-white shadow-sm text-blue-600";
        btnEn.className = "px-4 py-1.5 rounded-lg text-xs font-bold transition-all text-slate-500";
    } else {
        btnEn.className = "px-4 py-1.5 rounded-lg text-xs font-bold transition-all bg-white shadow-sm text-blue-600";
        btnAm.className = "px-4 py-1.5 rounded-lg text-xs font-bold transition-all text-slate-500";
    }
    renderOrder();
}

function setCustomerType(type) {
    customerType = type;
    const vBtn = document.getElementById('type-visitor');
    const eBtn = document.getElementById('type-employee');
    const badge = document.getElementById('badge-type');
    const subsidyRow = document.getElementById('subsidy-row');

    if(type === 'visitor') {
        vBtn.className = "pb-2 text-sm font-bold transition-all active-tab";
        eBtn.className = "pb-2 text-sm font-bold transition-all text-slate-400";
        badge.textContent = "Visitor";
        badge.className = "px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-[10px] font-black uppercase tracking-wider";
        subsidyRow.classList.add('hidden');
    } else {
        eBtn.className = "pb-2 text-sm font-bold transition-all active-tab";
        vBtn.className = "pb-2 text-sm font-bold transition-all text-slate-400";
        badge.textContent = "MoH Employee";
        badge.className = "px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-black uppercase tracking-wider";
        subsidyRow.classList.remove('hidden');
    }
    renderOrder();
}

function addToOrder(name, visitorPrice, employeePrice) {
    const existing = order.find(item => item.name === name);
    if (existing) {
        existing.qty++;
    } else {
        order.push({ name, visitorPrice, employeePrice, qty: 1 });
    }
    renderOrder();
}

function removeFromOrder(index) {
    order.splice(index, 1);
    renderOrder();
}

function renderOrder() {
    const list = document.getElementById('order-list');
    if (order.length === 0) {
        list.innerHTML = `
            <div class="flex flex-col items-center justify-center h-full text-slate-300 opacity-50">
                <i data-lucide="package-open" size="64" stroke-width="1"></i>
                <p class="mt-4 font-bold">${translations[currentLang]['empty-cart']}</p>
            </div>`;
        lucide.createIcons();
        updateTotals(0, 0);
        return;
    }

    let subtotal = 0;
    let subsidy = 0;

    list.innerHTML = order.map((item, idx) => {
        const price = customerType === 'visitor' ? item.visitorPrice : item.employeePrice;
        const lineTotal = price * item.qty;
        subtotal += (item.visitorPrice * item.qty);
        if(customerType === 'employee') {
            subsidy += (item.visitorPrice - item.employeePrice) * item.qty;
        }

        return `
        <div class="flex items-center justify-between bg-slate-50 p-4 rounded-2xl border border-slate-100 group">
            <div class="flex items-center gap-4">
                <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center font-black text-blue-600 shadow-sm border border-slate-100">${item.qty}</div>
                <div>
                    <p class="font-bold text-slate-800 text-sm">${item.name}</p>
                    <p class="text-[10px] font-bold text-slate-400 uppercase">${price} ETB</p>
                </div>
            </div>
            <div class="flex items-center gap-4">
                <p class="font-black text-slate-700 text-sm">${lineTotal} ETB</p>
                <button onclick="removeFromOrder(${idx})" class="text-slate-300 hover:text-rose-500 transition-colors">
                    <i data-lucide="x-circle" size="18"></i>
                </button>
            </div>
        </div>`;
    }).join('');
    
    lucide.createIcons();
    updateTotals(subtotal, subsidy);
}

function updateTotals(subtotal, subsidy) {
    const total = subtotal - subsidy;
    document.getElementById('subtotal-val').textContent = `${subtotal.toFixed(2)} ETB`;
    document.getElementById('subsidy-val').textContent = `-${subsidy.toFixed(2)} ETB`;
    document.getElementById('total-val').textContent = `${total.toFixed(2)} ETB`;
}

function completeOrder() {
    if (order.length === 0) return;
    document.getElementById('success-modal').classList.remove('hidden');
    document.getElementById('success-modal').classList.add('flex');
}

function closeModal() {
    document.getElementById('success-modal').classList.add('hidden');
    document.getElementById('success-modal').classList.remove('flex');
    order = [];
    renderOrder();
}

// Initialize Lucide icons on page load
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

});
