import {createContext} from 'react'
const BooksContext = createContext();
function Provider({children}){
    return <BooksContext.Provider>
        {children}
    </BooksContext.Provider>
}
export {Provider};  
export default BooksContext;
