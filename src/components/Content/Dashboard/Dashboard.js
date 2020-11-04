import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ChartPage from './ChartPage/ChartPage';
import Report from './Report/Report';
import { greenTheme } from '../../../common/ThemeVars';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        children
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  tabs: {
    backgroundColor: greenTheme.color,
    paddingLeft: theme.spacing(6)
  },
  tab: {
    minWidth: '130px',
  },
}));

const CustomTabs = withStyles({
  indicator: {
    backgroundColor: '#fff',
  },
})(Tabs);

export default function Dashboard() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <CustomTabs 
          className={classes.tabs} 
          value={value} 
          onChange={handleChange} 
          aria-label="simple tabs"
          >
          <Tab className={classes.tab} label="Chart" {...a11yProps(0)} />
          <Tab className={classes.tab} label="Report" {...a11yProps(1)} />
        </CustomTabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ChartPage/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Report />
      </TabPanel>
    </div>
  );
}