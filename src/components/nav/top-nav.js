import React from "react";

import logo from "../../assets/iFIT.png";

const TopNav = () => {
  return (
    <section className="flexed top-nav">
      <div>
        <ul className="flexed top-nav-ul">
          <li className="top-nav-li">BLOG</li>
          <li className="top-nav-li">NOURISH</li>
          <li className="top-nav-li">SHOP</li>
        </ul>
      </div>
      <div className="flexed second-row-nav">
        <div className="flexed">
          <img className="iFit-logo" src={logo} alt="iFit logo" />
          <h3>COACH</h3>
        </div>
        <div className="flexed">
          <h3>EXERCISE</h3>
          <h3>NUTRITION</h3>
          <h3>ACTIVITY</h3>
          <h3>SLEEP</h3>
        </div>
        <button className="second-row-button">SIGN UP</button>
      </div>
    </section>
  );
};

export default TopNav;
