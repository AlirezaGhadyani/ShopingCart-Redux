import React from 'react';
import GlobalStyles from './Assets/Styles/GlobalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Global/Header/Header';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
    </Router>
  );
}

export default App;
