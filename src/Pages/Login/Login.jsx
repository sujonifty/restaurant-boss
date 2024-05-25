import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';


const Login = () => {
    const captchaRef = useRef(null);
    const [disable, setDisable] = useState(true);
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const loginInfo = { email, password };
        console.log(loginInfo);
    }
    const handleCaptchaValidation = () => {
        const user_captchaValue = captchaRef.current.value;
        console.log(user_captchaValue);
        if (validateCaptcha(user_captchaValue)) {
            setDisable(false);
        }
        else {
            setDisable(true);
        }
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
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
                                <LoadCanvasTemplate />                            </label>
                            <input type="text" ref={captchaRef} name="captcha" placeholder="Type the text above" className="input input-bordered" required />
                            <button onChange={handleCaptchaValidation} className='rounded-lg  btn btn-outline btn-xs mt-2'>validation</button>
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