import { useState } from "react";
function Bookedit({editupdate,book,showupdate})
{
    const [update,setupdate]=useState(book.title)
    const preventform=(event)=>
    {
        setupdate(event.target.value)
    }
    const handleeditform=(event)=>
    {
        event.preventDefault();
        editupdate(update,book.id);
        showupdate();
    }
    return(
        <div className="book-edit">
            <form>
            <input value={update} onChange={preventform}/>
            <button onClick={handleeditform}>Save</button>
            </form>
        </div>
    );
}
export default Bookedit;    