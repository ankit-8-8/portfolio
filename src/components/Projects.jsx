import { FaTrain } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaCloud } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

const Projects = () => {
    const myStyle = {
        textAlign: 'justify',
        fontFamily: 'sans-serif'
    };

    return (
        <>
            <div className="row" id="project_section">
                <div className="col-12 text-center fw-semibold fs-1 mt-5 pt-5 mb-0 pb-0 text-white">
                    Featured Projects
                </div>

                <div className="col-11 mx-auto ">
                    <div className="row mt-4">
                        <div className="col-md-6 col-12 mt-5 p-1 d-flex justify-content-center">
                            <div className="project-card p-4 text-white" data-aos="fade-up" data-aos-duration="1200">
                                <div>
                                    <div className="my-icon me-3"><FaTrain className="text-danger" /></div>
                                    <h3 className="d-inline-block">Railway Reservation System</h3>
                                </div>
                                <p className="mt-4 fw-semibold fs-6" style={myStyle}>A
                                    ticket booking web app based on the functionality of real-world ticket booking websites.
                                    Built with HTML, Css, Javascript, Python and Django, it generate a unique pnr for every
                                    ticket and we can check status of ticket with this pnr number. The app is responsive and
                                    works seamlessly on both desktop and mobile devices.</p>
                                <div>
                                    <a className="github-link" href="https://github.com/ankit-8-8/Railway_reservation_system"> <span className=" me-2 "><FaGithub
                                        className="fa-brands fs-5 fa-github " /></span><span
                                            className="fw-semibold fs-6">View Code</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 mt-5 p-1 d-flex justify-content-center">
                            <div className="project-card p-4 text-white" data-aos="fade-up" data-aos-duration="1200" >
                                <div>
                                    <div className="my-icon me-3"><FaCartShopping className="text-danger" /></div>
                                    <h3 className="d-inline-block">E-commerce</h3>
                                </div>
                                <p className="mt-4 fw-semibold fs-6" style={myStyle}>A
                                    An e‑commerce web application based on the functionality of real-world online shopping platforms. Built with HTML, CSS, JavaScript, and Django, it allows users to add products to their cart and filter items category-wise. The app is responsive and works seamlessly across desktop and mobile devices, ensuring a smooth shopping experience.
                                </p>
                                <div>
                                    <a className="github-link" href="https://github.com/ankit-8-8/Online_shooping"> <span className=" me-2 "><FaGithub
                                        className="fa-brands fs-5 fa-github " /></span><span
                                            className="fw-semibold fs-6">View Code</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 mt-5 p-1 d-flex justify-content-center">
                            <div className="project-card p-4 text-white" data-aos="fade-up" data-aos-duration="1200">
                                <div>
                                    <div className="my-icon me-3"><IoMdPerson className="text-danger" /></div>
                                    <h3 className="d-inline-block">Portfolio</h3>
                                </div>
                                <p className="mt-4 fw-semibold fs-6" style={myStyle}>A
                                    This project highlights my ability to build scalable, user-friendly applications with React, manage state effectively, and integrate frontend and backend technologies to deliver real-world functionality with professional polish.

                                </p>
                                <div>
                                    <a className="github-link" > <span className=" me-2 "><FaGithub
                                        className="fa-brands fs-5 fa-github " /></span><span
                                            className="fw-semibold fs-6">View Code</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 mt-5 p-1 d-flex justify-content-center">
                            <div className="project-card p-4 text-white" data-aos="fade-up" data-aos-duration="1200">
                                <div>
                                    <div className="my-icon me-3"><FaCloud className="text-danger" /></div>
                                    <h3 className="d-inline-block">Weather App</h3>
                                </div>
                                <p className="mt-4 fw-semibold fs-6" style={myStyle}>
                                    A weather app that provides real-time weather updates and forecasts. Built with
                                    React.js, Javascript, and Vite, it fetches data from a weather API and displays it in a
                                    user-friendly interface. The app is responsive .</p>
                                <div>
                                    <a className="github-link" > <span className=" me-2 "><FaGithub
                                        className="fa-brands fs-5 fa-github " /></span><span
                                            className="fw-semibold fs-6">View Code</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects



