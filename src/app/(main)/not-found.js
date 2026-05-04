

import Link from 'next/link';
import { IoArrowBack } from 'react-icons/io5';

const Notfound = () => {
    return (
        <div className='flex items-center justify-center min-h-screen bg-linear-to-br from-blue-600 via-base-700 to-red-500'>
            <div className='text-center px-6'>
                {/* 404 Text */}
                <div className='relative mb-8'>
                    <h1 className='text-9xl font-black text-white drop-shadow-2xl animate-bounce'>
                        404
                    </h1>
                    <p className='text-2xl font-bold text-white mt-4'>Page Not Found</p>
                </div>

                {/* Description */}
                <p className='text-lg text-gray-100 mb-8 max-w-md mx-auto'>
                    Oops! The page youre looking for seems to have wandered off. Lets get you back on track.
                </p>

                {/* Decorative Elements */}
                <div className='flex justify-center gap-4 mb-8'>
                    <div className='w-2 h-2 bg-white rounded-full animate-pulse'></div>
            
                </div>

                {/* Buttons */}
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                    <Link 
                        href='/' 
                        className='flex items-center justify-center gap-2 bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl'
                    >
                        <IoArrowBack /> Back to Home
                    </Link>
                  
                </div>

                {/* Footer Text */}
                <p className='text-gray-100 text-sm mt-12'>
                    Error Code: <span className='font-mono font-bold'>404_NOT_FOUND</span>
                </p>
            </div>
        </div>
    );
};

export default Notfound;