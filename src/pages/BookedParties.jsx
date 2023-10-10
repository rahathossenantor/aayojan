import { useEffect, useState } from "react";
import { getSavedData } from "../utilities/localStorage";
import Party from "../components/Party";

const BookedParties = () => {
    const [servicesData, setServicesData] = useState([]);
    const [dataLength, setDataLength] = useState(4);
    const [isShowAll, setIsShowAll] = useState(false);

    useEffect(() => {
        const localStorageData = getSavedData();
        setServicesData(localStorageData);
    }, []);

    const handleIsShowAll = () => {
        if (dataLength === 4) {
            setDataLength(servicesData.length);
        } else {
            setDataLength(4);
        }
        setIsShowAll(!isShowAll);
    };

    const showAllToggleBtn = <>
        <div className="text-center mb-10">
            <button onClick={handleIsShowAll} className="bn632-hover bn28 px-8 py-[8px] font-poppins">{!isShowAll ? "See All" : "See Less"}</button>
        </div>
    </>

    const noPartyYet = <>
        <div className="text-center py-20 font-poppins">
            <img src="https://i.ibb.co/XXwtxBp/confetti.png" alt="party" className="w-20 mb-5 inline-block" />
            <h2 className="text-3xl">No booked party yet!</h2>
        </div>
    </>

    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5">
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-5 my-10 font-poppins">
                {
                    servicesData.length !== 0 && servicesData.slice(0, dataLength).map(party => <Party key={party.id} event={party}></Party>)
                }
            </div>
            {servicesData.length === 0 && noPartyYet}
            {
                servicesData.length > 4 && showAllToggleBtn
            }
        </div>
    );
};

export default BookedParties;
