import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Account from './pages/Account';
import Dashboard from './pages/Dashboard';
import Footer from './components/common/Footer';
import Header from './components/common/Header';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/account" component={Account} />
        <DashboardLayout>
          <Route path="/dashboard" component={Dashboard} />
        </DashboardLayout>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;