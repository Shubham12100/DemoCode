import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';
 
export const TransactionList = () => {
  const { transactions, filter } = useContext(GlobalContext);
  const [searchTerm, setSearchTerm] = useState('');
 
  const filteredTransactions = transactions.filter(transaction => {
    if (filter === 'all') {
      return transaction.text.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (filter === 'income' && transaction.amount > 0) {
      return transaction.text.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (filter === 'expense' && transaction.amount < 0) {
      return transaction.text.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return false;
  });
 
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
 
  return (
    <>
      <h3>History</h3>
      <input
        type="text"
        placeholder="Search expenses..."
        value={searchTerm}
        onChange={handleChange}
        className="input-search"
      />
      <ul className="list">
        {filteredTransactions.map(transaction => (
          <Transaction 
          key={transaction.id} 
          transaction={transaction}
          />
        ))}
      </ul>
    </>
  );
};