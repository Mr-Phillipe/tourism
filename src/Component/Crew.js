import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { smallMenu } from "./../hooks/useFetching";

function Destination() {
  const crew = useSelector((state) => state.allProducts.products);

  return crew.map((crew) => {
    if (crew.navLink === "crew") {
      return (
        <div
          className="container-fluid crew_page page_top px-0"
          key={crew.id}
          style={{ background: `url(${crew.background}) no-repeat` }}
        >
          <div className="all-container pt-5">
            <div className="d-flex flex-wrap justify-content-between">
              <h5 className="page_text_h5 w-100 text-center pb-4 d-lg-none d-md-none d-sm-none d-block">
                <span className="page_text_number">0{crew.id}</span>{" "}
                {crew.textSmallTitle}
              </h5>
              <div className="crew_text_block text-white order-lg-1 order-md-1 order-sm-1 order-2">
                <h5 className="page_text_h5 d-lg-block d-md-block d-sm-block d-none">
                  <span className="page_text_number">0{crew.id}</span>{" "}
                  {crew.textSmallTitle}
                </h5>
                <div className="d-flex justify-content-lg-start justify-content-center pt-4 d-lg-none d-md-none d-sm-none d-flex">
                  {crew.dot_menu.map((dot) => {
                    if (dot.id === 1) {
                      return (
                        <NavLink
                          exact
                          activeClassName="active3"
                          key={dot.id}
                          to={"/crew"}
                          onClick={(e) =>
                            smallMenu(
                              e,
                              `Text${dot.id}`,
                              `Img${dot.id}`,
                              "active3",
                              "dotText",
                              "dotImage"
                            )
                          }
                          className="menu"
                        >
                          <p className="dot_menu"></p>
                        </NavLink>
                      );
                    } else {
                      return (
                        <NavLink
                          exact
                          activeClassName=""
                          key={dot.id}
                          to={"/crew"}
                          onClick={(e) =>
                            smallMenu(
                              e,
                              `Text${dot.id}`,
                              `Img${dot.id}`,
                              "active3",
                              "dotText",
                              "dotImage"
                            )
                          }
                          className="menu"
                        >
                          <p className="dot_menu"></p>
                        </NavLink>
                      );
                    }
                  })}
                </div>
                {crew.dot_menu.map((dot) => (
                  <div key={dot.id} className={`dotText Text${dot.id}`}>
                    <h2>{dot.title}</h2>
                    <h1 className="my-3">{dot.name}</h1>
                    <div className="d-flex justify-content-lg-start justify-content-center">
                      <p>{dot.text}</p>
                    </div>
                  </div>
                ))}
                <div className="d-flex justify-content-lg-start justify-content-center pt-4 d-lg-flex d-md-flex d-sm-flex d-none">
                  {crew.dot_menu.map((dot) => {
                    if (dot.id === 1) {
                      return (
                        <NavLink
                          exact
                          activeClassName="active3"
                          key={dot.id}
                          to={"/crew"}
                          onClick={(e) =>
                            smallMenu(
                              e,
                              `Text${dot.id}`,
                              `Img${dot.id}`,
                              "active3",
                              "dotText",
                              "dotImage"
                            )
                          }
                          className="menu"
                        >
                          <p className="dot_menu"></p>
                        </NavLink>
                      );
                    } else {
                      return (
                        <NavLink
                          exact
                          activeClassName=""
                          key={dot.id}
                          to={"/crew"}
                          onClick={(e) =>
                            smallMenu(
                              e,
                              `Text${dot.id}`,
                              `Img${dot.id}`,
                              "active3",
                              "dotText",
                              "dotImage"
                            )
                          }
                          className="menu"
                        >
                          <p className="dot_menu"></p>
                        </NavLink>
                      );
                    }
                  })}
                </div>
              </div>
              <div className="d-flex justify-content-center order-lg-2 order-md-2 order-sm-2 order-1 align-items-end crew_image_block">
                {crew.dot_menu.map((dot) => (
                  <img
                    key={dot.id}
                    src={`${dot.image}`}
                    alt={dot.title}
                    className={`dotImage Img${dot.id}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  });
}

export default Destination;
