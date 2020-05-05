import React, { useReducer } from 'react';

const useEnhancedReducer = (reducer, initialState) => {
    return useReducer(reducer, initialState)
};

export default useEnhancedReducer;
