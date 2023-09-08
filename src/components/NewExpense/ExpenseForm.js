import React, { useState } from 'react';
import './ExpenseForm.css';


const ExpenseForm = () => {
    /**
     * first approach: multiple state
     */
    const [entredTitle, setEntredtitle] = useState('');
    const [entredAmount, setEntredAmount] = useState('');
    const [entredDate, setEntredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEntredtitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     entredTitle: event.target.value
        // });
    }

    const amountChangeHandler = (event) => {
        setEntredAmount(event.target.value);
    };


    const dateChangeHandler = (event) => {
        setEntredDate(event.target.value);
    };


    /**
     * second approach: one state for each
     */

    // const [userInput, setUserInput] = useState({
    //     entredTitle: '',
    //     entredAmount: '',
    //     entredDate: ''
    // });

    // const titleChangeHandler = (event) => {
    //     setUserInput((prevstate) => {
    //         return { ...prevstate, entredTitle: event.target.value };
    //     });
    // };



    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min='0.01' step='.01' onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min='2020-01-01' max='2023-12-13' onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}


export default ExpenseForm
