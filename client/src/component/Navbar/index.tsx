import { useSelector } from 'react-redux'
import './navbar.css'
import { RootState } from '../../store/store'
import useLogoutHook from '../../hooks/useLogoutHook'

const Navbar = () => {
    const userData = useSelector((state: RootState) => state.login)
    const { LogoutCall } = useLogoutHook()
    return (
        <div className="navbar">
            <div className="logo">
                <img
                    src="https://vistaardigital.com/app/uploads/2023/02/vistaar-logo-hor-highres.png"
                    alt="Logo"
                    width="180"
                />
            </div>
            <div className="nav--actions">
                {userData.userLoggedIn && (
                    <div className="nav--profilename">
                        <p>Hello, {userData.userName}</p>
                    </div>
                )}

                <button className="login-button">
                    {userData.userLoggedIn ? (
                        <div onClick={LogoutCall}>Logout</div>
                    ) : (
                        <a href="/auth/google">Login</a>
                    )}
                </button>
            </div>
        </div>
    )
}

export default Navbar
