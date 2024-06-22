import axios from "axios";

const apiUrl = "http://localhost:4000/api";

const headers = {
    'Content-Type': 'application/json'
};

// alert("Registering");

export const RegisterUSER = async (data) => {
    return await axios.post(`${apiUrl}/register`, data, { headers })
        .then(response => {
            console.log('POST request successful');
            console.log('Response data:', response.data);
        })
        .catch(error => {
            console.error('Error making POST request:', error);
        });
}

export const loginUSER = async ({ username, password }) => {
    try {
        const response = await axios.post(`${apiUrl}/login`, { username, password });
        localStorage.setItem('token', response.data.token);
        console.log('setting the session token');
        alert('login success');
    } catch (error) {
        console.error(error.response.data.msg)
    }

}

export const RegisterJOB = async (data) => {
    return await axios.post(`${apiUrl}/registerjob`, data, { headers })
        .then(response => {
            console.log('POST request successful');
            console.log('Response data:', response.data);
        })
        .catch(error => {
            console.error('Error making POST request:', error);
        });
}

