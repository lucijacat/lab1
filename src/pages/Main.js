import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from '../components/LogoutButton';
// import Axios from 'axios'

function Main() {
    const domain_link = process.env.REACT_APP_DOMAIN_LINK
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth0();

    const [natjecanje, setNatjecanje] = useState("");
    const [natjecatelji, setNatjecatelji] = useState("");
    const [bodovanje, setBodovanje] = useState("");

    const navigateToLogin = () => {
        navigate("/login");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(natjecanje === ''){
            alert('Molimo unesite naziv natjecanja!')
        }
        else if(natjecatelji.split(/;|\r?\n/).filter(Boolean).length < 4 || natjecatelji.split(/;|\r?\n/).filter(Boolean).length > 8) {
            alert('Molimo unesite točan broj natjecatelja!')
        }
        else if(bodovanje === '') {
            alert('Molimo odaberite način bodovanja!')
        }
    };

    const saveNatjecanje = () => {
        console.log(domain_link)

        // Axios.post(domain_link + "/addCompetition", {natjecanje, natjecatelji, bodovanje}).then((response) => {
        //     console.log("response")
        // });
        navigate("/table");
    }

    return(
        isAuthenticated ? (
            <div className='main-container'>
                <LogoutButton/>
                <div className='form-container'>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label>Unesi naziv natjecanja: </label>
                            <input type="text" value={natjecanje} onChange={(e) => setNatjecanje(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label>Unesi popis natjecatelja&#40;4-8&#41;: </label>
                            <textarea
                                type="text" value={natjecatelji} onChange={(e) => setNatjecatelji(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label>Odaberi sustav bodovanja u obliku pobjeda/remi/poraz: </label>
                            <select value={bodovanje} onChange={(e) => setBodovanje(e.target.value)}>
                                <option value="">Select an option</option>
                                <option value="nogomet">3/1/0</option>
                                <option value="sah">1/0,5/0</option>
                                <option value="kosarka">2/1/0</option>
                            </select>
                        </div>
                        <button type="submit" onClick={saveNatjecanje}>Submit</button>
                    </form>
                </div>
            </div>
        ) : navigateToLogin()
    ) 
}

export default Main;