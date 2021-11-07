import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Image from '../Image/Image';
import BookmarkContext from '../../contexts/BookmarkContext';
import Offcanvas from '../Offcanvas/Offcanvas';
import Button from '../Button/Button';

const Bookmarks = () => {
  const { bookmarks } = useContext(BookmarkContext);
  const [show, setShow] = useState(false);

  return (
    <>
      <Button
        handelClick={() => setShow(true)}
        className="nav-link mx-auto mt-1 p-2 w-100"
        variant="dark"
      >
        Bookmarks
      </Button>
      <Offcanvas title="Bookmarks" placement="start" show={show} handelClose={() => setShow(false)}>
        {bookmarks.map((bookmark) => (
          <Row className="card mb-3 p-2" key={`bookmark-id${bookmark}`}>
            <Col className="mx-auto" xs={8} md={8}>
              <h5>
                Project Example
                {' '}
                {bookmark}
              </h5>
              <Image
                imgSrc="https://repository-images.githubusercontent.com/158094796/a2653500-650e-11e9-85f2-605df952e3e4"
                imgClassName="card-img-top w-100"
              />
              <Link onClick={() => setShow(false)} to={`/project/${bookmark}`} className="btn btn-primary nav-link mb-2 mt-2 pt-1 text-light">
                View
              </Link>
            </Col>
          </Row>
        ))}
      </Offcanvas>
    </>
  );
};

export default Bookmarks;
