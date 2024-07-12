import React from "react";

const Demochild = (props) => {
  const { name, sirname, data ,items } = props;

  return (
    <div>
      <h1>{name}</h1>
      <h1>{sirname}</h1>
      <h1>{data}</h1>
      <ul>
        <li>
            {items}
        </li>
      </ul>
    </div>
  );
};

export default Demochild;
