export const addArticle = article => ({
  type: "ADD_ARTICLE",
  payload: article
});

// action is an object with information about what happened and what needs to change

// increment
export const selectedBrowse = filter => ({
    type: 'TOGGLE_LINKS',
    filter
});
