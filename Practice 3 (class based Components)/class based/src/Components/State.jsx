import React from "react";
// how to usestate hook used in class based components
class State extends React.Component {
  constructor(props) {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1, //you can change state value like this
            });
          }}
        >
            {console.log(this.state.count)}
        {this.state.count}
        </button>
      </>
    );
  }
}

export default State;
