import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
    useEffect(() => {
        AOS.init({
            delay: 200,
            offset: 300,
            duration: 1100
        });
    }, []);

    return (
        <section id="banner">
            <div className="banner-overlay">
                <div data-aos="fade-down" className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 text-center 2xl:py-60 xl:py-52 lg:py-40 md:py-36 py-32">
                    <h1 className="2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl text-5xl text-white font-semibold font-inter">Plan your event today with</h1>
                    <span className="2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl text-5xl font-pasifico text-[#FF5A60]">aayojan</span>
                </div>
            </div>
        </section>
    );
};

export default Banner;
