import React from "react";
import { makeStyles, Typography } from '@material-ui/core';
import { useStateValue } from '../services/state/State';

const useStyles = makeStyles(() => ({
  details: {
    margin: 'auto',
    width: '80%',
  }
}))

export default function WikiDetails() {
  const classes = useStyles();
  const [{ wikiDetails }] = useStateValue();

  return (
    <div className={classes.details}>
      {Object.keys(wikiDetails.query.pages).map(page => wikiDetails.query.pages[page]).map(page => (
        <>
          <Typography variant="h6">
            {page.title}
          </Typography>
          <Typography variant="body2">
            {page.extract}
          </Typography>
        </>
      ))}
    </div>
  );
}