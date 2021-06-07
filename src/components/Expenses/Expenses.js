import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import { useState } from 'react';
function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        console.log(selectedYear);
    };
    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    let expensesContent = <p>No Expenses Found</p>;
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map(
            (expense) => {
                return <ExpenseItem
                key={expense.id}
                title={expense.title}
                date={expense.date}
                amount={expense.amount}
                />
            }
        )
    }
    return (
        <Card className="expenses">
            <div>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
            </div>
            {expensesContent}
        </Card>
    );
}

export default Expenses;