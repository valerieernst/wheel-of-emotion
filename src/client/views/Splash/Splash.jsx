import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Styles from './Splash.module.scss';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup';
import Tabs from '../../components/Tabs/Tabs';
import TextInput from '../../components/TextInput/TextInput';

const tabs = [
    {
        id: 'premade',
        label: 'One of ours',
        content: (<div>How are you feeling</div>),
    },
    {
        id: 'original',
        label: 'One of yours',
        content: (<div><TextInput label='Type your question here' /></div>),
    },
]

const Splash = () => {
    let history = useHistory();
    

    const handleButtonClick = (e) => {
        history.push('survey/create')
    }

    return (
        <div className={Styles.view}>
            <h1>Understand how your audience is feeling.</h1>
            <h2>Select our question or write your own.</h2>
            <Tabs tabs={tabs} />
            <ButtonGroup
                onButtonClick={handleButtonClick}
            />
        </div>
    )
};

export default Splash;
