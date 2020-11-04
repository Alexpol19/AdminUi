import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      minHeight: '100vh'
    },
    box: {
      paddingLeft: theme.spacing(7),
    }
}));

const Report = (props) => {

    const classes = useStyles();

    return (
        <Box p={3} className={classes.box}>
            <Typography >
                Report Tab
            </Typography>
        </Box>
    )
}

export default Report