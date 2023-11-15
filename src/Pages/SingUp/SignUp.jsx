// import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import { updateProfile } from "firebase/auth";
// import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";



const SignUp = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('user profile info updated');
                        reset();
                
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your registration successful",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/');
                    })
                    .catch(error => console.log(error))
            })
    }


    return (
        <>
            <Helmet>
                <title>Bistro Boss Restaurant | SignUp</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col w-full">

                    <div className="text-center">
                        <h1 className="text-5xl font-bold my-5">Please Register!</h1>
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">

                        <form
                            onSubmit={handleSubmit(onSubmit)} className="card-body"

                        >

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" name="name" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photo", { required: true })} placeholder="photo url" className="input input-bordered" name="photo" />
                                {errors.photo && <span className="text-red-600">Photo URL is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email")} placeholder="email" className="input input-bordered" name="email" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]/
                                })} placeholder="password" name="password" className="input input-bordered" />

                                {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}

                                {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be at least 6 characters</span>}

                                {errors.password?.type === 'maxLength' && <span className="text-red-600">Password must be at max 20 characters</span>}

                                {errors.password?.type === 'pattern' && <span className="text-red-600">Password must be at least one uppercase, one lowercase, one digit,one special character </span>}



                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-orange-600 border-none text-white">Register</button>
                            </div>

                        </form>

                    </div>


                    <p className="mt-5">Already have an account? please <span className="text-blue-500 font-bold italic"><Link to="/login">Login</Link></span></p>

                </div>

            </div>
        </>
    );
};

export default SignUp;