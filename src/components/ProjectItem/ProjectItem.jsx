import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const ProjectItem = ({ data }) => (
  <Col>
    <Card className="h-100">
      <Card.Img variant="top" src={data.image} />
      <Card.Body>
        <Card.Title className="mt-4">{data.title}</Card.Title>
        <Card.Text>{data.description}</Card.Text>
      </Card.Body>
      <Link to={`/projects/${data.id}`}>
        <Button className="btn btn-primary px-3 ms-3 mb-3" variant="primary">View</Button>
      </Link>
    </Card>
  </Col>
);

ProjectItem.propTypes = {
  data: PropTypes.shape([]).isRequired,
};

export default ProjectItem;
