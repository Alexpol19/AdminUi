import React from 'react';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '20px',
        minWidth: 275,
    },
    title: {
        fontWeight: 700
    },
    percent: {
        marginLeft: '10px'
    }
}));

const CardStatistic = ({installations, percent}) => {
    const classes = useStyles();
    function numberFormat(num) {
        if (typeof num !== "string") {
          return numberFormat(num.toString())
        } else {
          if (num.length < 4) {
            return num
          } else {
            return numberFormat(num.slice(0, num.length - 3)) + "," + num.slice(num.length - 3)
          }
        }
      }
    return (
        <Card className={classes.root} raised={true}>
            <CardContent>
                <Typography className={classes.title} variant="body2" component="p" gutterBottom>
                    Instalari pe dispozitive active
                </Typography>
                <Typography variant="h4" component="span">
                    {numberFormat(installations)}
                </Typography>
                <Typography variant="body1" component="span" className={classes.percent}>
                    <Typography variant="body1" component="span">+{percent}%</Typography> vs previous 30days
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardStatistic;