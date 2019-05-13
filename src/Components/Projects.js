import React, { Component } from 'react';
import {
    Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardText, IconButton,
    CardMenu
} from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
        this.toggleFunction = this.toggleFunction.bind(this);
    }

    toggleFunction() {

        if (this.state.activeTab === 0) {
            return (
                <div style={{display:'flex'}}>
                <Card shadow={0} style={{ width: '300px', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>Welcome</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
                    <CardActions border>
                        <Button colored>Get Started</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={0} style={{ width: '300px', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>Welcome</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
</CardText>
                    <CardActions border>
                        <Button colored>Get Started</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={0} style={{ width: '300px', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>Welcome</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
                    <CardActions border>
                        <Button colored>Get Started</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>


            )
        }

        if (this.state.activeTab === 1) {
            return (
                <div>This is Nodejs</div>
            )
        }
    }
    render() {
        console.log("ppp")
        return (
            <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>ReactJS</Tab>
                    <Tab>NodeJS</Tab>
                    <Tab>Flask</Tab>
                    <Tab>Python</Tab>
                </Tabs>
                <section>
                    <div className="content">
                        <Grid>
                            <Cell col={12}>
                                {this.toggleFunction()}
                            </Cell>
                        </Grid></div>
                </section>
            </div>
        )
    }

}
export default (Projects);