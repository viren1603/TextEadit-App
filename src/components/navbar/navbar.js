import { MdFormatColorFill } from 'react-icons/md'
import "react-color-palette/lib/css/styles.css";
import './navbar.css'
import { Link } from 'react-router-dom'
// import { AppContext } from '../../App';
export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-light bg-${props.mode} `} >
                <div className="container-fluid ">
                    <Link className={`navbar-brand text-${props.modetxt}`} to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link active text-${props.modetxt} ms-4`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link text-${props.modetxt} ms-4`} to="/about">About</Link>
                            </li>

                        </ul>


                        <div className="d-flex">
                            <div className="bg-primary rounded mx-2" onClick={() => { props.toggelMode('primary') }} style={{ height: "30px", width: "30px", cursor: "pointer" }}></div>
                        </div>

                        <div className="d-flex">
                            <div className="bg-danger rounded mx-2" onClick={() => { props.toggelMode('danger') }} style={{ height: "30px", width: "30px", cursor: "pointer" }}></div>
                        </div>

                        <div className="d-flex">
                            <div className="bg-warning rounded mx-2" onClick={() => { props.toggelMode('warning') }} style={{ height: "30px", width: "30px", cursor: "pointer" }}></div>
                        </div>

                        <div className="d-flex">
                            <div className="bg-success rounded mx-2" onClick={() => { props.toggelMode('success') }} style={{ height: "30px", width: "30px", cursor: "pointer" }}></div>
                        </div>


                        <div className="form-check form-switch">
                            <input type="checkbox" onClick={() => { props.toggelMode(null) }} className="form-check-input" id="customSwitch1" />
                            <label className={`form-check-label text-${props.modetxt}`} htmlFor="customSwitch1">Enable Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>




        </>
    )
}
