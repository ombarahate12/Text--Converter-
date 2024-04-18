import React, {useState} from 'react';



 

export default function Textform(props) {
  const [text, setText]=useState("");

  function handleChange(event){
    setText(event.target.value);

  }

  function handleClick(){
    let newText=text.toUpperCase();
    setText(newText);
  }

  function handleClick2(){
    let newText2=text.toLowerCase();
    setText(newText2);
  }
  function handleCopy(){
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  function handleExtraSpaces(){
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
  }
   
  return (
    <>
    <div className="container" style={{color : props.mode==="dark" ? "white" : "#042743"}}>
      <h1 >{props.heading}</h1>
      <div class="mb-3">
        <textarea class="form-control" value={text} onChange={handleChange} style={{backgroundColor : props.mode==="dark" ? "grey" : "white",color: props.mode==="dark" ? "white" : "grey"}}  id="myBox" rows="8"></textarea>
        <button type="button " class="btn btn-primary my-3" onClick={handleClick}>Convert to Uppercase</button>
        <button type="button " class="btn btn-primary my-3 mx-2" onClick={handleClick2}>Convert to Lowercase</button>
        <button type="button " class="btn btn-primary my-3 mx-2" onClick={handleCopy}>Copy Text</button>
        <button type="button " class="btn btn-primary my-3 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
    </div>

    <div className="container my-2" style={{color : props.mode==="dark" ? "white" : "#042743"}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 *text.split(" ").length }Minutes read</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Enter something in the Textbox above to preview it here."}</p>
    </div>
    
    </>
  
   
  );
}
