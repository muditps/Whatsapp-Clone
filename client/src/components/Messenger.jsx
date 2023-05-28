import {AppBar,Toolbar,styled,Box} from '@mui/material';
import ChatDialog from './Chat/ChatDialog';
import Login from "./account/LoginDialog";
import { useContext } from "react";
import { AccountContext  } from '../context/AccountProvider';

const Header = styled(AppBar)`
    height: 125px;
    background-color: #00A884;
    box-shadow: none;

`
const LoginHeader = styled(AppBar)`
    height: 220px;
    background-color: #00b5a6;
    box-shadow: none;

`
const Wrap = styled(Box)`
    height: 100vh;
    background-color: #DCDCDC;

`


const Messenger = () => {
    
    const {account} = useContext(AccountContext);
    
    return(
        <Wrap>
            {
                account ? 
                <>
                    <Header>
                        <Toolbar>
                            
                        </Toolbar>
                        <ChatDialog />
                    </Header>
                    
                </>
                :
                <>
                    <LoginHeader>
                        <Toolbar>
                            
                        </Toolbar>
                        <Login />
                    </LoginHeader>
                    
                </>
            }   
        </Wrap>
    )
}

export default Messenger;