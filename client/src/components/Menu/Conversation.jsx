import { Box, Typography,makeStyles } from "@material-ui/core";
import { useContext,useEffect,useState } from "react";

import { AccountContext } from "../../context/AccountProvider";
import { UserContext } from "../../context/UserProvider";
import {getConversation, setConversation} from "../../service/api";

const useStyles = makeStyles({
    component:{
        display: 'flex',
        height: 40,
        padding: '13px 0px',
        cursor: 'pointer'
    },
    displayPicture:{
        width: 50,
        height: 50,
        borderRadius: '50%',
        padding: '0px 14px'
    },
    timestamp:{
        fontSize: 10.5,
        marginLeft: 'auto',
        marginRight: 20,
        color: '#00000099'


    },
    text: {
        color: 'rgba(0,0,0,0.6)',
        fontSize: 14
    }


})

const Conversation = ({user}) => {

    const URL = user.imageUrl;
    const classes = useStyles();

    const {account, newMessageFlag} = useContext(AccountContext);
    const {setPerson} = useContext(UserContext);

    const [message, setMessage] = useState({});

    useEffect(()=> {

        const getconversationmessage = async ()=>{

            const data = await getConversation({ sender: account.googleId, receiver: user.googleId });
            setMessage({text: data.message, timestamp: data.updatedAt});
        }
        getconversationmessage();

    },[newMessageFlag]);

    const setUser = async ()=> {
        setPerson(user);
        await setConversation({senderId: account.googleId, receiverId: user.googleId})
    }

    return (
        <Box className={classes.component} onClick={()=> setUser()} >
            <Box>
                <img className={classes.displayPicture} src={URL} alt="display-picture" />
            </Box>
            <Box style={{width: '100%'}} >
                <Box style={{display: 'flex'}} >
                    <Typography>{user.name}</Typography>
                    {
                        message.text && 
                        <Typography className={classes.timestamp}>
                            {new Date(message.timestamp).getHours()}:{new Date(message.timestamp).getMinutes()}
                        </Typography>
                    }
                </Box>
                <Box>
                    <Typography className={classes.text} >
                        {message.text}
                    </Typography>
                </Box>
            </Box>
        </Box>

    )
}

export default Conversation;