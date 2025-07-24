import {Container, Typography} from "@mui/material";
import {motion} from "framer-motion";
import {mainTitle} from "../style/SxProps.ts";


const BlogPost = () => {

    const MotionTypography = motion.create(Typography);

    return (
        <Container maxWidth={false}>
            <MotionTypography
                sx={{...mainTitle, textAlign: 'left'}}
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: -30, transition: {duration: 0.5}}}
                transition={{duration: 2}}>
                    All Posts
            </MotionTypography>

        </Container>
    )
}

export default BlogPost;