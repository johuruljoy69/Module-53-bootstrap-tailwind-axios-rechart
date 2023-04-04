import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Contact', path: '/contact' },
        { id: 4, name: 'Products', path: '/products' },
        { id: 5, name: 'Services', path: '/services' }
    ];

    return (
        <nav className='bg-purple-400 px-4' >
            <div onClick={() => setOpen(!open)} className='md:hidden' >
                <span>{
                    open === true ? 
                    <XMarkIcon className="h-10 w-10 text-blue-50" />
                    : <Bars3Icon className="h-10 w-10 text-blue-50" />
                    }</span>


            </div>

            <ul className={`md:flex absolute md:static duration-500 pl-5 pb-2 py-2 bg-purple-400 ${open ? 'top-8' : '-top-44'}`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;