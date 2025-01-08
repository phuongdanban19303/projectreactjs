const ProductItem = ({ title, img, description, price }) => {
    console.log(title);
    
  return (
    <div
      style={{
        width: "350px",
        textAlign: "center",
        border: "2px solid #e5e5e5",
      }}
    >
      <div
        style={{
          padding: "5px",
          background: "#fff",
          borderBottom: "2px solid #e5e5e5",
        }}
      >
        <img style={{ width: "100%" }} src={img} alt="san-pham" />
      </div>
      <div style={{ padding: "10px 5px" }}>
        <h2>{title}</h2>
        <p style={{ margin: "8px 0px " }}>{description} </p>
        <h3>{price}</h3>
      </div>
    </div>
  );
};

export default ProductItem;
