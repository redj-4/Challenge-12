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
// Select the parent container for the customer section
const customerSection = document.getElementById("customerSection");

// Attach an event listener to the customer section (parent container)
customerSection.addEventListener("click", () => {
    console.log("Customer Section Clicked");
});

// Function to add a customer card dynamically
function addCustomerCard(name) {
    // Create a new <div> element for the customer card
    const customerCard = document.createElement("div");
    
    // Add the "customer-card" class using classList for clarity
    customerCard.classList.add("customer-card");
    
    // Set the customer name as the text content of the card
    customerCard.textContent = name;
    
    // Attach an event listener to the customer card
    customerCard.addEventListener("click", (event) => {
        console.log("Customer card clicked");
        // Stop the event from bubbling up to the parent container
        event.stopPropagation();
    });
    
    // Append the customer card to the customer section container
    customerSection.appendChild(customerCard);
}

// Add a couple of customer cards dynamically
addCustomerCard("Customer A");
addCustomerCard("Customer B");