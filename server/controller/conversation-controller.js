import conversation from "../model/conversation.js";

export const newConversation = async (request,response) =>
{
    let senderId = request.body.senderId;
    let receiverId = request.body.receiverId;

    const exist = await conversation.findOne({ members: { $all: [receiverId, senderId]  }})
    
    if(exist) {
        response.status(200).json('conversation already exists');
        return;
    }
    const newConversation = new conversation({
        members: [senderId, receiverId]
    });

    try {
        const savedConversation = await newConversation.save();
        response.status(200).json(savedConversation);
    } catch (error) {
        response.status(500).json(error);
    }

}
export const getConversation = async (request,response) =>
{
    try {
        const converse = await conversation.findOne({ members: { $all: [ request.body.senderId, request.body.receiverId] }});
        response.status(200).json(converse);
    } catch (error) {
        response.status(500).json(error);
    }

}