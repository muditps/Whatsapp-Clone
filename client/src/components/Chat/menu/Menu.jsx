import { Box } from "@mui/system";
import { useState } from "react";
import Header from "./header/Header";
import Search from "./Search/Search";

import Conversation from "./conversation";

const Menu = () => {
    const [text, setText] = useState('');
    return(
        <Box>
            <Header/>
            <Search setText= {setText}/>
            <Conversation text={text} />
        </Box>
    )
}

export default Menu;