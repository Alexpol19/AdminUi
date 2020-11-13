import React from 'react';
import { Link, makeStyles, Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { greenTheme } from '../../../common/ThemeVars';

const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: theme.spacing(3)
    },
    resultSpan: {
        paddingLeft: theme.spacing(1)
    },
    table: {
        marginLeft: theme.spacing(-2),
        width: 'auto',
        minWidth: 1150,
        '& th': {
            fontWeight: 700
        }
    },
    link: {
        color: greenTheme.color,
        textDecoration: 'underline',
        '&:hover': {
            color: greenTheme.hoverColor,
            textDecoration: 'none'
        }
    }
}));

const SearchResult = ({clients}) => {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();
    function prettify(num, step) {
        var n = num.toString().replace(/\+/g,'');
        if(step === 3){
            return n.replace(/(\d{3})/g, '$1 ');
        }
        return n.replace(/(\d{4})/g, '$1 ');
    }
    return (
        <div className={classes.root}>
            <Typography component="p" variant="h6">Rezultate cautare:
                <Typography component="span" variant="h6" className={classes.resultSpan}>{clients.length ? clients[0].fullName : 'Not found'}</Typography>
            </Typography>
            {clients.length ? <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Nume Prenume</TableCell>
                        <TableCell>IDNP</TableCell>
                        <TableCell>Nr. Telefon</TableCell>
                        <TableCell>PAN Card</TableCell>
                        <TableCell>Last transaction</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {clients.map((client) => (
                    <TableRow key={client.id}>
                        <TableCell scope="row">
                            <Link className={classes.link} href="#" onClick={preventDefault}>
                                {client.fullName}
                            </Link>
                        </TableCell>
                        <TableCell>{client.idnp}</TableCell>
                        <TableCell>+{prettify(client.number, 3)}</TableCell>
                        <TableCell>{prettify(client.panCard, 4)}</TableCell>
                        <TableCell>{client.lastTransaction}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table> : <></>}
        </div>
    )
}

export default SearchResult