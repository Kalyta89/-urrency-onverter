import React from "react";

import "./header.css";

const Header = ({ items }) => {
  console.log(items && items);
  return (
    <div className="headerWrapper">
      <div className="currencyLogo">Currency converter App</div>
      <div className="headerCurrencyWrap">
        <div className="headerDollarWrap">
          <div>Currency: USD</div>
          <div>Buy:{items && items[0].buy}</div>
          <div>Sale:{items && items[0].sale}</div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
