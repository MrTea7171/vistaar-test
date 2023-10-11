import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { RootState } from '../store/store'

function AuthGuard() {
    const isAuthenticated = useSelector(
        (state: RootState) => state.login.userLoggedIn
    )
    const navigate = useNavigate()

    if (!isAuthenticated) {
        navigate('/')
    }

    return <Outlet />
}

export default AuthGuard
