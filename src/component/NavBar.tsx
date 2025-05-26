import {AppBar, Box, Button, Toolbar} from "@mui/material";
import {config} from "../config/config.ts";
import {useNavigate} from "react-router-dom";
import {clickable} from "../style/SxProps.ts";

const NavBar = () => {


    const navItems: {name: string, path: string}[] = [
        { name: 'About', path: '/about' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];
    const navigate = useNavigate();


    const handleNavClick = (path: string) => {
        navigate(path);
    }

    return (
        <AppBar component={'nav'} position="fixed" sx={{display: 'flex'}}>
            <Toolbar sx={{backgroundColor: '#ffffff', justifyContent: 'space-between'}}>
                <Box
                component={'img'}
                sx={{...clickable, marginLeft: '2rem'}}
                src={`${config.API_URL}/open/images/logo`}
                alt={'logo'}
                onClick={() => {handleNavClick('/')}}
                />

                <Box sx={{display: {xs: 'none', sm:'block'}, marginRight: '3rem'}}>
                    {navItems.map((item, index) => {
                        return(
                            <Button
                                key={index}

                                onClick={() => handleNavClick(item.path)}>
                                {item.name}
                            </Button>
                        )
                    })}
                </Box>
            </Toolbar>
        </AppBar>
    );
}



export default NavBar;