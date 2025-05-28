import {Box, Typography, Grid,} from "@mui/material";
import {motion} from "framer-motion";
import {laBelleAurore} from "../../style/SxProps.ts";
import {config} from "../../config/config.ts";

const PageTwo = () => {

    const MotionBox = motion.create(Box);
    const MotionTypography = motion.create(Typography);
    return (
        <Box sx={{ display:'flex', alignItems: 'center'}}>
            <Grid
                container
                spacing={6}
                sx={{
                    direction: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <Grid
                    size={{xs:12, lg:7}}
                    sx={{}}>
                    <MotionTypography
                        sx={{
                            ...laBelleAurore,
                            fontSize: {lg: '4rem', xl: '5rem'},
                            textAlign: 'left',
                            marginBottom: '3rem',
                    }}>
                        Welcome to My Small Space
                    </MotionTypography>
                    <br/>
                    <MotionTypography sx={{ textAlign: 'left', fontSize: '2rem', marginTop: '3rem'}}>
                        This space is for sharing knowledge, tips,<br/>and resources with others.
                    </MotionTypography>
                </Grid>
                <Grid size={{xs:12, lg:5}}>
                    <MotionBox
                        component={'img'}
                        src={`${config.API_URL}/open/images/welcome-image`}
                        alt={'landing page image'}
                        sx={{
                            textAlign: 'right'
                        }}
                    />

                </Grid>
            </Grid>
        </Box>
    )
}


export default PageTwo;