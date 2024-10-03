import { RegisterProvider } from "./auth/context/RegisterProvider"
import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme"


export const PokeaApp = () => {
    return (
        <AppTheme>
            <RegisterProvider>
                <AppRouter />
            </RegisterProvider>
        </AppTheme>
    )
}
