import Bookedit from './bookedit'
import Img from '../svg/book.png'
import { useState } from "react";
function Bookshow({ book, ondelete, onfinal, books }) {
    const [edit, setedlt] = useState(false);
    const handlerdelete = () => {
        ondelete(book.id);
        console.clear();
    }
    const handleedit = () => {
        setedlt(!edit)
    }
    let content = <h3>{book.title}</h3>
    if (edit) {
        content = <Bookedit editupdate={onfinal} book={book} showupdate={handleedit} />
    }
    return (
        <div className="book-show">
            <div className='actions'>
                <button className='delete' onClick={handlerdelete}>x</button>
                <button className="edit" onClick={handleedit}></button>
            </div>
            <div className='container'>
            <img className='image' src={Img} />
            </div>
            {content}
        </div>
    );
}
export default Bookshow;