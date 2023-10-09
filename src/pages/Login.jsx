import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye, FaGoogle, FaGithub } from "react-icons/fa";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
    const [isShow, setIsShow] = useState(false);
    const [errorStatus, setRrrorStatus] = useState("");

    const navigate = useNavigate();
    const location = useLocation();

    console.log(location);

    const { setProfileAvatar, signInUserWithGoogle, signInUserWithGitHub, signInUserWithEmailAndPass } = useContext(AuthContext);

    const handleEmailPassLogin = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const pass = event.target.password.value;

        // reset error status
        setRrrorStatus("");

        if (pass.length < 6) {
            setRrrorStatus("Invalid password!");
            return;
        }

        // login user account with email and password
        signInUserWithEmailAndPass(email, pass)
            .then(res => {
                event.target.reset();
                Swal.fire({
                    title: "Success!",
                    text: "Registration successful!",
                    icon: "success",
                    confirmButtonText: "Close"
                });
                setProfileAvatar(res.user.photoURL);
                navigate(location?.state ? location.state : "/");
            })
            .catch(err => setRrrorStatus(err.message));
    };

    // login user with google
    const handleGoogleSignIn = () => {
        signInUserWithGoogle()
            .then(res => {
                Swal.fire({
                    title: "Success!",
                    text: "Registration successful!",
                    icon: "success",
                    confirmButtonText: "Close"
                });
                setProfileAvatar(res.user.photoURL);
                navigate(location?.state ? location.state : "/");
            })
            .catch(err => setRrrorStatus(err.message));
    };

    // login user with github
    const handleGitHubSignIn = () => {
        signInUserWithGitHub()
            .then(res => {
                Swal.fire({
                    title: "Success!",
                    text: "Registration successful!",
                    icon: "success",
                    confirmButtonText: "Close"
                });
                setProfileAvatar(res.user.photoURL);
                navigate(location?.state ? location.state : "/");
            })
            .catch(err => setRrrorStatus(err.message));
    };

    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 w-full flex flex-col items-center justify-center font-inter py-14">
            <div className="text-center mb-5">
                <h2 className="text-4xl font-medium font-inter">Login now!</h2>
            </div>
            <div className="bg-base-100 2xl:w-96 xl:w-96 lg:w-[380px] md:w-[380px] w-[340px] shadow-2xl rounded-xl border">
                <form onSubmit={handleEmailPassLogin} className="p-6">
                    <div className="form-control">
                        <label className="label pb-1">
                            <span className="text-lg">Email <span className="text-red-500">*</span></span>
                        </label>
                        <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label pb-1">
                            <span className="text-lg">Password <span className="text-red-500">*</span></span>
                        </label>
                        <div className="relative form-control">
                            <input required type={isShow ? "text" : "password"} name="password" placeholder="Password" className="input input-bordered" />
                            <span onClick={() => setIsShow(!isShow)} className="absolute h-full flex items-center top-0 right-3 cursor-pointer">{isShow ? <FaEyeSlash className="text-xl"></FaEyeSlash> : <FaEye className="text-xl"></FaEye>}</span>
                        </div>

                        <div className="mt-3">
                            <p className="">Forgot password? <a className="text-blue-700 underline font-medium cursor-pointer">Reset</a></p>
                        </div>

                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="bn632-hover bn28 px-7 py-[8px] font-poppins">Login</button>
                    </div>
                    <p className="my-3">New to this website? <Link className="text-blue-700 underline font-medium" to="/register">Register</Link></p>
                    <div className="text-center">
                        <p className="text-xl mb-2">-------------or-------------</p>
                        <div className="flex items-center justify-center gap-5">
                            <a onClick={handleGoogleSignIn} className="text-4xl cursor-pointer"><FaGoogle></FaGoogle></a>
                            <a onClick={handleGitHubSignIn} className="text-4xl cursor-pointer"><FaGithub></FaGithub></a>
                        </div>
                    </div>
                </form>
            </div>
            {errorStatus && <div>
                <p className="text-red-500 text-lg font-medium">{errorStatus}</p>
            </div>}
        </div>
    );
};

export default Login;
