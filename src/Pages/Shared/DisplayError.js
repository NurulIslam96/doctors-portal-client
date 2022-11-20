import React from 'react';
import { useRouteError } from 'react-router-dom';

const DisplayError = () => {
    const error = useRouteError();
    return (
        <div>
            <p className='text-4xl text-red-500'>Something went WRong</p>
            <p className='text-4xl text-red-500'>{error.statusText || error.message}</p>
        </div>
    );
};

export default DisplayError;