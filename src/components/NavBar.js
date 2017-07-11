import React from 'react';
import '../styles/navBar.css';

import AppBar from 'material-ui/AppBar';
import { Tabs, Tab } from 'material-ui/Tabs';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const NavBar = () => {
  return (
    <AppBar
      className="nav-bar"
      title="Builtwithluv"
      showMenuIconButton={true}
      iconClassNameLeft="nav-bar-icon"
      iconStyleLeft={{cursor:"default"}}
    >
      <Tabs style={{width: '25em'}}>
        <Tab href="#about-us" label="About Us" />
        <Tab href="#team" label="Team" />
        <Tab href="#products" label="Products" />
      </Tabs>
    </AppBar>
  )
}

export default NavBar;
