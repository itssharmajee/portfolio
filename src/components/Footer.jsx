import React from "react";
import {
    FaFacebook,
    FaFacebookMessenger,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa";

function Footer() {
    return (
        <footer className="text-center w-1/3 md:w-40 mx-auto">
            <div className="flex flex-col text-[12px] ">
                <div>
                    <ul className="flex space-x-4 text-xl justify-center">
                        <li>
                            <FaFacebook />
                        </li>
                        <li>
                            <FaTwitter />
                        </li>
                        <li>
                            <FaInstagram />
                        </li>
                        <li>
                            <FaLinkedin />
                        </li>
                    </ul>
                    <div className="border mt-2 mb-2 border-black"></div>
                    <div>
                        <div>© 2024 Copyright</div>
                        <div>All Rights Reversed</div>
                        <div>❤️ Gautam LPU❤️</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
