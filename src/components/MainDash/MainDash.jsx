import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1
        style={{
          color: "brown",
          fontFamily: "inherit",
        }}
      >
        Dashboard
      </h1>
      <div className="date">
        <input type="date" />
      </div>
      <Cards />
      <Table />
    </div>
  );
};

export default MainDash;
