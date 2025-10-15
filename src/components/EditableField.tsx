import React from 'react'
import { CiEdit } from "react-icons/ci";
import styles from '../pages/profPage/profPage.module.css'
 type EditableFieldProps = {
  field:string,
    type:string,
    label:string,
    placeholder?:string,
    onSave:(field: string, newValue: string)=>void,
    value:string
 }
const EditableField:React.FC<EditableFieldProps> = ({field,type,label,placeholder,onSave,value}) => {
const [isEditing,setisEditing]=React.useState(false)
const [inpVal,setInpValue]=React.useState<string>('')
const inpRef = React.useRef<HTMLInputElement>(null)
  React.useEffect(()=>{
    if(isEditing && inpRef.current){
      inpRef.current.focus()
    }
  },[isEditing])
const editClickButton =()=>{
  setInpValue(value)
  setisEditing(true)
}
const handleSave =()=>{
  onSave(field,inpVal)
  setisEditing(false)
}

  return (
  
        <div className={styles.editableField}>
    <label htmlFor="">{label}</label>
    <input disabled={!isEditing} onChange={(e)=>{setInpValue(e.target.value)}} value={isEditing ? inpVal :value} ref={inpRef} type={type} placeholder={placeholder} />  
    {
      isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={editClickButton}><CiEdit/></button>
      )
    }
  </div>
  )
}

export default EditableField

