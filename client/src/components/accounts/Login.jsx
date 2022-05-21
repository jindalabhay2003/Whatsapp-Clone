import { Dialog, withStyles,Box,Typography,makeStyles,List,ListItem } from "@material-ui/core";
import { Component } from "react";
import {GoogleLogin} from 'react-google-login';
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import clientID from "../../constants/data";
import { addUser } from "../../service/api";

const useStyles = makeStyles({
    Component: {
        display: 'flex'
    },
    leftComponent: {
        padding: '56px 0px 56px 56px'
    },
    qrcode: {
        height: 264,
        width: 264,
        padding: '50px 0 0 50px'
    },
    title: {
        fontSize: '26px',
        marginBottom: 25,
        fontWeight: 300,
        fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif'
    },
    List: {
        '& > *': {
            fontSize: 18,
            padding: 0,
            marginTop: 15,
            lineHeight: '28px',
            color: "#4a4a4a"
        }
    }

})

//Making height and Width of dialog box large

const Style = {
    dialogpaper: {
        height: '95%',
        width: '65%',
        marginTop: '12%',
        boxShadow: 'none',
        borderRadius: '0',
        maxHeight: '100%',
        maxWidth: '100%'
    }
}


const Login = ({classes}) =>{

    const className = useStyles();
    const clientID = '467128594794-vd33ift5gld5hm62shtjeioh9fcuu2fo.apps.googleusercontent.com';

    const {account, setAccount} = useContext(AccountContext);

    // This will called when google authentication is succesfully done
    const onLoginSuccess = async (res) =>{
        // Google provides us this res object which contains some data about us 
        // console.log("Login Succesful", res.profileObj);
        setAccount(res.profileObj);

        // Sending data to addUser 
        await addUser(res.profileObj);
    }

    const onLoginFailure = () => {
        console.log("Login Failure");
    }

    return(
        <Dialog
        open={true}
        // we are adding our css(dialogpaper) in paper class of material UI(identified by dev tools)
        classes={{ paper: classes.dialogpaper}}
        BackdropProps={{style: {backgroundColor: 'unset'}}}
        >
          <Box className={className.Component}>
              <Box className={className.leftComponent}>
                  <Typography className={className.title}>To use WhatsApp on your computer: </Typography>
                  <List className={className.List}>
                      <ListItem>
                          1. Open WhatsApp on your phone
                      </ListItem>
                      <ListItem>
                          2. Tap Menu or settings and select Linked Devices
                      </ListItem>
                      <ListItem>
                          3. Point your phone to screen to capture the code
                      </ListItem>
                  </List>
              </Box>
              <Box style={{position: 'relative'}}>
                <img src={"https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg"} alt="qr" className={className.qrcode} />
                <Box style={{position: 'absolute',left: '50%',top: '50%'}}>
                <GoogleLogin
                buttonText=""
   // This Client id is very important, we took this from google cloud platform             
                clientId= {clientID}
                isSignedIn={true}
                onSuccess={onLoginSuccess}
                onFailure={onLoginFailure}
                cookiePolicy={'single_host_origin'}
                ></GoogleLogin>
                </Box>
              </Box>
          </Box>
        </Dialog>
    )
}

// we have to cover our Login page for applying our own css Style
export default withStyles(Style)(Login);