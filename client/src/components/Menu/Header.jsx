import {Box, makeStyles} from "@material-ui/core";
import {Chat} from '@material-ui/icons';
import { useState ,useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import InfoDrawer from "../drawer/InfoDrawer";

// components
import HeaderMenu from "./HeaderMenu";

const useStyles = makeStyles({

    header:{
        height: "35px",
        background: '#ededed',
        padding: "10px 16px",
        display: "flex",
        alignItems: "center"
    },
    imaclass: {
        height: "37px",
        width: "37px",
        borderRadius: "50%"
    },
    Icons: {
        marginLeft: "auto",
        '& > *':{
            marginLeft: 2,
            padding: 8,
            color: "#919191"
        },
        '& :first-child':{
            fontSize: "22px",
            marginTop: '3px',
            marginRight: '8px'
        }
    }

})

const Header = () => {

    const classes = useStyles();

    const [open , setOpen] = useState(false);
    const { account } = useContext(AccountContext);

    const toggleDrawer = ()=> {
        setOpen(true);
    }
    
    return (
        <>
        <Box className={classes.header}>
            <img className={classes.imaclass} onClick={()=> toggleDrawer()} src={account.imageUrl}/>
            {/* icons in header */}
            <Box className={classes.Icons}>
                <Chat />
                <HeaderMenu />
            </Box>
        </Box>
        <InfoDrawer open={open} setOpen={setOpen} />
        </>
    )
}

export default Header;