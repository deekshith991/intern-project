import axios from "axios";

const apiUrl = "http://localhost:4000/register";

const headers = {
    'Content-Type': 'application/json'
};

alert("Registering");

export const RegisterUSER = async (data) => {
    return await axios.post(apiUrl, data, { headers })
        .then(response => {
            console.log('POST request successful');
            console.log('Response data:', response.data);
        })
        .catch(error => {
            console.error('Error making POST request:', error);
        });
}


