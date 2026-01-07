import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
    useEffect(
        () => {
            AOS.init({

            })
        }
        , [])

    const mystyle = {
        fontFamily: 'sans-serif',
        color: "grey"
    }

    const myStyle2 = {
        border: "1px solid rgba(123, 30, 30, 0.481)",
        borderLeftWidth: "5px"
    }

    return (
        <>
            <div className="row home-sec">
                <div className="col-lg-2 col-md-1"></div>
                <div className="col-md-5 text-white pt-3 mt-5 mt-sm-0" data-aos="fade-right" data-aos-duration="1500">
                    <h1 className="display-4 fw-lg-bold fw-semibold" >Hello, I'm <br /> Ankit Chaurasia</h1>
                    <p className="lead" >A Passionate Web Developer</p>
                    <p >Intern at Techpile technology Pvt. Ltd.</p>
                    <div>
                        <a href="#project_section" className="btn b-shadow1 mt-3 ms-0 px-4 py-2 rounded-5 text-white">View My
                            Work</a>
                        <a href="#contact_section" className="btn border-secondary mt-3 ms-3 px-4 text-white py-2 rounded-5">Contact
                            me</a>
                        <div className="ps-4 mt-4">
                            <a href="https://github.com/ankit-8-8"> <span className="my-icon me-2"><FaGithub
                                className="fa-brands text-danger fs-6 fa-github" /></span></a>

                            <a href="https://www.linkedin.com/in/ankit-chaurasia-1962662a4/"><span className="my-icon me-2"><FaLinkedin
                                className="fa-brands text-danger fs-6 fa-linkedin" /></span></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 mt-3">
                    <div className="img-outer text-center text-md-start">
                        <img data-aos="flip-left" data-aos-duration="1500" src="my1.png" className="img-fluid" alt="" />
                    </div>
                </div>
            </div>


            <div className="row mt-lg-3 mt-5 pt-5 pt-md-0">
                <div className="col-lg-12 text-white d-flex justify-content-center fs-1">
                    <a href="#project_section" className="darr text-white t-shadow" style={{ textDecoration: "none" }}>
                        <FaAngleDown className="fa-brands text-white fs-1 fa-angle-down" /></a>
                </div>
            </div>

            <div className="row">
                <div className="col-12 text-center fw-semibold fs-1 mt-5 pt-5 mb-0 pb-0 text-white mb-5">
                    Education
                </div>


                <div className="col-12 mt-4">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-12 col-sm-10 col-md-6 col-lg-4 my-3">
                            <div style={myStyle2} className="card border-start-5 h-100 bg-transparent text-white p-3" data-aos="fade-up">
                                <div className="card-body p-0">
                                    <h5 className="card-title">10th Standard</h5>
                                    <p className="card-text mb-1" style={mystyle}>J.P.SR.SEC.SCHOOL, Bhankrota, Jaipur</p>
                                    <p className="card-text small ">Year: 2020</p>
                                    <p className="card-text mt-2" style={mystyle}>Percentage : 79%</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6"></div>
                        <div className="col-5"></div>
                        <div className="col-12 col-sm-10 col-md-6 col-lg-4 my-3">
                            <div style={myStyle2} className="card h-100 bg-transparent text-white p-3" data-aos="fade-up">
                                <div className="card-body p-0">
                                    <h5 className="card-title">12th Standard</h5>
                                    <p className="card-text mb-1" style={mystyle}>Gandhi Inter College, Ballia</p>
                                    <p className="card-text small ">Year: 2022</p>
                                    <p className="card-text mt-2" style={mystyle}>Stream: PCM (62%)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3"></div>
                        <div className="col-2"></div>
                        <div className="col-12 col-sm-10 col-md-6 col-lg-4 my-3">
                            <div style={myStyle2} className="card h-100 bg-transparent text-white p-3" data-aos="fade-up">
                                <div className="card-body p-0">
                                    <h5 className="card-title">Diploma</h5>
                                    <p className="card-text mb-1" style={mystyle}>MMIT Hariharpur, Gorakhpur</p>
                                    <p className="card-text small ">Year: 2022 - 2025</p>
                                    <p className="card-text mt-2" style={mystyle}>Branch: Computer Science Engineering (72%)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6"></div>
                        <div className="col-1"></div>
                        <div className="col-4"></div>
                        <div className="col-12 col-sm-10 col-md-6 col-lg-4 my-3">
                            <div style={myStyle2} className="card h-100 bg-transparent  text-white p-3" data-aos="fade-up">
                                <div className="card-body p-0">
                                    <h5 className="card-title">B.Tech (Current)</h5>
                                    <p className="card-text mb-1" style={mystyle}>Aktu University, Lucknow</p>
                                    <p className="card-text small ">2026 - Present</p>
                                    <p className="card-text mt-2" style={mystyle}>Branch: Cyber Security</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero



