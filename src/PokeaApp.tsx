import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme"


export const PokeaApp = () => {
    return (
        <AppTheme>
            <AppRouter />
        </AppTheme>
    )
}
