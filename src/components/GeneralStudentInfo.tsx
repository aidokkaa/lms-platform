import EditableField from "./EditableField"
import styles from '../pages/profPage/profPage.module.css'
import React from "react"
import { UserContext } from "../context/UserContext"
type User = {
  firstname:string,
  lastname:string,
  email:string
} 
const GeneralStudentInfo = () => {
const userContext = React.useContext(UserContext) 
if (!userContext) {
  return null;
}
const {user,setUser}=userContext
    console.log(user, 'general')
    const handleSave = (field:string,newValue:string)=>{
      setUser(prev=>({...prev,[field]:newValue}))
    }
    let studInfo = [
        {type:'text',field:'firstname',placeholder:'',label:'First name:'},
        {type:'text',field:'lastname',placeholder:'',label:'Last name:'},
        {type:'text',field:'email',placeholder:'',label:'Email:'}
    ]
  return (
<>
    <div className={styles.general}>
      <div>
        {
            studInfo.map((item,index)=><EditableField 
            key={index} 
            field={item.field} 
            type= {item.type} 
            label = {item.label} 
            onSave = {handleSave}
            value={user[item.field as keyof User]}
            ></EditableField>)
        }

      </div>
    </div>
</>
  )
}

export default GeneralStudentInfo
