import request from "../request";
import {POST} from "../verbs";
import {loginUri} from "../data";


export  const accountLogin = params =>{

  return request(POST(loginUri, {
    ...params,
    grant_type: 'password',
    client_id: 2,
    client_secret: 'eMYsfKukhfCFBzJIl7mnoXtzqQKhQ2V5LGLvyuok',
  }));

}

