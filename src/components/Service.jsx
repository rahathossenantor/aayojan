import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Service = ({data}) => {
    useEffect(() => {
        AOS.init({
            offset: 300,
            duration: 1000
        });
    }, []);

    const {id, title, hotel_name, hotel, short_description, price, animation} = data;

    return (
        <div data-aos={animation} className="rounded-xl shadow-xl font-inter">
            <figure className="w-full">
                <div className="rounded-md flex items-center justify-center">
                    <img className="inline-block w-full rounded-lg rounded-b-none" src={hotel} alt="event-image" />
                </div>
            </figure>
            <div className="p-5 rounded-lg rounded-t-none">
                <h4 className="font-bold text-[22px] mb-1">{title}</h4>
                <h4 className="text-[19px] mb-1 font-semibold">{hotel_name}</h4>
                <p className="mb-2">{short_description}</p>
                <h3 className="font-semibold text-xl mb-2">${price}</h3>
                <Link to={`/event-details/${id}`}><button className="bn632-hover bn28 px-[30px] py-[8px] w-full">See details</button></Link>
            </div>
        </div>
    );
};

Service.propTypes = {
    data: PropTypes.object.isRequired
};

export default Service;
