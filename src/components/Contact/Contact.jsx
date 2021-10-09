import React, { useState } from 'react';
import Button from '../Button/Button';
import { validateUsername, validateSubject, validateDescription } from '../../utils/validation';
import './Contact.css';
import BackdropComponent from '../Backdrop/Backdrop';
import { ErrorAlert, SuccessAlert } from '../Alerts/Alerts';
import { TextFieldComponent, MultilineTextFieldComponent } from '../TextField/TextField';

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
        setShowAlert(!showAlert);
      }
    }, 2000);
  };

  return (
    <div className="contact">
      <div className="contact__formcontrol">
        <TextFieldComponent handelChange={handelChangeInputSubject} label="Subject" error={!!errors.subject} />
        {errors.subject && <span><ErrorAlert>{errors.subject}</ErrorAlert></span>}
      </div>
      <div className="contact__formcontrol">
        <TextFieldComponent handelChange={handelChangeInputUserName} label="Username" error={!!errors.username} />
        {errors.username && <span><ErrorAlert>{errors.username}</ErrorAlert></span>}
      </div>
      <div className="contact__formcontrol">
        <MultilineTextFieldComponent
          handelChange={handelChangeTextArea}
          id="filled-multiline-static"
          label="Your Request Here"
          error={!!errors.description}
        />
        {errors.description && <span><ErrorAlert>{errors.description}</ErrorAlert></span>}
      </div>
      <div className="contact__formcontrol">
        <Button handelClick={handelSubmit}>
          Submit
        </Button>
        <BackdropComponent open={open} />
        {showAlert
          ? (
            <SuccessAlert>
              Thanks For Contacting Us
              {' '}
              {userName}
            </SuccessAlert>
          )
          : ''}
      </div>
    </div>
  );
};

export default Contact;
