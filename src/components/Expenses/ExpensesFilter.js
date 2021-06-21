import './ExpensesFilter.css';
// Render a select option
const ExpensesFilter = (props) => {
    const dropDownChangeHandler = (event) => {
        // // Pass the data from this component to the above
        props.onChangeFilter(event.target.value);
    };
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropDownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;