import React from "react";

function Contact() {
    return (
        <>
        <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 mt-20 md:px-20 my-20">
            <div className="">
                <form
                    method="POST"
                    className="flex flex-col m-auto w-full lg:w-1/2 p-5 shadow-lg rounded-md z-10 gap-3 bg-slate-400"
                    action="https://getform.io/f/brolkyla"
                >
                    <h1 className="text-3xl md:text-4xl text-center py-4">Contact me</h1>
                    <label htmlFor="name">Full Name</label>
                    <input
                        className="rounded-[3px] px-3 py-1.5 outline-0 text-sm shadow-lg bg-slate-200"
                        type="text"
                        name="name"
                        id=""
                        placeholder="enter your full name here"
                    />
                    <label htmlFor="email">Email Address</label>
                    <input
                        className="rounded-[3px] px-3 py-1.5 outline-0 text-sm shadow-lg bg-slate-200"
                        type="text"
                        name="email"
                        id="email"
                        placeholder="enter your email here"
                    />
                    <label htmlFor="message">Message</label>
                    <textarea
                        className="rounded-[3px] px-3 py-1.5 outline-0 text-sm shadow-lg bg-slate-200"
                        type="text-area"
                        name="message"
                        id="message"
                        placeholder="enter your message here"
                    />
                    <input type="submit" value="Submit" className="w-20 rounded-md border-gray-600 bg-blue-400 m-auto p-2" />
                </form>
            </div>
        </div>
        {/* <hr className="border-dashed border-neutral-800 my-5 " /> */}
        </>
    );
}

export default Contact;
