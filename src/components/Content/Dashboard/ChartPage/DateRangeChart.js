import React from "react";
import { DateRangePicker } from "materialui-daterange-picker";
import { Box, FormControl, IconButton, InputLabel, makeStyles } from "@material-ui/core";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import FilledInput from '@material-ui/core/FilledInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import * as moment from 'moment';

const useStyles = makeStyles((theme) => ({
  box: {
    position: 'relative'
  },
  dateRange: {
    padding: '10px',
    position: 'absolute',
    right: 0
  },
  textField: {
    minWidth: 250,
    fontSize: '0.8rem'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
    
}));

const DateRangeChart = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [dateRange, setDateRange] = React.useState({});
  const toggle = () => setOpen(!open);
  const selectRange = (range) => {
    toggle();
    const startDate = new Date(range.startDate)
    const endDate = new Date(range.endDate)
    setDateRange(range);
    setDate({
        label: range.label ? range.label: 'Custom range',
        date: moment(startDate).format('D MMM YYYY') + '-' + moment(endDate).format('D MMM YYYY')
    });
    props.getRaport({startDate, endDate})
  }
  const [dateValues, setDate] = React.useState({
      label: 'Choose range',
      date: ''
  });
  return (
      <Box className={classes.box}>
        <FormControl variant="filled">
          <InputLabel htmlFor="filled-adornment-date">{dateValues.label}</InputLabel>
          <FilledInput
            id="filled-adornment-date"
            type="text"
            className={classes.textField}
            value={dateValues.date}
            onClick={toggle}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle date visibility"
                  edge="end"
                >
                  {!open ? <ArrowDropDownIcon style={{ color: '#000'}} /> : <ArrowDropUpIcon style={{ color: '#000'}} />}
                </IconButton>
              </InputAdornment>
            }
            inputProps={{
                readOnly: true,
                size: 'big'
            }}
          />
        </FormControl>
        <DateRangePicker
            open={open}
            toggle={toggle}
            onChange={(range) => selectRange(range)}
            wrapperClassName={classes.dateRange}
        />
    </Box>
  );
}
 
export default DateRangeChart;