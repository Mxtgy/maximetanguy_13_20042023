const METHOD_POST = 'POST';
const METHOD_PUT = 'PUT';

async function fetchData(type, content) {
    const url = 'http://localhost:3001/api/v1/user' + type;
    try {
        const response = await fetch(url, content);
        const json = await response.json();
        if (json && json.status === 200) {
            return json;
        }
        return false;
    } catch(err) {
        console.log(err);
    }
}

async function fetchLogin(username, password) {
    const type = '/login';
    const content =  {
        "email": username,
        "password": password
    };
    const callObject = {
        method: METHOD_POST,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(content)
    }
    return fetchData(type, callObject);
}

async function fetchProfile(bearer) {
    const type = '/profile';
    const callObject = {
        method: METHOD_POST,
        headers: {
            'Authorization': 'Bearer ' + bearer
        }
    }
    return fetchData(type, callObject);
}

async function updateUser(bearer, firstName, lastName) {
    const type = '/profile';
    const content =  {
        "firstName": firstName,
        "lastName": lastName
    };
    const callObject = {
        method: METHOD_PUT,
        headers: {
            'Authorization': 'Bearer ' + bearer,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(content)
    }
    return fetchData(type, callObject);
}

export { fetchLogin, fetchProfile, updateUser };