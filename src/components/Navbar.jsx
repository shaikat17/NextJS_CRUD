import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center bg-slate-800 px-8 py-3'>
            <Link href="/" className='text-white font-black'>NextJS CRUD</Link>
            <Link className='bg-white p-2 rounded' href="/add">Add New Topic</Link>
        </nav>
    );
};

export default Navbar;