import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { Dialog, Box, styled } from "@mui/material";
import EmptyChat from "./emptychat/EmptyChat";
import Menu from "./menu/Menu";
import ChatBox from "./ChatBox";

const dialogstyle = {
    height: '95%',
    width: '100%',
    margin: '20px',
    maxHeight: '100%',
    maxWidth: '100%',
    boxShadow: 'none',
    borderRadius: 0,
    overflow: 'hidden'
}

const Component = styled(Box)`
    display: flex;
` 

const LeftComponent = styled(Box)`
    min-width: 450px;
`

const RightComponent = styled(Box)`
    width: 73%;
    min-width: 300px;
    height: 100%;
    border-left: 1px solid rgb(0,0,0,0.14);
`


const ChatDialog = () =>
{
    const { person } = useContext(AccountContext);
    return (
         
        <Dialog open={true} PaperProps={{sx:dialogstyle}} hideBackdrop={true} maxWidth={'md'}>
            
            <Component>
                <LeftComponent>
                    <Menu /> 
                </LeftComponent>
                <RightComponent>
                    
                    {Object.keys(person).length ? <ChatBox /> : <EmptyChat /> }
                </RightComponent>
            </Component>

             
        </Dialog>
        
    )
}
export default ChatDialog;