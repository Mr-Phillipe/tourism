import React, { useState } from "react";
import { NavbarBrand } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import MyButton from "./UI/Button/MyButton";

function Navbar() {
  const [click, setClick] = useState(false);

  const navbar = useSelector((state) => state.allProducts.products);

  const LinkClick = () => {
    setClick(false);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }

  const url = useLocation();


  window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        if (url.pathname === '/home') {
          document.querySelector(".nav-menu").classList.add("menuTopHome");
          document.querySelector(".nav-menu").classList.remove("menuTopDestination");
          document.querySelector(".nav-menu").classList.remove("menuTopTechnology");
          document.querySelector(".nav-menu").classList.remove("menuTopCrew");
        } else if(url.pathname === '/destination'){
          document.querySelector(".nav-menu").classList.remove("menuTopHome");
          document.querySelector(".nav-menu").classList.remove("menuTopTechnology");
          document.querySelector(".nav-menu").classList.remove("menuTopCrew");
          document.querySelector(".nav-menu").classList.add("menuTopDestination");
        } else if(url.pathname === '/technology'){
          document.querySelector(".nav-menu").classList.add("menuTopTechnology");
          document.querySelector(".nav-menu").classList.remove("menuTopHome");
          document.querySelector(".nav-menu").classList.remove("menuTopDestination");
          document.querySelector(".nav-menu").classList.remove("menuTopCrew");
          document.querySelector(".nav-menu").classList.add("menuTopTechnology");
        } else if(url.pathname === '/crew'){
          document.querySelector(".nav-menu").classList.remove("menuTopCrew");
          document.querySelector(".nav-menu").classList.remove("menuTopHome");
          document.querySelector(".nav-menu").classList.remove("menuTopDestination");
          document.querySelector(".nav-menu").classList.remove("menuTopTechnology");
          document.querySelector(".nav-menu").classList.add("menuTopCrew");
        } else {
          document.querySelector(".nav-menu").classList.add("");
        }
      } else {
        if (url.pathname === '/home' || url.pathname === '/destination' ||url.pathname === '/crew' || url.pathname === '/technology') {
          document.querySelector(".nav-menu").classList.remove("menuTopHome");
          document.querySelector(".nav-menu").classList.remove("menuTopDestination");
          document.querySelector(".nav-menu").classList.remove("menuTopCrew");
          document.querySelector(".nav-menu").classList.remove("menuTopTechnology");
        } else {
          document.querySelector(".nav-menu").classList.remove("");
        }
      }
  }, true);

  window.addEventListener("mousedown", (e)=> {
    if(e.target.id !== "navLink"){
      setClick(false);
    }
  })

  return (
    <div className="p-0">
      <nav className="d-flex align-items-center navbar-bg">
        <NavbarBrand>
          <Link to="/">
            <img src="./images/shared/logo.svg" alt="" />
          </Link>
        </NavbarBrand>
        <div className="navbar-line">
          <hr />
        </div>
        <div
          className="d-lg-none d-md-none d-sm-none d-block menu-hamburger"
          onClick={() => setClick(true)}
        >
          <MyButton onClick={() => setClick(true)}>
            <img src="./images/shared/icon-hamburger.svg" alt="" />
          </MyButton>
        </div>
        <div
          className={
            click === false ? "navLink m-0" : "navLink m-0 show_navLink"
          }
          id="navLink"
        >
          <div className="d-lg-none d-md-none d-sm-none d-flex menu-close">
            <MyButton onClick={() => setClick(false)}>
              <img src="./images/shared/icon-close.svg" alt="" />
            </MyButton>
          </div>
          {navbar.map((nav) => (
            <NavLink
              exact
              to={`/${nav.navLink}`}
              className="menu-link"
              key={nav.id}
              activeClassName="active"
              onClick={LinkClick}
            >
              <span className="navLink-number">0{nav.id}</span>
              {nav.navLink}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
