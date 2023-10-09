
const featuresData = [
    {
        "title": "Wedding",
        "icon": "https://i.ibb.co/tLdtBkm/couple.png"
    },
    {
        "title": "Anniversary",
        "icon": "https://i.ibb.co/7x3MR9h/anniversary.png"
    },
    {
        "title": "Birthday party",
        "icon": "https://i.ibb.co/VwTsY4P/cake.png"
    },
    {
        "title": "Baby shower",
        "icon": "https://i.ibb.co/8PpQjD5/baby.png"
    }
];

const Features = () => {
    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 my-20">
            <div className="text-center">
                <h2 className="text-4xl font-semibold font-poppins mb-2">Spesial features</h2>
                <p className="text-base font-poppins mb-5">Plan your event today with aayojan sepsial</p>
            </div>
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    featuresData.map((data, index) => <div key={index} className="border flex flex-col items-center p-5">
                        <img src={data.icon} className="inline-block mb-2 w-20" alt="service-icon" />
                        <p className="text-lg font-poppins">{data.title}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Features;
