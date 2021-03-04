import React from 'react';
import GlobalStyle from './theme/globalStyle';
import Header from './Components/Header';
import EmployeeList from './Components/EmployeeList';

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
