import { Server } from "socket.io";

const PORT = 9000;

const io = new Server(PORT, {
    // This cors will alow to come and send data from this origin only
    cors: {
        origin: 'http://localhost:3000'
    }

});

let users = [];

const addUser = (userId, socketId) => {

    !users.some(user => user.userId === userId) && users.push({userId,socketId});

}

const getUser = (UserId)=> {

    return users.find(user => user.userId === UserId);

}

const removeUser = (socketId)=>{
    users = users.filter(user => user.socketId !== socketId);
}

// To make any connection in Socket we use on function with type connection
// socket callback functions takes only one argument that is socket

io.on('connection',(socket)=>{

    console.log("User Connected");

    socket.on('addUser', userId => {
        addUser(userId, socket.id);
        console.log(users);
        io.emit('getUsers',users);
    })

    // send Messages
    socket.on('sendMessage',({senderId, receiverId, text})=> {

        const user = getUser(receiverId);
        console.log(receiverId);
        console.log(text);

        socket.to(user.socketId).emit('getMessage', {
            senderId, text
        });

    });

    //disconnect
    socket.on('disconnect',()=>{
        console.log("User Disconnected");
        removeUser(socket.id);
        io.emit('getUsers',users);
    })

});