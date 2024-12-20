import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { purpleTheme } from "./"

export const AppTheme = ({ children }: { children: JSX.Element }) => {
    return (
        <ThemeProvider theme={purpleTheme}>
            <CssBaseline />
            {
                children
            }
        </ThemeProvider>
    )
}
