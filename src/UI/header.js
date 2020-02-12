import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import './header.css';
import {Switch, Route, Link, Router} from 'react-router-dom';

import Dog from '../Pages/Dog.js';
import Cat from '../Pages/Cat.js';
import Rabbit from '../Pages/Rabbit.js';

const header = (props) => {

    return (
        <div>
        <AppBar position="static">
                <Toolbar>
                    <Grid
                        container
                        direction="row"
                        justify="space-around"
                        alignItems="center"
                    >
                        <Link to="/"><Button onClick = {() => props.buttonClicked("Home")} id = "button" color="inherit">Home</Button></Link>
                        <Link to="/Dog"><Button onClick = {() => props.buttonClicked("Dog")} id = "button" color="inherit">Dog</Button></Link>
                        <Link to="Cat"><Button onClick = {() => props.buttonClicked("Cat")} id = "button" color="inherit">Cat</Button></Link>
                        <Link to="Rabbit"><Button onClick = {() => props.buttonClicked("Rabbit")} id = "button" color="inherit">Rabbit</Button></Link>
                    </Grid>
                </Toolbar>
        </AppBar>

        <Switch>
            <Route exact path="/Dog" component = {Dog}/>
            <Route exact path="/Cat" component = {Cat}/>
            <Route exact path="/Rabbit" component = {Rabbit}/>
        </Switch>

        </div>
    )
}

export default header;