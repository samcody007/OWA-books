import { useEffect } from "react";
import { useNavigate} from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Header from "../components/header/Header";

function Layout () {
    const navigate = useNavigate()
    useEffect(() => {
        if(!localStorage.getItem('accessToken')){
            navigate('/sign')
        }
    })
    return(
        <>
         <Header/>
         <Outlet/>
        </>
    )
}
export default Layout;