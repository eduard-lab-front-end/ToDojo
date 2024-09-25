import React from "react";
import imgMen from "../images/avatar-2.png";
import imgWomen from "../images/avatar-4.png";

export const TeamPage = () => {
  return (
    <section className="bg-transparent text-white">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 h-100">
            <h2 className="mb-4 display-5 text-center">Our Team</h2>
            <p className="text-white mb-5 text-center lead fs-4">
              We are a group of innovative, experienced, and proficient teams.
              You will love to collaborate with us.
            </p>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
          </div>
        </div>
      </div>

      <div className="container overflow-hidden">
        <div className="row gy-4 gy-lg-0 gx-xxl-5">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card border-0 border-bottom border-primary shadow-lg overflow-hidden bg-transparent h-100">
              <div className="card-body p-0 h-100">
                <figure className="m-0 p-0">
                    <img
                      className="w-100"
                      loading="lazy"
                      src={imgWomen}
                      alt="Flora Nyra"
                    />
                  <figcaption className="m-0 pt-2">
                    <h4 className="mb-1 text-white">Flora Nyra</h4>
                    <p className="text-white mb-0">Product Manager</p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card border-0 border-bottom border-primary shadow-lg overflow-hidden bg-transparent h-100">
              <div className="card-body p-0">
                <figure className="m-0 p-0">
                  <img
                    className="w-100 h-50"
                    loading="lazy"
                    src={imgMen}
                    alt="Flora Nyra"
                  />
                  <figcaption className="m-0 pt-2">
                    <h4 className="mb-1 text-white">Evander Mac</h4>
                    <p className="text-white mb-0">Art Director</p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card border-0 border-bottom border-primary shadow-lg overflow-hidden bg-transparent h-100">
              <div className="card-body p-0">
                <figure className="m-0 p-0">
                  <img
                    className="img-fluid"
                    loading="lazy"
                    src={imgWomen}
                    alt="Flora Nyra"
                  />
                  <figcaption className="m-0 pt-2">
                    <h4 className="mb-1 text-white">Taytum Elia</h4>
                    <p className="text-white mb-0">Investment Planner</p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card border-0 border-bottom border-primary shadow-lg overflow-hidden bg-transparent h-100">
              <div className="card-body p-0">
                <figure className="m-0 p-0">
                  <img
                    className="img-fluid"
                    loading="lazy"
                    src={imgMen}
                    alt="Flora Nyra"
                  />
                  <figcaption className="m-0 pt-2">
                    <h4 className="mb-1 text-white">Wylder Elio</h4>
                    <p className="text-white mb-0">Financial Analyst</p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
