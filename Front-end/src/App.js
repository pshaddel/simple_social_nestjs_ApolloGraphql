import React from 'react';
import './App.css';
import Home from './Pages/Home';
import NewPost from './Pages/NewPost';
import Comment from './Pages/Comment';
import NotFound from './Pages/NotFound';
import Menu from './Components/Menu';
import Documentation from './Pages/Documentation'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = ()=> {
  return (
    <Router>
    <React.Fragment>
      <Menu />
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/newPost'} component={NewPost} />
        <Route exact path={'/ViewComment'} component={Comment} />
        <Route exact path={'/Documentation'} component={Documentation} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  </Router>
  );
}

export default App;
