import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from '../components/LogoutButton';
// import Axios from 'axios'

function Table() {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth0();

    // const [natjecanje, setNatjecanje] = useState("");
    // const [natjecatelji, setNatjecatelji] = useState("");
    // const [bodovanje, setBodovanje] = useState("");

    const navigateToLogin = () => {
        navigate("/login");
    };


    return(
        isAuthenticated ? (
            <div className='main-container'>
                <LogoutButton/>
                <div className='form-container'>
                    
                </div>
            </div>
        ) : navigateToLogin()
    ) 
}

export default Table;