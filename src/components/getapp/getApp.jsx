
import React from 'react';
import { Link } from 'react-router-dom';
const GetApp = () => {
    return (
        <div className="get-app">
            <h1>Get App Page</h1>
            <Link to="/"><button justify-content="center">
            Home</button>
            </Link>
        </div>
    );
};

export default GetApp;