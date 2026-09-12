import { GrLocation } from "react-icons/gr";
import { MdOutlinePhone } from "react-icons/md";
import { TiMail } from "react-icons/ti";
import { IoMdSend } from "react-icons/io";
import Swal from "sweetalert2";
import { useRef, useState } from "react";

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const form = useRef();


    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = {
            from_name: form.current.from_name.value,
            from_email: form.current.from_email.value,
            message: form.current.message.value,
        };

        try {
            const apiUrl = import.meta.env.VITE_API_URL || "https://portfolio-server-xi-ten.vercel.app";
            const response = await fetch(`${apiUrl}/send-email`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                Swal.fire("Success!", "Your message has been sent.", "success");
                form.current.reset();
            } else {
                Swal.fire("Error!", data.error || "Failed to send message.", "error");
            }
        } catch (error) {
            Swal.fire("Error!", error.message || "Failed to send message.", "error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="my-20 md:my-32">
            <h3 className='text-center text-3xl md:text-5xl font-extrabold mb-8'>Contact Me<span className="text-pink-800 font-extrabold">_</span></h3>
            <p className="text-center mb-20">I&apos;m always open to discussing new projects,
                <br />
                creative ideas, or opportunities to be part of your vision. Feel free to reach out!</p>

            <div className="grid gap-4 md:grid-cols-2">
                {/* 1st  */}
                <div className="space-y-10 md:mt-9">
                    <div className="flex gap-4">
                        <p className="bg-gradient-to-r from-indigo-800 to-pink-800 p-3 text-2xl font-bold rounded-md text-white"><GrLocation /></p>
                        <div>
                            <p className="font-semibold">Address</p>
                            <p>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <p className="bg-gradient-to-r from-indigo-800 to-pink-800 p-3 text-2xl font-bold rounded-md text-white"><MdOutlinePhone /></p>
                        <div>
                            <p className="font-semibold">Phone</p>
                            <p>+88 01717255891</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <p className="bg-gradient-to-r from-indigo-800 to-pink-800 p-3 text-2xl font-bold rounded-md text-white"><TiMail /></p>
                        <div>
                            <p className="font-semibold">Email</p>
                            <p>rakibx270@gmail.com</p>
                        </div>
                    </div>
                </div>
                {/* 2nd  */}
                <div>
                    <form ref={form} onSubmit={sendEmail} className="">
                        <div className="relative mb-4">
                            <input
                                type="text"
                                id="name"
                                name="from_name"
                                placeholder=" "
                                className="bg-gray-900 text-white mt-3 peer w-full p-3 pt-6 border border-pink-800 rounded-md outline-none focus:border-gray-500"
                                required
                            />
                            <label
                                htmlFor="name"
                                className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-3 peer-focus:text-sm peer-focus:text-pink-500"
                            >
                                Name
                            </label>
                        </div>
                        <div className="relative mb-4">
                            <input
                                type="email"
                                id="email"
                                name="from_email"
                                placeholder=" "
                                className="bg-gray-900 text-white mt-3 peer w-full p-3 pt-6 border border-pink-800 rounded-md outline-none focus:border-gray-500"
                                required
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-3 peer-focus:text-sm peer-focus:text-pink-500"
                            >
                                Email
                            </label>
                        </div>
                        <div className="relative mb-4">
                            <textarea
                                id="message"
                                name="message"
                                placeholder=" "
                                className="bg-gray-900 text-white mt-3 peer w-full p-3 pt-6 border border-pink-800 rounded-md outline-none focus:border-gray-500"
                                required
                            >
                            </textarea>
                            <label
                                htmlFor="message"
                                className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-3 peer-focus:text-sm peer-focus:text-pink-500"
                            >
                                Message
                            </label>
                        </div>

                        <button
                            disabled={loading}
                            className="flex items-center justify-center gap-4 bg-gradient-to-r from-indigo-800 to-pink-800 hover:from-pink-800 hover:to-indigo-800 text-white py-2 w-full"
                        >
                            {loading ? (<><span className="loading loading-spinner text-warning"></span> Sending</>) : (<><IoMdSend />Send Message</>)}
                        </button>
                    </form>
                </div >
            </div >
        </div >
    );
};

export default Contact;