import React from "react";
import MDEditor from '@uiw/react-md-editor';
import { makeStyles, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    markdown: {
        padding: 50,
        margin: 50,
        alignItems: 'center',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    }
}));

export default function CircularProgress({
    text, onChangeText, onSelectionChange, handleResetClick
}) {
    const classes = useStyles();
    return (
        <div className={classes.markdown}>
            <div className={classes.header}>
                <Typography variant="body1">
                    Markdown Text Area
                </Typography>
                <Button variant="contained" color="primary" onClick={handleResetClick}>
                    Reset
                </Button>
            </div>
            <MDEditor
                value={text}
                onChange={onChangeText}
                onMouseUpCapture={() => window.getSelection().toString() ? onSelectionChange(window.getSelection().toString()) : null}
                onKeyUpCapture={() => window.getSelection().toString() ? onSelectionChange(window.getSelection().toString()) : null}
            />
        </div>
    );
}