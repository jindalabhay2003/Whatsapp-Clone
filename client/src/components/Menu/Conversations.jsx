import { useEffect, useState,useContext } from "react";
import { getUsers } from "../../service/api";
import {Box, makeStyles} from '@material-ui/core';

// components
import Conversation from './Conversation.jsx';
import {AccountContext} from '../../context/AccountProvider';

const useStyles = makeStyles({

    component:{
        height: '81vh',
        overflow: 'overlay'
    }

})


const Conversations = ({text}) => {

    const classes = useStyles();

    const [users,setusers] = useState([]);

    const {account, socket, setActiveUsers} = useContext(AccountContext);

    // This is used to mount class component
    // To call getUsers api immediately this page rendered
    useEffect(()=> {

        const fetchdata = async ()=>{
            const data = await getUsers();
            const filtereddata = data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setusers(filtereddata);
        }
        fetchdata();

    },[text]);

    useEffect(()=> {
        socket.current.emit('addUser',account.googleId);
        socket.current.on('getUsers', users=>{
            setActiveUsers(users);
        })
    },[account]);



    return (
        <Box className={classes.component}>
            {
                users.map(user => (
                    user.googleId !== account.googleId &&
                    <Conversation  user={user}/>
                ))
            }
        </Box>
    )
}

export default Conversations;