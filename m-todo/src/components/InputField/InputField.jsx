"use client"
import { useState } from 'react';
import styles from './InputField.module.css';

const InputField = () =>{
  const [task, setTask] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    setTask([...task, e.target[0].value])
    e.target[0].value = ''
    console.log(task)
  }
  return(
    <div className= {styles.container}>InputField
    <form onSubmit={handleSubmit }>
      <input type="text" placeholder="enter the task"  value={task} onChange={(e) => setTask(e.target.value)}/>
      <button type="submit" > Add Task </button>
    </form>
    </div>
  )
}


export default InputField