import './App.css'
import { Routes, Route } from 'react-router-dom'
import CoursePage from './pages/coursePage/CoursePage'
import ProgressOverview from './components/progress/ProgressOverview'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/profPage/ProfilePage'
import Login from './pages/Login'
import Register from './pages/Register'
function App() {
    return (
        <>
            <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
           {/* <Route path='/courses' element={<HomePage/>}></Route> */}
        </Routes>
            {/* <CoursePage></CoursePage> */}
            {/* <ProfilePage></ProfilePage> */}
   {/* <Register></Register> */}

        </>
    )
}

export default App
