import {
  getMovies,
  getSeries,
  getMovieDetail,
  getSeriesDetail,
  getMovieDetailVideos,
  getSeriesDetailVideos,
  fetchGenersMovie,
  fetchGenersTvShow
} from "../../API/movies";

import { createSagas, createContainer } from "redux-box";
import { createSelector } from "reselect";
import { call, put, select } from "redux-saga/effects";

const state = {
  date:null,
  genre:null,
  query:null,
  movies: {
    results: [],
    page: 0,
    total_pages: 0,
    total_results: 0
  },
  series: {
    results: [],
    page: 0,
    total_pages: 0,
    total_results: 0
  },
  detail: {
    backdrop_path: "",
    poster_path: "",
    original_name: "",
    original_title: "",
    overview: "",
    videos: ""
  },
  moviesGenres: {
    genres:[]
  },
  tvGenres: {
    genres:[]
  },
  favorites: []
};

const actions = {
  requestMovies: (params) => ({type: "REQUEST_MOVIES", params: params}),
  requestSeries: (params) => ({type: "REQUEST_SERIES", params: params}),
  requestSerieDetail: id => ({type: "REQUEST_SERIES_DETAIL", id: id}),
  requestMovieDetail: id => ({type: "REQUEST_MOVIES_DETAIL", id: id}),
  setMediaFavorite: media => ({type: "SET_MEDIA_FAVORITE", media: media}),
  fetchTvGenres: () => ({type: "FETCH_TV_GENRES"}),
  fetchMoviesGenres: () => ({type: "FETCH_MOVIES_GENRES"}),
  setQueryFilter: query => ({type: "SET_QUERY_FILTER", query: query}),
  setDateFilter: date => ({type: "SET_DATE_FILTER", date: date}),
  setGenreFilter: genre => ({type: "SET_GENRE_FILTER", genre: genre}),
};

const mutations = {
  SET_MOVIES: (state, { movies }) => {
    state.movies = movies;
  },
  SET_SERIES: (state, { series }) => {
    state.series = series;
  },
  SET_MOVIE_DETAIL: (state, { detail }) => {
    state.detail = detail;
  },
  SET_SERIE_DETAIL: (state, { detail }) => {
    state.detail = detail;
  },
  SET_SERIE_DETAIL_VIDEO: (state, { video }) => {
    state.detail.videos = video;
  },
  SET_MOVIE_DETAIL_VIDEO: (state, { video }) => {
    state.detail.videos = video;
  },
  SET_MEDIA_FAVORITE: (state, { media }) => {
    state.favorites.push(media);
  },
  SET_SERIES_GENRES: (state, { genre }) => {
    state.tvGenres=genre
  },
  SET_MOVIES_GENRES: (state, { genre }) => {
    state.moviesGenres=genre
  },
  SET_QUERY_FILTER: (state,{query})=>{
    state.query=query
  },
  SET_GENRE_FILTER:(state,{genre})=>{
    state.genre=genre;
  },
  SET_DATE_FILTER:(state,{date})=>{
    state.date=date;
  }

};

export const getState = (state)=>state.user
const sagas = createSagas({
  REQUEST_MOVIES: function*({params}) {
    try {
      const response = yield call(getMovies,params);
      const a = yield select(getState);
      console.log('filter state',a)
      if(a.date!==null && a.genre!==null){
        let responseFiltered = response.results.filter(item => item.release_date.substr(0,4)===a.date)
        console.log('responseFiltered=',responseFiltered);
        response.results=responseFiltered;
        response.total_results=responseFiltered.length;
        console.log('final response=',response)
      }

      yield put({ type: "SET_MOVIES", movies: response });

    } catch (error) {
      console.log(error);
    }
  },
  REQUEST_MOVIES_DETAIL: function*(action) {
    try {
      const response = yield call(getMovieDetail, action.id);

      const videos = yield call(getMovieDetailVideos, action.id);
      let { key } = videos.results.filter(item => item.type === "Trailer")[0];

      yield put({ type: "SET_MOVIE_DETAIL", detail: response });
      yield put({ type: "SET_MOVIE_DETAIL_VIDEO", video: key });
    } catch (error) {
      console.log(error);
    }
  },
  REQUEST_SERIES_DETAIL: function*(action) {
    try {
      const response = yield call(getSeriesDetail, action.id);
      const videos = yield call(getSeriesDetailVideos, action.id);
      let { key } = videos.results.filter(item => item.type === "Trailer")[0];
      console.log(key);

      yield put({ type: "SET_SERIE_DETAIL", detail: response });

      yield put({ type: "SET_SERIE_DETAIL_VIDEO", video: key });
    } catch (error) {
      console.log(error);
    }
  },
  REQUEST_SERIES: function*(action) {
    try {
      const response = yield call(getSeries);
      yield put({ type: "SET_SERIES", series: response });
    } catch (error) {
      console.log(error);
    }
  },
  FETCH_MOVIES_GENRES: function*(action) {
    try {
      const response = yield call(fetchGenersMovie);

      yield put({ type: "SET_MOVIES_GENRES", genre: response });
    } catch (error) {
      console.log(error);
    }
  },
  FETCH_SERIES_GENRES: function*(action) {
    try {
      const response = yield call(fetchGenersTvShow);
      yield put({ type: "SET_SERIES_GENRES", genre: response });
    } catch (error) {
      console.log(error);
    }
  }

});

//selectors

export const getMoviesSelector = (state)=>state.movies
export const getMoviesFiltered = createSelector( getMoviesSelector, (movies) => {
 // return (value)=> movies.results.filter(item => item.release_date.substr(0,3)===value)
 return (value)=> movies.results.filter((item)=>{
   return item.release_date.substr(0,4)===value
 })
})

// include the ones you would like to access in your components here
const selectors = {
  getMoviesFiltered
};



export default (module = {
  name: "user",
  state,
  actions,
  mutations,
  sagas,
  selectors
});

//OPTIONAL: if you want to access this module using render props in your components:
//export default createContainer(module);
