function showSuccessPopup() {
    const successPopup = document.getElementById("success-popup");
    successPopup.style.display = "block";
}

// Function to close the pop-up
function closePopup() {
    const successPopup = document.getElementById("success-popup");
    successPopup.style.display = "none";
}

// Add an event listener to the "Order Now" button
const orderNowButton = document.getElementById("order-now-button");
orderNowButton.addEventListener("click", function (event) {
    event.preventDefault();
    showSuccessPopup();
});

// Add an event listener to the "Close" button in the pop-up
const closePopupButton = document.getElementById("close-popup-button");
closePopupButton.addEventListener("click", function () {
    
    closePopup();
});