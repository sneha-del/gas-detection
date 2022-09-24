import React from "react";

const One = ({ formData, setFormData }) => {
  return (
    <>
      <div className="one">
        <h2>1. IS THERE A SMOKE ALARM SYSTEM INSTALLED AT YOUR WORKPLACE</h2>
        {/* <input
          className="inp"
          type="text"
          placeholder="Enter Yes or No"
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        /> */}
        <input type="radio" name="data" id="summer" value={formData.yes} />
        Yes
        <br />
        <input type="radio" name="data" id="winter" value={formData} />
        No
        <br />
      </div>
    </>
  );
};

export default One;
