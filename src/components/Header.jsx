import { Link } from "react-router-dom"
import { FaFileDownload } from "react-icons/fa";
import { RiMenuFold4Line } from "react-icons/ri";

const Header = () => {
    const myStyle = {
        backgroundImage: 'linear-gradient(to right, rgb(208, 17, 17), rgb(133, 13, 13))',
        color: 'transparent',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
    }

    return (
        <>
            <div className="row  position-sticky top-0 z-3" id="navbar">
                <div className="col-lg-1"></div>
                <div className="col-lg-10 p-0">
                    <nav className="navbar navbar-expand-lg text-white ">
                        <div className="container-fluid">
                            <a style={myStyle}
                                className="navbar-brand fs-2 t-shadow1 fw-bold" href="#"> &lt;Ankit /&gt;</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <RiMenuFold4Line className="fa-solid fa-bars text-danger fs-1" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                                    <li className="nav-item px-3 ms-md-5 ms-2">
                                        <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item px-3 ms-2">
                                        <a className="nav-link text-white" href="#project_section">Projects</a>
                                    </li>
                                    <li className="nav-item px-3 ms-2">
                                        <a className="nav-link text-white" href="#">Experience</a>
                                    </li>
                                    <li className="nav-item px-3 ms-2">
                                        <a className="nav-link text-white" href="#skill_section">Skills</a>
                                    </li>
                                    <li className="nav-item px-3 ms-2">
                                        <a className="nav-link text-white" href="#contact_section">Contact</a>
                                    </li>
                                    <li className="nav-item px-2 ms-2 rounded-5 b-shadow1 " style={{ backgroundColor: 'red' }}>
                                        <a className="nav-link text-white" href="https://drive.google.com/drive/folders/1tp5Rs2d6pD6f-KHHjcx_mCluBmnyb7pl"><FaFileDownload
                                            className="fa-solid fa-file-arrow-down" />Resume</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-lg-1"></div>
            </div>
        </>
    )
}

export default Header