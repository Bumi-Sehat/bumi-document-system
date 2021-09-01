import React, { useState } from 'react';

const formPage = (cb) => {
    const [ inputs, setInputs ] = useState ({ });

    const apiHost = 'http://localhost:3000/formSubmit';

    const handleSubmit = (e) => {
        if (e) {
            e.preventDefault();
        }

        fetch(apiHost, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputs)
        })
        .then(rest => {
            if (!rest.ok) {
                throw new Error('Network response was not ok');
            }
            console.log('Entries added!', inputs);
            return rest;
        })
        .then (data => {
            setInputs (inputs => ({ }));
        })
        .catch (error => {
            console.log('Error received', error);
        })
    }

    const handleInputChange = (e) => {
        e.persist();
        setInputs (inputs => ({ ...inputs, [e.target.name]: e.target.value }));
    }

    return {
        inputs,
        handleSubmit,
        handleInputChange,
    };
}