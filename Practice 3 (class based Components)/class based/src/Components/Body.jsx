import React from "react";
import Card from "./Card";
class Body extends React.Component {
  render() {
    return (
      <>
        <div>
          <h1>Hii i am body component</h1>
          <Card name={"Mahesh"} education={"BCA"} location={"Phaltan"} />
        </div>
      </>
    );
  }
}

export default Body;
