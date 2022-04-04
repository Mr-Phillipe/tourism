export const smallMenu = (evt, text, img, active, menuText, menuImage) => {
  var x = document.getElementsByClassName(`${menuText}`);
  var y = document.getElementsByClassName(`${menuImage}`);
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  for (let i = 0; i < y.length; i++) {
    y[i].style.display = "none";
  }

  let menuBtn = document.getElementsByClassName("menu");
  for (let i = 0; i < menuBtn.length; i++) {
    menuBtn[i].className = menuBtn[i].className.replace(`${" "}${active}`, "");
  }
  evt.currentTarget.className += `${" "}${active}`;
  document.querySelector(`.${text}`).style.display = "block";
  document.querySelector(`.${img}`).style.display = "block";
}