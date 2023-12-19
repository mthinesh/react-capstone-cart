import axios from 'axios';


const url = "http://127.0.0.1:3000/product";

export const getallProduct = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const addProduct = async (product) => {
    return await axios.post(url,product);
}

export const editProduct = async (id, product) => {
    return await axios.put(`${url}/${id}`,product);
}


export const deleteProduct = async (id) => {
    return await axios.delete(`${url}/${id}`);
}