const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", (event) => {
    const inputValue = event.currentTarget.value.trim();
    if (inputValue === '') {
        nameOutput.textContent = "Anonymous";
    } else {
        nameOutput.textContent = inputValue;
    }
});