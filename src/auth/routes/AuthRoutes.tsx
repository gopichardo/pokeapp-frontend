import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, RegisterUserPage } from "../pages"

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterUserPage />} />
            <Route path="/*" element={<Navigate to='/auth/login' />} />
        </Routes>
    )
}
