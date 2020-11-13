import React from 'react';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import underscore from "underscore.string";


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
    const installs = underscore.numberFormat(installations, 0, '.', ',')
    return (
        <Card className={classes.root} raised={true}>
            <CardContent>
                <Typography className={classes.title} variant="body2" component="p" gutterBottom>
                    Instalari pe dispozitive active
                </Typography>
                <Typography variant="h4" component="span">
                    {installs}
                </Typography>
                <Typography variant="body1" component="span" className={classes.percent}>
                    <Typography variant="body1" component="span">+{percent}%</Typography> vs previous 30days
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardStatistic;