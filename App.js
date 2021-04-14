import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import './App.css';
import { PROJECTS } from './shared/projects';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: PROJECTS
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Alexx Chavez | Portfolio</NavbarBrand>
          </div>
        </Navbar>
        <Directory projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
