const form = document.getElementById("registrationForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

function validateInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  // Username
  if (usernameValue === "") {
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }

  // Email
  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email");
  } else {
    setSuccess(email);
  }

  // Password
  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 6) {
    setError(password, "Password must be at least 6 characters");
  } else {
    setSuccess(password);
  }

  // Confirm Password
  if (confirmPasswordValue === "") {
    setError(confirmPassword, "Please confirm your password");
  } else if (confirmPasswordValue !== passwordValue) {
    setError(confirmPassword, "Passwords do not match");
  } else {
    setSuccess(confirmPassword);
  }
}

function setError(element, message) {
  const formControl = element.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control error";
}

function setSuccess(element) {
  const formControl = element.parentElement;
  formControl.className = "form-control success";
}

function isValidEmail(email) {
  return /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/.test(email);
}
