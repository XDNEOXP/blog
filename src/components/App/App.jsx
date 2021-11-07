import React, { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import Layout from '../Layout/Layout';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Content from '../Content/Content';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleProject from '../SingleProject/SingleProject';
import ThemeContext from '../../contexts/ThemeContext';
import theme from '../../configs/theme';

function App() {
  const [activeTheme, setActiveTheme] = useState('primary');
  return (
    <ThemeContext.Provider value={{
      theme: theme[activeTheme],
      setActiveTheme,
    }}
    >
      <div className="App">
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/">
                <Content />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/project/:id">
                <SingleProject />
              </Route>
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
