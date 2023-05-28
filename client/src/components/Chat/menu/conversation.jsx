
import { useEffect, useState, useContext } from "react";
import { GetUsers } from "../../../services/api";

import { Box, styled, Divider } from '@mui/material';

import { AccountContext } from "../../../context/AccountProvider";
import Converse from "./converse";

const Component = styled(Box)`
    overflow: overlay;
    height: 81vh;
`;

const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background-color: #e9edef;
    opacity: .6;
`;

const Conversation = ({text}) => {

   const [users,setUsers] = useState([]);

   const {account, socket, setActiveUsers} = useContext(AccountContext);

    useEffect(()=> {
        const fetchdata = async()=>{
            let response= await GetUsers();
            const filteredData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filteredData);
        }
        fetchdata();
    },[text]);

    useEffect(() => {
        socket.current.emit('addUser', account);
        socket.current.on("getUsers", users => {
            setActiveUsers(users);
        })
    }, [account])

    return(
        <Component>
            {
                users.map(user => (
                    user.sub !== account.sub &&
                    <>
                     <Converse user= {user} />
                     <StyledDivider />
                    </>
                   
                ))
            }
        </Component>
    )
}

export default Conversation;