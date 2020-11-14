import React from "react";
// import SM from "./../../assets/shopMens.jpg";
// import SW from "./../../assets/shopWomens.jpg";
import HC from "./../../assets/HC-1.jpg";
import SC from "./../../assets/SC-1.jpg";
import "./styles.scss";

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrapper">
        <div
          className="item"
          style={{
            backgroundImage: `url(${HC})`,
          }}
        >
          <a>Shop Hard Copy Books</a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${SC})`,
          }}
        >
          <a>Shop Ebooks</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
