import express from "express";
import cors from 'cors';
import Connection from "./database/db.js";
import bodyParser from "body-parser";

import route from "./routes/route.js";

const app = express();
app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/',route);


Connection();

const PORT = 8000;

app.listen(PORT,() => console.log(` server is running successfully on ${PORT} `));



