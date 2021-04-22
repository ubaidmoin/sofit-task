import React, { useEffect, useState } from "react";
import { makeStyles, Typography } from '@material-ui/core';
import Markdown from '../components/Markdown';
import CircularProgress from '../components/CircularProgress';
import WikiDetails from '../components/WikiDetails';
import { actions } from '../services/state/Reducer';
import { useStateValue } from '../services/state/State';
import { getData } from '../services/api/ApiCalls';
import { settings as s } from '../services/Settings';

const useStyles = makeStyles(() => ({
  progess: {
    margin: 'auto',
    width: '10%',
    padding: 30
  },
  details: {
    margin: 'auto',
    width: '80%',
  }
}))

export default function Home() {
  const classes = useStyles();
  const [{
    text,
    wikiDetails
  }, dispatch] = useStateValue();
  const [fetchingDetails, setFetchingDetails] = useState(false);
  const [selectedText, setSelectedText] = useState('');

  const getWikiDetails = async (phrase) => {
    setFetchingDetails(true);
    const result = await getData(s.wikipediaAPI.replace('$[phrase]', phrase));
    if (!!result.data) {
      dispatch({ type: actions.SET_WIKI_DETAILS, payload: result.data });
    }
    setFetchingDetails(false);
  }

  const onResetClick = () => {
    dispatch({ type: actions.SET_WIKI_DETAILS, payload: '' });
    dispatch({ type: actions.SET_TEXT, payload: '' });
  }

  useEffect(() => {
    if (!!selectedText) {
      getWikiDetails(selectedText);
    }
  }, [selectedText]);

  return (
    <div className="App">
      <div className="header">
        <Markdown
          text={text}
          handleResetClick={() => onResetClick()}
          onChangeText={(value) => dispatch({ type: actions.SET_TEXT, payload: value })}
          onSelectionChange={(value) => setSelectedText(value)}
        />
      </div>
      {fetchingDetails && (
        <div className={classes.progess}>
          <CircularProgress />
        </div>
      )}
      {!fetchingDetails && wikiDetails && wikiDetails.query && wikiDetails.query.pages && (
        <WikiDetails />
      )}
    </div>
  );
}