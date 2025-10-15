import React from 'react'
import styles from '../profPage/profPage.module.css'
import TopNav from '../../components/headers/HeaderForOthers'
import GeneralStudentInfo from '../../components/GeneralStudentInfo'
import ProgressOverview from '../../components/progress/ProgressOverview'
const ProfilePage = () => {
  const [isSwitch,setisSwitch]=React.useState<boolean>(true)
  return (
    <div>
      <TopNav></TopNav>
      <div className={styles.mainGray}>
        <div className={styles.innerMain}>
          <h1>Profile</h1>
          <p>Manage and update your account info</p>
          <div className={styles.flexAccount}>
            <div  onClick={()=>{setisSwitch(true)}} className={styles.accLine}>Account</div>
            <div onClick={()=>{setisSwitch(false)}} className={styles.progLine}>Progress</div>
          </div><div className={styles.sectionContainer}>
  <h2 className={styles.sectionTitle}>
    {isSwitch ? "Info" : "Progress"}
  </h2>

  {isSwitch ? (
    <GeneralStudentInfo />
  ) : (
    <ProgressOverview />
  )}
</div>

          
         
        </div>
      </div>

    </div>
  )
}

export default ProfilePage
