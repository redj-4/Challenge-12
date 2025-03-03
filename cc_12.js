//Task 1: Business Dashboard – DOM Element Selection and Creation
// Select the dashboard container using document.getElementById
const dashboardById = document.getElementById("dashboard");

// Also select the dashboard container using document.querySelector
const dashboardQuery = document.querySelector("#dashboard");

// Create a new <div> element for the metric card
const revenueCard = document.createElement("div");

// Set class and id attributes for the revenue card
revenueCard.setAttribute("class", "metric-card");
revenueCard.setAttribute("id", "revenueCard");

// Populate the card with a title and placeholder value
revenueCard.innerHTML = `<h3>Revenue</h3><p>$0</p>`;

// Append the new revenue card to the dashboard container
dashboardById.appendChild(revenueCard);

//Task 2: Updating Dashboard Metrics – Working with NodeLists and Arrays

// Select all metric cards using document.querySelectorAll
const metricCardsNodeList = document.querySelectorAll(".metric-card");

// Convert the NodeList into an array using Array.from
const metricCardsArray = Array.from(metricCardsNodeList);

// Iterate over each card and update its content and style
metricCardsArray.forEach(card => {
    // Append " - Updated" to the existing innerHTML
    card.innerHTML += " - Updated";
    // Optionally change the background color to visually indicate an update
    card.style.backgroundColor = "#d1ffd1"; // light green background
});

//Task 3: Dynamic Inventory Management – Adding and Removing Items
//Function to add a new product item to the inventory list
function addInventoryItem(productName) {
     // Select the inventory list container
     const inventoryList = document.getElementById("inventoryList");
     // Create a new <li> element for the product item
     const productItem = document.createElement("li");
     // Set a class and a custom data attribute for the product item
     productItem.setAttribute("class", "product-item");
     productItem.setAttribute("data-product", productName);
     
     // Set the product name as the text content
     productItem.textContent = productName;
     
     // Add a click event listener to remove the item when clicked
     productItem.addEventListener("click", function() {
         removeInventoryItem(productItem);
     });
     
     // Append the new product item to the inventory list
     inventoryList.appendChild(productItem);
}

// Function to remove a specific product item from the inventory list
function removeInventoryItem(item) {
    // Select the inventory list container
    const inventoryList = document.getElementById("inventoryList");
    // Remove the specified item
    inventoryList.removeChild(item);
}
//Example product items
addProductItem("Juice");
addProductItem("Bread");

//Task 4: Demonstrated Event Bubbiling in Customer Section

const customerCards = document.querySelectorAll(".customer-card"); //using querySelectorAll to select all customer cards
const customerSection = document.getElementById("customerSection"); //getElemented is used to select the parent container
//Customer clicker section below
customerSection.addEventListener("click", () => {
    console.log("Customer Section Clicked");
});

customerCards.forEach(card => { //Iterates over each customer card
    card.addEventListener("click", (event) => { //Attaches click event to each customer card
        console.log(`User clicked ${event.target.textContent}`); //logs a message when a customer card is clicked.
        event.stopPropagation(); //calls the stopPropagation() method on the event object to prevent event bubbling.
    });    
});

customerSection.addEventListener("click", () => { //Attach clickn event to listen to the parent container
    console.log(`User clicked customerSection`); //Logs a message when the parent container is clicked.
});    
// Add a couple of customer cards dynamically
addCustomerCard("Customer A");
addCustomerCard("Customer B");