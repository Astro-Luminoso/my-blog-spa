import {Typography, Grid, Container, useTheme, useMediaQuery,} from "@mui/material";
import {motion} from "framer-motion";
import {laBelleAurore} from "../../style/SxProps.ts";
import {config} from "../../config/config.ts";

const PageTwo = () => {

    const MotionTypography = motion.create(Typography);
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
    const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));

    const welcomeImageComponent = () => {

        const imageStyle: React.CSSProperties = {
            width: '100%',
            maxWidth: isDesktop ? 800 : isTablet ? 640 : 420,
            maxHeight: isTablet ? '55vh' : undefined,
            objectFit: 'contain',
            display: 'block',
            margin: '0 auto',
        };

        return (
            <motion.img
                src={`${config.API_URL}/open/images/welcome-image`}
                alt={'landing page image'}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                exit={{opacity: 0, x: 30, transition: {duration: 0.5}}}
                style={imageStyle}
            />
        )
    }

    const welcomeTextComponent = () => {
        return (
            <>
                <MotionTypography
                    sx={{
                        ...laBelleAurore,
                        fontSize: {xs: '1.8rem', lg: '4rem', xl: '5rem'},
                        textAlign: {xs: 'center', lg: 'left'},
                        marginBottom: {lg: '3rem'},
                    }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                    exit={{opacity: 0, y: -20, transition: {duration: 0.5}}}
                >
                    Welcome to My Small Space
                </MotionTypography>
                <br/>
                <MotionTypography
                    sx={{
                        textAlign: {xs: 'center', lg:'left'},
                        fontFamily: 'Laila',
                        fontSize: {xs: '1rem', lg:'2.5rem'},
                        marginTop: '3rem',
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, delay: 1 }}
                    exit={{opacity: 0, y: 20, transition: {duration: 0.5}}}
                >
                    The space for sharing knowledge, tips,<br/>and resources with others.
                </MotionTypography>
            </>
        )
    }


    return (
        <Container maxWidth={false} sx={{ display:'flex', alignItems: 'center'}}>
            <Grid
                container
                spacing={6}
                sx={{
                    direction: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <Grid
                    size={{xs:12, lg:7}}>
                    {isDesktop ? welcomeTextComponent() : welcomeImageComponent()}
                </Grid>
                <Grid size={{xs:12, lg:5}}>
                    {isDesktop ? welcomeImageComponent() : welcomeTextComponent()}
                </Grid>
            </Grid>
        </Container>
    )
}


export default PageTwo;