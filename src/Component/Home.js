import React from "react";
import { useSelector } from "react-redux";
import MyButton from "./UI/Button/MyButton";

function Home() {
  const homeBase = useSelector((state) => state.allProducts.products);
  console.log(homeBase);

  return homeBase.map((home) => {
    if (home.navLink === "home") {
      return (
        <div className="container-fluid home_page px-0" style={{background: `url(${home.background}) no-repeat`}} key={home.id}>
          <div className="all-row">
            <div className="d-flex justify-content-lg-between flex-wrap all-container">
              <div className="home_page_text">
                <h5 className="page_text_h5">{home.textSmallTitle}</h5>
                <h1>{home.textTitle}</h1>
                <p>{home.text}</p>
              </div>
              <div className="home_page_button">
                <MyButton>EXPLORE</MyButton>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  });
}

export default Home;
