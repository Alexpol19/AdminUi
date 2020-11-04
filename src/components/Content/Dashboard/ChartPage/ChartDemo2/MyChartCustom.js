import React from "react";
import { Chart } from "react-charts";
import useDemoConfig from "./UseDemoConfig";
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: '40px',
    padding: theme.spacing(3),
    height: '',
  },
  chartWrapper: {
    width: '100%',
    height: '200px'
  },
  title: {
    fontWeight: 700
  },
}));

export default function MyChartCustom() {
  const [{ activeSeriesIndex, activeDatumIndex }, setState] = React.useState({
    activeSeriesIndex: 0,
    activeDatumIndex: 0
  });
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.paper}>
      <Grid container item xs={12} justify="space-between" style={{ paddingBottom: 20 }}>
        <Typography className={classes.title} variant="body2" component="p">Numar de utilizatori</Typography>
        <Typography className={classes.title} variant="body2" component="p">23 Aug - 21 Sep</Typography>
      </Grid>
      <div className={classes.chartWrapper}>
        <MyChart
          elementType="area"
          setState={setState}
          activeDatumIndex={activeDatumIndex}
          activeSeriesIndex={activeSeriesIndex}
        />
      </div>
    </Paper>
  );
}

function MyChart({
  elementType,
  activeDatumIndex,
  activeSeriesIndex,
  setState
}) {

  const { data } = useDemoConfig({
    series: 1,
    dataType: "ordinal",
  });

  const series = React.useMemo(
    () => ({
      type: elementType
    }),
    [elementType]
  );

  const axes = React.useMemo(
    () => [
      {
        primary: true,
        type: "ordinal",
        position: "bottom",
      },
      {
        type: "linear",
        position: "left",
        stacked: true,
      }
    ],
    []
  );

  const getSeriesStyle = React.useCallback(
    series => ({
      color: `url(#${series.index % 4})`,
      opacity:
        activeSeriesIndex > -1
          ? series.index === activeSeriesIndex
            ? 1
            : 0.3
          : 1
    }),
    [activeSeriesIndex]
  );

  const getDatumStyle = React.useCallback(
    datum => ({
      r:
        activeDatumIndex === datum.index &&
        activeSeriesIndex === datum.seriesIndex
          ? 7
          : activeDatumIndex === datum.index
          ? 5
          : datum.series.index === activeSeriesIndex
          ? 3
          : datum.otherHovered
          ? 2
          : 2
    }),
    [activeDatumIndex, activeSeriesIndex]
  );

  

  return (
    <>
      <Chart
        data={data}
        // grouping={grouping}
        series={series}
        axes={axes}
        getSeriesStyle={getSeriesStyle}
        getDatumStyle={getDatumStyle}
        tooltip
        renderSVG={() => (
          <defs>
            <linearGradient id="0" x1="0" x2="0" y1="1" y2="0">
              <stop offset="0%" stopColor="#b4dfc4" />
              <stop offset="100%" stopColor="#b4dfc4" />
            </linearGradient>
        </defs>
        )}
      />
    </>
  );
}
