// submission.js
document.getElementById("submission-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form input values
    const name = document.getElementById("name-input").value;
    const location = document.getElementById("location-input").value;
    const dishes = [];
    if (document.getElementById("dish1-input").checked) {
      dishes.push("Dish 1");
    }
    if (document.getElementById("dish2-input").checked) {
      dishes.push("Dish 2");
    }
    // Add more dishes here...
    const description = document.getElementById("description-input").value;
    const cuisineCategory = document.getElementById("cuisine-category-select").value;
  
    // Validate form input
    if (name.trim() === "" || location.trim() === "" || dishes.length === 0 || description.trim() === "" || cuisineCategory === "") {
      alert("Please fill in all the required fields.");
      return;
    }
  
    // Create a new restaurant object
    const newRestaurant = {
      name,
      location,
      dishes,
      description,
      cuisineCategory
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
  