import { Navigate, Route, Routes } from "react-router-dom"
import { RegisterUserPage } from "../pages"
export const AuthRoutes = () => {

    return (
        <Routes>
            <Route path="register" element={<RegisterUserPage />} />
            <Route path="/*" element={<Navigate to='/auth/login' />} />
        </Routes>
    )
}
