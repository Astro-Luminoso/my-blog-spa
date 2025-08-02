import {AppBar, Box, Button, Toolbar} from "@mui/material";
import {config} from "../config/config.ts";
import {clickable, navElement} from "../style/SxProps.ts";
import {useAnimatedNavigation} from "../config/hooks/useAnimatedNavigation.ts";
import {Link} from "react-router-dom";

const NavBar = () => {


    const navItems: {name: string, path: string}[] = [
        { name: 'About', path: '/about' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    const { navigateWithAnimation } = useAnimatedNavigation();

    return (
        <AppBar component={'nav'} position="fixed" sx={{display: 'flex'}}>
            <Toolbar sx={{backgroundColor: '#ffffff', justifyContent: 'space-between'}}>
                <Box
                component={'img'}
                sx={{...clickable, marginLeft: '2rem'}}
                src={`${config.API_URL}/open/images/logo`}
                alt={'logo'}
                onClick={() => {navigateWithAnimation('/')}}
                />

                <Box sx={{display: {xs: 'none', sm:'block'}, marginRight: '3rem'}}>
                    {navItems.map((item, index) => {
                        return(
                            <Button
                                key={index}
                                sx={navElement}
                                component={Link}
                                to={item.path}
                                disableRipple>
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