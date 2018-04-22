import { getMovies, getSeries, getMovieDetail, getSeriesDetail, getMovieDetailVideos, getSeriesDetailVideos } from "../../API/movies";

import { createSagas, createContainer } from "redux-box";
import { createSelector } from 'reselect'
import { call, put } from "redux-saga/effects";

const state = {
  movies: {
    results: [],
    page: 0,
    total_pages: 0,
    total_results:0
  },
  series:{
    results: [],
    page: 0,
    total_pages: 0,
    total_results:0
  },
  detail:{
    backdrop_path: "",
    poster_path:"",
    original_name:"",
    original_title:"",
    overview:"",
    videos:''
  },
  favorites:[]
};

const actions = {

  requestMovies: () => ({ type: "REQUEST_MOVIES" }),
  requestSeries: () => ({ type: "REQUEST_SERIES" }),
  requestSerieDetail: (id) => ({ type: "REQUEST_SERIES_DETAIL", id:id }),
  requestMovieDetail: (id) => ({ type: "REQUEST_MOVIES_DETAIL", id:id }),
  setMediaFavorite: (media) => ({type: "SET_MEDIA_FAVORITE",media:media})


};

const mutations = {
  SET_MOVIES: (state, {movies}) => {
    state.movies = movies
  },
  SET_SERIES: (state, {series}) => {
    state.series = series
  },
  SET_MOVIE_DETAIL: (state, {detail}) => {
    state.detail = detail
  },
  SET_SERIE_DETAIL: (state, {detail}) => {
    state.detail = detail
  },
  SET_SERIE_DETAIL_VIDEO: (state, {video}) => {
    state.detail.videos = video
  },
  SET_MOVIE_DETAIL_VIDEO: (state, {video}) => {
    state.detail.videos = video
  },
  SET_MEDIA_FAVORITE: (state, {media}) => {
    state.favorites.push(media)
  },
};

const sagas = createSagas({
  REQUEST_MOVIES: function* (action) {
    try {
      const response = yield call(getMovies);
      yield put({ type: 'SET_MOVIES', movies:response})
    } catch (error) {
      console.log(error)
    }
    
  },
  REQUEST_MOVIES_DETAIL: function* (action) {
    try {
      const response = yield call(getMovieDetail,action.id);
      const videos = yield call(getMovieDetailVideos,action.id);
      let {key} =videos.results.filter(item=>item.type==='Trailer')[0];

      yield put({ type: 'SET_MOVIE_DETAIL', detail:response})
      yield put({ type: 'SET_MOVIE_DETAIL_VIDEO', video:key})

    } catch (error) {
      console.log(error)
    }

  },
  REQUEST_SERIES_DETAIL: function* (action) {

    try {

      const response = yield call(getSeriesDetail, action.id);
      const videos = yield call(getSeriesDetailVideos, action.id);
      let {key} =videos.results.filter(item=>item.type==='Trailer')[0];
      console.log(key);

      yield put({ type: 'SET_SERIE_DETAIL', detail:response})

      yield put({ type: 'SET_SERIE_DETAIL_VIDEO', video:key})

    } catch (error) {
      console.log(error)
    }

  },
  REQUEST_SERIES: function* (action) {
    try {
      const response = yield call(getSeries);
      yield put({ type: 'SET_SERIES', series:response})
    } catch (error) {
      console.log(error)
    }
  },

});

//selectors
const getTodos = (state,{user}) => {
  console.log('reselect',user.movies)
  return user.movies
}

const getCompletedTodos = createSelector( getTodos, (todos) => {

   // return  todos.results.filter(todo => todo.type==='Trailer')
    return  todos;
})

// include the ones you would like to access in your components here
const selectors = {
  getTodos
};

export default module = {
  name: "user",
  state,
  actions,
  mutations,
  sagas
};

//OPTIONAL: if you want to access this module using render props in your components:
//export default createContainer(module);