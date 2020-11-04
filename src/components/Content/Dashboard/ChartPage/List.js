import React from 'react';
import { makeStyles, Paper, TableContainer, withStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const StyledTableCell = withStyles((theme) => ({
    head: {
      paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5)
    },
    body: {
      fontSize: 14,
      color: 'grey',
      paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5)
    },
}))(TableCell);

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: '20px',
    },
    table: {
        width: 'auto',
        minWidth: 1050,
        margin: theme.spacing(3),
        '& th': {
            fontWeight: 700
        },
        '& td:last-child': {
            paddingRight: theme.spacing(1)
        },
        '& th:last-child': {
            paddingRight: theme.spacing(1)
        },
        '& tr:last-child td': {
            borderBottom: 'none'
        }
    },
}));

const List = ({dates}) => {
    const classes = useStyles();
    return (
        <TableContainer component={Paper} className={classes.paper} elevation={3}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Data</StyledTableCell>
                        <StyledTableCell>Numar utilizatori total</StyledTableCell>
                        <StyledTableCell>Numar utilizatori unici</StyledTableCell>
                        <StyledTableCell>Numar utilizatori unici</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {dates.map((data) => (
                    <TableRow key={data.id}>
                        <StyledTableCell scope="row">
                            {data.date}
                        </StyledTableCell>
                        <StyledTableCell>{(data.total.totalUnic + data.total.totalFrecvent)}</StyledTableCell>
                        <StyledTableCell>{data.total.totalUnic}</StyledTableCell>
                        <StyledTableCell>{data.total.totalFrecvent}</StyledTableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default List