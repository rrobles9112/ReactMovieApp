import request from "../request";
import {POST,DELETE,GET} from "../verbs";
import {users, base, dataBank} from "../data";


export  const registerAccount = params =>{
  return request(POST(users, params));
}


export  const apiGetUserData = params =>{

  return request(GET(`${base}api/front/v1/user/current`));

}

export  const apiUploadData = params =>{
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
}

