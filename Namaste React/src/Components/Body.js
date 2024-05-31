import Restaurantcard from "./Restorentcard";
import data from "./utils/rtdata";
const Body = () => {
  return (
    <div className="body">
      <div className="rest-container">
        {data.map((restaurant, index) => (
          <Restaurantcard key={index} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
