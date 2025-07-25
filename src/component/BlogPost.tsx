import {Container, Paper, Table, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import { motion } from "framer-motion";
import { mainTitle } from "../style/SxProps.ts";


const BlogPost = () => {

    const MotionTypography = motion.create(Typography);

    return (
        <Container maxWidth={false} >
            <MotionTypography
                sx={{...mainTitle,  textAlign: 'left'}}
                initial={{opacity: 0, y: -30}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: -30, transition: {duration: 0.5}}}
                transition={{duration: 2}}>
                All Posts
            </MotionTypography>
            <TableContainer component={Paper}
                            elevation={0}
                            sx={{
                                width: '100%',
                                border: '1px solid #CECECE',

                            }}>
                <Table aria-label={"blog posts table"}>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{width:'60%'}}>Title</TableCell>
                            <TableCell sx={{width:'20%'}}>Category</TableCell>
                            <TableCell sx={{width:'20%'}}>Date</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default BlogPost;