import axios from 'axios';

const netRequest = axios.create({
    //timeout:
    headers: { 'content-type': 'application/json' }
});


// netRequest.defaults.baseURL = "https://api.geoniljang.com/api";
netRequest.defaults.baseURL = "http://localhost:3653/api/v1/";
export default netRequest;
