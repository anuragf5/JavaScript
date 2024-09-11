let image = document.getElementById("img");

let icon = document.getElementById("icon");

image.ondblclick = function(){
  icon.style.transform = "translate(-50% -50%) scale(1)";
  icon.style.color = "red";
  icon.style.opacity = "1";
  // icon.style.fontSize = "48px";

  setTimeout(() => {
    icon.style.opacity = "0";
  }, 1000);

  setTimeout(() => {
    icon.style.transform = "translate(-50% -50%) scale(0)";
    // icon.style.color = "#fff";
  }, 2000);
  // icon.style.fontSize = "48px";
}
