import express from "express";
import { addUser, getUsers } from "../Controller/user-controller.js";
import {newConversation, getConversation} from "../Controller/conversation-controller.js"
import { newMessage, getMessage } from "../Controller/message-controller.js";

const route  = express.Router();


route.post('/add', addUser);

route.get('/users',getUsers);

route.post('/conversation/add', newConversation);

route.post('/conversation/get',getConversation);

route.post('/message/add',newMessage);

route.get('/message/get/:id',getMessage);

export default route;