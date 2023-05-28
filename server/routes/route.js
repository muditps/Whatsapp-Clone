import express from 'express';

import { AddUser, getUsers } from '../controller/user-controller.js';
import { newConversation, getConversation } from '../controller/conversation-controller.js';
import { newMessage, getMessage } from '../controller/message-controller.js';
import { uploadImage } from '../controller/image-controller.js';
import Upload from '../utils/upload.js';

const route = express.Router();

route.post('/add',AddUser);
route.get('/users',getUsers);

route.post('/conversation/add',newConversation);
route.post('/conversation/get',getConversation);

route.post('/message/add',newMessage);
route.get('/message/get/:id',getMessage);

route.post('/file/upload', Upload.single('file') ,  uploadImage);

export default route;