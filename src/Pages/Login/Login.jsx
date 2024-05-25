import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { authContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const { signIn, error, setError } = useContext(authContext);
    const [disable, setDisable] = useState(true);
    useEffect(() => {
        loadCaptchaEnginge(4);
    }, [])

    const handleCaptchaValidation = (e) => {
        const user_captchaValue = e.target.value;
        console.log(user_captchaValue);
        if (validateCaptcha(user_captchaValue)) {
            setDisable(false);
        }
        else {
            // setError('wrong captcha');
        }
    } 

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const loginInfo = { email, password };
        console.log(loginInfo);
        signIn(email, password)
            .then((result) => {
                console.log(result.user);
                Swal.fire({
                    icon: "success",
                    title: "Login Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
    }
   
    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet><title>BISTRO BOSS | Login</title></Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" onBlur={handleCaptchaValidation} name="captcha" placeholder="Type the text above" className="input input-bordered" required />
                            {
                                error && <small className="text-red-700">{error}</small>
                            }
                            {/* <button  className='rounded-lg  btn btn-outline btn-xs mt-2'>validation</button> */}
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disable} type="submit" className="btn btn-primary" value="Login" />
                        </div>
                    </form>
                    <p className=" text-center my-5"><small>New here? <Link to="/signUp" className=" text-blue-600">Create an account.</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Login;