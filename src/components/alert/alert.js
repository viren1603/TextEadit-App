import React from 'react'

function Alert(props) {
    let myStyle = {
        transition: "all 1s",
        // backgroundColor: "black"
    }
    return (
        <>
            <div style={{ height: "50px" }}>
                {props.alert && <div style={myStyle} className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    {props.alert.messj}
                </div>}
            </div>
        </>
    )
}

export default Alert;   
