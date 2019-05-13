import React from 'react';
import {Switch , Route} from 'react-router-dom';
import AboutMe from './AboutMe';
import LandingPage from './LandingPage';
import contact from './contact';
import Projects from './Projects';
import Resume from './Resume';

const Main = () => {
    
    return(
   <Switch>
       <Route exact path="/" component={LandingPage} />
       <Route path="/aboutme" component={AboutMe} />
       <Route path="/resume" component={Resume} />
       
       <Route path="/projects" component={Projects} />
       <Route path="/contact" component={contact} />
       </Switch>
    )};


export default Main;