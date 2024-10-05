import { IconButton, InputBase, Paper } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

export const SearchPokemon = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: 'flex', alignItems: 'center' }}>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Pokemon"
                inputProps={{ 'aria-label': 'search pokemon' }}
            />
            <IconButton
                type="button"
                aria-label="search"
                sx={{ ml: 'auto' }}>
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}
