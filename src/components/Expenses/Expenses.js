import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import { useState } from 'react';
function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    };

    return (
        <Card className="expenses">
            <div>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
            </div>
            <ExpenseItem title={props.items[0].title} date={props.items[0].date} amount={props.items[0].amount} />
            <ExpenseItem title={props.items[1].title} date={props.items[1].date} amount={props.items[1].amount} />
            <ExpenseItem title={props.items[2].title} date={props.items[2].date} amount={props.items[2].amount} />
            <ExpenseItem title={props.items[3].title} date={props.items[3].date} amount={props.items[3].amount} />
        </Card>
    );
}

export default Expenses;