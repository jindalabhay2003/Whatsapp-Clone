import { Drawer, Box, Typography, makeStyles } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";

//components
import Profile from "./Profile";

const useStyles = makeStyles({

    header: {
        backgroundColor: "#00bfa5",
        height: 102,
        color: "#fff",
        display: "flex",
        '& > *': {
            marginTop: "auto",
            padding: 15,
            fontWeight: 600
        }
    },
    component: {
        background: "#ededed",
        height: '85%'
    }

})

const InfoDrawer = ({ open, setOpen }) => {

    const classes = useStyles();

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Drawer
            open={open}
            onClose={handleClose}>

            <Box className={classes.header}>
                <ArrowBack onClick={() => handleClose()} />
                <Typography>
                    Profile
                </Typography>
            </Box>
            <Box className={classes.component}>

                <Profile></Profile>

            </Box>

        </Drawer>
    )
}

export default InfoDrawer;