import { useState } from 'react'
import './index.css'
import Booklist from './components/booklist'
import Bookcreate from './components/bookcreate'
function App() {
    const [books, setbook] = useState([])
    const ondelete = (id) => {
        const newbooks = books.filter((book) => {
            return book.id !== id;
        })
        setbook(newbooks)
    }
    const onfinal=(content,id)=>
    {       
        const updated_arr=books.map((book)=>
        {
            if(book.id===id)
            {
                return {...book,title:content}
            }

            return book;
        })
        setbook(updated_arr)
    }
    const createbook = (title) => {
        const obj = [...books, { id: Math.random(), title: title }]
        setbook(obj)
    }
    return (
        <div >
            <main className='bookcnt'>
            <Booklist books={books} ondelete={ondelete} onfinal={onfinal}/>
        </main>
            <footer>
            <Bookcreate oncreate={createbook} />
            </footer>
        </div>
    );
}
export default App;