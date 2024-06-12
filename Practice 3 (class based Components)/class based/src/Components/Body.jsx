import React from "react";
import Card from "./Card";
class Body extends React.Component {
  constructor(){
    super()
    {console.log("parent-const")}
  }

componentDidMount(){
  {console.log("parent-didmt")}
}

  render() {
    return (
      <>
        <div>
          {console.log('parent-render')}
          <h1>Hii i am body component</h1>
          <Card name={"Mahesh"} education={"BCA"} location={"Phaltan"} />
        </div>
      </>
    );
  }
}

export default Body;
