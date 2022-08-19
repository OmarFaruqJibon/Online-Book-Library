import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <div>
            <nav className='navigation'>
                <Link to="/">
                    Home
                </Link>
                <Link to="/show-book">
                    Show Book
                </Link>
                <Link to="/add-book">
                    Add Book
                </Link>
            </nav>
        </div>
    );
};

export default Navigation;