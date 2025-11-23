const backgroundColor = document.getElementById("backColor");
backgroundColor.addEventListener("change", () =>
  changeBackgroundColor(backgroundColor.value)
);

function changeBackgroundColor(color) {
  document.getElementById("background1").style.backgroundColor = color;
}

const paragraphColor = document.getElementById("paraColor");
paragraphColor.addEventListener("change", () =>
  changeParagraphColor(paragraphColor.value)
);

function changeParagraphColor(color) {
  document.getElementById("para1").style.color = color;
}

const headingColor = document.getElementById("headColor");
headingColor.addEventListener("change", () =>
  changeheadingColor(headingColor.value)
);

function changeheadingColor(color) {
  document.getElementById("heading1").style.color = color;
}
