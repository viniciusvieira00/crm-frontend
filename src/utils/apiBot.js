import axios from 'axios';
import react from 'react';


export default axios.create( {
    baseURL: `http://localhost:8002/`
    // baseURL: `https://bot-whatsapp-app.herokuapp.com/`
});