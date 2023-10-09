import { useEffect, useState } from "react";
import Service from "./Service";



const Services = () => {
    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
        fetch("/eventData.json")
            .then(response => response.json())
            .then((res) => setServicesData(res))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 my-24">
            <div className="text-center">
                <h2 className="text-4xl font-semibold font-poppins">Our <span className="text-[#FF5A60]">Services</span></h2>
                <p className="text-lg font-poppins mb-10">We can provide as you need & Customer&apos;s satisfaction first, profit last</p>
            </div>
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">

                {
                    servicesData?.map(data => <Service key={data.id} data={data}></Service>)
                }

            </div>
        </div>
    );
};

export default Services;
