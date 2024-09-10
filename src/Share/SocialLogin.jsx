import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";


const SocialLogin = () => {
    return (
        <div>
            <div className="flex gap-6 items-center justify-center">
                <button className="bg-transparent text-lg"><FcGoogle className="text-4xl" /></button>
                <button className="bg-transparent text-lg my-3"><ImGithub className="text-4xl" /></button>
                <button className="bg-transparent text-lg"><FaFacebook className="text-4xl text-[#2563eb]" /></button>
            </div>
        </div>
    );
};

export default SocialLogin;