const output = document.getElementById("name-output");
const input = document.getElementById("name-input");
input.addEventListener("input", function () {
  if (input.value === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = input.value;
  }
});
