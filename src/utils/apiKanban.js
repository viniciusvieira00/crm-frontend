import axios from 'axios';
import react from 'react';


export default axios.create( {
    // baseURL: `http://localhost:8001/api/v1/`
    baseURL: `https://management-api-br.herokuapp.com/api/v1/`
});