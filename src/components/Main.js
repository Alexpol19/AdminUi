import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Header/Header';
import AsideNav from './AsideNav/AsideNav';
import Content from './Content/Content';
import { connect } from 'react-redux';

const Main = ({nav, setCurrentPage}) => {
    return (
        <>
            <CssBaseline />
            <Container maxWidth={false} disableGutters={true}>
                <Header />
                <AsideNav nav={nav}/>
                <Content />
            </Container>
        </>
    );
}

const mapStateToProps = state => {
    return {
        nav: state.aside,
    }
}

export default connect(mapStateToProps, {})(Main);