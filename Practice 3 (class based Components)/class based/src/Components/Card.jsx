import React from "react";

// receiving the data as an props
class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, education, location } = this.props;
    return (
      <>
        <h1>{name}</h1>
        <h2>{education}</h2>
        <h3>{location}</h3>
      </>
    );
  }
}

export default Card;
