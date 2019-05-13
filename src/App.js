import React, { Component } from 'react';


import './App.css';


import {Header, Navigation,Drawer, Content,Layout} from'react-mdl';
import {Link} from 'react-router-dom';
import Main from './Components/main'

import './App.css';

class App extends Component {
  
  render() {
    
    return (
      <div>

     <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Title" scroll>
            <Navigation>
               
                <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
               
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
            
                <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div> 
      </div>
    );
  }
}

export default App;
