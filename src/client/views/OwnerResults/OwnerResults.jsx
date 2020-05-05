import React from 'react';
import SurveyResults from '../SurveyResults/SurveyResults';
import Styles from './OwnerResults.module.scss';

const OwnerResults = () => {
    return (
        <div className={Styles.view}>
            <h2>
                You are the owner. Here is your link to share.
            </h2>
            <a href='http://localhost:3000/response/survey/someId'>http://localhost:3000/response/survey/someId</a>
            <SurveyResults />
        </div>
    )
};

export default OwnerResults;
