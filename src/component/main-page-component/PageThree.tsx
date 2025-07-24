import {motion} from "framer-motion";
import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    Stack,
    Typography
} from "@mui/material";
import {buttonReaction, mainTitle} from "../../style/SxProps.ts";
import {useNavigate} from "react-router-dom";


const PageThree = () => {

    const MotionTypography = motion.create(Typography);
    const MotionBox = motion.create(Box);
    const MotionButton = motion.create(Button);
    const navigate = useNavigate();
    /**
     * Function to render a no content message
     *
     * @param comment - The message to display when there is no content
     */
    const noContent = (comment: string) => {
        return (
            <Stack
                sx={{
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center'}}
            >
                <Divider sx={{width: '100%'}}/>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: {xs:'15rem', md: '13rem', lg: '28rem'},
                    }}>
                    <Typography variant={'body1'} sx={{textAlign: 'center'}}>
                        {comment}
                    </Typography>
                </Box>
                <Divider sx={{width: '100%'}}/>
            </Stack>
        )

    }


    const recentPost  = () => {
        return (
            <>
                {noContent('No Posts Available Yet!')}
            </>
            // TODO: Uncomment this when new posts are available
            // <Card
            //     sx={{
            //         display: 'flex',
            //         height: '16rem',
            //         justifyContent: 'space-around',
            //         backgroundColor: 'inherit',
            //         boxShadow: 'none',
            //         borderTop: '1px solid #cecece',
            //         borderBottom: '1px solid #cecece',
            //         borderLeft: 'none',
            //         borderRight: 'none',
            //         borderRadius: 0,
            //     }}
            // >
            //     <Box sx={{display: 'flex', direction: 'column', textAlign: 'left'}}>
            //         <CardContent >
            //             <Typography variant={'h4'} sx={{paddingTop: '1rem', marginBottom: '1.5rem'}}>
            //                 Post Title
            //             </Typography>
            //             <Typography variant={'subtitle2'} color={'text.secondary'}>
            //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            //             </Typography>
            //         </CardContent>
            //     </Box>
            //     <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            //         <CardMedia component={'img'} sx={{width: '15rem', height: '15rem', display: 'flex'}}/>
            //     </Box>
            // </Card>
        );

    }

    const albumBox = () => {
        return (
            <>
                {noContent('No Posts Available Yet!')}
            </>
                // TODO: Add ImageList when Albums are available
                // <ImageList cols={{md: 1, lg: 2}} gap={8} rowHeight={{md: '13rem', lg: '15rem'}}>
                // </ImageList>
        );
    }


    return (
        <Container maxWidth={false}>
            <Grid container
                  sx={{
                      justifyContent: 'space-between',
                      direction: 'row',
                      minWidth: {xs: '17rem', sm: '40rem', lg: '60rem', xl: '110rem'},
                      maxWidth: {xs: '20rem', sm: '64rem', lg: '120rem'}
                  }}>
                <Grid size={{xs:12, lg:6, xl: 7}}>
                    <MotionTypography
                        sx={{...mainTitle, textAlign: 'left'}}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2 }}
                        exit={{opacity: 0, x: -20, transition: {duration: 0.5}}}
                    >
                        Recent Posts
                    </MotionTypography>
                    <MotionBox
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 2, delay: 1}}
                        exit={{opacity: 0, y: 20, transition: {duration: 0.5}}}
                    >
                        {recentPost()}
                    </MotionBox>
                </Grid>

                <Grid
                    size={{lg:1}}
                    sx={{
                        display: {xs: 'none', lg:'flex'},
                        alignItems: 'center',
                        justifyContent: 'center'
                        }}
                >
                    {/*Divider between Post and Albums*/}
                    <Divider orientation={'vertical'} flexItem/>
                </Grid>

                <Grid size={{xs:12, lg:5, xl:4}} sx={{display: {xs: 'none', sm:'block'}}}>
                    <MotionTypography
                        sx={{...mainTitle, textAlign: 'left'}}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2}}
                        exit={{opacity: 0, x: 20, transition: {duration: 0.5}}}
                    >
                        Albums
                    </MotionTypography>
                    <MotionBox
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 2, delay: 1}}
                    exit={{opacity: 0, y: 20, transition: {duration: 0.5}}}
                    >
                        {albumBox()}
                    </MotionBox>

                </Grid>
            </Grid>
            <MotionButton
                sx={{
                    ...buttonReaction,
                    marginTop: '4rem',
                    paddingX: '1rem',
                    border: '1px solid #CECECE',
                    color: 'black',
                    borderRadius: 5,
                }}
                disableRipple
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 2.5 }}
                exit={{opacity: 0, y: 20, transition: {duration: 0.5}}}
                onClick={()=> navigate('/blog')}
            >See More Blog Post
            </MotionButton>
        </Container>
    );
}


export default PageThree;