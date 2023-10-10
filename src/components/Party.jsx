import PropTypes from "prop-types";

const Party = ({event}) => {

    return (
        <div className="flex rounded-lg shadow-xl border">
            <div className="xl:w-1/3 lg:w-3/6 md:w-1/3 w-3/6">
                <img src={event?.hotel} alt="donation-image" className="inline-block w-full h-full" />
            </div>
            <div className="p-5 rounded-r-lg xl:w-2/3 lg:w-3/6 md:w-2/3 w-3/6 flex-1">
                <h3 className="font-semibold text-[22px] mb-1">{event?.title}</h3>
                <p className="font-semibold mb-3 text-lg">${event?.price}</p>
                <button className="bn632-hover bn28 px-5 py-[8px]">Details</button>
            </div>
        </div>
    );
};

Party.propTypes = {
    event: PropTypes.object.isRequired
};

export default Party;
