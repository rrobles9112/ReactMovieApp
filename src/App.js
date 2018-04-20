import React, {Component} from 'react';
import logo from './logo.svg';
import {Router, Switch, Route} from 'react-router-dom'
import './App.css';
import {syncHistoryWithStore} from 'react-router-redux'
import Header from './components/Header'
import MoviesRoute from './routes/MoviesRoute'
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
        <div className="App container-fluid no-gutters no-padding">
          <Header/>
          <div className='App-intro'>

            <Router history={browserHistory}>
              <Switch>
                <Route exact path='/' component={MoviesRoute}/>
                <Route exact path='/movies'/>
                <Route exact path='/movies/id/:id'/>
                <Route exact path='/series'/>
                <Route exact path='/series/id/:id'/>
              </Switch>
            </Router>

          </div>


          <footer className='App-footer menu'>
            <div className="row">
              <div className="col-xs-4 menu-item active">
                <i className='fa fa-2x fa-video'></i>
                <p>Movies</p>
              </div>
              <div className="col-xs-4 menu-item">
                <i className='fa fa-2x fa-video'></i>
                <p>Series</p>
              </div>
              <div className="col-xs-4 menu-item">
                <i className='fa fa-2x fa-video'></i>
                <p>Favorites</p>
              </div>
            </div>
          </footer>
        </div>
      </Provider>

    );
  }
}

export default App;
