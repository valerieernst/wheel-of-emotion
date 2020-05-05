import React from 'react';
import { useHistory } from "react-router-dom";
import Button from '../../components/Button/Button';
import Checkbox from '../../components/Checkbox/Checkbox';
import Styles from './SelectDemographics.module.scss';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup';

const questions = [
    {
        id: 'gender',
        label: 'What is your gender?',
    },
    {
        id: 'location',
        label: 'Where are you?',
    },
    {
        id: 'age',
        label: 'How old are you'
    },
    {
        id: 'company',
        label: 'Where do you work?'
    }
];

const SelectDemographics = () => {
    const history = useHistory();

    const handleButtonClick = (e) => {
        history.push('fakeID')
    }

    return (
        <div className={Styles.view}>
            <h2>
                Please select some questions you would like to ask you audience
            </h2>
            <div>
                {questions.map(q => (
                    <div key={q.id} className={Styles.question}>
                        <Checkbox />
                        <p>{q.label}</p>
                    </div>
                ))}
                <div className={Styles.question}>
                    <Checkbox />
                    <p>Custom question</p>
                </div>
            </div>
            <ButtonGroup
                onButtonClick={handleButtonClick}
                includeBackButton
            />
        </div>
    )
};

export default SelectDemographics;
