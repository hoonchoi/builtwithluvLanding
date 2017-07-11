import React, { Component } from 'react';
import '../styles/app.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import NavBar from './NavBar';
import Footer from './Footer';
import AboutUs from './AboutUs';
import Team from './Team';
import Products from './Products';

class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="page-wrap">
          <MuiThemeProvider>
            <NavBar />
          </MuiThemeProvider>
          <AboutUs />
          <MuiThemeProvider>
            <Team />
          </MuiThemeProvider>
          <MuiThemeProvider>
            <Products />
          </MuiThemeProvider>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
