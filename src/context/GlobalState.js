import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  transactions: [],
  filter: 'all'
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function setFilter(filter) {
    dispatch({
      type: 'SET_FILTER',
      payload: filter
    });
  }

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      filter: state.filter,
      addTransaction,
      deleteTransaction,
      setFilter
    }}>
      {children}
    </GlobalContext.Provider>
  );
}
