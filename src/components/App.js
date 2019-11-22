import React, { Fragment } from 'react';
import Header from './Header';
import TechStack from './TechStack';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';
import FloatingContact from './FloatingContact';

const App = props => {
  return (
    <Fragment>
      <FloatingContact />
      <Header />
      <About />
      <TechStack />
      <Projects />
      <Footer />
    </Fragment>
  );
};

export default App;