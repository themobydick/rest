// submission.js
document.getElementById("submission-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form input values
  const name = document.getElementById("name-input").value;
  const location = document.getElementById("location-input").value;
  const dishes = [];
  if (document.getElementById("dish1-input").checked) {
    dishes.push("М'ясо гриль");
  }
  if (document.getElementById("dish2-input").checked) {
    dishes.push("Борщ");
  }
  if (document.getElementById("dish3-input").checked) {
    dishes.push("Фалафель");
  }
  if (document.getElementById("dish4-input").checked) {
    dishes.push("Качка по-шанхайськи");
  }
  if (document.getElementById("dish5-input").checked) {
    dishes.push("Бастурма");
  }
  if (document.getElementById("dish6-input").checked) {
    dishes.push("Кролик у сметані");
  }
  if (document.getElementById("dish7-input").checked) {
    dishes.push("Біфштекс");
  }
  if (document.getElementById("dish8-input").checked) {
    dishes.push("Цибулева зупа");
  }
  if (document.getElementById("dish9-input").checked) {
    dishes.push("Салат Цезар");
  }
  if (document.getElementById("dish10-input").checked) {
    dishes.push("Салат асорті");
  }
  // Add more dishes here...
  const cuisine = document.getElementById("cuisine-select").value;
  const description = document.getElementById("description-input").value;
  const picture = document.getElementById("image-url-input").value;
  

  // Validate form input
  if (name.trim() === "" || location.trim() === "" || picture.trim() === "" || description.trim() === "" || cuisine === "") {
    alert("Заповніть необхідні поля.");
    return;
  }

  // Create a new restaurant object
  const newRestaurant = {
    name,
    location,
    dishes,
	cuisine,
    description,
	picture
    
  };

  // Save the new restaurant in local storage
  saveRestaurant(newRestaurant);

  // Reset the form
  event.target.reset();
  alert("Restaurant submitted successfully!");
});

function saveRestaurant(restaurant) {
  // Retrieve existing restaurants from local storage
  const existingRestaurants = JSON.parse(localStorage.getItem("restaurants")) || [];

  // Add the new restaurant to the array
  existingRestaurants.push(restaurant);

  // Save the updated array in local storage
  localStorage.setItem("restaurants", JSON.stringify(existingRestaurants));
}
