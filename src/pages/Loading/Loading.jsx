import React from 'react';
import { PuffLoader } from 'react-spinners';

const Loading = () => {
    return (
        <>
            <div className='min-h-screen flex justify-center items-center'>
                <PuffLoader color="#219E64" size={60} />
            </div>
        </>
    );
};

export default Loading;