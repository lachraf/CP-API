import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './DescriptionPage.css';

const DescriptionPage= ({ Description }) => {
    const params = useParams();
    const navigate = useNavigate();
    const User = Description.find(el => el.title === params.title);
    return (
        <>
        <h3>{User.name}</h3>
        <div className='Descriptionpage'>
            {User.video}
            <p className='Summary'> {User.username} </p>
            </div>
            <p className='Summary'> {User.imag} </p>

            <div className='Descriptionpage'>
                <p className='Cast'>{User.website}</p>
                <button className='GoBack' onClick={() => navigate(-1)}>Back</button>
                </div>
                </>
                )
            }

export default DescriptionPage;