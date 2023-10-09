
const servicesData = [
    {
        "title": "Weddings",
        "icon": "https://i.ibb.co/tLdtBkm/couple.png"
    },
    {
        "title": "Anniversaries",
        "icon": "https://i.ibb.co/7x3MR9h/anniversary.png"
    },
    {
        "title": "Birthday Parties",
        "icon": "https://i.ibb.co/VwTsY4P/cake.png"
    },
    {
        "title": "Engagement Parties",
        "icon": "https://i.ibb.co/GPDGSwL/wedding-rings.png"
    },
    {
        "title": "Retirement Parties",
        "icon": "https://i.ibb.co/Yk56633/retirement.png"
    },
    {
        "title": "Baby shower",
        "icon": "https://i.ibb.co/8PpQjD5/baby.png"
    }
];

const Services = () => {
    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 my-20">
            <div className="text-center">
                <h2 className="text-4xl font-semibold font-poppins">Our <span className="text-[#FF5A60]">Services</span></h2>
                <p className="text-lg font-poppins mb-5">It’s simple. You have an event to plan and we have the solutions</p>
            </div>
            <div className="grid 2xl:grid-cols-6 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    servicesData.map((data, index) => <div key={index} className="border rounded-xl shadow-lg flex flex-col items-center p-5">
                        <img src={data.icon} className="inline-block mb-2 w-20" alt="service-icon" />
                        <p className="text-lg font-poppins">{data.title}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;
