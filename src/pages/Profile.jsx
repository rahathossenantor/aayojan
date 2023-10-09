import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Profile = () => {
    const { user } = useContext(AuthContext);
    const { displayName, photoURL, email } = user;

    console.log(user);

    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5">
            <div className="font-poppins py-10 flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col flex-col gap-5 items-center justify-center">
                <div className="2xl:w-3/6 xl:w-3/6 lg:w-3/6 md:w-full w-full">
                    <img src={photoURL} alt="cover-image" className="inline-block w-full rounded-xl" />
                </div>
                <div className="2xl:w-3/6 xl:w-3/6 lg:w-3/6 md:w-full w-full">
                    <h2 className="xl:text-4xl md:text-3xl text-3xl font-semibold mb-2">{displayName}</h2>
                    <h2 className="text-2xl font-semibold">{email}</h2>
                </div>
            </div>
        </div>
    );
};

export default Profile;
