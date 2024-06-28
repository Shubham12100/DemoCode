import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '- ₹' : '+ ₹';
  const amountClassName = transaction.amount < 0 ? 'expense' : 'income';

  return (
    <li className={`transaction.${amountClassName}`}>
      {transaction.text} <span className={amountClassName}>{sign} {Math.abs(transaction.amount)}</span>
      <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  );
}