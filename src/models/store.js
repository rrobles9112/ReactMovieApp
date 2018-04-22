import { routerReducer } from 'react-router-redux'
import {createStore} from 'redux-box'
import movieModule from './movies'

export default createStore([
  movieModule,
], {
  reducers: {
    routing: routerReducer
  },  
})