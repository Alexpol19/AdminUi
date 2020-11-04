import { Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { Line } from 'react-chartjs-2'
import { months } from '../../../../common/months'

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
  const startDate = new Date(range.startDate)
  const endDate = new Date(range.endDate)
  const data = getData(pages);
  return (<>
    <Paper elevation={3} className={classes.paper}>
        <Grid container item xs={12} justify="space-between" style={{ paddingBottom: 20 }}>
            <Typography className={classes.title} variant="body2" component="p">Numar de utilizatori</Typography>
            <Typography className={classes.title} variant="body2" component="p">{startDate.getDate() + ' ' + months[startDate.getMonth()]} - {endDate.getDate() + ' ' + months[endDate.getMonth()]}</Typography>
        </Grid>
        <div className={classes.chartWrapper}>
            <Line data={data} options={options} height={70} redraw={true} />
        </div>
    </Paper>
  </>)
}

export default MyChart