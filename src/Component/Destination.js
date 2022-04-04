import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { smallMenu } from "./../hooks/useFetching";

function Destination() {
  const destination = useSelector((state) => state.allProducts.products);

  return destination.map((des) => {
    if (des.navLink === "destination") {
      return (
        <div
          className="container-fluid destination_page page_top px-0"
          key={des.id}
          style={{ background: `url(${des.background}) no-repeat` }}
        >
          <div className="all-container py-5">
            <h5 className="page_text_h5">
              <span className="page_text_number">0{des.id}</span>{" "}
              {des.textSmallTitle}
            </h5>
            <div className="d-flex flex-wrap justify-content-between">
              <div className="pt-5 dec_page_image">
                <div className="pt-lg-5 pt-md-0 pt-sm-0 p-0">
                  {des.planets.map((img) => {
                    return (
                      <img
                        src={img.image}
                        alt="im"
                        className={`img-fluid planetImage ${img.name}Img`}
                        key={img.id}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="pt-4 text-white des_page_text">
                <div className="des_page_text_block pt-lg-0 pt-md-0 pt-sm-3">
                  <div className="planet_menu d-flex">
                    {des.planets.map((planet) => {
                      if (planet.name === "moon") {
                        return (
                          <NavLink
                            exact
                            activeClassName="active2"
                            key={planet.id}
                            to={`/destination`}
                            onClick={(e) =>
                              smallMenu(
                                e,
                                `${planet.name}`,
                                `${planet.name}Img`,
                                "active2",
                                "planetText",
                                "planetImage",
                              )
                            }
                            className="menu text-uppercase"
                          >
                            {planet.name}
                          </NavLink>
                        );
                      } else {
                        return (
                          <NavLink
                            exact
                            activeClassName=""
                            key={planet.id}
                            to={`/destination`}
                            onClick={(e) =>
                              smallMenu(
                                e,
                                `${planet.name}`,
                                `${planet.name}Img`,
                                "active2",
                                "planetText",
                                "planetImage"
                              )
                            }
                            className="menu text-uppercase"
                          >
                            {planet.name}
                          </NavLink>
                        );
                      }
                    })}
                  </div>
                  <div>
                    {des.planets.map((text) => (
                      <div key={text.id} className={`planetText ${text.name}`}>
                        <h1 className="text-uppercase">{text.name}</h1>
                        <p className="long-p">{text.text}</p>
                        <hr className="border-bottom w-100" />
                        <div className="d-flex flex-wrap dec_footer_text">
                          <div className="dec_footer_text_first">
                            <p className="mb-2">{text.distanceName}</p>
                            <h6 className="m-0">{text.distanceNumber}</h6>
                          </div>
                          <div className="dec_footer_text_second">
                            <p className="mb-2">{text.timeName}</p>
                            <h6 className="m-0">{text.timeNumber}</h6>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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
