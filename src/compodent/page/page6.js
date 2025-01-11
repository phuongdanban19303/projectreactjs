import React, { useState } from "react";
const Vote = () => {
  const [vote1, setvote1] = useState(0);
  const [vote2, setvote2] = useState(0);
  const present1 = (vote1 / (vote1 + vote2)) * 100;
  const present2 = (vote2 / (vote2 + vote1)) * 100;
  console.log(present2);

  return (
    <>
      <div style={{ display: "flex", width: "80%" }}>
        <div
          style={{
            border: "1px solid black",
            height: "50px",
            background: "red",
            width: `${!present1 && !present2 ? 50 : present1}%`,
          }}
        >
          <h2
            style={{
            //   whiteSpace: "nowrap", // Đảm bảo nội dung không xuống dòng
              overflow: "hidden",
            }}
          >
            {!vote1 ? 0 : present1.toFixed(0)}%
          </h2>
        </div>
        <div
          style={{
            border: "1px solid black",
            height: "50px",
            background: "blue",
            width: `${!present1 && !present2 ? 50 : present2}%`,
          }}
        >
          <h2
            style={{
            //   whiteSpace: "nowrap", // Đảm bảo nội dung không xuống dòng
              overflow: "hidden",
            }}
          >
            {!vote2 ? 0 : present2.toFixed(0)}%
          </h2>
        </div>
      </div>
      <button onClick={() => setvote1((pre) => pre + 1)}>vote1</button>
      <h1>{vote1}</h1>
      <button onClick={() => setvote2((pre) => pre + 1)}>vote2</button>
      <h1>{vote2}</h1>
    </>
  );
};

export default Vote;
