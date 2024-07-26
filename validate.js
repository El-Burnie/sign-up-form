const names = document.querySelectorAll("input[type='text']");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const pwd = document.getElementById("pwd");

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
})