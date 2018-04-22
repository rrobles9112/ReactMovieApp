import {syncHistoryWithStore} from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'

import store from "./store";

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, store)
export default history;