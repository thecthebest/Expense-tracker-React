import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false);
    // Function for creating expenseData by returning from ExpenseForm
    const saveExpenseDataHandler = (enteredExpenseData) => {
        // Create a new object with the data recevied
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        // Pass the data from this component to the above
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };
    // Add new expense
    const startEditingHandler = () => {
        setIsEditing(true);
    };
    // Cancel new expense
    const stopEditingHandler = () => {
        setIsEditing(false);
    };
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing &&
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={stopEditingHandler}
                />}
        </div>
    );
}
export default NewExpense;