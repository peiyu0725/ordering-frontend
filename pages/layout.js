import React from 'react';
import Head from 'next/head'
import PropTypes from 'prop-types';
import styles from '../styles/page/Layout.module.sass'
import { CssBaseline, Toolbar, useScrollTrigger, Zoom } from '@material-ui/core';
import Header from './header'

const Layout = (props) => {
    const ScrollTop = (props) => {
        const { children, window } = props;
        const trigger = useScrollTrigger({
            target: window ? window() : undefined,
            disableHysteresis: true,
            threshold: 100,
        });

        const handleClick = (event) => {
            const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

            if (anchor) {
                anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        };

        return (
            <Zoom in={trigger}>
                <div onClick={handleClick} role="presentation" className={styles.scrollTop}>
                    {children}
                </div>
            </Zoom>
        );
    }

    ScrollTop.propTypes = {
        children: PropTypes.element.isRequired,
        window: PropTypes.func,
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Ordering System</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <React.Fragment>
                <CssBaseline />
                <Header></Header>
                <Toolbar id="back-to-top-anchor" />
                <main className={styles.main}>
                    {props.children}
                </main>
                <ScrollTop>
                    <div className={styles.scrollTopFab} aria-label="scroll back to top"></div>
                </ScrollTop>
            </React.Fragment>
        </div>
    )
}

export default Layout