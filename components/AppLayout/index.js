import React from "react";
import {Container} from "./styles";
import Content from "./Content";
import SideBar from "./Side";

const AppLayout = ({children}) => {
    return (
        <Container>
            <SideBar/>
            <Content content={children}/>
        </Container>
    )
};

export default AppLayout