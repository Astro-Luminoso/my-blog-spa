import {Box, Container, Typography} from "@mui/material";
import {motion} from "framer-motion";
import {mainPageBackground, subTitle} from "../../style/SxProps.ts";
import {config} from "../../config/config.ts";

const PageOne = () => {

    const MotionBox = motion.create(Box);
    const MotionTypography = motion.create(Typography);

    return (
        <Container maxWidth={false} >
            <MotionBox
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: -30, transition: {duration: 0.5}}}
                transition={{duration: 2}}
                sx={mainPageBackground}>
                <motion.img
                    src={`${config.API_URL}/open/images/white-logo`}
                    style={{
                        width: '20rem',
                        display: 'block',
                        margin: '0 auto',
                    }}
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 2, delay: 1}}
                />
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