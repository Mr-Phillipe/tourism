import { useState } from "react";

export const useFetching = (callback)=>{
  const [isLoading, setIsLoading] = useState(false)
  const [err, setErr] = useState("");

  const fetching = async () =>{
    try {
      setIsLoading(true);
      await callback();
    } catch (e) {
      setErr(e.message);
    } finally{
      setIsLoading(false);
    }
  }

  return [fetching, isLoading, err];
}

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