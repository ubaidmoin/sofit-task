import React from "react";
import MDEditor from '@uiw/react-md-editor';
import { makeStyles, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    progress: {
        display: 'flex',
        alignItems: 'center',
    },
}));

export default function CustomCircularProgress() {
    const classes = useStyles();
    return (
        <div className={classes.progress}>
            <CircularProgress />
        </div>
    );
}