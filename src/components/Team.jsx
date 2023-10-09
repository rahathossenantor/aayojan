
const featuresData = [
    {
        "id": 1,
        "name": "Naif Farooqui",
        "job": "Frontend & UI/UX Designer",
        "image": "https://i.ibb.co/MZbs1Hk/membar1.png"
    },
    {
        "id": 2,
        "name": "Durgesh Kumar Rai",
        "job": "Web Developer",
        "image": "https://i.ibb.co/kH9pK4Q/membar2.png"
    },
    {
        "id": 3,
        "name": "Chahat Singh",
        "job": "Graphic Developer",
        "image": "https://i.ibb.co/0MPLX11/membar3.png"
    }
];


const Team = () => {
    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 my-24">
            <div className="text-center">
                <h2 className="text-4xl font-semibold font-poppins">Our Creative <span className="text-[#FF5A60]">Team</span></h2>
                <p className="text-lg font-poppins mb-10">We can provide as you need</p>
            </div>
            <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    featuresData.map((data) => <div key={data.id} className="border rounded-xl shadow-lg flex items-center justify-center p-5 gap-5 font-poppins">
                        <img src={data.image} className="inline-block mb-2 w-20" alt="features-icon" />
                        <div>
                            <h4 className="text-lg font-semibold font-poppins">{data.name}</h4>
                            <p>{data.job}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Team;
