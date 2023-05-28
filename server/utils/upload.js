import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

import dotenv from 'dotenv';

dotenv.config();
const USER=process.env.DB_USERNAME;
const PASS=process.env.DB_PASSWORD;

const storage = new GridFsStorage({

    url:  `mongodb://${USER}:${PASS}@ac-f2mbj8t-shard-00-00.4y6qyeg.mongodb.net:27017,ac-f2mbj8t-shard-00-01.4y6qyeg.mongodb.net:27017,ac-f2mbj8t-shard-00-02.4y6qyeg.mongodb.net:27017/?ssl=true&replicaSet=atlas-3sdmfg-shard-0&authSource=admin&retryWrites=true&w=majority`,
    //options: {useUnifiedTopology: true, useNewUrlParser : true},
    file: (req, file) => {
        return {
            filename: 'file_' + Date.now()
          };
    }
});

const Upload = multer({storage: storage});
export default Upload; 