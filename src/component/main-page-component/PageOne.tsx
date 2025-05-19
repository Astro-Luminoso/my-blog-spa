import {Box, Container, Typography} from "@mui/material";
import {motion} from "framer-motion";
import {mainPageBackground, mainTitle, subTitle} from "../../style/SxProps.ts";

const PageOne = () => {

    const MotionBox = motion.create(Box);
    const MotionTypography = motion.create(Typography);

    return (
        <Container maxWidth={false}>
            <MotionBox
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: -30}}
                transition={{duration: 2}}
                sx={mainPageBackground}>
                <MotionTypography
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, delay: 1 }}
                    sx={{...mainTitle, marginY: '4rem'}}>
                    StellaLog
                </MotionTypography>
                <MotionTypography
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, delay: 2 }}
                    sx={{...subTitle, marginY: '4rem'}}>
                    My little space to remember and share
                </MotionTypography>

            </MotionBox>
        </Container>
    )
}



export default PageOne;