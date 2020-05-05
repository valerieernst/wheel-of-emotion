import React from 'react';
import { useHistory } from 'react-router';
import Button from '../../components/Button/Button';
import TextInput from '../../components/TextInput/TextInput';
import Styles from './ResponseDemographic.module.scss';
import useSessionStorage from '../../hooks/useSessionStorage';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup';

const data = [
    {
        label: 'teting q',
        id: 'one',
        
    },
    {
        label: 'teting qestion1',
        id: 'two',
    },
    {
        label: 'teting qestion2',
        id: 'three',
    },
    {
        label: 'teting question3',
        id: 'four',
    },
    {
        label: 'teting question4',
        id: 'five',
    },
]

const ResponseDemographic = ({ history }) => {
    const [formData, setFormData] = useSessionStorage({}, 'demographicInfo');

    const handleClick = (e) => {
        e.preventDefault();

        history.push('someId/wheel')
    }

    return (
        <div className={Styles.view}>
            <h2>Tell Us About Yourself</h2>
            <form id='demographic_info' className={Styles.form}> 
                {data.map(question => (
                    <div className={Styles.inputContainer}>
                        <TextInput
                            fullWidth
                            label={question.label}
                        />
                    </div>
                ))}
            </form>
            <ButtonGroup
                onButtonClick={handleClick}
            />
        </div>
    );
};

export default ResponseDemographic;
