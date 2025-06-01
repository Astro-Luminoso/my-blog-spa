import {motion} from "framer-motion";
import {Container, Grid, Typography} from "@mui/material";
import {mainTitle} from "../../style/SxProps.ts";


const PageThree = () => {


    const MotionTypography = motion.create(Typography);


    return (
        <Container maxWidth={false} sx={{ display:'flex', alignItems: 'center'}}>
            <Grid container
                  sx={{
                      justifyContent: 'space-between',
                      direction: 'row',
                      width: {lg: '120rem'}
                  }}>
                <Grid size={{xs:12, lg:6}}>
                    <MotionTypography
                        sx={{...mainTitle, textAlign: 'left'}}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2 }}
                        exit={{opacity: 0, x: -20, transition: {duration: 0.5}}}
                    >
                        Recent Posts
                    </MotionTypography>
                </Grid>
                <Grid size={{xs:12, lg:6}}>
                    <MotionTypography
                        sx={{...mainTitle, textAlign: 'left'}}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2}}
                        exit={{opacity: 0, x: 20, transition: {duration: 0.5}}}
                    >
                        Albums
                    </MotionTypography>
                </Grid>

            </Grid>


        </Container>
    )


}



export default PageThree;