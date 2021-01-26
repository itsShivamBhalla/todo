import React, { useState } from 'react';
import TodoList from './TodoList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus  } from '@fortawesome/free-solid-svg-icons'


const App =()=>{

    const [inputList, setInputList]=useState("");
    const [item,setItem]=useState([]);
    
const itemEvent=(event)=>
{
    setInputList(event.target.value);
};

const listOfItem=()=>
{
    setItem((oldItem)=>{
        return[...oldItem, inputList]
    })
    setInputList("");
}

const deleteItem = (id) =>{
setItem((oldItem)=>{
    return oldItem.filter((arrElement,index)=>{
        return index!==id ;

    })
})    
}


return(

   <>
    <div className='main_div'>
    <div className="center_div">

        <br/>
        <h1>ToDo List</h1>
        <br/>
        <input type="text" placeholder="ADD items" value={inputList} onChange={itemEvent}/>
        <button onClick={listOfItem}>
           <FontAwesomeIcon icon={faPlus}/>
        </button>

        <ol>
            
                {/* {inputList} */}
                {
                    item.map( (itemValue,index)=> {
                    return(
                       <TodoList key={index} id={index}
                        text={itemValue}
                        onSelect={deleteItem} 


                       />
                    )
                }  )
                }
                
           
        </ol>

    </div>
    </div>


   </>
)}
export default App;
