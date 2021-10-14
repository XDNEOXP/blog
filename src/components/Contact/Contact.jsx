import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from '../Button/Button';
import { validateUsername, validateSubject, validateDescription } from '../../utils/validation';
import './Contact.css';
import BackdropComponent from '../Backdrop/Backdrop';
import { ErrorAlert, SuccessAlert } from '../Alerts/Alerts';

const Contact = () => {
  const [subject, setSubject] = useState(null);
  const [userName, setUserName] = useState(null);
  const [description, setDescription] = useState(null);
  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handelChangeInputSubject = (event) => {
    if (validateSubject(event.target.value)) {
      setSubject((event.target.value).trim());
      setErrors({
        ...errors,
        subject: null,
      });
    } else if ((event.target.value.trim()) === '') {
      setSubject(null);
      setErrors({
        ...errors,
        subject: null,
      });
    } else {
      setSubject(null);
      setErrors({
        ...errors,
        subject: 'Subject must be at least 8 character',
      });
    }
  };

  const handelChangeInputUserName = (event) => {
    if (validateUsername(event.target.value)) {
      setUserName((event.target.value).trim());
      setErrors({
        ...errors,
        username: null,
      });
    } else if ((event.target.value.trim()) === '') {
      setUserName(null);
      setErrors({
        ...errors,
        username: null,
      });
    } else {
      setUserName(null);
      setErrors({
        ...errors,
        username: 'User not Found',
      });
    }
  };

  const handelChangeTextArea = (event) => {
    if (validateDescription(event.target.value)) {
      setDescription((event.target.value).trim());
      setErrors({
        ...errors,
        description: null,
      });
    } else if ((event.target.value.trim()) === '') {
      setDescription(null);
      setErrors({
        ...errors,
        description: null,
      });
    } else {
      setDescription(null);
      setErrors({
        ...errors,
        description: 'Description must be at least 25 character',
      });
    }
  };

  const handelSubmit = () => {
    setOpen(!open);
    setTimeout(() => {
      setOpen(false);
      if (subject !== null && userName !== null && description !== null) {
        setShowAlert(true);
      } else {
        setShowAlert(false);
      }
    }, 2000);
  };

  return (
    <>
      <Form>
        <Form.Group className="form__formgroup" controlId="exampleForm.ControlInput1">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            onChange={handelChangeInputSubject}
            placeholder=""
            isInvalid={errors.subject}
          />
          {errors.subject && <span><ErrorAlert>{errors.subject}</ErrorAlert></span>}
        </Form.Group>
        <Form.Group className="form__formgroup" controlId="exampleForm.ControlInput1">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            onChange={handelChangeInputUserName}
            placeholder=""
            isInvalid={errors.username}
          />
          {errors.username && <span><ErrorAlert>{errors.username}</ErrorAlert></span>}
        </Form.Group>
        <Form.Group className="form__formgroup" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            onChange={handelChangeTextArea}
            as="textarea"
            rows={4}
            isInvalid={errors.description}
          />
          {errors.description && <span><ErrorAlert>{errors.description}</ErrorAlert></span>}
        </Form.Group>
        <Form.Group className="form__formgroup" controlId="exampleForm.ControlTextarea1">
          <Button handelClick={handelSubmit}>
            Submit
          </Button>
        </Form.Group>
      </Form>

      <BackdropComponent open={open} />
      {showAlert
        ? (
          <SuccessAlert handelClose={() => setShowAlert(false)}>
            Thanks For Contacting Us
            {' '}
            {userName}
          </SuccessAlert>
        )
        : ''}
    </>
  );
};

export default Contact;
