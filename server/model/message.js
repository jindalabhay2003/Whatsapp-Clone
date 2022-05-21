import mongoose from "mongoose";


const MessageSchema = new mongoose.Schema({

    conversationId: {
        type: String,
        required: true
    },
    sender: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
    },
    {
        timestamps: true
    }
);

const message = mongoose.model('Message',MessageSchema);

export default message;

