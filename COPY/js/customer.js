let cart = [];
let isEmployee = false;

const menuItems = {
    1: { name: "Chicken Stew", price: 120 },
    2: { name: "Beef Stew", price: 150 },
    3: { name: "Fasting Food", price: 80 }
};

function toggleLanguage() {
    const html = document.documentElement;
    const btn = document.getElementById("langBtnText");

    if (html.lang === "am") {
        html.lang = "en";
        btn.innerText = "አማርኛ";
    } else {
        html.lang = "am";
        btn.innerText = "English";
    }
}

function addToCart(id) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.qty++;
    } else {
        cart.push({ id, qty: 1 });
    }
    updateCart();
}

function updateCart() {
    const cartDiv = document.getElementById("cartItems");
    const totalDiv = document.getElementById("totalPrice");

    if (cart.length === 0) {
        cartDiv.innerHTML = "No items selected";
        totalDiv.innerText = "0 ብር";
        return;
    }

    let total = 0;
    cartDiv.innerHTML = "";

    cart.forEach(item => {
        const price = menuItems[item.id].price * item.qty;
        total += price;
        cartDiv.innerHTML += `<p>${menuItems[item.id].name} × ${item.qty}</p>`;
    });

    document.getElementById("cartCount").innerText =
        cart.reduce((s, i) => s + i.qty, 0);

    document.getElementById("dashboardVisitorTotal").innerText =
        total + " ብር";

    document.getElementById("dashboardEmployeeTotal").innerText =
        (total * 0.5) + " ብር";

    totalDiv.innerText = total + " ብር";
}

function checkout() {
    if (!cart.length) {
        alert("Cart is empty");
        return;
    }
    alert("Order placed successfully");
    cart = [];
    updateCart();
}
