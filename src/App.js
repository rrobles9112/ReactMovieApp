import React, {Component} from 'react';
import bundles from './routes/bundles'
import 'nprogress/nprogress.css'
import {Router, Switch, Route, NavLink} from 'react-router-dom'
import './App.css';
import {syncHistoryWithStore} from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import store from './models/store'
import { Provider } from 'react-redux'
const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, store)
browserHistory.listen(location => console.log(location.pathname))



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Switch>
            <Route exact path='/' component={bundles.movies}/>
            <Route exact path='/movies/id/:id' component={bundles.details}/>
            <Route exact path='/series' component={bundles.series}/>
            <Route exact path='/favorites' component={bundles.favorites}/>
            <Route exact path='/series/id/:id' component={bundles.details}/>
          </Switch>
        </Router>
      </Provider>

    );
  }
}

export default App;
