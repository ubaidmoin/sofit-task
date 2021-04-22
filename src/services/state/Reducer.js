export const actions = {
  SET_TEXT: 'SET_TEXT',
  SET_WIKI_DETAILS: 'SET_WIKI_DETAILS',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_TEXT:
      return {
        ...state,
        text: action.payload
      };
    case actions.SET_WIKI_DETAILS:
      return {
        ...state,
        wikiDetails: action.payload
      };
    default:
      return state;
  }
};
