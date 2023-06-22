const password = document.getElementById("password");
const passwordConfirm = document.getElementById("confirm-password");
const validation = document.querySelector(".validate-password")

passwordConfirm.addEventListener("input", validatePassword);

function validatePassword() {
    const passValue = password.value;
    const passConfirm = passwordConfirm.value;
    
    if (passValue===passConfirm) {
        validation.textContent = `Password matched`

    } else {
        validation.textContent = `Passwords do not match`
    }
}