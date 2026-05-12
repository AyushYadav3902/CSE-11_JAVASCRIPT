let fontSize = 18;
let isVisible = true;


document.getElementById("changeTextBtn").addEventListener("click", function () {
  let text = document.getElementById("inputText").value;
  if (text !== "") {
    document.getElementById("heading").innerText = text;
  }
});

document.getElementById("colorBtn").addEventListener("mouseover", function () {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
});


document.getElementById("fontBtn").addEventListener("click", function () {
  fontSize += 2;
  document.getElementById("para").style.fontSize = fontSize + "px";
});


document.getElementById("toggleBtn").addEventListener("click", function () {
  let para = document.getElementById("para");

  if (isVisible) {
    para.style.display = "none";
    isVisible = false;
  } else {
    para.style.display = "block";
    isVisible = true;
  }
});