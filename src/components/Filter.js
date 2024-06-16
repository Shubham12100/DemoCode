import React, { useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Filter = () => {
  const {setFilter} = useContext(GlobalContext);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  }

  return (
    <div className="filter">
      <label htmlFor="filter">Select one based on the options  : </label>
      <select id="filter" onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
    </div>
  );
}
