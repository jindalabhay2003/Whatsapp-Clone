import { Box } from "@material-ui/core";
import { useState, useEffect, useContext } from "react";

import { UserContext } from "../../context/UserProvider";
import {AccountContext} from "../../context/AccountProvider"
import { getConversation } from "../../service/api";

//components
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";

const Chat = ()=> {

    const {person} = useContext(UserContext);
    const {account} = useContext(AccountContext);

    const [conversation, setConversation] = useState({});

    useEffect(()=> {

        const getConversationdetails = async ()=> {
           let data =  await getConversation({ sender: account.googleId , receiver: person.googleId })
           setConversation(data);
        }
        getConversationdetails();


    },[person.googleId])

    return (
        <Box>
            <ChatHeader></ChatHeader>
            <Messages conversation={conversation} person={person} ></Messages>
        </Box>
    )
}

export default Chat;