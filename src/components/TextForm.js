import React , {useState} from 'react';

export default function TextForm(props) {
    const  [text,setText] = useState("");
    // const [text2,set] = useState("");
    const handleUpClick = () =>{
        let tt = text.toUpperCase();
        setText(tt);
    }
    

    const handleCopyText = ()=>{
        let  area = document.querySelector("#box");
        // console.log(area.textContent);
        area.select();
        document.execCommand('copy');
        props.showAlert("Text has been copied to the Clipboard!","success");
        
    }

    const morseCode =()=>{
        
        const morseCodeDic = {
            "A": ".-",
            "B": "-...",
            "C": "-.-.",
            "D": "-..",
            "E": ".",
            "F": "..-.",
            "G": "--.",
            "H": "....",
            "I": "..",
            "J": ".---",
            "K": "-.-",
            "L": ".-..",
            "M": "--",
            "N": "-.",
            "O": "---",
            "P": ".--.",
            "Q": "--.-",
            "R": ".-.",
            "S": "...",
            "T": "-",
            "U": "..-",
            "W": ".--",
            "X": "-..-",
            "Y": "-.--",
            "Z": "--.."
         }
         
        let tt = text;
         let ts = tt.toUpperCase().split("").map(el=>{
             return morseCodeDic[el] ? morseCodeDic[el] : el;
         }).join(' ');
         let  area = document.querySelector("#box");
         area.value = ts;

    };

    const handleLoClick = () =>{
        let tt = text.toLowerCase();
        setText(tt);
    }
    
    const handleOnChange = (event) =>{
        setText(event.target.value);
        
    }
    const clearText = () =>{
        setText('');
    }


    return (
        < >
            <div className="mb-3 " style={{color:props.mode === 'light' ? 'black' : 'white'}}>
                    <h1>{props.label}</h1>
                    <div className="form-group mb-3">
                        {/* <label for="exampleFormControlTextarea1">{props.label}</label> */}
                        <textarea className="form-control" value={text} type='code' onChange={handleOnChange} style={{backgroundColor: props.mode === 'light' ? 'white' : '#212529',color:props.mode === 'light' ? 'black' : 'white'}} id="exampleFormControlTextarea1" rows="8"></textarea>
                    </div>
                    <button onClick = {handleUpClick}className= "btn btn-primary mx-2 my-2">Upper Case</button>
                    <button onClick = {handleLoClick}className= "btn btn-primary mx-2 my-2">Lower Case</button>
                    <button onClick={handleCopyText} className= "btn btn-primary mx-2 my-2">Copy Text</button>
                    <button onClick={morseCode} className= "btn btn-primary mx-2 my-2">Morse Code</button>
                    <button onClick={clearText} className= "btn btn-primary mx-2 my-2">Clear Text</button>
                    
            </div>
            <div className="container my-3" style={{color:props.mode === 'light' ? 'black' : 'white'}}>
                <h1>Text Summary:</h1>
                <p>{text.split(" ").at(0) === ""?"0":text.trim().split(" ").length} words and {text.replace(/ /g,"").length} characters</p>
                <p>{0.008 * (text.trim().split(" ").length-1)} Minute Read</p>
                <h1>Preview</h1>
                <textarea className="form-control" value={text}  id="box" style={{backgroundColor: props.mode === 'light' ? 'white' : '#212529',color:props.mode === 'light' ? 'black' : 'white'}} readOnly  rows="8"></textarea>
            </div>
        </>
    )
}
