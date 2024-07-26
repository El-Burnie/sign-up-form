const names = document.querySelectorAll("input[type='text']");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const pwd = document.getElementById("pwd");
const pwdConfirm = document.getElementById("pwdConfirm");

for (const name of names) {
    name.addEventListener("input", () => {
        const errorMessage = document.querySelector(`#${name.id} + span.error-message`);
        if (name.validity.valid) {
            errorMessage.textContent = "";
        } else if (name.validity.patternMismatch) {
            errorMessage.textContent = "Contains an invalid character";
        }
    });
}

// Only displays an error once the user switches focus to avoid frustrating them 
// while they type
email.addEventListener("focusout", () => {
    const errorMessage = document.querySelector(`#${email.id} + span.error-message`);
    if (email.validity.patternMismatch) {
        errorMessage.textContent = "Invalid email address";
    }
});

// Clears the invalid email message when the user empties the field or enters a
// valid email
email.addEventListener("input", () => {
    const errorMessage = document.querySelector(`#${email.id} + span.error-message`);
    if (email.validity.valid || !email.value) {
        errorMessage.textContent = "";
    }
});

phone.addEventListener("input", () => {
    const errorMessage = document.querySelector(`#${phone.id} + span.error-message`);
    if (phone.validity.valid) {
        errorMessage.textContent = "";
    } else if (phone.validity.patternMismatch) {
        errorMessage.textContent = "Invalid phone number";
    }
});

pwd.addEventListener("input", () => {
    const errorMessage = document.querySelector(`#${pwd.id} + span.error-message`);
    if (pwd.validity.valid || !pwd.value) {
        errorMessage.textContent = "";
    } else if (pwd.validity.tooShort) {
        errorMessage.textContent = "Password must be at least 6 characters long";
    }
});

// Checks to make sure the password fields match and makes the field invalid if they are not 
pwdConfirm.addEventListener("input", () => {
    const errorMessage = document.querySelector(`#${pwdConfirm.id} + span.error-message`);
    if (pwd.value == pwdConfirm.value || !pwdConfirm.value) {
        pwdConfirm.setCustomValidity("");
        errorMessage.textContent = "";
    } else {
        pwdConfirm.setCustomValidity("Passwords do not match");
        errorMessage.textContent = "Passwords do not match";
    }
});