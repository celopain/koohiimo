// Create a cart item
function createCartItem(name, price, quantity) {
    return { name, price, quantity };
}

// Add item to cart
function addToCart(name, price) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.name === name);
    const imagePath = `images/${name.replace(/ /g, "_")}.png`; // e.g., "Caramel Macchiato" -> "Caramel_Macchiato.png"

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push(createCartItem(name, price, 1));
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

// Display the cart
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const orderButton = document.getElementById('order-now-button');
    

    cartItemsContainer.innerHTML = '';

    if (cart.length > 0) {
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';

            cartItem.innerHTML = `
                <div class="box">
                    <img src="images/${item.name.replace(/ /g, '_')}.png" alt="">
                    <h3>${item.name}</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                    <span>${item.price}</span>
                    <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
                    <a class="btn" onclick="removeFromCart(${index})">Remove</a>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
        orderButton.style.display = 'block';
    } else {
        orderButton.style.display = 'none';
    }
}

// Update quantity
function updateQuantity(index, newQuantity) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity = parseInt(newQuantity);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

// Remove item
function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart(); // Use this instead of location.reload()
}

// Handle form submission
document.addEventListener("DOMContentLoaded", () => {
    displayCart(); // Render cart immediately

    const form = document.getElementById("orderForm");
    const orderField = document.getElementById("orderField");

    form.addEventListener("submit", () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        let orderSummary = "ORDER DETAILS:\n\n";

        cart.forEach(item => {
            orderSummary += `${item.name} x${item.quantity} — ${item.price}\n`;
        });

        orderField.value = orderSummary;
    });
});
