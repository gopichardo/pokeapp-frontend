import { AppBar, Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CatchingPokemonOutlinedIcon from '@mui/icons-material/CatchingPokemonOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';


export const ResponsiveAppBar = () => {

    const [open, setOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const menuItems = [
        { text: 'Home', link: '/home', icon: <HomeOutlinedIcon /> },
        { text: 'Pokemons', link: '/pokemon-list', icon: <CatchingPokemonOutlinedIcon /> },
        { text: 'Weather', link: '/weather', icon: <WbSunnyOutlinedIcon /> },
        { text: 'User', link: '/user-preferences', icon: <AccountCircleOutlinedIcon /> },
        { text: 'Logout', link: '/logout', icon: <LogoutOutlinedIcon /> },
    ];

    const getTitle = () => {
        const currentPath = location.pathname;
        const menuItem = menuItems.find(item => item.link === currentPath);
        return menuItem ? menuItem.text : 'PokeApp';
    }

    const handleNavigation = (link: string) => {
        navigate(link);
        toggleDrawer(false);
    };

    return (
        <Box sx={{ flexGrow: 1, marginBottom: 2 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {getTitle()}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <Box sx={{ width: 250 }}>
                    <List>
                        {menuItems.map((item) => (
                            <ListItem
                                key={item.text}
                                disablePadding
                            >
                                <ListItemButton
                                    component="a"
                                    selected={location.pathname === item.link}
                                    onClick={() => handleNavigation(item.link)}
                                    sx={{
                                        '&.Mui-selected': {
                                            bgcolor: 'action.selected',
                                            '& .MuiListItemText-primary': {
                                                fontWeight: 'bold'
                                            }
                                        }
                                    }}
                                >
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Box>
    );

}
