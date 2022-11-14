import { useState } from "react";
function TextForm(props) {


    function hendelClick() {
        console.log("hendelClick is Calling");
        const newText = text.toUpperCase()
        props.showAlert("Converted to UpperCase", 'success')
        setText(newText)
    }

    function hendelOnchang(event) {
        // console.log(event.target.value);
        setText(event.target.value)
    }
    const [text, setText] = useState('')

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <form>
                        <div className="form-group">
                            <label ><h1 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{props.title}</h1></label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212529', color: props.mode === 'dark' ? 'white' : 'gray' }} placeholder='Enter The Text' value={text} onChange={hendelOnchang} rows="3"></textarea>
                        </div>
                    </form>
                    <button type="submit" className="btn btn-primary mb-2 mt-4" style={{ color: props.mode === 'light' ? '#212529' : 'white', border: "1px solid black", backgroundColor: props.mode === 'light' ? 'white' : '#212529' }} onClick={hendelClick}>Convert To Upper Case</button>
                </div>
            </div>
            <div className="container">
                <h1 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Your text summary</h1>
                <p style={{ color: props.mode === 'light' ? 'black' : 'white' }}><b>{text.split(" ").length}</b> word and <b>{text.length}</b> charcater</p>
            </div>
        </>
    )
}

export default TextForm;