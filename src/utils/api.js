import axios from 'axios';
import react from 'react';


export default axios.create( {
    baseURL: `http://localhost:8000/`
    // baseURL: `https://crm-app-d4b.herokuapp.com/`
});