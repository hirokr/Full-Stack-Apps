import InputField from '../InputField/InputField';
import styles from './TodoCard.module.css';

const TodoCard = () =>{
  return(
    <div className= {styles.container}>
      main todo card container <br />
      #1 number of task to do (pi chart) <br />
      <InputField/>
      <p>hi</p>
      #5 add checkbox<br />
      #6 add delete button<br />
      #7 add edit button<br />
      #9 add filter feature<br />
    </div>
  )
}


export default TodoCard