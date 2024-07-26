const names = document.querySelectorAll("input[type='text']");

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