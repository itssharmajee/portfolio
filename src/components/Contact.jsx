import React from "react";

function Contact() {
    return (
        <>
        <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 mt-20 md:px-20 my-20">
            <div className="">
                <form
                    name="contact"  // Add form name here
                    method="POST"
                    data-netlify="true"  // Enable Netlify form handling
                    data-netlify-honeypot="bot-field"  // Optional honeypot field to prevent spam
                    className="flex flex-col m-auto w-full lg:w-1/2 p-5 shadow-lg rounded-md z-10 gap-3 bg-slate-400"
                >
                    {/* Hidden input field for Netlify form name */}
                    <input type="hidden" name="form-name" value="contact" />

                    {/* Honeypot field to catch bots (invisible to users) */}
                    <input type="hidden" name="bot-field" />

                    <h1 className="text-3xl md:text-4xl text-center py-4">Contact me</h1>

                    <label htmlFor="name">Full Name</label>
                    <input
                        className="rounded-[3px] px-3 py-1.5 outline-0 text-sm shadow-lg bg-slate-200"
                        type="text"
                        name="name"
                        id=""
                        placeholder="Enter your full name here"
                        required
                    />

                    <label htmlFor="email">Email Address</label>
                    <input
                        className="rounded-[3px] px-3 py-1.5 outline-0 text-sm shadow-lg bg-slate-200"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email here"
                        required
                    />

                    <label htmlFor="message">Message</label>
                    <textarea
                        className="rounded-[3px] px-3 py-1.5 outline-0 text-sm shadow-lg bg-slate-200"
                        name="message"
                        id="message"
                        placeholder="Enter your message here"
                        required
                    />

                    <input type="submit" value="Submit" className="w-20 rounded-md border-gray-600 bg-blue-400 m-auto p-2" />
                </form>
            </div>
        </div>
        </>
    );
}

export default Contact;
