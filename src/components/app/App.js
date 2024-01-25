import Layout from '../../layouts/Layout';
import { useEffect } from 'react';
import Login  from '../../pages/auth/Login'
import Homepage from '../../pages/homepage/Homepage'
import Info from '../../pages/info/Info';
import Error from '../../pages/error/Error404';
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.scss'


function App () {
    useEffect(() =>{
        if(localStorage.getItem('mode') === 'true'){
            document.body.classList.add('dark')
          }
          else {
            document.body.classList.remove('dark')
          }
    }, [])
    return (
        <>
            
            <Routes>
                <Route path='/'
                 element={<Navigate to={'/sign'}/>}/>
                <Route path='/home'
                 element={<Layout/>}>
                    <Route index element={<Homepage/>}/>
                    <Route path='/home/info/:postId' element={<Info/>}/>
                    
                </Route>
                <Route path='/sign' element={<Login/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
           
        </>
    )
}
export default App;
