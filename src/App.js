import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { AddTransaction } from './components/AddTransaction';
import { TransactionList } from './components/TransactionList';
import { ExpenseChart } from './components/ExpenseChart';
import { Filter } from './components/Filter';


const App = () => {
  return (
    <div className="container">
      <div className="transaction-section">
      <Header />
      <Balance />
      <Filter />
      <AddTransaction />
      <TransactionList />
    </div>
    <div className="add-transaction-section">
      <ExpenseChart />
    </div>
    </div>
  );
}

export default App;