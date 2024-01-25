import { useState } from "react";
import { Link } from "react-router-dom";
import owaLogo from "../../images/header-img/logo.svg"
import owaLogoChange from "../../images/logoChanged.svg"
import lightness from "../../images/lightMode.svg"
import darkness from "../../images/header-img/darkMode.svg"
import './Header.scss'

function Header(){
    const [mode, setMode] = useState(localStorage.getItem('mode') === 'true' || false)  
  const changeTheme = () => {
    document.body.classList.toggle('dark')
    setMode(!mode)
    localStorage.setItem('mode', !mode)
  }
    return(
        <>
            <header>
                <div className="header-contant">
                    <div className="logos">
                    <Link to='/home' className="icon">
                    <div className="empblem">
                        {
                            !mode ? <img src={owaLogo} alt="logotype" /> : 
                            <img src={owaLogoChange} alt="logotype" />
                        }
                    </div>
                    </Link>
                    <div className="header-items">
                        {
                            !mode ? <img src={darkness} alt="mode" onClick={changeTheme}/> : 
                            <img src={lightness} alt="mode" onClick={changeTheme}/>
                        }
                        <Link to='/sign'
                        className="button"
                        onClick={() => {
                            localStorage.removeItem('accessToken')
                          }}>
                            Log out</Link>
                    </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;