import React from 'react';
import GlobalStyle from './theme/globalStyle';
import Header from './components/Header';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <EmployeeList />
    </>
  );
}

export default App;
