import React from "react";

const MainSection = () => {
  return (
    <div>
      mainSection
      <div>
        <input 
        type="number"
        />
        <select name="select">
          <option value="value1">UAH</option>
          <option value="value2" selected>
            USD
          </option>
          <option value="value3">EUR</option>
        </select>
      </div>
      <div>
        <input 
        type="number"
        />
        <select name="select">
          <option value="value1">UAH</option>
          <option value="value2" selected>
            USD
          </option>
          <option value="value3">EUR</option>
        </select>
      </div>
    </div>
  );
};

export default MainSection;
