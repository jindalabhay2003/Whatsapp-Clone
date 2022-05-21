import {Box, makeStyles, InputBase} from "@material-ui/core"
import { EmojiEmotionsOutlined, AttachFile,Mic  } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({

    Footer: {

        height: '55px',
        backgroundColor: "#ededed",
        width: "100%",
        display: 'flex',
        alignItems: 'center',
        padding: '0px 15px',
        '& >*':{
            margin: "5px",
            color: "#919191"
        }

    },
    clipIcon: {
        transform: 'rotate(40deg)'
    },
    searchBox: {
        backgroundColor: "#FFFFFF",
        borderRadius: 18,
        width: 'calc(95% - 100px)'
    },
    inputRoot: {
        width: '100%'
      },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: 25,
        fontSize: 14,
        width: '100%',
        height: 20
    }

}))

const Footer = ({sendText, setValue, value})=> {

    const classes = useStyles();

    return (

        <Box className={classes.Footer}>
            <EmojiEmotionsOutlined />
            <AttachFile className={classes.clipIcon} />
            <Box className={classes.searchBox} >
                <InputBase 
                placeholder="Type a Message"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                  onKeyPress = {(e)=> sendText(e)}
                  onChange = {(e)=> setValue(e.target.value)}
                  value={value}
                />
            </Box>
            <Mic />
        </Box>
    )


}

export default Footer;