import Restaurantcard from "./Restorentcard";

const data = [
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/kyazotklprl8in3rlzmf",
    rtname: "Arbain Mandi",
    Ratings: "4.5 30-40 Min",
    menu: "North Indian Biryani",
    location: "Phaltan",
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ghlqqsuu7ovhuzq8txgu",
    rtname: "Pind Punjabi",
    Ratings: "4.2 30-35 Min",
    menu: "Punjabi, North Indian",
    location: "Baramati",
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/pxkczssapfhhd8w3b9jd",
    rtname: "Punjabi Treat",
    Ratings: "4.1 30-40 Min",
    menu: "Chinese, North Indian",
    location: "Phaltan",
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/tsw3vukgewwlhmqni762",
    rtname: "Godavari Ruchulu",
    Ratings: "3.8 30-40 Min",
    menu: "South Indian, Biryani",
    location: "Baramati",
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rb7lzh9ivotudnzr9rct",
    rtname: "Hotel Chaitantya",
    Ratings: "4.2 30-40 Min",
    menu: "Maharashtrian, Chinese",
    location: "Baramati",
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d2b39bda3a57f79ddf74dc0a2f4eb37c",
    rtname: "Biryani Zone",
    Ratings: "4 30-40 Min",
    menu: "Biryani",
    location: "Phaltan",
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wkmehhokjp57lup8ij1s",
    rtname: "Biryani By KG",
    Ratings: "3.9 30-40 Min",
    menu: "North Indian, Hyderabadi Biryani",
    location: "Baramati",
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wkmehhokjp57lup8ij1s",
    rtname: "Behrouz Biryani",
    Ratings: "4.3 30-40 Min",
    menu: "North Indian, Biryani, Kababs",
    location: "Baramati",
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/k5jwalqkha9t1czl0cc7",
    rtname: "Aroma Tandoor & Biryani",
    Ratings: "2.5 30-40 Min",
    menu: "Indian, Biryani",
    location: "Phaltan",
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qfcxq8z12q07krpz25ec",
    rtname: "Tandoor Point",
    Ratings: "2.5 30-40 Min",
    menu: "Tandoor",
    location: "Phaltan",
  },
];

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
