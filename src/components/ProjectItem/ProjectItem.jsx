import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdBookmarkAdd, MdBookmarkRemove } from 'react-icons/md';
import PropTypes from 'prop-types';
import { Card, Col } from 'react-bootstrap';
import ButtonBookmark from 'react-bootstrap/Button';
import Button from '../Button/Button';
import BookmarkContext from '../../contexts/BookmarkContext';
import ThemeContext from '../../contexts/ThemeContext';

const ProjectItem = ({ data }) => {
  const { bookmarks, dispatchBookmarks } = useContext(BookmarkContext);
  const themeColor = useContext(ThemeContext);
  const added = bookmarks.includes(data.id);

  const handelAdd = () => {
    if (added) {
      dispatchBookmarks({
        type: 'REMOVE_FROM_BOOKMARK',
        id: data.id,
      });
    } else {
      dispatchBookmarks({
        type: 'ADD_TO_BOOKMARK',
        id: data.id,
      });
    }
  };

  return (
    <Col>
      <Card className="h-100">
        <Card.Img variant="top" src={data.image} />
        <div className="d-flex flex-row-reverse">
          <ButtonBookmark
            onClick={handelAdd}
            className="mt-3 mx-3"
            variant={added ? 'dark' : 'outline-dark'}
            size="lg"
          >
            {added ? <MdBookmarkRemove /> : <MdBookmarkAdd />}
          </ButtonBookmark>
        </div>
        <Card.Body>
          <Card.Title className="mt-4">{data.title}</Card.Title>
          <Card.Text>{data.description}</Card.Text>
        </Card.Body>
        <Link className="w-25" to={`/project/${data.id}`}>
          <Button className="px-3 ms-3 mb-3" variant={themeColor.theme.color}>View</Button>
        </Link>
      </Card>
    </Col>
  );
};

ProjectItem.propTypes = {
  data: PropTypes.shape([]).isRequired,
};

export default ProjectItem;
