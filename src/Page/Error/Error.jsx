import { Link } from 'react-router-dom';
import error from '../../../public/Error.jpg'

const Error = () => {
    return (
        <>
            <div className="text-center mt-7">
                <h1 className="text-5xl uppercase font-semibold">Sorry</h1>
                <p className="text-2xl text-[#373636b9]">This page is not found.</p>
            </div>
            <img src={error} alt="Error image" className='w-6/12 mx-auto h-3/6 my-3' />
            <div className='text-center'>
                <Link to='/' className='btn bg-[#F7A582] text-[#FFFFFF] text-xl px-12 py-2 rounded-xl hover:bg-[#f5976f]'>Back to Home</Link>
            </div>
        </>
    );
};

export default Error;