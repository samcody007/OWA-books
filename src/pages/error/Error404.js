import '../error/Error404.scss'
import { Link } from "react-router-dom";


function Error(){
    return(
        <>
            <div className="error-menu">
                <div className="error-items">
                    <h1>404</h1>
                    <p>Oops! That page can’t be found</p>
                    <span>The page you are looking for it maybe deleted</span>
                    <Link to='/sign' className="button">Go To Home</Link>
                </div>
            </div>
        </>
    )
}
export default Error;