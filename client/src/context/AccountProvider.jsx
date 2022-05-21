import { createContext, useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";


export const AccountContext = createContext(null);

const AccountProvider = ({children}) => {

    const [account, setAccount] = useState();
    const [activeUsers, setActiveUsers] = useState([]);
    const [newMessageFlag,setnewMessageFlag] = useState(false);
    const [incomingMessageFlag,setIncomingMessageFlag] = useState(false);

    const socket = useRef();

    // we have to open socket server immediately at soon as this component mount
    // so we have used useeffect with empty array so that it mount when component did mount
    useEffect(()=> {
        socket.current = io('ws://localhost:9000');
    },[]);

    return (
       < AccountContext.Provider
       value={{

        account,
        setAccount,
        socket,
        setActiveUsers,
        activeUsers,
        newMessageFlag,
        setnewMessageFlag,
        incomingMessageFlag,
        setIncomingMessageFlag
       }} >
           {children}
       </AccountContext.Provider>

    )
}

export default AccountProvider;