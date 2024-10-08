import { Container, Grid2 } from "@mui/material"
import { ResponsiveAppBar } from "../components/ResponsiveAppBar";


type PokeAppLayoutProps = {
    children: React.ReactNode;
}


export const PokeAppLayout = ({ children }: PokeAppLayoutProps) => {
    return (
        <Grid2 container>
            <Container>
                <ResponsiveAppBar></ResponsiveAppBar>
                {children}
            </Container>
        </Grid2>
    )
}
