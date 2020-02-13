import React from 'react';
import {fade, makeStyles} from '@material-ui/core/styles';
import {Route} from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';

const useStyle = makeStyles (theme => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    },

    textField: {
        width: "50%",
        paddingBottom: "20px"
    },

    button: {
        paddingTop: 10
    },

    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      }



}));

const URLRouter = () => {

    const onInputValue = (event) => {
        
    }

    let classes = useStyle();

    let imageSource = "https://source.unsplash.com/800x450/?$giraffe";

    return (
        <div>
            <Grid   container 
                    direction = "column"
                    justify="space-around"
                    alignItems="center"
                    spacing = {10}
                    >
         
                <Grid item xs={6} lg={12}>
                    <AppBar>
                        <ToolBar className = {classes.toolBar}>
                            <div className={classes.search}>
                                <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                                />
                            </div>
                        </ToolBar>
                    </AppBar>
                </Grid>

                <Grid item >
                    <img src={imageSource}></img>
                </Grid>
            </Grid>
        </div>
    )

}

export default URLRouter;