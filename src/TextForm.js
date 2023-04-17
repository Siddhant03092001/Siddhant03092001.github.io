import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log(`Uppercase was clicked ${text}`);
        let newText =text.toUpperCase();
        setText(newText)
        props.setAlert1("Convert to Upper case","success");
    }
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }

    const handleDownClick =()=>{
        console.log(`Lowercase was clicked ${text}`);
        let newText1 =text.toLowerCase();
        setText(newText1);
        props.setAlert1("Convert to Upper case","success");
    }

    const handleExtraSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.setAlert1("Extra space has been deleted","success");
    }

    const handleCopy =()=>{
        var text = document.getElementById('box')
        text.Select();
        navigator.clipboard.writeText(text.value);
    }
    
    

    
    const [text, setText] = useState('');
  return (
    <>

<div className='container'>
    <h1 style= {{color: props.mode === 'dark' ? 'white': 'black'}}>{props.heading}</h1>
    <div className="my-3 mx-3">
    <textarea className="box"  value={text} style= {{backgroundColor: props.mode === 'dark' ? 'black': 'white' , color: props.mode === 'dark' ? 'white': 'black'}} onChange={handleOnChange} id="Box-area" ></textarea>
    </div>
    <div className='button-container'>
    <button className="btn btn-primary my-2 my-1" onClick={handleUpClick} > Convert to upper-case</button>
    <button className="btn btn-primary mx-2 my-1" onClick={handleDownClick} > Convert to Lower-case</button>
    {/* <button className="btn btn-primary mx-2 my-1" onClick={handleCopy} > Text Copy</button> */}
    <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces} >Remove extra spaces</button>
    
    
    </div>
</div>
<div className="container my-3">
    <h1 style= {{color: props.mode === 'dark' ? 'white': 'black'}}>Your Text Summary</h1>
    <p style= {{color: props.mode === 'dark' ? 'white': 'black'}}> {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p style= {{color: props.mode === 'dark' ? 'white': 'black'}}>{ 0.008 * text.split(" ").length} Minutes to read</p>
    <p style= {{color: props.mode === 'dark' ? 'white': 'black'}}>Preview <br /> {text.length>0? text:'Enter something in the textbox above to preview it here'}</p>
</div>

</>

  )
}
