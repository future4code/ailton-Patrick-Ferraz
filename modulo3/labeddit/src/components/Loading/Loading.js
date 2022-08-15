import React from "react";
import { CircularProgress } from "@mui/material";
import { LoadingContainer } from "./styled";

export const Loading = () =>{
    return(
        <LoadingContainer>
            <CircularProgress/>
        </LoadingContainer>
    )
}