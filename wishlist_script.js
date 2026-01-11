// wishlist_script.js

// Function to add an item to the wishlist
function addToWishlist(itemName) {
    const wishlistItems = document.getElementById('wishlist-items');

    // Create a new div element for the item
    const itemDiv = document.createElement('div');
    itemDiv.className = 'wishlist-item';
    
    // Create the content for the item
    const itemContent = document.createElement('div');
    itemContent.className = 'wishlist-item-content';
    itemContent.innerHTML = `
        <i class="fas fa-heart"></i>
        <span>${itemName}</span>
    `;
    
    // Append the content to the item div
    itemDiv.appendChild(itemContent);
    
    // Append the item div to the wishlist items container
    wishlistItems.appendChild(itemDiv);
}
