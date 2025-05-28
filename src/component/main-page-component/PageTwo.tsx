import {Box, Container, Typography, Grid,} from "@mui/material";
import {motion} from "framer-motion";
import {laBelleAurore} from "../../style/SxProps.ts";

const PageTwo = () => {

    const MotionBox = motion.create(Box);
    const MotionTypography = motion.create(Typography);
    return (
        <Container
            maxWidth={false}
            sx={{
                width: '100%',
                margin: '0 auto',
                maxWidth: 'none'
            }}
        >
            <Grid
                container
                spacing={2}
                sx={{
                    direction: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start'
                }}
            >
                <Grid size={{xs:12, lg:6}} sx={{minWidth: '50vw'}}>
                    <MotionTypography
                        sx={{
                            ...laBelleAurore,
                            fontSize: '4rem',
                            textAlign: 'left',
                            marginY: '3rem'

                    }}>
                        Welcome to My Small Space
                    </MotionTypography>
                    <br/>
                    <MotionTypography sx={{ textAlign: 'left', fontSize: '2rem'}}>
                        This space is for sharing knowledge, tips,<br/>and resources with others.
                    </MotionTypography>
                </Grid>
                <Grid size={{xs:12, lg:6}} sx={{minWidth: '50vw'}}>

                </Grid>
            </Grid>
        </Container>
    )
}


export default PageTwo;