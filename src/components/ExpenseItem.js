import React, {useState} from 'react'
import './ExpenseItem.css'


function ExpenseItem(){
    const[value1, setValue]= useState('')
    const[result, setResult] = useState('')
    return(
        <div className='container'>
           <input type='text' placeholder='text' value={value1} onChange={event => setValue(event.target.value)}/>
           <button onClick={()=> setResult(String(value1) + new Date().toLocaleDateString())}>Add</button>
           <p>{result}</p>
        </div>
    )
}

export default ExpenseItem