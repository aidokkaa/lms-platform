import {Link} from 'react-router-dom'
import styles from '../../pages/coursePage/coursePage.module.css'
const TopNav = () => {
  return (
    <div>
      <div className={styles.nav}>
        <div className={styles.navInner}>
            <div className="logo">Logo / <span>Your Path to Skills</span></div>
            <nav className={styles.navbar}>
            <Link className={styles.link} to = '/'>Home</Link>
            <Link className={styles.link} to = '/'>Courses</Link>
            <Link className={styles.link} to = '/'>Contacts</Link>
            <Link className={styles.link} to = '/'>Sign in</Link>
            </nav>
        </div>
      </div>
    </div>
  )
}

export default TopNav
