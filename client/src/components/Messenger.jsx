import {AppBar,Toolbar, makeStyles,Box} from '@material-ui/core'
import React, {useContext} from 'react';
import { AccountContext } from '../context/AccountProvider';
import ChatBox from './accounts/ChatBox';

// Components
import Login from './accounts/Login'

const useStyles = makeStyles({
    container: {
        background: '#DCDCDC',
        height: '100vh'
    },
    loginHeader : {
        height: 200,
        background: '#00bfa5',
        boxShadow: 'none'
    },
    Header : {
        height: 115,
        background: '#128C7E',
        boxShadow: 'none'
    }
})

const Messenger = () => {

    const classes = useStyles();
    const {account} = useContext(AccountContext);

    return (
        <Box className={classes.container}>
         <React.Fragment>
        <AppBar className={account?classes.Header:classes.loginHeader} >
            <Toolbar  ></Toolbar>
        </AppBar>
        {account? <ChatBox/>: <Login />}
        </React.Fragment>
        </Box>

    )
}

export default Messenger;