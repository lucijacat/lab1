import { useNavigate } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';


function Login() {
    const navigate = useNavigate();
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    const navigateToMain = () => {
        navigate("/");
      };

    return(
        <div className='main-container'>
            {!isAuthenticated && (
            <button className='login-button' onClick={() => loginWithRedirect()}>
                Log In
            </button>
            )}
            {isAuthenticated ? navigateToMain() : null}
        </div>
    )
}

export default Login; 