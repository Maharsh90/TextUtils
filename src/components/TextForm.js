import React, {useState} from 'react'//type rfc 

export default function TextForm(props) {
    const handleClick = ()=>{
        // console.log("UpperCase was clicked" + Text);
        let newText=Text.toUpperCase();
        setText(newText)
        props.showalert("Converted into uppercase","success");
    }
    const handleLClick = ()=>{
        // console.log("UpperCase was clicked" + Text);
        let newText=Text.toLowerCase();
        setText(newText)
        props.showalert("Converted into lowercase","success");
    }    
    const ClearText = ()=>{
        let newText=''
        setText(newText)
        props.showalert("Text cleared","success");
    }
    const ClearSpace = ()=>{
        let newText = Text.replace(" ","")
        setText(newText)   
       
    }
    // const regenrateSpace = ()=>{
    //     let newText = Text.indexOf("")
    //     setText(newText)
    // }    
    const handleOnChange = (event)=>{
        // console.log("On change")
        setText(event.target.value)
    }
  
    const [Text,setText] = useState(''); 
    //Text = "New text" Wrong way to change the text
    // setText("New text")
    return (
        <>
        <div className="container" style={{color:props.Mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
            {/* <label htmlFor="exampleFormControlInput1" class="form-label">Write:- </label> */}
            <textarea cols="60" rows="8" value={Text} style={{backgroundColor:props.Mode ==='dark'?'#082147':'white',color:props.Mode === 'dark'?'white':'black'}} onChange={handleOnChange}></textarea><br/>
            <button className="btn btn-p mx-2" onClick={handleClick}>Convert to UpperCase</button>
            <button className="btn btn-p mx-2" onClick={handleLClick}>Convert to LowerCase</button>
            <button className="btn btn-p mx-2" onClick={ClearText}>Clear Text</button>
            <button className="btn btn-p mx-2" onClick={ClearSpace}>Clear Spaces</button>
            {/* <button className="btn btn-p mx-2" onClick={regenrateSpace}>regenrate Space</button> */}
        </div>
        <div className="container mb-3" style={{color:props.Mode === 'dark'?'white':'black'}}>
         <h1>Your Text summary</h1>
         <p>Words:{Text.split(" ").length} character:{Text.length}</p>
         <p>{0.008 * Text.split(" ").length}Minutes read</p>
         <h2>Preview</h2>
         <p>{Text.length>0?Text:"Enter somthing to preview"}</p>
        </div>
        </>
    )
}
