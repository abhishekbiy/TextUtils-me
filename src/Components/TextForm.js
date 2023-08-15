import React, {useState} from 'react'
// import PropTypes from 'prop-types'

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick= () =>{
    // console.log("Clicked");
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to UpperCase','success');
  }
  const handleLoClick= () =>{
    // console.log("Clicked");
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to LowerCase','success');
  }
  const handleOnChange=(event)=>{
    // console.log("On Change");
    setText(event.target.value);
  }
  const handleUpClear=()=>{
    setText("");
  }
  return (
    <>
    
    <div className='container' style={{color: props.mode==='dark' ? 'white':'black'}}>
      <h1>Enter text to analyze- {props.heading}</h1>
      <div classname="container mb-3">
        <textarea classname="form-control" placeholder="Enter the text here" style={{backgroundColor: props.mode==='dark' ? '#042743':'white', color: props.mode==='dark' ? 'white':'black'}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
      <button className="btn btn-primary " onClick={handleUpClick}>Convert</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert</button>
      <button className="btn btn-primary mx-2" onClick={handleUpClear}>Clear</button>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark' ? 'white':'black'}}>
      <h2>Summary</h2>
      <p>{text.split(" ").length} Words and {text.length} Characters</p>
      <p>Take {0.008 * text.split("").length} Minutes to read </p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
