import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Chart } from 'react-charts'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: '40px',
    padding: theme.spacing(3),
    height: '',
  },
  chartWrapper: {
    width: '100%',
    height: '300px'
  },
  title: {
    fontWeight: 700
  },
}));

export default function MyChart() {
  const classes = useStyles();

  const data = React.useMemo(
    () => [
      {
        label: 'Nr. utilizatori',
        data: [[0, 2500], [1, 1700], [2, 9800], [3, 4000], [4, 4950], [5, 4100], [6, 9890], [7, 4000], [8, 4900], [9, 3900], [10, 4100]]
      },
    ],
    []
  )

  const series = React.useMemo(
    () => ({
      type: 'area'
    }),
    []
  )
 
  const axes = React.useMemo(
    () => [
      { primary: true, position: 'bottom', type: 'linear' },
      { position: 'left', type: 'linear', stacked: false }
    ],
    []
  )
 
  const lineChart = (
    <Paper elevation={3} className={classes.paper}>
      <Grid container item xs={12} justify="space-between" style={{ paddingBottom: 20 }}>
        <Typography className={classes.title} variant="body2" component="p">Numar de utilizatori</Typography>
        <Typography className={classes.title} variant="body2" component="p">23 Aug - 21 Sep</Typography>
      </Grid>
      <div className={classes.chartWrapper}>
        <Chart data={data} series={series} axes={axes} 
        renderSVG={() => (
          <defs>
            <linearGradient id="0" x1="0" x2="0" y1="1" y2="0">
              <stop offset="0%" stopColor="#b4dfc4" />
              <stop offset="100%" stopColor="#b4dfc4" />
            </linearGradient>
        </defs>
        )}
        tooltip />
      </div>
    </Paper>
  )

  return lineChart
}