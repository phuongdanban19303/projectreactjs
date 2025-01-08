import Btvn2, { Body1, Boxcontent } from "./compodent/buoi_4/btvn2";
const contentbody = [
  { titlebody: "Title số 1", description: "nội dung số 1" },
  { titlebody: "Title số 2", description: "nội dung số 2" },
  { titlebody: "Title số 3", description: "nội dung số 3" },
];
const contentbox = [
  { textbox: "box1", brcolor: "#f2f1ca" },
  { textbox: "box2", brcolor: "red" },
  { textbox: "box3", brcolor: "blue" },
  { textbox: "box4", brcolor: "green" },
];
const rendercontentbody = () => {
  return contentbody.map((item) => <Body1 {...item} />);
};
const rendertexbox = () => {
  return contentbox.map((item) => <Boxcontent {...item} />);
};
function App() {
  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          background: "#92dfc8",
          textAlign: "center",
          textTransform: "uppercase",
          fontSize: 30,
        }}
      >
        <Btvn2 titletop="Header" />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "9fr 3fr" }}>
        <div>
          <div
            style={{
              fontSize: 14,
              background: "#e9e9e9",
              margin: "20px 20px 25px 0px",
            }}
          >
            <Btvn2 titletop="Bigtitle" />
          </div>
          <div>{rendercontentbody()}</div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#f2d8ca",
            marginLeft:"8px",
            height: "400px"
          }}
        >
          <Btvn2 titletop="aside" />
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto auto",
          gap: "10px",
          marginTop: 8
        }}
      >
        {rendertexbox()}
      </div>
      <div
        style={{
          background: "pink",
          textAlign: "center",
          textTransform: "uppercase",
          fontSize: 30,
          marginTop:10
        }}
      >
        <Btvn2 titletop="Foter" />
      </div>
    </div>
  );
}

export default App;
