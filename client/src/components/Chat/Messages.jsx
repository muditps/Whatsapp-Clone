import { useState, useEffect, useContext, useRef } from 'react';
import { Box, styled } from '@mui/material';

// import { io } from 'socket.io-client';
import { getMessages, newMessage } from '../../services/api';

import { AccountContext } from '../../context/AccountProvider';
//components
import Message from './Message';
import Footer from './Footer';

const Wrapper = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;
`;

const StyledFooter = styled(Box)`
    height: 55px;
    background: #ededed;
    // position: absolute;
    width: 100%;
    // bottom: 0
`;
    
const Component = styled(Box)`
    height: 80vh;
    overflow-y: scroll;
`;

const Container = styled(Box)`
    padding: 1px 80px;
`;



const Messages = ({ person, conversation }) => {

    const [messages, setMessages] = useState([]);
    const [incomingMessage, setIncomingMessage] = useState(null);
    // const [value, setValue] = useState();
    const [file, setFile] = useState();
    // const [image, setImage] = useState();
    const scrollRef = useRef();
    const [value, setValue] = useState('');
    const { account, socket, NewMessageFlag, setNewMessageFlag } = useContext(AccountContext);

    useEffect(() => {
        socket.current.on('getMessage', data => {
            setIncomingMessage({
                ...data,
                createdAt: Date.now()
            })
        })
    }, []);


    useEffect(() => {
        const getMessagedetails = async () =>
        {
            let data = await getMessages(conversation._id);
            setMessages(data);
        } 
        conversation._id && getMessagedetails();
    },[person._id, conversation._id, NewMessageFlag])
    

    useEffect(() => {
        incomingMessage && conversation?.members?.includes(incomingMessage.senderId) && 
            setMessages((prev) => [...prev, incomingMessage]);
        
    }, [incomingMessage, conversation]);

    
    useEffect(() => {
        scrollRef.current?.scrollIntoView({ transition: "smooth" })
    }, [messages]);
    
    const sendText = async (e) => {
        let code = e.keyCode || e.which;
    //     if(!value) return;

         if(code === 13) { 
             let message = {
                    senderId: account.sub,
                    receiverId: person.sub,
                    conversationId: conversation._id,
                    type: 'text',
                    text: value
                }

                socket.current.emit('sendMessage',message);

                await newMessage(message);
                setValue('');
                setNewMessageFlag(prev => !prev);
            } 
     }

    return (
        <Wrapper>
            <Component>
                {
                    messages && messages.map(message => (
                        <Container ref={scrollRef}>
                            <Message message={message} />
                        </Container>
                    ))
                }
                
            </Component>
            <Footer 
                sendText={sendText} 
                setValue={setValue}
                 value={value} 
                // setValue={setValue} 
                setFile={setFile} 
                file={file} 
                // setImage={setImage}
            />
        </Wrapper>
    )
}

export default Messages;