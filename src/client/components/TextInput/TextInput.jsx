import React, { useState, useCallback } from 'react';
import Styles from  './TextInput.module.scss';
import classnames from 'classnames';

const TextInput = (props) => {
    const {
        id, defaultValue, label, isRequired, fullWidth, onChange,
    } = props;
    // use an empty string to have a controlled component even if no defaultValue
    const [text, setText] = useState(defaultValue || '');

    const handleChange = useCallback((e) => {
        setText(e.target.value);

        if (onChange) onChange(e);
    }, [onChange]);

    return (
        <div className={classnames(Styles.container, {[Styles.fullWidth]: fullWidth} )}>
            <label for={id} className={Styles.label}>{label}</label>
            <input
                className={Styles.input}
                onChange={handleChange}
                id={id}
                required={isRequired}
                type='text'
                value={text}
            />
        </div>
    );
};

export default TextInput;
