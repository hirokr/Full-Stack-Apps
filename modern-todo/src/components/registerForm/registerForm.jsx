"use client"
import styles from './registerForm.module.css';
import {useFromState} from "react-dom"

const RegisterForm = () =>{
  const [state, formAction] = useFromState()
  return(
    <div className= {styles.container}>
      <form className={styles.form}>
      
      </form>
    </div>
  )
}


export default RegisterForm