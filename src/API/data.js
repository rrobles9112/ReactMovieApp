import { stringify } from 'qs';
export const base = 'https://api.themoviedb.org';
export const apiKey = '83307dc7b657d363170bace39e8679e3';

// AUTH
export const movies = (page) => {
    if (page) {
        return `${base}/3/movie/now_playing?page=${page}&language=en-US&api_key=${apiKey}`
    } else {
        return `${base}/3/movie/now_playing?page=1&language=en-US&api_key=${apiKey}`  
    }
    
};



