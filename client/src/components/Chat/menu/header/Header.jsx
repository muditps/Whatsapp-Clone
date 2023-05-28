import { useContext, useState } from "react";
import { AccountContext } from "../../../../context/AccountProvider";
import { Box , styled } from "@mui/system";
import ChatIcon from '@mui/icons-material/Chat';
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../../drawer/InfoDrawer";


const Component = styled(Box)`
    height: 44px;
    background: #ededed;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    
` 
const Image = styled('img')({
    height:40,
    width:40,
    borderRadius: '50%'
})

const Wrapper = styled(Box)`
    margin-left: auto; 
    & > * {
        margin-left: 2px;
        padding: 8px;
        color: #000;
    }
    & : first-child{
        font-size: 22px;
        margin-right: 8px;
        margin-top: 3px;
    }
`
const Header = () => {

    const {account} = useContext(AccountContext);
    const [openDrawer, setopenDrawer]=useState(false);
    const toggleDrawer = () => {
        setopenDrawer(true);
    }

    console.log(account.picture);
    return(
       <>
            <Component>
                <Image src={account.picture} alt="dp" onClick={()=>toggleDrawer()} referrerpolicy="no-referrer" />
            <Wrapper>
                <ChatIcon />
                <HeaderMenu setopenDrawer={setopenDrawer}/>
            </Wrapper>
            </Component>
            <InfoDrawer open={openDrawer} setOpen={setopenDrawer} />
            
       </>
    )
}

export default Header; 