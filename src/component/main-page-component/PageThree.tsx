import {motion} from "framer-motion";
import {Box, Card, CardContent, CardMedia, Container, Divider, Grid, Typography} from "@mui/material";
import {mainTitle} from "../../style/SxProps.ts";


const PageThree = () => {


    const MotionTypography = motion.create(Typography);


    const recentPost  = () => {


        return (
            <Card
                sx={{
                    display: 'flex',
                    height: '16rem',
                    justifyContent: 'space-around',
                    backgroundColor: 'inherit',
                    boxShadow: 'none',
                    borderTop: '1px solid #cecece',
                    borderBottom: '1px solid #cecece',
                    borderLeft: 'none',
                    borderRight: 'none',
                    borderRadius: 0,
                }}
            >
                <Box sx={{display: 'flex', direction: 'column', textAlign: 'left'}}>
                    <CardContent >
                        <Typography variant={'h4'} sx={{paddingTop: '1rem', marginBottom: '1.5rem'}}>
                            Post Title
                        </Typography>
                        <Typography variant={'subtitle2'} color={'text.secondary'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography>
                    </CardContent>
                </Box>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <CardMedia component={'img'} sx={{width: '15rem', height: '15rem', display: 'flex'}}/>
                </Box>
            </Card>
        )

    }


    return (
        <Container maxWidth={false} sx={{ display:'flex', alignItems: 'center'}}>
            <Grid container
                  sx={{
                      justifyContent: 'space-between',
                      direction: 'row',
                      width: {lg: '120rem'}
                  }}>
                <Grid size={{xs:12, lg:7}}>
                    <MotionTypography
                        sx={{...mainTitle, textAlign: 'left'}}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2 }}
                        exit={{opacity: 0, x: -20, transition: {duration: 0.5}}}
                    >
                        Recent Posts
                    </MotionTypography>
                    {/*TODO: Remove this hardcoded post cards when all hooks are ready*/}
                    {recentPost()}
                    {recentPost()}
                </Grid>
                <Grid
                    size={{lg:1}}
                    sx={{
                        display: {xs: 'none', lg:'flex'},
                        alignItems: 'center',
                        justifyContent: 'center'
                        }}
                >
                    <Divider orientation={'vertical'} flexItem/>
                </Grid>
                <Grid size={{xs:12, lg:4}}>
                    <MotionTypography
                        sx={{...mainTitle, textAlign: 'left'}}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2}}
                        exit={{opacity: 0, x: 20, transition: {duration: 0.5}}}
                    >
                        Albums
                    </MotionTypography>
                    <Divider/>
                </Grid>
            </Grid>
        </Container>
    )


}



export default PageThree;