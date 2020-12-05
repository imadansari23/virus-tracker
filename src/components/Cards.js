import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import './Components.css';

export default function Cards({data:{confirmed, deaths, recovered, lastUpdate,}}) {
let newDate = new Date(lastUpdate).toDateString();
if(!confirmed && !lastUpdate){
    return ".....Loading";
}
// console.log({country})
  return (
      
    <div className='cardContainer'>
        <Grid container spacing={5} justify="center">
            <Grid item component={Card} xs={12} sm={3}  className="CardGrid infected">
                <CardContent>
                    <Typography color="inherit" variant="h6" gutterBottom>Infected</Typography>
                    <Typography variant="h5">
                    <CountUp
                        start={0}
                        end={confirmed.value}
                        duration={2.5}
                        separator=","
                    />
                    </Typography>
                    <Typography color="textSecondary">{newDate}</Typography>
                    <Typography variant="body2">Number of Cases</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} sm={3} className="CardGrid recovered">
                <CardContent>
                    <Typography color="inherit" variant="h6" gutterBottom>Recovered</Typography>
                    <Typography variant="h5">
                    <CountUp
                        start={0}
                        end={recovered.value}
                        duration={2.5}
                        separator=","
                    />
                    </Typography>
                    <Typography color="textSecondary">{newDate}</Typography>
                    <Typography variant="body2">Number of Cases</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} sm={3} className="CardGrid deaths">
                <CardContent>
                    <Typography color="inherit" variant="h6" gutterBottom>Deaths</Typography>
                    <Typography variant="h5">
                    <CountUp
                        start={0}
                        end={deaths.value}
                        duration={2.5}
                        separator=","
                    />
                    </Typography>
                    <Typography color="textSecondary">{newDate}</Typography>
                    <Typography variant="body2">Number of Cases</Typography>
                </CardContent>
            </Grid>
        </Grid>
    </div>
  );
}


