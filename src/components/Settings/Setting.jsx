import React, { useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Offcanvas from '../Offcanvas/Offcanvas';
import Button from '../Button/Button';
import ThemeContext from '../../contexts/ThemeContext';

const Settings = () => {
  const [show, setShow] = useState(false);
  const themeColor = useContext(ThemeContext);
  return (
    <>
      <Button
        handelClick={() => setShow(true)}
        className="nav-link mx-auto mt-1 p-2 w-100"
        variant="dark"
      >
        Settings
      </Button>
      <Offcanvas title="Settings" placement="end" show={show} handelClose={() => setShow(false)}>
        <Container fluid="md">
          <div className="card  mx-auto w-100 d-flex flex-row p-4">
            <b className="mt-3">Button Color :</b>
            <div className="w-25 mx-auto">
              <Button className="mx-5 mt-2 w-100 p-2" variant="success" handelClick={() => themeColor.setActiveTheme('success')}>Green</Button>
              <Button className="mx-5 mt-2 w-100 p-2" variant="secondary" handelClick={() => themeColor.setActiveTheme('secondary')}>Gray</Button>
              <Button className="mx-5 mt-2 w-100 p-2" variant="primary" handelClick={() => themeColor.setActiveTheme('primary')}>Blue</Button>
              <Button className="mx-5 mt-2 w-100 p-2" variant="danger" handelClick={() => themeColor.setActiveTheme('danger')}>Red</Button>
            </div>
          </div>
        </Container>
      </Offcanvas>
    </>
  );
};

export default Settings;
