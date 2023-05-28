import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USER=process.env.DB_USERNAME;
const PASS=process.env.DB_PASSWORD;

const Connection = async() =>{
    const url=`mongodb://${USER}:${PASS}@ac-f2mbj8t-shard-00-00.4y6qyeg.mongodb.net:27017,ac-f2mbj8t-shard-00-01.4y6qyeg.mongodb.net:27017,ac-f2mbj8t-shard-00-02.4y6qyeg.mongodb.net:27017/?ssl=true&replicaSet=atlas-3sdmfg-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
       await mongoose.connect(url, {useUnifiedTopology: true})
       console.log(`database connected successfully`);
    }catch(error)
    {
        console.log(`error while connecting with the db`,error.message);
    }
}

export default Connection;