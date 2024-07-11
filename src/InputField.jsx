import { useState } from 'react'
import './InputField.css' 

function InputField() {
    const [inputText, setInputText]= useState()
    const [data, setData] = useState([])
    const handleInput= (e)=>{
        console.log(e.target.value);
        setInputText(e.target.value)
    }

    const handleBtn =()=>{
        console.log(inputText);
        setData([...data, inputText])
        setInputText('')

    }

    const deleteHandle =(index)=>{
        let filterData = data.filter((curElem, id)=>{
            return id != index
        })
        setData(filterData)
    }

  return (
    <div>
        
            <div className="container">
                <div className="todo">
                    <div className="inputText">
                        <input className='inputBox' type="text" placeholder='Type Here' value={inputText} onChange={handleInput}/>
                        <button className='btn' onClick={handleBtn}>Add</button>
                    </div>
                    
                    <div className="list">
                        {data.map((curElem,index)=>{
                            return(
                                <>
                                    <div className="item">
                                        <li>
                                            {curElem}
                                        </li>
                                        <button className='btn' onClick={()=>{deleteHandle(index)}}>Delete</button>
                                    </div>
                                    
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
    </div>
  )
}

export default InputField