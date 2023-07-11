// effects.js

// Add dynamic effects here without modifying the main code
// For example, you can animate the input field when the user enters a name
const nameInput = document.getElementById("name");

nameInput.addEventListener("focus", function() {
  nameInput.classList.add("focused");
});

nameInput.addEventListener("blur", function() {
  nameInput.classList.remove("focused");
});

// You can add more dynamic effects using event listeners, animations, etc.
