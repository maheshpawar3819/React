import React from "react";
import Axios from "axios";
class Aapi extends React.Component {
  constructor(props) {
    super(props);
  }

  //in this component i will try to fetch api using axios librabry

  componentDidMount() {
    Axios.get("https://api.github.com/users/maheshpawar3819")
      .then((response) => {
        console.log(response);
      })
      .catch(() => {
        console.log("error is found");
      });
  }

  render() {
    return (
      <>
        <h1>hii mahi</h1>
      </>
    );
  }
}

export default Aapi;
