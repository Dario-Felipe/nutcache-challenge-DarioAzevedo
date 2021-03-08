import React from 'react';
import GlobalStyle from './theme/globalStyle';
import Header from './Components/Header/index';
import EmployeeList from './Components/EmployeeList/index';
import FixedCreate from './Components/FixedCreate/index';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <EmployeeList />
      <FixedCreate />
    </>
  );
}

export default App;
