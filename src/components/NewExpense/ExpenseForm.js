import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // If use simple useState will use this a lot of times
  //   const [inputTitle, setInputTitle] = useState("");

  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleHandler = (event) => {
    // console.log("Title changed!", event.target.value);
    // setInputTitle(event.target.value);
    setUserInput({
      ...userInput, // With this wont lose data
      title: event.target.value, // This will replace the value. NO MERGE.
    });
  };

  const amountHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   amount: event.target.value,
    // });
    setUserInput((prevState) => {
      return {
        ...prevState,
        amount: event.target.value,
      };
    });
  };

  const dateHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState, // There is date value but
        date: event.target.value, // With this, the date value will be replace
      };
    });
  };

  const submitHandler = (event) => {
    // console.log(event);
    event.preventDefault();
    const expenseData = {
      title: userInput.title,
      amount: +userInput.amount,
      date: new Date(userInput.date),
    };
    console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setUserInput({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        {/* <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleHandler} />
        </div> */}
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={userInput.title} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.amount}
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            value={userInput.date}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
