import React from "react";
import "./Person.css";
const Person = (props) => {
  // console.log(props)
  return (
    <div>
      <p onClick={props.click} className="Person">
        Im {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed}></input>
      {/* value={props.name} */}
    </div>
  );
};

export default Person;
