console.log("Hello, world!");
let summer = document.getElementById("summer");
let winter = document.getElementById("winter");
let issummer = true;
function season() {
  if (issummer) {
    issummer = false;
    summer.style.display = "none";
    winter.style.display = "inline";
  } else {
    issummer = true;
    summer.style.display = "inline";
    winter.style.display = "none";
  }
}
