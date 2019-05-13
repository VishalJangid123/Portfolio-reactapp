import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import data_instance from './data';
class Resume extends Component{

    constructor(props) {
        super(props);
        
        this.state = {personal_data: {}
        
        };
        

      }
      componentDidMount(){
       
      
    }

    
    
    render(){
       
        console.log()
       
         let personal = data_instance.sendPersonalData().map((personal_data) =>

         
         <Grid key={personal_data.key}>
                 <Cell col={4}><span id='text-left-left' >{personal_data.key}</span></Cell>
                 <Cell col={4}><span>:</span></Cell>
                 <Cell col={4}><span id='text-left-right'>{personal_data.value}</span></Cell>
             </Grid>
         );

         let contact_map = data_instance.sendContactDetail().map((contact_data) =>
         <Grid key={contact_data}>
                <Cell col={4}>Icon</Cell>
                <Cell col={6}>{contact_data}</Cell>
             </Grid>
         );
         return(
            <div>
               
            <Grid>
                <Cell col={4} className='leftside-resume'>
                <img src="https://png.pngtree.com/element_origin_min_pic/17/07/06/bb87c06b8cb8fad5ffe9abab11679fae.jpg"
            alt="Avatar"
            id="avatar-img"
            />
            <Grid><div id="heading-left">Personal</div></Grid>
            <hr/>
            {personal}

            <Grid><div id="heading-left">Contact</div></Grid>
            <hr/>
            {contact_map}

            <Grid><Cell col={12}><div id="heading-left">Links</div></Cell>
            <hr/>
            
                <Grid id="mySidenav" class="sidenav">
               <Cell col={12}><a href="#" id="about">About</a></Cell> 
               <Cell col={12}><a href="#" id="blog">Blog</a></Cell> 
               <Cell col={12}><a href="#" id="projects">Projects</a></Cell> 
               <Cell col={12}><a href="#" id="contact">Contact</a></Cell> 
                
                
                
                </Grid>
                </Grid>

                </Cell>
                <Cell col={8} className='rightside-resume'>
                    <Grid>
                        <Cell xs={12}><div id="rightSide_heading"><b>Objective</b></div></Cell>
                        
                    </Grid>
                    <Grid>
                        <Cell><div id="rightSide_Content">Seeking for a challenging position as a Computer Science Engineer, where I can use my planning, designing and overseeing skills in construction and help grow the company to achieve its goal.</div></Cell>
                    </Grid>
                   
                </Cell> 
            </Grid>
            </div>
        )
    }

}
export default Resume;