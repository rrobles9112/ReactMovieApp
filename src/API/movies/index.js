import request from "../request";
import {POST,DELETE,GET} from "../verbs";
import {apiKey} from "../data";




export const getMovies = params => {
  return request(GET(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`));
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


/* export  const apiUploadData = params =>{
  return request(POST(`http://api.alquira.com/api/front/v1/user/update`,params));
}

export  const apiUploadAvatar = params =>{
  return request(POST(`http://api.alquira.com/api/front/v1/user/update`,params));
}

export  const apiGetDataBank = params =>{
  return request(GET(dataBank));
}

export  const apiCreateBankData = params =>{
  return request(POST(`${dataBank}/create`,params));
}

export const apiUpdateBankData = params =>{
  return request(POST(`${dataBank}/update`,params))
} */

