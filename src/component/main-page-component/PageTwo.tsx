import {Box, Container, Typography, Grid} from "@mui/material";
import {motion} from "framer-motion";
import {laBelleAurore} from "../../style/SxProps.ts";

const PageTwo = () => {

    const MotionBox = motion.create(Box);
    const MotionTypography = motion.create(Typography);
    return (
        <Container maxWidth={false}>
            <Grid container>
                <Grid size={{xs: 12, lg:6}}>
                    <MotionTypography
                        sx={{
                            ...laBelleAurore,
                                fontSize: }>

                    </MotionTypography>
                </Grid>
            </Grid>
        </Container>
    )
}