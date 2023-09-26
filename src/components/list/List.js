import React from "react";
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
    return (<>
        <ListWrapper>
        <ListElement />
        <ListElement />
        <ListElement />
        <Drawer/>
        </ListWrapper>
    </>)
}