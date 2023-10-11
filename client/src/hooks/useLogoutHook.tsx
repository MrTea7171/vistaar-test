import { useDispatch } from 'react-redux'
import { logoutUser } from '../store/slices/loginSlice'
import { initLogoutService } from '../services/auth.services'

const useLogoutHook = () => {
    const dispatch = useDispatch()
    const LogoutCall = async () => {
        await initLogoutService()
        dispatch(logoutUser)
        location.href = '/'
    }
    return { LogoutCall }
}

export default useLogoutHook
