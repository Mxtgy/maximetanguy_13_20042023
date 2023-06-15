const METHOD = 'POST';

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
        method: METHOD,
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
        method: METHOD,
        headers: {
            'Authorization': 'Bearer ' + bearer
        }
    }
    return fetchData(type, callObject);
}

export { fetchLogin, fetchProfile };