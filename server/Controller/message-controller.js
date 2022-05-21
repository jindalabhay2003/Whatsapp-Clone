import Message from "../model/message.js"
import Conversation from "../model/Conversation.js";


export const newMessage = async (request,response) => {

    try{

        const newmessage = new Message(request.body);

        await newmessage.save();
        await Conversation.findByIdAndUpdate(request.body.conversationId,{message: request.body.text});

        response.status(200).json("Message saved succesfully");

    }catch(error){

        response.status(500).json(error);
    }

}

export const getMessage = async (request,response) => {

    try{

      const messages =  await Message.find({conversationId: request.params.id});

      response.status(200).json(messages);


    }catch(error){

        response.status(500).json(error);

    }

}

