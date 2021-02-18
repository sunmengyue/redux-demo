import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext(); //provide context for each lower level component

export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
}; // Act as the higher order component for the index.js

export const useStateValue = () => useContext(StateContext);
