import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';



class LandingPage extends Component{
    render(){
        return(

           
            <div style={{width:'100%',margin:'auto'}}>
            <Grid className="landing-grid">
            <Cell col={12}>
            <img src="https://png.pngtree.com/element_origin_min_pic/17/07/06/bb87c06b8cb8fad5ffe9abab11679fae.jpg"
            alt="Avatar"
            id="avatar-img"
            />
            <div class="banner-text">
            <h1>Full Stack Developer</h1>

            <hr />

            <p>ReactJs | Python | NodeJS | Unity | Blender</p>

            <div className="social-links">
                <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true" />

                </a>
                <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square" aria-hidden="true" />

                </a>
                <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-facebook-square" aria-hidden="true" />

                </a>
                
                            </div>
            </div>
            </Cell>

            </Grid>


            </div>
        )
    }

}
export default (LandingPage);