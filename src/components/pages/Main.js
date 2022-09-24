import React from "react";

const Main = () => {
  return (
    <div>
      <section className="main">
        <div className="head">
          <h1>
            DEPENDECY TYPE
            <br />
            <span style={{ color: "red" }}>
              <b>GAS DETECTION</b>
            </span>
          </h1>
          <hr />
        </div>
        <div className="mid">
          <div className="mid-section1">
            <h1>
              CATEGORY
              <br />
              <span style={{ color: "red" }}>
                <b>EQUIPMENT</b>
              </span>
            </h1>
          </div>
          <div className="mid-section2">
            <img src="./images/img.png" alt="img" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
