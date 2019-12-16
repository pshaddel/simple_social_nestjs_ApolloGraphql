import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from './header'
class Menu extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <center><div className={'MenuContainer'}>
                    <Link className={'MenuItem'} to={'/'}><div className={'MenuCell'}>Home</div></Link>
                    <Link className={'MenuItem'} to={'/newpost'}><div className={'MenuCell'}>New Post</div></Link>
                    <Link className={'MenuItem'} to={'/documentation'}><div className={'MenuCell'}>documentation</div></Link>
                </div></center>
            </Fragment>

        );
    }
}

export default Menu;