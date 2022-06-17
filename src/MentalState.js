import React from 'react';
import {Link} from 'react-router-dom'

function MentalState(props) {
    return (
        <div>
            <div className='home'>
            <Link to='/'>Home/Re-Focus</Link>
            </div>

           <h1>Inside Mental State</h1>
        </div>
    );
}

export default MentalState;