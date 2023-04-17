import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroungColor: "white",
  //   border: "2px solid white",
  // });
  let myStyle = {
    color: props.mode ==='dark' ? 'white': 'black',
    backgroundColor: props.mode === 'dark' ? '#40445a':'white',
    border: "2px solid white"
  }
  let myStyle2 = {
    color: props.mode ==='dark' ? 'white': 'black',
    backgroundColor: props.mode === 'dark' ? 'black':'white',
    border: '2px solid',
    borderColor:props.mode ==='dark' ? 'white': 'whitesmoke',
    borderRadius: "5px",
  }
  

  return (
    <div className="container my-3 " style={myStyle2} >
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong> Analyze Your Text </strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" >
              Textutils gives you a way to analyze your text quickly and
              efficiently. Be it word count, character count or preview also
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong> Free to Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Textutils is a free character counter tool that provides instant
              character count and word statitics for a given text. textutils
              reports the number of words and characters. Thus it is suitable
              for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong> Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This word counter software works in any web browsers such as
              Chrome, firefox, Internet Explorer, Safari, Opera. It suits to
              count character in facebook, blog, books, excel document, pdf
              document, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
