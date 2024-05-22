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

const App = () => {
  return (
    <>
      <Header />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
