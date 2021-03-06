import React from 'react';
import GlobalStyle from './theme/globalStyle';
import Header from './components/Header/index';
import EmployeeList from './components/EmployeeList';
import FixedCreate from './components/FixedCreate';

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
