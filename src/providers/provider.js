import React, { createContext, useContext, useState } from 'react';

const ProviderContext = createContext();

const Provider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [employeeID, setEmployeeID] = useState('');
  const [showDelete, setShowDelete] = useState(false);

  return (
    <ProviderContext.Provider
      value={{
        employees,
        setEmployees,
        showDetails,
        setShowDetails,
        showDelete,
        setShowDelete,
        employeeID,
        setEmployeeID,
      }}
    >
      {children}
    </ProviderContext.Provider>
  );
};

export default Provider;

export const useProvider = () => useContext(ProviderContext);
