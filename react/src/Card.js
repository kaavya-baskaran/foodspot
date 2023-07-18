import Details from "./Details";

export default function Card(props) {
  console.log(props.image);
  const image = require("" + props.image);
  const discount = props.discount;
  const time = props.time;
  const rating = props.rating;
  const desc = props.desc;
  const id = props.id;
  const handleclick = props.handleclick;
  return (
    <div className="card col-sm-6 col-md-3 mx-4 my-4">
      <div onClick={() => handleclick(id)}>
        <img src={image} alt="image1" className="card-img-top" />
        <div className="card-body">
          <div className="card-img-overlay">
            {discount && <p className="discount">{discount}</p>}
          </div>
          <div className="timer-easy">
            <p className="card-text timer-text">{time}</p>
            <p className="card-text easy-text">{rating}</p>
          </div>
          <p className="card-text desc">{desc}</p>
        </div>
      </div>
    </div>
  );
}
