import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Typography,Grid,Divider,Box} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import poza1 from "./prague1.jpg"
import poza2 from "./prague2.jpg"
import poza3 from "./prague3.jpg"

function Postcard(){
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      border:'5px'
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
    root1: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    box: {
    margintop:30      
    },
  }));

  const classes = useStyles();

  return(
    <div>
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" >
        <Typography component="div" style={{ backgroundColor: '#fff8e1', height: '100vh' }} >
        <Grid container className={classes.root} spacing={2}>
          <Grid item sm={6}>
            <GridList className={classes.gridList} cellHeight={255} cols={1}>
              <GridListTile cols={1}>
                <img src={poza1}/>
              </GridListTile>
              <GridListTile cols={1}>
                <img src={poza2}/>
              </GridListTile>
              <GridListTile cols={1}>
                <img src={poza3}/>
              </GridListTile>
            </GridList>
          </Grid>
          <Grid item sm={6} container
            direction="column"
            justify="space-evenly"
            alignItems="center">
            <Typography variant="h3">A postcard from Prague to you</Typography>
            <Typography variant="h2">"The past, the present and the future walked into a bar. It was tense."</Typography>
            <Typography variant="h2">Yours sincerly, </Typography>
          </Grid>
        </Grid>
        </Typography>
      </Container>
    </React.Fragment>
    </div>
  );
}

export default Postcard;