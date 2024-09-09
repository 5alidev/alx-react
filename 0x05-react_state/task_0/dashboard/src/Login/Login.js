import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
    return (
        <>
        <label className={css(styles.label)} htmlFor="email">Email</label>
        <input className={css(styles.input)} type="email" name="email" id="email" />
        <label className={css(styles.label)} htmlFor="password">Password</label>
        <input className={css(styles.input)} type="password" name="password" id="password" />
        <button>OK</button>
        </>
    );
}

const styles = StyleSheet.create({
    label: {
        marginRight: '6px',
        '@media (max-width: 900px)': {
            display: 'block'
        }
    },
    input: {
        marginRight: '6px',
        '@media (max-width: 900px)': {
            display: 'block'
        }
    }
});

export default Login;