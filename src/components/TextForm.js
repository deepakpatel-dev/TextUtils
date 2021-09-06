import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
    // console.log("New Text Shown" + text);
    let newText = text.toUpperCase();
    setText(newText);
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        }

        const handleClearClick = () => {
            let newText = ' ';
            setText(newText);
            } 

        const handleCopyClick = () => {
            var text = document.getElementById("myBox")
            text.select();
            navigator.clipboard.writeText(text.value);
            }

        const handleExtraSpacesClick = () => {
            let newText = text.split(/[ ]+/);
            setText(newText.join(' '))
                }
            

        // const handleBoldClick = () => {
        //     let newText = text.bold();
        //     setText(newText);
        //     }  

        const handleOnChange = (event) => {
        // console.log("on Change"+ text);
        setText(event.target.value);
        }

     const [text, setText] = useState('')
    return (
        <>
        <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                {/* <label for="myBox" className="form-label">Example Text Area</label> */}
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1"  onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpacesClick}>Clear Extra Space</button>
            {/* <button className="btn btn-primary mx-1" onClick={handleBoldClick}>Bold Text</button> */}
            
        </div>
        
        <div className="container" mu >
            <h2>Your Text Summary</h2>
            <p> {text.split(" ").length} words and {text.length} charaters</p>
            <p>{.008 * text.split(" ").length} words read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}
