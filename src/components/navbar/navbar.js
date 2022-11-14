// import react from 'react'
import './navbar.css'
export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-light bg-${props.mode} `}>
                <div className="container-fluid ">
                    <a className={`navbar-brand text-${props.modetxt}`} href="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className={`nav-link active text-${props.modetxt} ms-4`} aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link text-${props.modetxt} ms-4`} href="/">About</a>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className={`nav-link dropdown-toggle text-${props.modetxt} ms-4`} href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className={`dropdown-item text-${props.modetxt} ms-4`} href="/">Action</a></li>
                                    <li><a className={`dropdown-item text-${props.modetxt} ms-4`} href="/">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className={`dropdown-item text-${props.modetxt} ms-4`} href="/">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link disabled text-${props.modetxt} ms-4`} href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
                            </li> */}
                        </ul>
                        <div className="form-check form-switch">
                            <input type="checkbox" onClick={props.toggelMode} className="form-check-input" id="customSwitch1" />
                            <label className={`form-check-label text-${props.modetxt}`} htmlFor="customSwitch1">Enable Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}