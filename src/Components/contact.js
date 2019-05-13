import React, { Component } from 'react';
import { Grid, Cell,Button } from 'react-mdl';


class Contact extends Component {
    render() {
        return (
            <div>
                <Grid className="contact-grid">
                    <Cell col={12}>
                        <h1>Get in Touch</h1>
                        <div style={{ maxWidth: '541px', margin: 'auto' }}>
                            <p>Want to hire me? Or have me speak at your conference? Or just ask me a question? Fill in the letter below and I’ll get back to you.</p>
                       

                    <p id="nameTitle"> Hey Vishal !!</p>
                    <Grid>
                        <Cell col={6}> <span>I want you to </span></Cell>
                        <Cell col={4}>
                            <select>
                                <option>work with us </option>
                                <option>speak at my lovely conference</option>
                                <option>answer my question</option>
                            </select></Cell>
                        <Cell col={2}><span style={{ margin:'4.7em'}}>.</span></Cell>

                    </Grid>

                    <Grid>
                        <Cell col={6}><span>I am from the </span></Cell>
                        <Cell col={6}><input name='' placeholder='Dope_Organization'></input></Cell>
                    </Grid>
                    <Grid>
                        <Cell col={12}><span> Contact me, and we will have a discussion.</span></Cell>
                    </Grid>
                    
                    <Grid>
                        <Cell col={6}> <span>Email me at </span></Cell>
                        <Cell col={4}> <input name='' placeholder='awesome@person.com'></input></Cell>
                        <Cell col={2}><span style={{ margin:'7.7em'}}>.</span></Cell>
                    </Grid>

                    <Grid>
                        <Cell col={12}><span>lots of love,</span></Cell>
                        <Cell col={12}><input name='' placeholder='Awesome Person'></input></Cell>
                        <br />
                       
                    </Grid>
                    <div><Button id="send-btn">SEND</Button></div>
                   
                   
                    </div>  </Cell>
                </Grid>


            </div>



        )
    }

}
export default (Contact);