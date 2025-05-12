import React from 'react'
import { useState } from 'react' 
export const AddTodo = ({addTodo}) => {
    const[title,setTitle]=useState("");
    const[desc,setDesc]=useState("");
    const submit=(e)=>{
e.preventDefault();
if(!title || !desc){
    alert("title or description cannot be blank");
}
addTodo(title,desc);
setTitle("");
setDesc("");
let headerstyle={
    
}
    }
    return (
        <div >
            <form onSubmit={submit}>
              <u> <h3 className='text-center p-2' >ADD TODO</h3></u>
                <div className='container my-3'>
                <div className="mb-3">
                    <label htmlFor="Title" className="form-label">ADD Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}className="form-control" id="exampleInputtitle" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="Description" className="form-label">ADD descrption</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="exampleInputdescripption" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">ADD TODO</button>
                </div>
            </form> 
        </div>
        
    )
}


