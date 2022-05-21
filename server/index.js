import express from "express";
import dotenv from 'dotenv';
import bodyParser from "body-parser";

// This cors is Used Because we are sending data from one server to another from 3000 to 8000 port
import cors from "cors";

//Components
import Connection from "./database/db.js";
import Routes from "./routes/Route.js"
dotenv.config();

const username  = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));
app.use('/', Routes);

const PORT = 8000;

Connection(username,password);
app.listen(PORT, ()=> console.log(`server is running on PORT ${PORT}`));