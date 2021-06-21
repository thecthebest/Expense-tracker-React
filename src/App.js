import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
// Render function
function App() {
  // Dummy data
    const Dummy_Expenses = [
        {
          id: 'e1',
          title: 'Toilet Paper',
          amount: 94.12,
          date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
          id: 'e3',
          title: 'Car Insurance',
          amount: 294.67,
          date: new Date(2021, 2, 28),
        },
        {
          id: 'e4',
          title: 'New Desk (Wooden)',
          amount: 450,
          date: new Date(2021, 5, 12),
        },
      ];
      const [expenses, setExpenses] = useState(Dummy_Expenses);
      // Function form to update the new value based on the old
      const addExpenseHandler = (expense) => {
        setExpenses((previousExpense) => {
          return [expense, ...previousExpense];
        });
      };
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
            <Expenses items={expenses}/>
        </div>
    );
}
export default App;