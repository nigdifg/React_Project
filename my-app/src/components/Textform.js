import React,{useState} from 'react'

export default function Textform(props) {
    const [text,setText]=useState('Type here!');
 
  const handleupclick = ()=>{
   let newText = text.toUpperCase();
   setText(newText);
   props.showAlert("converted to uppercase","success");
 }

 const handleLowerclick= ()=>{
   let newText = text.toLowerCase();
   setText(newText);
   props.showAlert("Converted to Lowercase","success");
 }
 const handleClrclick= ()=>{
   let newText = '';
   setText(newText);
   props.showAlert("Text cleared","success");
 }

const handleonchange = (event)=>{
  setText(event.target.value);
}
    return (
      <>
    <div className="container"  style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='light'?'rgb(194 135 143 / 30%)':''}}>
  <div className="mb-3">
      <h1> Enetr the text to analyze </h1>
    <textarea className="form-control" id="myBox" value={text} onChange={handleonchange}  style={{backgroundColor:props.mode==='dark'?' ##004d99':'#5940401f', color:props.mode==='dark'?'white':'black'}} rows="6"></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick={handleupclick}>Convert to UPPERCASE</button>
  <button className="btn btn-primary mx-2" onClick={handleLowerclick}>Convert to LOWERCASE</button>
  <button className="btn btn-primary mx-2" onClick={handleClrclick}>Clear Text</button>
    </div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
  <h2>Your text summary</h2>
  <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>


<p>{0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length} min read</p>
<h2>Preview!</h2>
<p>{text.length>0?text:"Type in textbox to preview!"}</p>

</div>
</>
  )
}
