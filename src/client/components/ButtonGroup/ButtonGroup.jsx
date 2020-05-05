import React from 'react';
import { useHistory } from 'react-router';
import Button from '../Button/Button';
import Styles from './ButtonGroup.module.scss';
import classnames from 'classnames';

const ButtonGroup = ({ onButtonClick, includeBackButton }) => {
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }

    return (
        <div className={classnames(Styles.buttonGroup, {[Styles.single]: !includeBackButton})}>
            {includeBackButton &&
                <Button onClick={handleBackButtonClick}>
                    Go Back
                </Button>
            }
            <Button onClick={onButtonClick}>
                Continue
            </Button>
        </div>
    )
};

export default ButtonGroup;