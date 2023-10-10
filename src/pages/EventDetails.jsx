import { useLoaderData, useParams } from "react-router-dom";
import { getSavedData, saveItemToLocalStorage } from "../utilities/localStorage";
import Swal from "sweetalert2";

const EventDetails = () => {
    const eventData = useLoaderData();

    const { eventId } = useParams();
    const currentEventId = parseInt(eventId);

    const selectedEvent = eventData.find(e => e.id === currentEventId);
    const { title, hotel, hotel_name, description, price } = selectedEvent;

    const addItemToLocalStorage = (item) => {
        const prevData = getSavedData();
        const isExist = prevData.find(e => e.id === item.id);
        if (!isExist) {
            saveItemToLocalStorage(item);
            Swal.fire({
                title: "Success!",
                text: "Event successfully booked!",
                icon: "success",
                confirmButtonText: "Close"
            });
            return;
        }
        Swal.fire({
            title: "Error!",
            text: "Event already added!",
            icon: "error",
            confirmButtonText: "Close"
        });
    };

    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5">
            <div className="font-poppins py-10 flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col flex-col gap-5 items-center justify-center">
                <div className="2xl:w-3/6 xl:w-3/6 lg:w-3/6 md:w-full w-full">
                    <img src={hotel} alt="cover-image" className="inline-block w-full rounded-xl" />
                </div>
                <div className="2xl:w-3/6 xl:w-3/6 lg:w-3/6 md:w-full w-full">
                    <h2 className="xl:text-4xl md:text-3xl text-3xl font-semibold mb-2">{title}</h2>
                    <h2 className="text-2xl font-semibold mb-2">{hotel_name}</h2>
                    <p>{description}</p>
                    <h3 className="font-semibold text-[25px] my-2">${price}</h3>
                    <button onClick={() => addItemToLocalStorage(selectedEvent)} className="bn632-hover bn28 px-[30px] py-[8px]">Book now!</button>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
