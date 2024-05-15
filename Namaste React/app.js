/*
<div id="parent">
   <div id="child">
        <h1>i am h1 tag</h1>
        <h2>i am h2 tag</h2>
   </div>
<div id="child">
        <h1>i am h1 tag</h1>
        <h2>i am h2 tag</h2>
   </div>
</div>

build this structure in react
*/

let heading = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "I am h1 tag"),
      React.createElement("h2", {}, "I am h2 tag"),
    ]),
  ],
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am child 2 h1 tag"),
    React.createElement("h2", {}, "I am child 2 h2 tag"),
  ])
);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

/*
const heading = React.createElement("h2", { id: "heading" }, "Hii Mahi!!"); //in the object you can give attributes to your html tag.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
*/
