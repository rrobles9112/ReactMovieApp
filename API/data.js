import { stringify } from 'qs';
export const base = 'https://api.themoviedb.org';
export const apiKey = '83307dc7b657d363170bace39e8679e3';
export const token = localStorage.getItem('token');

// AUTH
export const loginUri = 'oauth/token';

export const emailExist = email => (`${base}api/front/v1/users/exists/${email}`);

export const apiGetUserData = email => (`${base}api/front/v1/users/exists/${email}`);

//PRODUCT
export const category = `${base}api/v1/category`;
export const product = `${base}api/front/v1/catalog`;
export const catalogPublic = `${base}api/front/v1/catalog/public`;
export const users = `${base}api/front/v1/users`;
export const dataBank = `${base}api/front/v1/user/bank`;
export const categoryPublic = `${base}api/front/v1/category`;


