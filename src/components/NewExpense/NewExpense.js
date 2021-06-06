import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
function NewExpense(props) {
    // Function for creating expenseData by returning from ExpenseForm
    const saveExpenseDataHandler = (enteredExpenseData) => {
        // Create a new object with the data recevied
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        // Pass the data from this component to the above
        props.onAddExpense(expenseData);
    };
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
        </div>
    );
}
export default NewExpense;