import React from "react";
const Demo = (Props) => {
  
  return (
    <div style={{textAlign:"left"}}>
      <ul>
      <li>{Props.icon}</li>
      <h6>{Props.title}</h6>
      <p>
        {Props.text}
      </p>
      </ul>
    </div>
  );
};

export default Demo;
