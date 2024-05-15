import React from "react";

const Listtable = () => {
  const list = [
    {
      name: "mahi",
      standard: "BCA",
      age: 21,
      marks: 90,
    },
    {
      name: "kunal",
      standard: "BCA",
      age: 21,
      marks: 80,
    },
    {
      name: "soham",
      standard: "BCA",
      age: 21,
      marks: 50,
    },
    {
      name: "ashwini",
      standard: "BCA",
      age: 21,
      marks: 70,
    },
    {
      name: "saurabh",
      standard: "BCA",
      age: 21,
      marks: 60,
    },
    {
      name: "neha",
      standard: "BCA",
      age: 21,
      marks: 70,
    },
    {
      name: "pratiksha",
      standard: "BCA",
      age: 21,
      marks: 40,
    },
    {
      name: "anjali",
      standard: "BCA",
      age: 21,
      marks: 80,
    },
    {
      name: "rahul",
      standard: "BCA",
      age: 21,
      marks: 90,
    },
    {
      name: "sneha",
      standard: "BCA",
      age: 21,
      marks: 100,
    },
  ];
  return (
    <div>
      {list.map((ele) => {
        return (
          <table class="table table-restriped table-bordered">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Standard</th>
                <th scope="col">Age</th>
                <th scope="col">Marks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{ele.name}</td>
                <td>{ele.standard}</td>
                <td>{ele.age}</td>
                <td>{ele.marks}</td>
                
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
};

export default Listtable;
