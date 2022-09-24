import React, { useState } from "react";
import One from "./One";
import Two from "./Two";

const Form = () => {
  const [formData, setFormData] = useState({
    yes: "",
    No: "",
  });
  const [page, setPage] = useState(0);
  const FormTitles = ["Fill the data ", "Fil the data"];

  const PageDisplay = () => {
    if (page === 0) {
      return <One formData={formData} setFormData={setFormData} />;
    } else {
      return <Two formData={formData} setFormData={setFormData} />;
    }
  };
  return (
    <>
      <div className="form-container">
        <div className="header">
          <h2>{FormTitles[page]}</h2>
          <div className="body">
            {PageDisplay()}
            <div className="Button">
              <img
                src="./images/arrow-left.png"
                className="btn"
                disabled={page === 0}
                onClick={() => {
                  setPage((currPage) => currPage - 1);
                }}
              />

              <img
                src="./images/arrow-right.png"
                className="btn"
                onClick={() => {
                  if (page === FormTitles.length - 1) {
                    alert("FORM SUBMITTED");
                    console.log(formData);
                  } else {
                    setPage((currPage) => currPage + 1);
                  }
                }}

                // {page === FormTitles.length - 1 ? "Submit" : "Next"}
              />

              {/* </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
