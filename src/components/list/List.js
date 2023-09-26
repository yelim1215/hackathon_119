import React, { useState } from "react";
import ListElement from "./ListElement";
import { Drawer } from "../Drawer";
import styled from "styled-components"

const ListWrapper = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 20%;
`;

export default function List() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (<>
        <ListWrapper>
            <ListElement toggleDrawer={toggleDrawer}/>
            <ListElement toggleDrawer={toggleDrawer} />
            <ListElement toggleDrawer={toggleDrawer} />
            <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
        </ListWrapper>
    </>)
}