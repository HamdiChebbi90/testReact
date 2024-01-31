import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';

const Navbar = () => {
    return (
        <div className="navbar">
           
            <div >
                <ul className="navbar__links">
                <div className='left'>
                    <li className="navbar__links__item">
                        <Link to="/">LISTEN LIVE</Link>
                    </li>
                    <li className="navbar__links__item">
                        <Link to="/about">CONTACT US</Link>
                    </li>
                    <li className="navbar__links__item">
                        <Link to="/stack">GET THE APP</Link>
                    </li>
                </div>

                    <li className="navbar__links__icon">
                    <AiFillYoutube color='white' size='2rem'/>
                    </li>
                    <li className="navbar__links__icon">
                    <AiFillInstagram color='white' size='1.7rem'/>
                    </li>
                    <li className="navbar__links__icon">
                    <AiFillFacebook color='white' size='1.7rem'/>

                    </li>

                </ul>
            </div>
        </div>
    );
}

export default Navbar;