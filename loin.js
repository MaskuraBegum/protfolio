// resetForm.js
document.addEventListener("DOMContentLoaded", () => {
    const resetButton = document.getElementById("resetButton");
    const form = document.querySelector(".card-body");
  
    resetButton.addEventListener("click", () => {
      form.reset();
    });
  });
  loginButton.addEventListener("click", (event) => {
    event.preventDefault();

    // Get user input values
    const email = form.querySelector("input[type='username']").value;
    const password = form.querySelector("input[type='password']").value;

    // Name validation (assuming it is entered as part of the email field for simplicity)
    const nameIsValid = /^[a-zA-Z\s]{2,}$/.test(email);

    // Password validation: 8+ characters, uppercase, lowercase, number, special character
    const passwordIsValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password);

    if (!nameIsValid) {
      alert("Please enter a valid name (only letters, minimum 2 characters).");
    } else if (!passwordIsValid) {
      alert("Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.");
    } else {
      alert("Login successful! Redirecting...");

      // Redirect to another page (e.g., "dashboard.html")
      window.location.href = "dashboard.html";

      // Display user info in an alert
      alert(`Logged in as: ${email}`);
    }
  });
});