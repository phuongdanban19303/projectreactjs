import "./App.css";
import Componentmobile from "./compodent/buoi_3/btvn";
import Demo from "./compodent/buoi_4/demo";
const anh1 = "./anh1.jpg";
const anh2 = "./anh2.jpg";
const anh3 = "./anh3.jpg";
function App() {
  return (
    <div
      className="App"
      style={{
        background: "#faebd6",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr ",
        padding: "40px",
        gap: "10px",
      }}
    >
      <Componentmobile
        img={anh1}
        title="Samsung Galaxy A55 5G 12GB/256GB"
        description="is simply dummy text of the printing and typesetting industry"
        pire="1.230.000đ"
      />
      <Componentmobile
        img={anh2}
        title="vivo V30e 5G 12GB/256GB"
        description="is simply dummy text of the printing and typesetting industry"
        pire="1.230.000đ"
        h1
      />
      <Componentmobile
        img={anh3}
        title="Samsung Galaxy S23 FE 5G 8GB/128GB Xanh"
        description="is simply dummy text of the printing and typesetting industry"
        pire="1.230.000đ"
      />
      <Demo>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hellods</h1>
      </Demo>
    </div>
  );
}

export default App;
