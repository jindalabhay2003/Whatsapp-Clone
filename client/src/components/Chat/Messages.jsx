import {Box, makeStyles} from "@material-ui/core";
import { useState,useContext, useEffect, useRef } from "react";

//components
import Footer from "./Footer";
import { AccountContext } from "../../context/AccountProvider";
import {newMessage, getMessages} from "../../service/api";
import Message from "../Message";



const useStyles = makeStyles({

    wrapper: {
        backgroundImage: `url(${`https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png`})`,
        backgroundSize: '50%'
    },
    component: {
        height: '79vh',
        overflowY: 'scroll'
    },
    container: {

        padding: '1px 80px'

    }

});

const Messages = ({person,conversation})=>{
    const classes = useStyles();

    const [value, setValue] = useState();
    const {account, socket, newMessageFlag, setnewMessageFlag} = useContext(AccountContext);
    const scrollRef = useRef();
    const [messages, setMessages] = useState([]);
    const [IncomingMessage, setIncomingMessage] = useState(null);

    useEffect(()=> {

        socket.current.on('getMessage', (data) => {

            setIncomingMessage({

                sender: data.senderId,
                text: data.text,
                createdAt: Date.now()
            })


        })

    },[]);

    useEffect(()=> {
        scrollRef.current?.scrollIntoView({transition: 'smooth'})
    },[messages])

   

    useEffect(()=> {

        const getmessageDetails = async ()=>{
            let response = await getMessages(conversation._id);
            setMessages(response.data);
        }
        getmessageDetails();

    },[conversation?._id,person._id,newMessageFlag]);

    useEffect(()=> {

        IncomingMessage && conversation?.member?.includes(IncomingMessage.sender) &&
        setMessages((prev )=> [...prev, IncomingMessage])

    },[IncomingMessage,conversation])

    const sendText = async(e)=> {

        let code = e.keyCode || e.which ;

        if(!value){
            return;
        }

        const receiverId = conversation?.member?.find(membe => membe!==account.googleId);

        // Enter key code is 13
        if(code === 13){

            let message = {
                sender: account.googleId,
                conversationId: conversation._id,
                text: value
            }

            socket.current.emit('sendMessage',{
                senderId: account.googleId,
                receiverId,
                text: value
            });

            await newMessage(message);
            setValue('');
            setnewMessageFlag(prev => !prev);

        }

    }

    return (
        <Box className={classes.wrapper} >
            <Box className={classes.component}>
                {
                    messages && messages.map(message => (
                        <Box className={classes.container} ref={scrollRef} >
                            <Message message={message} />
                        </Box>
                    ))
                }
            </Box>
            <Footer sendText = {sendText} setValue = {setValue} value={value} />
        </Box>
    )
}

export default Messages;