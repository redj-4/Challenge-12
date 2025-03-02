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