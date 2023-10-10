import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const featuresData = [
    {
        "title": "Weddings",
        "icon": "https://i.ibb.co/tLdtBkm/couple.png",
        "animation": "fade-down"
    },
    {
        "title": "Anniversaries",
        "icon": "https://i.ibb.co/7x3MR9h/anniversary.png",
        "animation": "fade-up"
    },
    {
        "title": "Birthday Parties",
        "icon": "https://i.ibb.co/VwTsY4P/cake.png",
        "animation": "fade-down"
    },
    {
        "title": "Engagement Parties",
        "icon": "https://i.ibb.co/GPDGSwL/wedding-rings.png",
        "animation": "fade-up"
    },
    {
        "title": "Retirement Parties",
        "icon": "https://i.ibb.co/Yk56633/retirement.png",
        "animation": "fade-down"
    },
    {
        "title": "Baby shower",
        "icon": "https://i.ibb.co/8PpQjD5/baby.png",
        "animation": "fade-up"
    }
];


const Features = () => {
    useEffect(() => {
        AOS.init({
            offset: 300,
            duration: 1000
        });
    }, []);

    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 my-24">
            <div className="text-center" data-aos="fade-down">
                <h2 className="text-4xl font-semibold font-poppins">Our <span className="text-[#FF5A60]">Features</span></h2>
                <p className="text-lg font-poppins mb-10">It’s simple. You have an event to plan and we have the solutions</p>
            </div>
            <div className="grid 2xl:grid-cols-6 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    featuresData.map((data, index) => <div data-aos={data.animation} key={index} className="border rounded-xl shadow-lg flex flex-col items-center p-5">
                        <img src={data.icon} className="inline-block mb-2 w-20" alt="features-icon" />
                        <p className="text-lg font-poppins">{data.title}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Features;
