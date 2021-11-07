const BookmarkReducer = (state, action) => {
  let newBookmarks = [];
  switch (action.type) {
    case 'ADD_TO_BOOKMARK':
      newBookmarks = [...state.bookmarks, action.id];
      localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
      return {
        ...state,
        bookmarks: newBookmarks,
      };
    case 'REMOVE_FROM_BOOKMARK': {
      newBookmarks = state.bookmarks;
      newBookmarks.splice(
        state.bookmarks.findIndex((bookmarkId) => bookmarkId === action.id),
        1,
      );
      localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
      return {
        ...state,
        bookmarks: newBookmarks,
      }; }

    default:
      return '';
  }
};

export default BookmarkReducer;
