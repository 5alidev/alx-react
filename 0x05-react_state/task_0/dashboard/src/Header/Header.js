import React from 'react';
import logo from '../assets/logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const Header = () => {
    return (
        <div className={css(styles.App_header)}>
            <img src={logo} alt="Holberton logo" className={css(styles.App_header_img)} />
            <h1 className={css(styles.App_header_h1)}>School dashboard</h1>
        </div>
    );
}

const styles = StyleSheet.create({
    App_header: {
        display: 'flex',
        alignItems: 'center',
        borderBottom: '6px solid #E0354B',
    },
    App_header_h1: {
        color: '#E0354B',
    },
    App_header_img: {
        height: '200px',
    }
});

export default Header;