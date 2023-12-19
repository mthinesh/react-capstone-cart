import axios from 'axios';


const url = "http://127.0.0.1:3000/users";

export const getallUsers = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const addUser = async (user) => {
    return await axios.post(url,
        (user)
        ).then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
}

export const editUser = async (id, user) => {
    return await axios.put(`${url}/${id}`,user);
}


export const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`);
}