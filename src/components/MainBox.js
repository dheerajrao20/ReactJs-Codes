import React, { useState } from 'react'

function MainBox() {

    const changetoupperCase = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const changetolowerCase = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange = (event)=>{
        setText(event.target.value) 
    }

    const [text, setText] = useState('')

  return (
    <div className='container my-5'>
      <div className="form-group"> 
        <textarea value={text} onChange={handleOnChange} placeholder='Enter text here...' className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
        <button type="button" onClick={changetoupperCase} className="btn btn-primary my-3 mx-2">UpperCase</button>
        <button type="button" onClick={changetolowerCase} className="btn btn-primary my-3 mx-2">LowerCase</button>
      </div>
    </div>
  )
}

export default MainBox
