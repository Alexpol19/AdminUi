import React, { useEffect } from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import { greenTheme } from './ThemeVars';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    input: {
      '& label.Mui-focused': {
          color: greenTheme.color,
      }, 
      '& label.Mui-focused.MuiInputLabel-root': {
          color: greenTheme.color,
      },
      '& label.MuiInputLabel-shrink': {
          color: greenTheme.color,
      },
      '& .MuiInput-underline:after': {
          borderBottomColor: '#cfcfcf',
      },
      
    },
    searchBtn: {
      color: '#fff',
      padding: theme.spacing(1.5),
      '&:hover': {
        backgroundColor: greenTheme.hoverColor
      }
    }
}));

const FormControl = ({ children }) => {
    return(
        <>
            {children}
        </>
    )
}

export const SearchInput = (props) => {
    const classes = useStyles();
    return (<FormControl {...props}>
        <TextField 
            {...props.input} 
            type={props.type} 
            label={props.label} 
            className={classes.input}
            error={props.meta.touched && props.meta.error ? true : false}
            helperText={props.meta.touched &&
                (props.meta.error && props.meta.error)}
        />
    </FormControl>)
}
export const SearchDataInput = (props) => {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
    return (<FormControl {...props}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
            {...props.input}
            autoFocus={props.autoFocus}
            disableToolbar
            variant="inline"
            margin="normal"
            id="date-picker-dialog"
            label={props.label}
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={(e) => {props.input.onChange(e); handleDateChange(e)}}
            KeyboardButtonProps={{
                'aria-label': 'change date',
            }}
            className={classes.input}
            />
        </MuiPickersUtilsProvider>
    </FormControl>)
}