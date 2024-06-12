import React from "react";

class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userinfo: {
        avatar_url: "",
        name: "",
        following: 0,
        followers: 0,
        public_repos: 0,
        url: "",
      },
    };
  }

  async componentDidMount() {
    const getdata = await fetch("https://api.github.com/users/maheshpawar3819");
    //convert this data in json format
    const json = await getdata.json();
    console.log(json);
    this.setState({
      userinfo: json,
    });
  }
  f;
  render() {
    //destructure ths data

    const { avatar_url, name, following, followers, public_repos, url } =
      this.state.userinfo;
    return (
      <>
        <img src={avatar_url} alt="" />
        <h1>User Name:{name}</h1>
        <h2>Following:{following}</h2>
        <h2>Followers:{followers}</h2>
        <h3>Public_Repos:{public_repos}</h3>
        <h6>Url:{url}</h6>
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
