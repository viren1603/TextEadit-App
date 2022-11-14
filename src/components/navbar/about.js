import React, { useState } from 'react'

export default function About() {

    const [myStyle, setmyStyle] = useState({
        color: "white",
        backgroundColor: "black",
    })

    const [chanjTxt, setchanjTxt] = useState("Enable Dark Mode");
    let eDarkMode = () => {
        if (myStyle.backgroundColor === '#7C0000') {
            setmyStyle({
                color: "black",
                backgroundColor: "white",
                transition: "all 1s"

            })
            setchanjTxt("Enable Light Mode")
        }
        else {
            setmyStyle({
                color: "white",
                backgroundColor: "#7C0000",
                transition: "all 1s"

            })
            setchanjTxt("Enable Dark Mode")

        }
    }


    return (
        <>
            <div className="container mt-4 pt-4 rounded-3" style={myStyle}>
                <h1>About Us</h1>

                <div className="card">
                    <div className="card-header" style={myStyle}>
                        Featured
                    </div>
                    <div className="card-body" style={myStyle}>
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>


                <button type="button" onClick={eDarkMode} className="btn btn-primary mt-4 mb-4">{chanjTxt}</button>
            </div>
        </>
    )
}
