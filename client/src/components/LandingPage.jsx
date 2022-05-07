import React from 'react';
import {Link} from 'react-router-dom'

export default function LandingPage(){
    return(
        <div>
            <h1>Welcome to the World</h1>
        <Link to="/home">
            <button>Let's travel!</button>
        </Link>
        </div>
)}