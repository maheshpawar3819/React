import Restaurantcard from "./Restorentcard";
import data from "./utils/rtdata";
const Body = () => {
  return (
    <div className="body">
      <div>
        <button
          className="filter-btn"
          onClick={() => {
            console.log("click me");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-filter"
            viewBox="0 0 16 16"
          >
            <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
          </svg>
          Top Rated Restorents
        </button>
      </div>
      <div className="rest-container">
        {data.map((restaurant, index) => (
          <Restaurantcard key={index} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
