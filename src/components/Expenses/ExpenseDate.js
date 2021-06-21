import './ExpenseDate.css';
// Render Date in a list
function ExpenseDate(props) {
    // Stores month
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    // Stores day
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    // Stores Year
    const year = props.date.getFullYear();
    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    );
}
export default ExpenseDate;