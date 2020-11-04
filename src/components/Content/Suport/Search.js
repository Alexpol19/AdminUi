import React from 'react';
import 'date-fns';
import { Button, Typography, withStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { greenTheme } from '../../../common/ThemeVars';
import {Field, reduxForm} from 'redux-form';
import { minLength, maxLength, validatePhoneNumber } from '../../../common/validators';
import { SearchDataInput, SearchInput } from '../../../common/formControls';

const minLength12 = minLength(12);
const maxLength12 = maxLength(12);

const ColorButton = withStyles((theme) => ({
    root: {
      color: greenTheme.color,
      backgroundColor: greenTheme.color,
    },
}))(Button);

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
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

const Search = ({handleSubmit}) => {
    const classes = useStyles();
    
    return (
        <>
            <Typography component="p" variant="h6">Cauta utilizator:</Typography>
            <form className={classes.root} noValidate onSubmit={handleSubmit}>
              <Field 
                name="idnp"
                component={SearchInput}
                label="IDNP"
                autoFocus={false}
                type="text"
                validate={[minLength12, maxLength12]}
              />
              <Field 
                name="number"
                component={SearchInput}
                label="Nr. telefon"
                autoFocus={false}
                type="text"
                validate={[validatePhoneNumber]}
              />
              <Field 
                name="dateAccess"
                component={SearchDataInput}
                label="Date access"
                initialValue={new Date()}
                autoFocus={true}
                type="text"
              />
              <ColorButton variant="contained" type="submit" className={classes.searchBtn}>
                  Cauta
              </ColorButton>
            </form>
        </>
    )
}

export default reduxForm({
  form: 'search',
})(Search);