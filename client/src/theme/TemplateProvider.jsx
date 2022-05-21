import React , {createContext} from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

export const templateContext = createContext(null);

const TemplateProvider = ({children})=>{

    const theme = createTheme({

        overrides:{
            MuiDrawer: {
                paperAnchorLeft:{
                    height: '98%',
                    top: 15.5,
                    width: "30%",
                    left: 57.5,
                    boxShadow: "none"
                }
            },
            MuiBackdrop: {
                root:{
                    backgroundColor: "unset"
                }
            }
        }

    })

    return (
        <templateContext.Provider>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </templateContext.Provider>
    )
}

export default TemplateProvider;