
const Education = () => {
    return (
        <div className="mt-16 md:mt-32">
            <h3 className='text-center text-2xl md:text-4xl font-extrabold mb-16'>Education & Courses<span className="text-pink-800 font-extrabold">_</span></h3>
            {/* first  */}
            <div data-aos="fade-up" data-aos-duration="500" className="flex gap-10">
                <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-semibold text-start md:text-end">
                        Diploma In Engineering (Computer Technology)
                    </h3>
                    <p className="text-start md:text-end">
                        Kurigram Polytechnic Institute, Kurigram
                    </p>
                    <p className="text-start md:text-end">
                        August 2019 - December 2023
                    </p>
                </div>
                <div
                    className="flex flex-col justify-center items-center md:order-none order-first"
                >
                    <div className="h-5 w-5 rounded-full bg-pink-800"></div>
                    <div className="h-36 w-[2px] bg-pink-800"></div>
                </div>
                <div className="flex-1 hidden md:block"></div>
            </div>
            {/* second  */}
            <div data-aos="fade-up" data-aos-duration="1000" className="flex gap-10">
                <div className="flex-1 hidden md:block"></div>
                <div
                    className="flex flex-col justify-center items-center md:order-none order-first"
                >
                    <div className="h-5 w-5 rounded-full bg-pink-800"></div>
                    <div className="h-36 w-[2px] bg-pink-800"></div>
                </div>

                <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-semibold text-start ">
                        Complete Web Development With Jhankar Mahbub
                    </h3>
                    <p className="text-start">
                        Programming Hero
                    </p>
                    <p className="text-start">
                        January 2024 - June 2024
                    </p>
                </div>
            </div>
            {/* third  */}
            <div data-aos="fade-up" data-aos-duration="1500" className="flex gap-10">
                <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-semibold text-start md:text-end">
                        Industrial Training in Web Development
                    </h3>
                    <p className="text-start md:text-end">
                        European IT Institute
                    </p>
                    <p className="text-start md:text-end">
                        August 2023 - November 2023
                    </p>
                </div>
                <div
                    className="flex flex-col items-center md:order-none order-first"
                >
                    <div className="h-5 w-5 rounded-full bg-pink-800"></div>
                </div>
                <div className="flex-1 hidden md:block"></div>
            </div>
        </div>
    );
};

export default Education;