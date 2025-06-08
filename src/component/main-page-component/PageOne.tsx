import {Box, Container, Typography} from "@mui/material";
import {motion} from "framer-motion";
import {mainPageBackground, subTitle} from "../../style/SxProps.ts";
import {config} from "../../config/config.ts";

const PageOne = () => {

    const MotionBox = motion.create(Box);
    const MotionTypography = motion.create(Typography);

    return (
        <Container maxWidth={false}>
            <MotionBox
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: -30, transition: {duration: 0.5}}}
                transition={{duration: 2}}
                sx={mainPageBackground}>
                <Box
                    sx={{
                        display: "block",
                        maxWidth: { xs: "15rem", md: "20rem" },
                        marginLeft: { xs: '1.5rem', md: "auto" },
                        marginRight: { xs: "auto", md: "auto" },
                        marginTop: '6rem'
                    }}
                >
                    <motion.img
                        src={`${config.API_URL}/open/images/white-logo`}
                        style={{
                            width: "100%",
                            display: "block",
                        }}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2, delay: 1 }}
                    />
                </Box>
                <MotionTypography
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, delay: 2 }}
                    sx={{...subTitle, paddingTop: {xs: '6rem', md:'12rem'}, textAlign: { xs: 'left', md: 'center' }, marginX: '1.5rem'}}>
                    My little space to{"\u00A0"}
                    <Box
                        component="span"
                        sx={{
                            display: { xs: 'inline', md: 'none' }
                        }}
                    >
                        <br />
                    </Box>
                    remember and share
                </MotionTypography>

            </MotionBox>
        </Container>
    )
}


export default PageOne;