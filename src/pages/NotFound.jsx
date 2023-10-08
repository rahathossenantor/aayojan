import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const NotFound = () => {
    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 h-screen flex justify-center items-center">
            <div className="text-center">
                <div>
                    <img className="inline-block xl:w-5/6 lg:w-5/6 md:w-5/6 w-5/6" src="https://i.ibb.co/WG16Vpv/Error-Alien-Spaceship.png" alt="page-not-found" />
                </div>
                <p className="font-poppins text-4xl my-5">Page not found!</p>
                <Link to="/"><button className="bn632-hover bn28 px-10 py-[8px] font-poppins">Go back <FaArrowRight className="inline-block"></FaArrowRight></button></Link>
            </div>
        </div>
    );
};

export default NotFound;
