import React from 'react';
import { Backdrop, Button, CircularProgress, Grid, makeStyles, withStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import CardStatistic from './CardStatistic';
import DateRangeChart from './DateRangeChart';
import List from './List';
import MyChart from './MyChart';
import { greenTheme } from '../../../../common/ThemeVars';
import { connect } from 'react-redux';
import { getRaport } from '../../../../redux/raport';
import { getChartTableDates } from '../../../../redux/selectors/raport-selectors';


const ColorButton = withStyles((theme) => ({
    root: {
      color: '#fff',
      backgroundColor: greenTheme.color,
      '&:hover': {
        backgroundColor: greenTheme.hoverColor,
      },
    },
}))(Button);

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      minHeight: '100vh'
    },
    box: {
      paddingLeft: theme.spacing(1),
    },
    confBtn: {
        color: '#fff',
        marginLeft: theme.spacing(8),
        padding: theme.spacing(1),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3)
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));
const ChartPage = ({fetching, getRaport, installations, percent, dates, range, chartPages}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Box p={3} className={classes.box}>
                <Grid container>
                    <Grid container item xs={11} justify="space-between" alignItems="center">
                        <ColorButton variant="contained" color="primary" className={classes.confBtn}>
                            Configura Raport
                        </ColorButton>
                        <DateRangeChart getRaport={getRaport} />
                    </Grid>
                    {chartPages.length ? <><Grid item>
                        <CardStatistic installations={installations} percent={percent} />
                    </Grid>
                    <Grid item xs={11}>
                        <MyChart pages={chartPages} range={range} />
                    </Grid>
                    <Grid item xs={11}>
                        <List dates={dates} />
                    </Grid></>
                    : <></>}
                </Grid>
            </Box>
            <Backdrop className={classes.backdrop} open={fetching}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
        
    )
}

const mapStateToProps = state => {
    return {
        fetching: state.raport.raportFetching,
        installations: state.raport.installations,
        percent: state.raport.increasePercent,
        dates: getChartTableDates(state),
        range: state.raport.dateRange,
        chartPages: state.raport.chartPages
    }
}

export default connect(mapStateToProps, {getRaport})(ChartPage)