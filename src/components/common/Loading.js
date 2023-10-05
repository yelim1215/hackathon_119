import React from "react";
import { IconImage } from "./Icon";

export default function Loading() {
    return (
        <div style={{textAlign: "-webkit-center", marginTop: "50px"}}>
            <h3>잠시만 기다려주세요...</h3>
            <IconImage imageUrl={"assets/loading.gif"} />
        </div>
        )
}