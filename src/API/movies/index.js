import request from "../request";
import {POST,DELETE,GET} from "../verbs";
import {apiKey} from "../data";




export const getMovies = params => {

  return request(GET(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${params.page}`));
}

export const getSeries = params => {
  return request(GET(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}&language=en-US&page=1`));
}

export const getSeriesDetail = params =>{
  return request(GET(`https://api.themoviedb.org/3/tv/${params}?api_key=${apiKey}&language=en-US`))
}

export const getSeriesDetailVideos = params =>{
  return request(GET(`https://api.themoviedb.org/3/tv/${params}/videos?api_key=${apiKey}&language=en-US`))
}



export const getMovieDetail = params =>{
  return request(GET(`https://api.themoviedb.org/3/movie/${params}?api_key=${apiKey}&language=en-US`))
}

export const getMovieDetailVideos = params =>{
  return request(GET(`https://api.themoviedb.org/3/movie/${params}/videos?api_key=${apiKey}&language=en-US`))
}

export const fetchGenersMovie = params =>{
  return request(GET(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`))
}

export const fetchGenersTvShow = params =>{
  return request(GET(`https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}&language=en-US`))
}