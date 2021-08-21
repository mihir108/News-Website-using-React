import React from "react";
import ReactDOM from "react-dom";
import CircularProgress from '@material-ui/core/CircularProgress';

export function Loading(){
    return (<>
        <CircularProgress className="loading" color="secondary"/>
    </>
    );
}