import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Header/Header';
import AsideNav from './AsideNav/AsideNav';
import Content from './Content/Content';
import { connect } from 'react-redux';
import {setCurrentPage} from '../redux/aside';
import { getCurrentPage } from '../redux/selectors/aside-selectors';

const Main = ({nav, currentPage, setCurrentPage}) => {
    return (
        <>
            <CssBaseline />
            <Container maxWidth={false} disableGutters={true}>
                <Header />
                <AsideNav nav={nav} setCurrentPage={setCurrentPage} />
                <Content currentPage={currentPage} />
            </Container>
        </>
    );
}

const mapStateToProps = state => {
    return {
        nav: state.aside,
        currentPage: getCurrentPage(state.aside)
    }
}

export default connect(mapStateToProps, {setCurrentPage})(Main);