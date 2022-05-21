
import Conversation from "../model/Conversation.js";

export const newConversation = async (request,response)=> {

    try{

    let senderId = request.body.senderId;
    let receiverId = request.body.receiverId;

    const exist = await Conversation.findOne({member: {$all: [receiverId,senderId]}});

    if(exist){
        response.status(200).json("Conversation already exist");
        return;
    }

    const newConversation = new Conversation({
        member : [senderId,receiverId]
    });

    await newConversation.save();
    response.status(200).json("conversation has been saved succesfully");
   }
   catch(error){
       response.status(500).json(error);
   }

}

export const getConversation = async (request,response)=> {

    try{

    const conversation = await Conversation.findOne({member: {$all : [request.body.sender , request.body.receiver]}});

    response.status(200).json(conversation);


    }catch(error){
        response.status(500).json(error);
    }



}