import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import login from '../../../public/All Image/Login.png';
import SocialLogin from "../../Share/SocialLogin";



const LogIn = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <div>
            <div className='w-9/12 mx-auto grid grid-cols-2 items-center'>
                <div className="col-span-1">
                    <img src={login} alt="Login side image (Doctor and Nurse characters)" className="h-[600px] my-auto"/>
                </div>
                <div className="col-span-1">
                    <div className="">
                        <form onSubmit={handleSubmit()} className="card-body">
                            {/* Register Text */}
                            <div className="text-center mb-3">
                                <h1 className="text-4xl font-medium"><span className='text-[#8c52ff]'>Log In to</span><span className='text-[#cb6ce6]'> HastyCare</span></h1>
                                <p className="text-base mt-2">Please register at first. Go to <span className="text-[#F7A582]"><Link to='/register'>Register</Link> </span></p>
                            </div>
                            {/* Email or User Name*/}
                            <div className="">
                                <label className="label">
                                    <span className="label-text">Email/Username</span>
                                </label>
                                <input type="email" name="email" placeholder="Email/Username" className="input input-bordered w-full" {...register("email", { required: true })} />
                                {errors.email && <span className="text-red-600 text-sm">Email/Username is required</span>}
                            </div>
                            {/* PassWord */}
                            <div className="">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered w-full" {...register("password", { required: true })} />
                                {errors.password && <span className="text-red-600 text-sm">Password is required</span>}
                                <Link className="text-[#F7A582] mt-1">Forgot password?</Link>
                            </div>
                            {/* Submit Button */}
                            <div className="w-full mt-6">
                                <button className="btn bg-[#F7A582] text-[#FFFFFF] hover:bg-[#F7A582] hover:border-[#F7A582] text-lg w-full">Log In</button>
                            </div>
                            <div className="mt-5">
                                <div className="flex items-center">
                                    <div className="h-3 w-2/5 content-evenly"><hr /></div>
                                    <div className="w-1/5 text-center"><h1 >Or</h1></div>
                                    <div className="h-3 w-2/5 content-evenly"><hr /></div>
                                </div>
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;