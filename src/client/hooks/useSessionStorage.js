import React, { useState, useEffect } from 'react';

const useSessionStorage = (initialState, key) => {
    const get = () => {
        console.log('key', key)
        const storage = sessionStorage.getItem(key);
        console.log(storage)
        if(storage) return JSON.parse(storage);
        console.log(sessionStorage)
        return initialState;
    }

    const [value, setValue] = useState(get());

    useEffect(() => {
        sessionStorage.setItem(key, JSON.stringify(value));
    }, [value])

    return [value, setValue];
};

export default useSessionStorage;