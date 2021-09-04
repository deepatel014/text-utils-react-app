import React from 'react'
// import utilityKnife from './utilityKnife.png';

export default function AboutUs(props) {
    return (
        <div className="container " style={{color:props.mode === 'light' ? 'black' : 'white' }}>
            <h1 className="my-2">About Us</h1>
            <div className="accordion" id="accordionExample" style={{color:props.mode === 'light' ? 'black' : 'white'}}>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse"  style={{color:props.mode === 'light' ? 'black' : 'white',backgroundColor: props.mode === 'light' ? 'white' : '#244a68'}} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze Your text</strong> 
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show"  style={{color:props.mode === 'light' ? 'black' : 'white',backgroundColor: props.mode === 'light' ? 'white' : '#244a68'}} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or how many minutes it takes to read your text.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"  style={{color:props.mode === 'light' ? 'black' : 'white',backgroundColor: props.mode === 'light' ? 'white' : '#244a68'}}>
                    <strong>Free to use </strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse"  style={{color:props.mode === 'light' ? 'black' : 'white',backgroundColor: props.mode === 'light' ? 'white' : '#244a68'}} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"  style={{color:props.mode === 'light' ? 'black' : 'white',backgroundColor: props.mode === 'light' ? 'white' : '#244a68'}} data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
               <strong> Browser Compatible </strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse"  style={{color:props.mode === 'light' ? 'black' : 'white',backgroundColor: props.mode === 'light' ? 'white' : '#244a68'}} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                </div>
                </div>
            </div>
            </div>
                {/* <p>This is a utility tool which helps in manipulating text in the way you want.</p>
                <br/>
                <img src={utilityKnife} alt="" style={{width : "415px"}} /> */}
        </div>
        

    )
}
