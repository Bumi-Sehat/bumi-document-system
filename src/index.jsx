import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home.jsx';
import NewDocument from './pages/newdocument.jsx';
import Update from './pages/update.jsx';
import UserManagement from './pages/usermanagement.jsx';

class Main extends React.Component {

  

  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <Switch>
            <Route path='/' component={Home} exact={true} />
            <Route path='/newdocument' component={NewDocument} exact={true} />
            <Route path='/update' component={Update} exact={true} />
            <Route path='/userManagement' component={UserManagement} exact={true} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
};

ReactDOM.render(<Main />, document.getElementById('Main'));
