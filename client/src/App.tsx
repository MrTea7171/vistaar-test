import Customers from './pages/Customers'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Transactions from './pages/Transactions'
import HeadPage from './pages/HeadPage'
import Login from './pages/Login'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchCurrentUser } from './store/slices/loginSlice'
import { AppDispatch, RootState } from './store/store'
import { useSelector } from 'react-redux'
import AuthGuard from './component/AuthGuard'

const App = () => {
    axios.defaults.baseURL = 'http://localhost:8000'

    const dispatch = useDispatch<AppDispatch>()
    // Dispatch the action when needed, e.g., in a useEffect or an event handler
    useEffect(() => {
        dispatch(fetchCurrentUser())
    }, [dispatch]) // Add dependencies or conditions as needed

    const isLoggedIn = useSelector((state: RootState) => state.login)
    useEffect(() => {
        console.log(isLoggedIn)
    }, [isLoggedIn])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HeadPage />}>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route element={<AuthGuard />}>
                        <Route path="/customers" element={<Customers />} />
                        <Route
                            path="/transactions/:accountId"
                            element={<Transactions />}
                        />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
