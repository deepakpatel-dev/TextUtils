import React, {useState} from 'react'

export default function TextForm(props) {
       const handleUpClick = () => {
    // console.log("New Text Shown" + text);
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert('Converted to UpperCase', 'success')
    }
        const handleLowClick = () => {
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert('Converted to LowerCase', 'success')
        }

        const handleClearClick = () => {
            let newText = ' ';
            setText(newText)
            props.showAlert('Text-Box is Clear', 'success')
            } 

        const handleCopyClick = () => {
            // var text = document.getElementById("myBox")
            // text.select();
            navigator.clipboard.writeText(text.value);
            document.getSelection().removeAllRanges()
            props.showAlert('Copied to Clipboard', 'success')
            }

        const handleExtraSpacesClick = () => {
            let newText = text.split(/[ ]+/);
            setText(newText.join(' '))
            props.showAlert('Extra Spaces removed', 'success')
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
        <div className="container" style={{color:props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1 className="mb-4">{props.heading}</h1>
                <div className="mb-3">
                {/* <label for="myBox" className="form-label">Example Text Area</label> */}
                <textarea className="form-control" value={text} onChange={handleOnChange} 
                          style={{backgroundColor:props.mode === 'dark' ? '#13466e' : 'white', 
                          color:props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8">
                </textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-2"  onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleLowClick}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleCopyClick}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleExtraSpacesClick}>Clear Extra Space</button>
            {/* <button className="btn btn-primary mx-1" onClick={handleBoldClick}>Bold Text</button> */}
            
        </div>
        
        <div className="container" mu style={{color:props.mode === 'dark' ? 'white' : '#042743' }}>
            <h2>Your Text Summary</h2>
            <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} charaters</p>
            <p>{.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} words read</p>
            <h3>Preview</h3>
            <p>{text.length> 0 ? text :'Nothing to preview'}</p>
        </div>
        </>
    )
}
