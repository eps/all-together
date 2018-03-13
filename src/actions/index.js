export const addArticle = article => ({
  type: "ADD_ARTICLE",
  payload: article
});

// action is an object with information about what happened and what needs to change

// increment
export const selectedBrowse = index => ({
    type: 'SELECTED_BROWSE',
    index
});
