import React from "react";

export const About = (props) => {
    let mystyle={
        color:props.mode==='dark'?'white':'black',
        backgroundColor:props.mode==='dark'?'#223633':'white'
    }
    
    return (
        <div>
            <div className='container'>
        <h2 className="my-3" style={{color:props.mode==='dark'?'white':'black',}}> 📝 d@ilyNotes</h2>
        <div className="accordion" id="accordionExample" style={mystyle}>
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
         <strong> Analyze 🧐  d@ilyNotes</strong>
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={mystyle}>
        Write down your daily goals each day 😎 . d@ilyNotes help you to make  notes and the notes are secure ⚔️ only you can access them 👨‍💻.
          
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          <strong>Easy to Use 😊</strong>
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={mystyle}>
        Signup and start making notes . You can add , update and delete the notes. You can enable the dark mode also .


            </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          <strong>Motive to Create</strong> 
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={mystyle}>
        Something magical happens when you regularly write down what you really, truly, genuinely want in life—you actually start to get it. Great ideas hit you out of nowhere, and your mind urges you to take action on them until your goals become a reality. It’s a beautiful thing.
            </div>
        </div>
    </div>
    </div>

    
   

        </div>
        </div>
    )
}
