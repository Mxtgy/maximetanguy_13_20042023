const METHOD_POST = 'POST';
const METHOD_PUT = 'PUT';

/**
 * Fetch the data
 * @param { string } path Url used for the fetch
 * @param { Object } content Object with the method, headers and body
 * @returns { (Object|boolean) }
 */
async function fetchData(path, content) {
    const url = 'http://localhost:3001/api/v1/user' + path;
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

/**
 * Initialize the fetch for login
 * @param { string } username User's username
 * @param { string } password User's password 
 * @returns { Object | boolean}
 */
async function fetchLogin(username, password) {
    const path = '/login';
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
    return fetchData(path, callObject);
}

/**
 * Initialize the fetch to get user's profile data
 * @param { string } bearer JWT Bearer Token
 * @returns { Object | boolean}
 */
async function fetchProfile(bearer) {
    const path = '/profile';
    const callObject = {
        method: METHOD_POST,
        headers: {
            'Authorization': 'Bearer ' + bearer
        }
    }
    return fetchData(path, callObject);
}

/**
 * Initialize the fetch to change User's firstname and/or lastname 
 * @param { string } bearer JWT Bearer Token
 * @param { string } firstName User's firstname
 * @param { string } lastName User's lastname
 * @returns { Object | boolean}
 */
async function updateUser(bearer, firstName, lastName) {
    const path = '/profile';
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
    return fetchData(path, callObject);
}

export { fetchLogin, fetchProfile, updateUser };