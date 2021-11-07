import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BookmarkContext from '../../contexts/BookmarkContext';
import BookmarkReducer from '../../reducers/Bookmark';

const Layout = ({ children }) => {
  const getBookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  const [state, dispatch] = useReducer(BookmarkReducer, {
    bookmarks: getBookmarks,
  });

  if (state.bookmarks === null) {
    state.bookmarks = [];
  }
  return (
    <BookmarkContext.Provider
      value={{
        bookmarks: state.bookmarks,
        dispatchBookmarks: dispatch,
      }}
    >
      <div>
        <Header />
        <Container fluid="md">
          {children}
        </Container>
        <Footer />
      </div>
    </BookmarkContext.Provider>
  );
};

Layout.propTypes = {
  children: PropTypes.shape([]).isRequired,
};

export default Layout;
