import { MoreVert} from "@material-ui/icons";
import {Menu, MenuItem, makeStyles} from "@material-ui/core";
import { useState, useContext } from "react";
import { GoogleLogout } from "react-google-login";
import clientID from "../../constants/data.js";
import { AccountContext } from "../../context/AccountProvider.jsx";
import InfoDrawer from "../drawer/InfoDrawer.jsx";

const useStyles = makeStyles({
    menuItem: {
        fontSize: 14,
        padding: "15px 60px 5px 24px",
        color: "#4A4A4A"
    },
    logout: {
        border: 'none!important',
        boxShadow: 'none!important',
        '& > *':{
            padding: '0px!important'
        }
    }
})

const HeaderMenu = () => {

    const classes = useStyles();
    const [open , SetOpen] = useState(false);
    const [openDrawer , SetOpenDrawer] = useState(false);
    const {setAccount} = useContext(AccountContext);

    const handleClose = ()=>{
        SetOpen(false);
    }

    const handleClick = (event)=>{
        SetOpen(event.currentTarget);
    }

    const toggleDrawer = ()=> {
        SetOpenDrawer(true);
    }

    const onLogoutSuccess= ()=> {
        alert("You have been logged out successfully");
        console.clear();
        setAccount('');
    }

    return (
        <>
            <MoreVert onClick={handleClick}/>
            <Menu
                anchorEl={open}
                keepMounted
                open={Boolean(open)}
                onClose={handleClose}
                getContentAnchorEl= {null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                <MenuItem className={classes.menuItem} onClick={() => {handleClose(); toggleDrawer()}}>Profile</MenuItem>
                <MenuItem className={classes.menuItem} onClick={handleClose}>
                    <GoogleLogout
                    clientId={clientID}
                    buttonText="Logout"
                    onLogoutSuccess={onLogoutSuccess}
                    className= {classes.logout}
                    ></GoogleLogout>
                </MenuItem>
                <InfoDrawer open={openDrawer} setOpen={SetOpenDrawer} />
                
            </Menu>
        </>
    )
}

export default HeaderMenu;