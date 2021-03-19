import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from './globalStyles';

import Dashboard from './pages/Dashboardpage/Dashboardpage';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path='/'>
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
