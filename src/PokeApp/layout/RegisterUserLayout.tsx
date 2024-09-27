import { Container, Grid2 } from "@mui/material"



export const RegisterUserLayout = ({ children, title }: RegisterUserLayoutProps) => {
    return (
        <Grid2 container>
            <Container>
                <h2>{title}</h2>
                {children}
            </Container>
        </Grid2>
    )
}

type RegisterUserLayoutProps = {
    children: React.ReactNode;
    title: string;
}
