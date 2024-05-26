import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";


const SignUp = () => {
    const { register, handleSubmit,reset, formState: { errors }, } = useForm();

    const {createUser, updateUserProfile}=useContext(authContext);
    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL)
            .then(()=>{
                reset()
                Swal.fire({
                    icon: "success",
                    title: "SingUp Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                Navigate('/');
            })
            .catch((error)=>console.log(error))
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet><title>BISTRO BOSS | SignUp</title></Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">SignUp now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name="name" placeholder="Enter your name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" {...register("photo", { required: true })} name="photo" placeholder="Enter your photoURL" className="input input-bordered" />
                            {errors.photo && <span className="text-red-600">PhotoURL is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true,pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/, minLength: 6, maxLength: 20 })} name="password" placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
                            {errors.password?.type === 'pattern' && <span className="text-red-600">Password must have one upper & lowercase,number,special key.</span>}
                            {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 characters</span>}
                            {errors.password?.type === 'maxLength' && <span className="text-red-600">Password must be less than 20 characters</span>}
                        </div>

                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Sign up" />
                        </div>
                    </form>
                    <p className=" text-center my-5"><small>Have an account? <Link to="/login" className="text-blue-600">Go to Login</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;