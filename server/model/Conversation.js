import mongoose from "mongoose";

const newConversationSchema = new mongoose.Schema({

    member: {
        type: Array
    },
    message: {
        type: String
    }},
    {
        timestamps: true
    }

);

const Conversation = mongoose.model("conversation",newConversationSchema);

export default Conversation;