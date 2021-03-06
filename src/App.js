import React from 'react';
import GlobalStyle from './theme/globalStyle';
import Header from './components/Header/index';
import EmployeeList from './components/EmployeeList/index';
import FixedCreate from './components/FixedCreate/index';

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
