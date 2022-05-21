import axios from "axios";

const  URL = "http://localhost:8000";

// This Axios API is Used to send or get data for adding in mongo db
// This is post Api call so we have to send data

export const addUser = async (data)=>{
    try{

        return await axios.post(`${URL}/add`,data);

    }catch(error){

        console.log(`Error While calling addUser api `,error);

    }
}

export const getUsers = async ()=>{
    try{

        let response = await axios.get(`${URL}/users`);
        
        return response.data;

    }catch(error){

        console.log(`Error While calling getUsers api `,error);

    }
}

export const setConversation = async (data)=> {
    try{

        await axios.post(`${URL}/conversation/add`,data);

    }catch(error){
        console.log("Error while calling setConversation API",error);
    }
}

export const getConversation = async (data) => {

    try{

       let response =  await axios.post(`${URL}/conversation/get`,data);

       return response.data;

    }catch(error){
        console.log("Error While calling get Conversation API",error);
    }

}

export const newMessage = async (Message) => {

    try{

        await axios.post(`${URL}/message/add`,Message);



    }catch(error){
        console.log("Error while calling messages API",error);
    }

}

export const getMessages = async (id) => {

    try{

       return await axios.get(`${URL}/message/get/${id}`);

    }catch(error){
        console.log("Error while calling get messages API",error);
    }

}