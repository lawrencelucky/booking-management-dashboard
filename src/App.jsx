import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from './globalStyles';

import Dashboard from './pages/Dashboardpage/Dashboardpage';
import Header from './components/HeaderComponent/Header.component';

const App = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <Router>
      <GlobalStyle />
      <Header
        setOpenProfile={setOpenProfile}
        openProfile={openProfile}
        setOpenSidebar={setOpenSidebar}
        openSidebar={openSidebar}
      />
      <Switch>
        <Route path='/'>
          <Dashboard openProfile={openProfile} openSidebar={openSidebar} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
