import React from 'react';
import axios from 'axios';

const apiURL = 'https://randomuser.me/api/?results=100&nat=us,fr,tr';

const apiCall = () => {
    return axios.get(apiURL);
}

export default apiCall;


