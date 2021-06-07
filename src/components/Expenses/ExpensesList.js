import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';
function ExpensesList(props) {
    if (props.items.length === 0) {
        return (
            <h2 className="expenses-list__fallback">Found no Expenses</h2>
        );
    }
    return(
        <ul className="expenses-list">
            {
                props.items.map(
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
        </ul>
    );
}

export default ExpensesList;