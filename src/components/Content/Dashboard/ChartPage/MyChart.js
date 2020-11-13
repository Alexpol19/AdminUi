import { Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { Line } from 'react-chartjs-2'
import * as moment from 'moment';
// import 'moment/locale/ru';

const getData = pages => {
  const labels = pages.map((page) => page.label)
  const data = pages.map((page) => page.clients)
  return {
    labels: [...labels],
    datasets: [
      {
        label: 'Nr. de utilizatori',
        data: [...data],
        fill: true,
        backgroundColor: '#b4dfc4',
        borderColor: '#99c7b0',
      },
    ],
  }
}
const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  legend: {
      display: false
  }
}
const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: '40px',
      padding: theme.spacing(3),
    },
    chartWrapper: {
      width: '100%',
    },
    title: {
      fontWeight: 700
    },
  }));

const MyChart = ({pages, range}) => {
  const classes = useStyles();
  // moment.locale('ru')
  const startDate = new Date(range.startDate)
  const endDate = new Date(range.endDate)
  const data = getData(pages);
  function formatDate(start, end) {
    return moment(start).format('D MMM')+' - '+moment(end).format('D MMM')
  }
  return (<>
    <Paper elevation={3} className={classes.paper}>
        <Grid container item xs={12} justify="space-between" style={{ paddingBottom: 20 }}>
            <Typography className={classes.title} variant="body2" component="p">Numar de utilizatori</Typography>
            <Typography className={classes.title} variant="body2" component="p">{formatDate(startDate, endDate)}</Typography>
        </Grid>
        <div className={classes.chartWrapper}>
            <Line data={data} options={options} height={70} redraw={true} />
        </div>
    </Paper>
  </>)
}

export default MyChart