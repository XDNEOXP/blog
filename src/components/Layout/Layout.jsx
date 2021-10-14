import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => (
  <div>
    <Header />
    <Container fluid="md">
      {children}
    </Container>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.shape([]).isRequired,
};

export default Layout;
