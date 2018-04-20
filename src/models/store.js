import movieModule from './movies/index'
import { routerReducer } from 'react-router-redux'
import {createStore,combineReducers} from 'redux';
import {createReducers} from 'quick-redux';

const modules = {
  movies: movieModule,
  routing:routerReducer
}

const reducers = createReducers(modules);
const store = createStore(combineReducers(reducers));

export default store;