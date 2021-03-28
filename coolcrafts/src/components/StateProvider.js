// This component will set up the data layer to track basket data

import React, { createContext, useContext, useReducer } from 'react';

// This is the data layer
export const StateContext = createContext();

// Build a provider that transfers data from the data layer to the children component that needs it
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// This is how we use the data layer inside of a component
export const useStateValue = () => useContext(StateContext);