import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import registerbg from '../../../public/All Image/register-bg.jpg';
import SocialLogin from '../../Share/SocialLogin';


const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <div className='bg-cover bg-center bg-no-repeat py-16' style={{ backgroundImage: `url(${registerbg})` }}>
            {/* <div className="bg-black bg-opacity-100"></div> */}
            <div className='w-5/12 items-center glass p-10 rounded-2xl ml-20'>
                <div className="">
                    <form onSubmit={handleSubmit()} className="">
                        {/* Register Text */}
                        <div className="text-center mb-3">
                            <h1 className="text-4xl font-medium"><span className='text-[#8c52ff]'>Register to</span><span className='text-[#cb6ce6]'> HastyCare</span></h1>
                            <p className="text-base mt-2">Already registered? Go to <span className="text-[#F7A582]"><Link to='/login'>Log In</Link> </span></p>
                        </div>
                        {/* Name */}
                        <div className="">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="Name" placeholder="Name" className="input input-bordered w-full" {...register("Name", { required: true })} />
                            {errors.Name && <span className="text-red-600 text-sm">Name is required</span>}
                        </div>
                        {/* User Name */}
                        <div className="">
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <input type="Text" name="username" placeholder="Username" className="input input-bordered w-full" {...register("username", { required: true })} />
                            {errors.username && <span className="text-red-600 text-sm">Username is required</span>}
                        </div>
                        {/* Image */}
                        <div className="">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="file" name="pimage" placeholder="Image" className="file-input file-input-bordered w-full" {...register("pimage", { required: true })} />
                            {errors.pimage && <span className="text-red-600 text-sm">Image is required</span>}
                        </div>
                        {/* Email */}
                        <div className="">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-600 text-sm">Email is required</span>}
                        </div>
                        {/* PassWord */}
                        <div className="">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered w-full" {...register("password", { required: true })} />
                            {errors.password && <span className="text-red-600 text-sm">Password is required</span>}
                        </div>
                        {/* Role */}
                        <div className="">
                            <label className="label">
                                <span className="label-text">Role</span>
                            </label>
                            <select {...register("Role", { required: true })} className='w-full border-2 p-3 rounded-lg'>
                                <option value="Patient">Patient</option>
                                <option value="Doctor">Doctor</option>
                                <option value="Medical Student">Medical Student</option>
                            </select>
                        </div>
                        {/* Submit Button */}
                        <div className="w-full mt-6">
                            <button className="btn bg-[#F7A582] text-[#FFFFFF] border-[#F7A582] text-lg w-full">Register</button>
                        </div>
                        <div className="flex items-center mt-5">
                            <div className="h-3 w-2/5 content-evenly"><hr /></div>
                            <div className="w-1/5 text-center"><h1 >Or</h1></div>
                            <div className="h-3 w-2/5 content-evenly"><hr /></div>
                        </div>
                    </form>
                    {/* Social Login component */}
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;