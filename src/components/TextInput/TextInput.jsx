import React, { useState } from 'react';
import Styles from  './TextInput.module.scss';
import classnames from 'classnames';

const TextInput = (props) => {
    const {
        id, defaultValue, label, isRequired, fullWidth,
    } = props;
    // use an empty string to have a controlled component even if no defaultValue
    const [text, setText] = useState(defaultValue || '');

    return (
        <div className={classnames(Styles.container, {[Styles.fullWidth]: fullWidth} )}>
            <label for={id} className={Styles.label}>{label}</label>
            <input
                className={Styles.input}
                onChange={(e) => setText(e.target.value)}
                id={id}
                type='text'
                value={text}
            />
        </div>
    );
};

export default TextInput;
