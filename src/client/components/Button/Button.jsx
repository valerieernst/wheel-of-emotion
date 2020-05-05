import React from 'react';
import Styles from './Button.module.scss';

const Button = ({ onClick, children }) => {
    return (
        <button
            className={Styles.button}
            onClick={onClick}
        >
            { children }
        </button>
    )
}

export default Button;
