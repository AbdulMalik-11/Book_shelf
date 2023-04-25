import '.././index.css'
import { useState } from "react";
function Createbook({oncreate})
{
    const [title,settitle]=useState('')
    const handlecreate=(event)=>
    {
        settitle(event.target.value)
    }
    const handleclick=(event)=>
    {
        event.preventDefault()
        oncreate(title);
        settitle('')
    }
    return (
        <div className="book-create">
            <h3>Add book</h3>
        <form>
            <label>Title</label>
            <input className='input' value={title} onChange={handlecreate}/>
            <button className='button' onClick={handleclick}>Submit</button>
        </form>
        </div>
    );
}
export default Createbook;