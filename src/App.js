import React from "react";
import ExpenseItem from "./components/ExpenseItem";



const App = () => {
  const expenses = [
    {
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2023, 8, 6)
    },
    {
      title: 'Toilet Paper',
      amount: 15.81,
      date: new Date(2023, 8, 6)
    },
    {
      title: 'Mobile Phone',
      amount: 75.21,
      date: new Date(2023, 8, 6)
    },
    {
      title: 'Chair',
      amount: 14.85,
      date: new Date(2023, 8, 6)
    },
  ];


  return (
    <div>
      <h2>let's get started!</h2>

      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
