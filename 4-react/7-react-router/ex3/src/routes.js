import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Main from './pages/Main';
import SignIn from './pages/SignIn';
import TeacherDetails from './pages/TeacherDetails';

function ProtectedRoutes({redirectTo}) {
  const isAuthenticated = true;
  return isAuthenticated ? <Outlet/> : <Navigate to={redirectTo}/>
} 

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<SignIn />} />

        <Route element={<ProtectedRoutes redirectTo="/" />}>
          <Route path='/main' element={<Main />} />
          <Route path='/teacher/:id' element={<TeacherDetails />} />
        </Route>
    </Routes>
  )
}

export default MainRoutes;