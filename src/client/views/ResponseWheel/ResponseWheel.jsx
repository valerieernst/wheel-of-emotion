import React from 'react';
import Styles from './ResponseWheel.module.scss';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup';

const ResponseWheel = ({ history }) => {
    const handleButtonClick = () => {
        history.push('result')
    }

    return (
        <div className={Styles.view}>
            <h2>
                Please tell us how you are feeling
            </h2>
            I will be a magnificent wheel!
            <ButtonGroup
                onButtonClick={handleButtonClick}
                includeBackButton
            />
        </div>
    )
};

export default ResponseWheel;
