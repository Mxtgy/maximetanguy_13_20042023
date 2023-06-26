import { Navigate } from 'react-router-dom';

/*
This function redirects to the homepage if there is an error.
*/
function ErrorRedirect() {
    return (
        <Navigate to='/' />
    );
}

export default ErrorRedirect;