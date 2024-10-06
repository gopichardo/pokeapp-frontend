import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage, PokeAppPage, PokemonDetailPage, PokemonListPage, UserPreferencesPage, WeatherPage } from "../pages"

export const PokeAppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<PokeAppPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/pokemon-list" element={<PokemonListPage />} />
            <Route path="/user-preferences" element={<UserPreferencesPage />} />
            <Route path="/weather" element={<WeatherPage />} />
            <Route path="/pokemon/:name" element={<PokemonDetailPage />} />
            <Route path="/*" element={<Navigate to='/' />} />
        </Routes>
    )
}
