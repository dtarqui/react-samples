import { useState } from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const expenseDate = props.date;
  const [title, setTitle] = useState(props.title);
  const expenseAmount = props.amount;

  // function clickHandler() {}
  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title); // Will Print last value - in this case not "Updated!" value
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={expenseDate} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
