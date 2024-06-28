import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
 
Chart.register(ArcElement, Tooltip, Legend);

export const ExpenseChart = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2);

  const data = {
    labels: ['Income', 'Expense'],
    datasets: [{
      data: [income, expense],
      backgroundColor: ['#2ecc71', '#e74c3c'],
      hoverBackgroundColor: ['#27ae60', '#c0392b']
    }]
  };

  return (
    <div className="chart-container">
      <h2 className="chartName">BalanceChart</h2>
      <Pie data={data} />
    </div>
  );
}
