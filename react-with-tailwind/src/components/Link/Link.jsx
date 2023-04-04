import React from 'react';

const Link = ({route}) => {
    return (
        <li className='mr-12 text-blue-50 hover:text-purple-600 font-semibold py-1' >
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;