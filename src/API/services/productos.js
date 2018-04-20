import request from "../request";
import {POST,GET, DELETE} from "../verbs";
import {product, category, catalogPublic, categoryPublic} from "../data";


export  const saveProduct = params =>{
  return request(POST(product, params));
}

export  const editProduct = (params ,id) =>{

  return request(POST(`${product}/${id}`, params));
}



export  const fetchCategories = params =>{
  return request(GET(category));
}

export  const fetchCategoriesPublic = params =>{
  return request(GET(categoryPublic));
}

export  const fetchProducts = params =>{

  return request(GET(product));
}
 
export  const requestPage = params =>{
  return request(GET(`${product}?page=${params}`));
}

export  const addImageCatalogo = params =>{

  return request(POST(product, params));

}

export const uploadImg = (params, id) =>{
  return request(POST(`${product}/${id}/images`,params));
}

export const deleteProduct = (params) => {
  return request(DELETE(`${product}/${params}`))
}

export const fetchProductOnly = (params) => {
  return request(GET(`${product}/${params}`))
}

export const fetchProductOnlyPublic = (params) => {

  return request(GET(`${catalogPublic}/${params}`))

}


export const fetchProductListPublic = (params, cat_id) => {

  if(params === 'all'){
    if(cat_id){
      return request(GET(`${catalogPublic}?category_id=${cat_id}`))
    }else{
      return request(GET(`${catalogPublic}`))
    }

  }else{
    if(cat_id){
      return request(GET(`${catalogPublic}?type=${params}&category_id=${cat_id}`))
    }else {
      return request(GET(`${catalogPublic}?type=${params}`))
    }

  }

}

export const deleteImageProducto = (idpro,id)=>{
  return request(DELETE(`${product}/${idpro}/images/${id}`))
}