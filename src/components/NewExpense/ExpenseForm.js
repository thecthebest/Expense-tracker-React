import { useState } from 'react';
import './ExpenseForm.css';
function ExpenseForm(props) {
    // State for storing Title
    const [enteredTitle, setEnteredTitle] = useState('');
    // State for storing Amount
    const [enteredamount, setEnteredamount] = useState('');
    // State for storing Date
    const [enteredDate, setEnteredDate] = useState('');
    // Function for handling Title change
    const titleChangeHandler = (event) => { setEnteredTitle(event.target.value); };
    // Function for handling Title change
    const amountChangeHandler = (event) => { setEnteredamount(event.target.value); };
    // Function for handling Title change
    const dateChangeHandler = (event) => { setEnteredDate(event.target.value); };
    // Function for handling Submission
    const submitHandler = (event) => {
        // Stop browser from refreshing when submitting the form
        event.preventDefault();
        // const for storing different values in an object
        const expenseData = {
            title: enteredTitle,
            amount: enteredamount,
            date: new Date(enteredDate)
        };
        // Pass the data from this component to the above
        props.onSaveExpenseData(expenseData);
        // Reset form input // uses 2 way binding gather and change
        setEnteredTitle('');
        setEnteredamount('');
        setEnteredDate('');
    };
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredamount} min="0.01" step="0.01" onChange={amountChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2025-12-31" onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}
export default ExpenseForm;