// app.js
document.addEventListener("DOMContentLoaded", function() {
  populateTable();
});

function populateTable() {
  const tableBody = document.getElementById("restaurant-table");
  tableBody.innerHTML = ''; // Clear the table body

  const existingRestaurants = JSON.parse(localStorage.getItem("restaurants")) || [];

  existingRestaurants.forEach((restaurant) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = restaurant.name;

    const locationCell = document.createElement("td");
    locationCell.textContent = restaurant.location;

    const dishesCell = document.createElement("td");
    dishesCell.textContent = restaurant.dishes.join(", ");

    const cuisineCell = document.createElement("td");
    cuisineCell.textContent = restaurant.cuisine;

    const descriptionCell = document.createElement("td");
    descriptionCell.textContent = restaurant.description;


    const pictureCell = document.createElement("td");
    const picture = document.createElement("img");
    picture.src = restaurant.picture;
    picture.alt = restaurant.name;
    pictureCell.appendChild(picture);

    row.appendChild(pictureCell);
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    row.appendChild(dishesCell);
    row.appendChild(descriptionCell);
    row.appendChild(cuisineCell);
   

    tableBody.appendChild(row);
  });
}
