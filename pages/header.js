import React from 'react';
import { useRouter } from 'next/router'
import PropTypes from 'prop-types';
import styles from '../styles/Layout.module.sass'
import { AppBar, Toolbar, Typography, useScrollTrigger, IconButton, Badge, Tooltip } from '@material-ui/core';
import { AccountCircle, ShoppingCart, LibraryAdd } from '@material-ui/icons';

const Header = (props) => {
    const router = useRouter()
    
    const ElevationScroll = (props) => {
        const { children, window } = props;
        const trigger = useScrollTrigger({
            disableHysteresis: true,
            threshold: 0,
            target: window ? window() : undefined,
        });

        return React.cloneElement(children, {
            elevation: trigger ? 4 : 0,
        });
    }

    ElevationScroll.propTypes = {
        children: PropTypes.element.isRequired,
        window: PropTypes.func,
    };
    const onDirectHome = () => { 
        router.push('/')
    }
    const onDirectCart = () => {
        router.push('/cart')
    }

    return (
        <ElevationScroll {...props}>
            <AppBar className={styles.appBar}>
                <Toolbar className={styles.toolBar}>
                    <Typography className={styles.logo} variant="h6" onClick={onDirectHome}>NEXT</Typography>
                    <div className={styles.rightBtnWrapper}>
                        <Tooltip title="Import" aria-label="import">
                            <IconButton color="inherit">
                                <LibraryAdd />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Cart" aria-label="cart">
                            <IconButton color="inherit" onClick={onDirectCart}>
                                <Badge badgeContent={4} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Account" aria-label="account">
                            <IconButton
                                color="inherit">
                                <AccountCircle />
                            </IconButton>
                        </Tooltip>
                    </div>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    )
}

export default Header