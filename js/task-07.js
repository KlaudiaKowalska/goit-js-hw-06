const spanText = document.getElementById("text");
const fontSizeControl = document.getElementById("font-size-control");
fontSizeControl.addEventListener("input", function () {
  const fontSize = fontSizeControl.value + "px";
  spanText.style.fontSize = fontSize;
});
