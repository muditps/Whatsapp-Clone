
import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { qrCodeImage } from "../../constants/data";
import {GoogleLogin} from "@react-oauth/google";
import jwt_decode from "jwt-decode"


import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { AddUser } from "../../services/api.js";
// const Head = styled(Dialog)`

// `
const dialogstyle = {
    height: '96%',
    marginTop: '12%',
    width: '60%',
    maxHeight: '100%',
    maxWidth: '100%',
    boxShadow: 'none',
    overflow: 'hidden'
}
const Qrcode = styled('img')({
    height: 264,
    width: 264,
    margin: '50px 0px 0px 50px'
})
const Stylelist = styled(List)`
    & > li {
        padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px;
        color: #4a4a4a;
    }
`
const Type = styled(Typography)`
    font-size: 26px;
    color: #525252;
    font-weight: 300; 
    font-family: inherit;
    margin-bottom: 25px;
` 
const Component = styled(Box)`
    display: flex;
` 
const Container = styled(Box)`
    padding: 56px 0px 56px 56px;
`
const Login = () => {
    const {setAccount} = useContext(AccountContext);

    const onLoginSuccess = async (res) =>{
            const decoded = jwt_decode(res.credential);
            console.log(decoded.picture);
            setAccount(decoded);
            await AddUser(decoded);

    }
    const onLoginError = (res) =>{
        console.log("login failed",res);
    }
    return(
        <Dialog open={true} PaperProps={{sx:dialogstyle}} hideBackdrop={true} >
             <Component>
                <Container>
                    <Type>
                        To use whatsapp on your computer:

                    </Type>
                    <Stylelist>
                        <ListItem>1. open whatsapp on your phone </ListItem>
                        <ListItem>2. Tap menu and settings</ListItem>
                        <ListItem>3. scan the qr</ListItem>
                    </Stylelist >
                </Container>    
                <Box style={{position: "relative"}}>
                    <Qrcode src={qrCodeImage} alt="qrimg"></Qrcode>
                        <Box style={{position: "absolute",top: "50%",transform: "translatex(25%)"}}>
                            <GoogleLogin 
                                onSuccess={onLoginSuccess}
                                onError={onLoginError}
                            />
                        </Box>
                </Box>
            </Component>  
        </Dialog>
    )
}

export default Login;