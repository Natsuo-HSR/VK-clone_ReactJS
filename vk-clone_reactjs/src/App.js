import React from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideBar from './SideBar';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <SideBar />
        <Switch>
          <Route path='/'>
            
          </Route>

        </Switch>

        {/* Header */}
        {/* Left-side menu */}

      </Router>
    </div>
  );
}

export default App;
