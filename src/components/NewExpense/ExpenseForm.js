import './ExpenseForm.css';
function ExpenseForm(props) {
    return (
        <form>
            <div className="new-expense__controls">
                <div class="new-expense__control">
                    <label>Title</label>
                    <input type="text"></input>
                </div>
                <div class="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01"></input>
                </div>
                <div class="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2025-12-31"></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button">Add Expense</button>
            </div>
        </form>
    );
}
export default ExpenseForm;