import React, { createContext, useContext, useState } from 'react';

const ProviderContext = createContext();

const Provider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  return (
    <ProviderContext.Provider value={{ employees, setEmployees }}>
      {children}
    </ProviderContext.Provider>
  );
};

export default Provider;

export const useProvider = () => useContext(ProviderContext);
