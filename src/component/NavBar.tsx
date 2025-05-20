import {AppBar, Box, Toolbar} from "@mui/material";
import {config} from "../config/config.ts";

const NavBar = () => {

    return (
        <AppBar component={'nav'} position="fixed" sx={{display: 'flex'}}>
            <Toolbar sx={{backgroundColor: '#ffffff', justifyContent: 'space-between'}}>
                <Box
                component={'img'}
                src={`${config.API_URL}/open/images/logo`}
                />
            </Toolbar>
        </AppBar>
    );
}



export default NavBar;