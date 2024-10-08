import { Container, Grid2 } from "@mui/material"
import { ResponsiveAppBar } from "../components/ResponsiveAppBar";


type PokeAppLayoutProps = {
    children: React.ReactNode;
}


export const PokeAppLayout = ({ children }: PokeAppLayoutProps) => {
    return (
        <Grid2 container>
            <Grid2 size={12}>
                <ResponsiveAppBar></ResponsiveAppBar>
                <Container>
                    {children}
                </Container>
            </Grid2>
        </Grid2>
    )
}
