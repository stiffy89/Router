import React, {useState} from 'react';
import {Route} from "react-router-dom";

import {fade, makeStyles} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

import ImageHolder from './imageHolder';

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

    let searchItem = null;
    const[imageSource, setImageSource] = useState("https://source.unsplash.com/800x450/?$giraffe");

    const onInputValue = (event) => {
        searchItem = event.target.value;
    }

    const onSearchClick = () => {
        
        if (searchItem !== null)
        {
            setImageSource("https://source.unsplash.com/800x450/?$" + searchItem);
        }
    }

    const routeProps = (routeProps) => {
        console.log("route reached");
        console.log(routeProps.match.params.name);
    }

    let classes = useStyle();

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
                                <IconButton>
                                    <SearchIcon onClick = {() => onSearchClick()}/>
                                </IconButton>

                                <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                                onChange = {(event) => onInputValue(event)}
                                />
                            </div>
                        </ToolBar>
                    </AppBar>
                </Grid>

                <Grid item>
                    <Route
                        path ="/:name"
                        exact
                        render = {(routeProps) => <ImageHolder searchInput = {imageSource} routeInfo={routeProps} updatePath = {pathName}/>}
                    />
                </Grid>
            </Grid>
        </div>
    )

}

export default URLRouter;