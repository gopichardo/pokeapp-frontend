import { Container, Grid2 } from "@mui/material"
import { ResponsiveAppBar } from "../components/ResponsiveAppBar";


type PokeAppLayoutProps = {
    children: React.ReactNode;
}


export const PokeAppLayout = ({ children }: PokeAppLayoutProps) => {
    return (
        <Grid2 container justifyContent='center' alignItems="center" height='100vh'>
            <Grid2 size={{
                xl: 6,
                lg: 6,
                md: 8,
                sm: 12,
                xs: 12
            }} flexGrow={1} height='100vh'>
                <ResponsiveAppBar></ResponsiveAppBar>
                <Container sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    {children}
                </Container>
            </Grid2>
        </Grid2>
    )
}
