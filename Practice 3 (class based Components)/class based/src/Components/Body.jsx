import React from "react";
import Card from "./Card";
class Body extends React.Component {
  constructor() {
    super();
  }

  async componentDidMount() {
    //used to make api calls
    const data = await fetch("https://api.github.com/users/maheshpawar3819");
    //convert this data in json format

    let json = await data.json();
    console.log(json);
  }

  render() {
    return (
      <>
        <div>
          {console.log("parent-render")}
          <h1>Hii i am body component</h1>
          {/* <Card name={"first"} education={"BCA"} location={"Phaltan"} /> */}
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
