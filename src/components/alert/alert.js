import React from 'react'

function Alert(props) {
    let myStyle = {
        transition: "all 1s",
        // backgroundColor: "black"
    }
    return (
        <>
            {props.alert && <div style={myStyle} className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                {props.alert.messj}
            </div>}
        </>
    )
}

export default Alert;   
