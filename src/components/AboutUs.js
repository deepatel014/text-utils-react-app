import React from 'react'
import utilityKnife from './utilityKnife.png';

export default function AboutUs(props) {
    return (
        <div className="container d-flex justify-content-center" style={{color:props.mode === 'light' ? 'black' : 'white',flexDirection:"column"}}>
            <h1 className="my-2">About </h1>
                <p>This is a utility tool which helps in manipulating text in the way you want.</p>
                <br/>
                <img src={utilityKnife} alt="" style={{width : "415px"}} />
        </div>
        

    )
}
