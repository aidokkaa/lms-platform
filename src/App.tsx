import './App.css'
import { Routes, Route } from 'react-router-dom'
import CoursePage from './pages/coursePage/CoursePage'
import ProgressOverview from './components/progress/ProgressOverview'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/profPage/ProfilePage'
function App() {
    return (
        <>
            {/* <Routes>
            <Route path='/' element={<HomePage/>}></Route>
           <Route path='/courses' element={<HomePage/>}></Route>
        </Routes> */}
            <CoursePage></CoursePage>
            {/* <ProfilePage></ProfilePage> */}


        </>
    )
}

export default App
