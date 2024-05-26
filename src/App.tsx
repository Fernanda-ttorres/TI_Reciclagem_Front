import './App.css'
import { AddActivities } from './features/AddActivities/AddActivities'
import { AddStudents } from './features/AddStudent/AddStudent'
import { CollectionPoints } from './features/CollectionPoints/CollectionPoints'
import { ForgotPassword } from './features/ForgotPassword/ForgotPassword'
import { Login } from './features/Login/Login'
import { Dashboard } from './features/Dashboard/Dashboard'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/forgotPassword' element={<ForgotPassword/>}/>
        <Route path='/' element={<CollectionPoints/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/activities' element={<AddActivities/>}/>
        <Route path='/students' element={<AddStudents/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
