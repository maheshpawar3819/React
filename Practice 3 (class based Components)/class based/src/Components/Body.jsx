import React from "react";
import Card from "./Card";
class Body extends React.Component {
  constructor() {
    super();
    {
      console.log("parent-const");
    }
  }

  componentDidMount() {
    {
      console.log("parent-didmt");
    }
  }

  render() {
    return (
      <>
        <div>
          {console.log("parent-render")}
          <h1>Hii i am body component</h1>
          <Card name={"first"} education={"BCA"} location={"Phaltan"} />
          <Card name={"second"} education={"MCA"} location={"Pune"} />
        </div>
      </>
    );
  }
}

export default Body;

/* 
-parent constructor
-parent render
    -first constructor
    -first render
    
    -second constructor
    -second render

  <DOM UPDATE IN SINGLE BATCH>
    -first componentDidMount
    -second componentDidMount

-parent componentDidMount
*/
