import { createContext, useReducer, useContext } from "react";

// Preparing the Data Layer
export const DataLayerContext = createContext();

// Data layer
export const DataLayer = ({ initialState, reducer, children }) => {
  return  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>;
};

// Access for the value in the data layer
export const useDataLayerValue = () => useContext(DataLayerContext);
