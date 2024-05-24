import React from "react";
import ReactDOM from "react-dom/client";

/*
Plan:
*Header
  -logo
  -Navitems
*Body
  -search
  -restorent container
  -restorent card
    -Name of restorent,Star rating,cuisine,delivery time
*Footer
  -Copyright
  -Links
  -Address
  -Contact
*/

//header component

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://img.freepik.com/free-vector/free-delivery-logo-with-bike-man-courier_1308-46261.jpg?size=626&ext=jpg&ga=GA1.1.253643294.1694699196&semt=ais_user_b"
          alt="logo img"
          className="logo"
        />
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search" name="search" />
        <button>Search</button>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};




const data=[
  {
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/kyazotklprl8in3rlzmf",
    rtname:"Arbain Mandi",
    Ratings:"4.5 30-40 Min",
    menu:"North indian biryani",
    location:"Phaltan",
  }
]

//Restorent Card Component

const Restorentcard = (props) => {
  return (
    <div className="card-main-container">
      <div className="card-container">
        <img
          src={props.dta.rtname}
          className="rt-img"
        />
        <h3 className="card-head">Meghna Food</h3>
        <p id="str-rating">
          Ratings<span className="rating"> 4.5 </span>30-40 mins
        </p>
        <p>South Indian Biryani</p>

        <p> Nare</p>
      </div>
    </div>
  );
};

//Body Component
const Body = () => {
  return (
    <div className="body">
      <div className="rest-container">
        <Restorentcard dta={data[0]}/>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
