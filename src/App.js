import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import NewsList from './NewsList';
import ArticleDetail from './ArticleDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/news" component={NewsList} />
          <Route path="/article/:id" component={ArticleDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
