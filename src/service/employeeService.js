import axios from 'axios';


const url = "http://127.0.0.1:3000/employee";

export const getallEmployee = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const addEmployee = async (user) => {
    return await axios.post(url,user);
}

export const editEmployee = async (id, user) => {
    return await axios.put(`${url}/${id}`,user);
}


export const deleteEmployee = async (id) => {
    return await axios.delete(`${url}/${id}`);
}