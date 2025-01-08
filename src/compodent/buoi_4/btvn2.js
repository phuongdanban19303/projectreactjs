import React from "react";

const Btvn2 = (props) => {
  return (
    <div>
      <h1 style={{ margin: 0 }}>{props.titletop}</h1>
    </div>
  );
};
export const Body1 = ({ titlebody, description }) => {
  return (
    <div>
      <h3 style={{margin:0}}>{titlebody}</h3>
      <p>{description}</p>
    </div>
  );
};
export const Boxcontent = ({ textbox, brcolor }) => {
    console.log(brcolor);
    
  return (
    <div style={{ background:brcolor, textAlign:"center" }}>
      <h2>{textbox}</h2>
    </div>
  );
};

export default Btvn2;
// git pull origin <ten nhanh >
/// git add . 