const Restaurantcard = (props) => {
  const { img, rtname, Ratings, menu, location } = props.restaurant;

  return (
    <div className="card-container">
      <img src={img} className="rt-img" alt={`${rtname}`} />
      <h3 className="card-head">{rtname}</h3>
      <p id="str-rating">
        <span className="rating">{Ratings}</span>
      </p>
      <p>{menu}</p>
      <p>{location}</p>
    </div>
  );
};

export default Restaurantcard;
