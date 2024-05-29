import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { authContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleSignIn}=useContext(authContext);
    const axiosPublic = useAxiosPublic();
    const navigate =useNavigate();
    const handleGoogleLogin=()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.user);
            const userInfo= {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res=>{
                console.log(res.data);
                navigate('/');
            })
        })
    }
    return (
        <div>
            <div>
                <button onClick={handleGoogleLogin} className="btn btn-wide">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;