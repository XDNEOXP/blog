/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Button from '../Button/Button';
import './Contact.css';

const Contact = () => {
  const [subject, setSubject] = useState('');
  const [userName, setUserName] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});

  const handelChangeInputSubject = (event) => {
    if (event.target.value === '') {
      setErrors({
        ...errors,
        subject: 'Please Enter The Subject',
      });
    } else {
      setErrors({
        ...errors,
        subject: null,
      });
      setSubject(event.target.value);
    }
  };

  const handelChangeInputUserName = (event) => {
    if (event.target.value === '') {
      setErrors({
        ...errors,
        username: 'Please Enter Your Username',
      });
    } else {
      setErrors({
        ...errors,
        username: null,
      });
      setUserName(event.target.value);
    }
  };

  const handelChangeTextArea = (event) => {
    if (event.target.value === '') {
      setErrors({
        ...errors,
        description: 'Please Enter The Description',
      });
    } else {
      setErrors({
        ...errors,
        description: null,
      });
      setDescription(event.target.value);
    }
  };

  const handelSubmit = () => {
    alert(`Thanks For Contacting Us ${userName}`);
  };

  return (
    <div className="Contact">
      <div className="formControl">
        <input onChange={handelChangeInputSubject} type="text" placeholder="Subject" />
        {errors.subject && <span>{errors.subject}</span>}
      </div>
      <div className="formControl">
        <input onChange={handelChangeInputUserName} type="text" placeholder="Username" />
        {errors.username && <span>{errors.username}</span>}
      </div>
      <div className="formControl">
        <textarea onChange={handelChangeTextArea}>Your Request Here</textarea>
        {errors.description && <span>{errors.description}</span>}
      </div>
      <div className="formControl">
        <Button handelClick={handelSubmit}>Submit</Button>
      </div>
    </div>
  );
};

export default Contact;
