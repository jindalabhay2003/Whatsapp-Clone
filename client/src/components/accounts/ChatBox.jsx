import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import { Dialog,withStyles, Box, makeStyles } from "@material-ui/core";
import EmptyChat from "../Chat/EmptyChat";

//components
import Menu from "../Menu/Menu";
import Chat from "../Chat/Chat";

const useStyles = makeStyles({
    component: {
        display: 'flex',
    },
    leftComponent: {
        width: 380
    },
    rightComponent: {
        borderLeft: `1px solid rgba(0,0,0,0.14)`,
        width: '70%',
        minWidth: 300,
        height: '100%'
    }
})

const Style = {
    dialogpaper: {
        height: '95%',
        width: '91%',
        boxShadow: 'none',
        borderRadius: '0',
        maxHeight: '100%',
        maxWidth: '100%'
    }
}

const ChatBox = ({classes}) => {
    const classname = useStyles();
    const {person} = useContext(UserContext);

    return (
        <Dialog
        open={true}
        classes={{ paper: classes.dialogpaper}}
        BackdropProps={{style: {backgroundColor: 'unset'}}}
        >
        <Box className={classname.component}>
            <Box className={classname.leftComponent}>
                <Menu />
            </Box>
            <Box className={classname.rightComponent}>
                {
                    Object.keys(person).length? <Chat />: <EmptyChat />
                }
            </Box>
        </Box>
        </Dialog>
    )

}
export default withStyles(Style)(ChatBox);