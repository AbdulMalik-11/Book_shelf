import Bookshow from './bookshow' 
function Booklist({books,ondelete,onfinal})
{
    const renderbooks=books.map((book)=>
    {
     return <Bookshow ondelete={ondelete} books={books} onfinal={onfinal} book={book} key={book.id}/>
    })
    return (
        <div className='booklist'>
            {renderbooks}
        </div>
    );
}
export default Booklist;