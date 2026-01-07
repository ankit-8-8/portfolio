import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
    const myStyle = {
        color: 'rgb(169, 164, 164)',
        fontSize: '18px'
    }

    return (
        <>
            <div className="row mb-5" id="contact_section">
                <div className="col-12 text-center fw-semibold fs-1 my-5 pt-5 text-white">
                    Let's Connect
                </div>
                <div className="col-12">
                    <div className="row">
                        <div className="col-md-8 col-11 mx-auto mt-5 p-1 d-flex justify-content-center text-white">
                            <div className="p-md-5 p-3 project-card " data-aos="zoom-in" data-aos-duration="1200">
                                <div className="row">
                                    <div
                                        className="col-12 col-md-6 ps-5 lg-border-end">
                                        <h3 className="mb-5">Contact Info</h3>
                                        <div className="my-4 d-flex ">
                                            <div className="my-icon me-3 d-inline-block m-0 p-0"><FaLocationDot
                                                className="fa-solid fa-location-dot text-danger" /></div>
                                            <div className="d-inline-block">
                                                <p className=" fw-semibold mb-0 pb-0"
                                                    style={myStyle}>
                                                    Location
                                                </p>
                                                <p className="fw-semibold text-danger mb-0 pb-0">Lucknow, India</p>
                                            </div>
                                        </div>
                                        <div className="my-4 d-flex ">
                                            <div className="my-icon me-3 d-inline-block m-0 p-0"><MdEmail
                                                className="fa-solid fa-envelope text-danger" /></div>
                                            <div className="d-inline-block">
                                                <p className=" fw-semibold mb-0 pb-0"
                                                    style={myStyle}>Email
                                                </p>
                                                <a href="mailto:ankit449513@gmail.com" className="fw-semibold text-danger mb-0 pb-0">ankit449513@gmail.com</a>
                                            </div>
                                        </div>
                                        <div className="my-4 d-flex ">
                                            <div className="my-icon me-3 d-inline-block m-0 p-0"><FaPhone
                                                className="fa-solid fa-phone text-danger" /></div>
                                            <div className="d-inline-block">
                                                <p className=" fw-semibold mb-0 pb-0"
                                                    style={myStyle}>Phone
                                                </p>
                                                <a href="tel:+91 9772260606" className="fw-semibold text-danger mb-0 pb-0">9772260606</a>
                                            </div>
                                        </div>
                                        <div className="my-4 d-flex ">
                                            <div className="my-icon me-3 d-inline-block m-0 p-0"><IoLogoWhatsapp
                                                className="fa-brands fa-whatsapp text-danger" /></div>
                                            <div className="d-inline-block">
                                                <p className=" fw-semibold mb-0 pb-0"
                                                    style={myStyle}>
                                                    WhatsApp
                                                </p>
                                                <p className="fw-semibold text-danger mb-0 pb-0">9772260606</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="col-md-6 col-12 mt-5 mt-md-0 d-none d-md-flex flex-wrap justify-content-around align-items-center">
                                        <div className="contact-platform rounded-3">
                                            <FaGithub className="text-danger fs-2 fa-brands fa-github" />
                                        </div>
                                        <div className="contact-platform rounded-3">
                                            <FaLinkedin className="text-danger fs-2 fa-brands fa-linkedin" />
                                        </div>
                                        <div className="contact-platform rounded-3">
                                            <FaInstagram className="text-danger fs-2 fa-brands fa-instagram" />
                                        </div>
                                        <div className="contact-platform rounded-3">
                                            <FaFacebook className="text-danger fs-2 fa-brands fa-facebook" />
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- </div> --> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- CONNECT SECTION START --> */}
            </div >
        </>
    )
}

export default Contact