import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { PokeAppRoutes } from "../PokeApp/routes/PokeAppRoutes"

export const AppRouter = () => {

    /**
     * TODO
     * - Implement checkAuth Hook 
     */

    return (

        /**
         * TODO
         * Implement auth mechanism
         * ! status === AuthStatus.AUTHENTICATED
         */

        <Routes>
            <Route path='/*' element={<PokeAppRoutes />} />
            <Route path='/auth/*' element={<AuthRoutes />} />
        </Routes>
    )
}
