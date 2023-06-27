import './Product.css';

const Product = (props) => {
  return (
    <div className="container">
      <div className="contentBox">
        <h3>{props.name}</h3>
        <p>{props.status === 0 ? "نو" : "کارکرده"}</p>
        <p>{props.price} تومان</p>
        <p>{props.location}</p>
      </div>
      <img
        className="image"
        src="https://s100.divarcdn.com/static/thumbnails/1686608740/AZHqWCXa.webp"
        alt={props.name}
      />
    </div>
  );
};

export default Product;
