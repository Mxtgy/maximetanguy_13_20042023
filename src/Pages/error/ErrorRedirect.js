import { Navigate } from 'react-router-dom';
function ErrorRedirect() {
    return (
        <Navigate to='/login' />
    );
}

export default ErrorRedirect;