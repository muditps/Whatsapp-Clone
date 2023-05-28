import axios from 'axios';

const url ='http://localhost:8000';

export const AddUser = async (data) =>
{
    try{
       await axios.post(`${url}/add`,data);
    }catch(error)
    {
        console.log("error while adduser",error.message);
    }
}

export const GetUsers = async () =>
{
    try{
       let response = await axios.get(`${url}/users`);
       console.log(response);
       return response.data;
    }
    catch(error)
    { 
        console.log("error while getuser api",error.message);
    }
}

export const setConversation = async (data) =>
{
    try{
       await axios.post(`${url}/conversation/add`, data);
    }
    catch(error)
    { 
        console.log("error while setconversation api",error.message);
    }
}

export const getConversation = async (data) =>
{
    try{
       let response = await axios.post(`${url}/conversation/get`, data);
       return response.data;
    }
    catch(error)
    { 
        console.log("error while getconversation api",error.message);
    }
}

export const newMessage = async (data) =>
{
    try{
       await axios.post(`${url}/message/add`, data);
    }
    catch(error)
    { 
        console.log("error while newMessage api",error.message);
    }
}

export const getMessages = async (id) =>
{
    try{
       let response = await axios.get(`${url}/message/get/${id}`);
       return response.data;
    }
    catch(error)
    { 
        console.log("error while getMessage api",error.message);
    }
}

export const uploadFile = async (data) =>
{
    console.log(data);
    try{
        return await axios.post(`${url}/file/upload`, data);
    }
    catch(error)
    { 
        console.log("error while upload file api",error.message);
    }
}