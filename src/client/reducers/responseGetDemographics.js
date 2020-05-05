import {
    REPONSE_GET_DEMOGRAPHICS, REPONSE_GET_DEMOGRAPHICS_SUCCESS, REPONSE_GET_DEMOGRAPHICS_FAIL
} from './actions'; 

const reponseGetDemographicsReducer = (state, action) => {
    switch(action.type) {
        case REPONSE_GET_DEMOGRAPHICS:
            return 'loading';
        case REPONSE_GET_DEMOGRAPHICS_SUCCESS: 
            return 'success';
        case REPONSE_GET_DEMOGRAPHICS_FAIL:
            return 'error';
        default:
            return state;
    }
}

export default reponseGetDemographicsReducer;
