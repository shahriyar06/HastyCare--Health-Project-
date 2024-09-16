import { IoMdStar } from 'react-icons/io';
import imtiaz from '../../../public/All Image/Imtiaz.jpg'
import { GiStethoscope } from 'react-icons/gi';
import { IoLocationOutline } from 'react-icons/io5';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link } from 'react-router-dom';


const Doctors = () => {
    return (
        <div>
            {/* Doctor view part */}
            <>
                <div className='w-[400px] mx-auto my-6'>
                    <div className='shadow-md p-4 rounded-xl shadow-[#F7A582]'>
                        <div className="">
                            <img src={imtiaz} alt="Imtiaz Photo" className='rounded-md h-64 w-full' />
                        </div>
                        <div className="mt-2 text-lg p-2">
                            <div className="my-3">
                                <h1 className='text-3xl text-[#4258eb] font-bold'>Md Imtiaz Ahmed</h1>
                                <h1 className='text-sm font-'>MBBS (TMC)</h1>
                                <h2 className='flex gap-2 items-center text-[#ff2929] text-xl'><GiStethoscope />Medicine</h2>
                            </div>
                            <hr className='my-2' />
                            <div className='mb-4'>
                                <h2 className='flex gap-2 items-center'><IoLocationOutline />Mirpur, Dhaka</h2>
                                <div className="flex items-center justify-between">
                                    <h2 className='flex items-center'>Fee: 700<TbCurrencyTaka className='text-[#26d926] text-xl' /></h2>
                                    <h2 className='flex items-center text-[#F7A582]'>5<IoMdStar className='text-2xl'/></h2>
                                </div>
                            </div>
                            <Link to='/doctors/id' className='btn w-full btn-outline text-[#F7A582] text-lg hover:bg-[#F7A582] hover:border-[#F7A582]'>View Profile</Link>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
};

export default Doctors;