import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex justify-between bg-slate-800 px-8 py-3'>
            <Link to="/">NextJS CRUD</Link>
            <Link to="/add">Add New Topic</Link>
        </nav>
    );
};

export default Navbar;