import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiExpress } from "react-icons/si";


const Skills = () => {
    const myColor = {
        backgroundColor: ' rgba(30, 39, 59, 0.6)'
    }

    return (
        <>
            <div className="row" id="skill_section">
                <div className="col-12 text-center fw-semibold fs-1 my-5 py-5 text-white">
                    Technical Skills
                </div>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-md-4  col-12 text-center d-flex justify-content-center  " data-aos="fade-right" data-aos-duration="1200">
                        <div className="project-card p-3">
                            <h3 className="mb-5 text-danger text-start">Frontend</h3>
                            <div className="text-center">
                                <p style={{ background: "rgba(30, 39, 59, 0.6)" }}
                                    className="tech-icon fw-semibold d-inline-block px-4 py-3 fs-6 me-2 text-white rounded-3"><FaHtml5
                                        className="me-2 fs-5 fa-brands fa-html5" style={{ color: "#f97316" }} />HTML</p>
                                <p style={{ background: "rgba(30, 39, 59, 0.6)" }}
                                    className="tech-icon fw-semibold d-inline-block px-4 py-3 fs-6 me-2 text-white rounded-3"><IoLogoCss3
                                        className="me-2 fs-5 fa-brands fa-css3-alt" style={{ color: " #ef4444" }} />CSS</p> <br />
                                <p style={{ background: "rgba(30, 39, 59, 0.6)" }}
                                    className="tech-icon fw-semibold d-inline-block px-4 py-3 fs-6 me-2 text-white rounded-3"><IoLogoJavascript
                                        className="me-2 fs-5 fa-brands fa-js" style={{ color: "#f7df1e" }} />Javascript</p> <br />
                                <p style={{ background: "rgba(30, 39, 59, 0.6)" }}
                                    className="tech-icon fw-semibold d-inline-block px-4 py-3 fs-6 me-2 text-white rounded-3"><FaBootstrap
                                        className="me-2 fs-5 fa-brands fa-bootstrap" style={{ color: "#702cf6" }} />Bootstrap</p>
                                <p style={{ background: "rgba(30, 39, 59, 0.6)" }}
                                    className="tech-icon fw-semibold d-inline-block px-4 py-3 fs-6 me-2 text-white rounded-3"><FaReact
                                        className="me-2 fs-5 fa-brands fa-react" style={{ color: "#5ed4f3" }} />React</p>
                                <p style={{ background: "rgba(30, 39, 59, 0.6)" }}
                                    className="tech-icon fw-semibold d-inline-block px-4 py-3 fs-6 me-2 text-white rounded-3"><SiRedux
                                        className="me-2 fs-5 fa-brands fa-react" style={{ color: "#39b8d7ff" }} />Redux Toolkit</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 mt-5 d-flex justify-content-center mt-md-0" data-aos="fade-right" data-aos-duration="1200">
                        <div className="project-card p-3">
                            <h3 className="mb-5 text-danger text-start">Backend</h3>
                            <div className="text-center">
                                <p style={{ background: "rgba(30, 39, 59, 0.6)" }}
                                    className="tech-icon fw-semibold d-inline-block px-4 py-3 fs-6 me-2 text-white rounded-3"><FaPython
                                        className="me-2 fs-5 fa-brands fa-python" style={{ color: "#764abc" }} />Python</p>
                                <p style={{ background: "rgba(30, 39, 59, 0.6)" }}
                                    className="tech-icon fw-semibold d-inline-block px-4 py-3 fs-6 me-2 text-white rounded-3"><FaNode
                                        className="me-2 fs-5 fa-brands fa-node" style={{ color: "#80ef80" }} />Node</p>
                                <br />
                                <p style={{ background: "rgba(30, 39, 59, 0.6)" }}
                                    className="tech-icon fw-semibold d-inline-block px-4 py-3 fs-6 me-2 text-white rounded-3"><SiExpress
                                        className="me-2 fs-5 fa-brands fa-node" style={{ color: "#c8cbd2ff" }} />Express</p>
                                <p style={{ background: "rgba(30, 39, 59, 0.6)" }}
                                    className="tech-icon fw-semibold d-inline-block px-4 py-3 fs-6 me-2 text-white rounded-3"><FaDatabase
                                        className="me-2 fs-5 fa-solid fa-database" style={{ color: "#f97316" }} />SQL</p>
                                <p style={{ background: "rgba(30, 39, 59, 0.6)" }}
                                    className="tech-icon fw-semibold d-inline-block px-4 py-3 fs-6 me-2 text-white rounded-3"><SiMongodb
                                        className="me-2 fs-5 fa-solid fa-database" style={{ color: "#80ef80" }} />MongoDb</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Skills



