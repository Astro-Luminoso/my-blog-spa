import {
    Box, Button,
    Container,
    Paper,
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";

import { motion } from "framer-motion";
import {buttonReaction, mainTitle} from "../style/SxProps.ts";
import type {FC} from "react";

type TableRowBuilderProps = {
    row1: string;
    row2: string;
    row3: string;
}

const TableRowBuilder: FC<TableRowBuilderProps> = ({row1, row2, row3}:TableRowBuilderProps) => {

    return (
        <TableRow>
            <TableCell sx={{width:'60%'}}>{row1}</TableCell>
            <TableCell sx={{width:'20%', borderLeft: '1px solid #CECECE'}}>{row2}</TableCell>
            <TableCell sx={{width:'20%', borderLeft: '1px solid #CECECE'}}>{row3}</TableCell>
        </TableRow>
    )
}

const BlogPost = () => {

    const MotionTypography = motion.create(Typography);
    const MotionButton = motion.create(Button);




    return (
        <Container maxWidth={false} >
            <Box sx={{height: '10vh', marginTop: '3rem'}}>
                <MotionTypography
                    sx={{...mainTitle,  textAlign: 'left'}}
                    initial={{opacity: 0, y: -30}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -30, transition: {duration: 0.5}}}
                    transition={{duration: 2}}>
                    All Posts
                </MotionTypography>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'flex-end', marginY: '1rem'}}>
                <MotionButton
                    sx={{
                        ...buttonReaction,
                        paddingX: '1rem',
                        marginRight: '5%',
                        border: '1px solid #CECECE',
                        color: 'black',
                        borderRadius: 5,


                    }}
                >
                    Filter
                </MotionButton>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <TableContainer component={Paper}
                                elevation={0}
                                sx={{
                                    height: `${56 * ( 8+ 1)}px`,
                                    border: '2px solid #CECECE',
                                    justifyContent: 'center',
                                    borderLeft: 'none',
                                    borderRight: 'none',
                                    width: '100%',
                                    backgroundColor: '#FFFEF8',
                                    borderRadius: 0
                                }}>
                    <Table aria-label={"blog posts table"}>
                        <TableHead>
                            <TableRowBuilder row1={"Title"} row2={"Category"} row3={"Date Issued"}/>
                        </TableHead>
                    </Table>
                </TableContainer>
            </Box>
    </Container>
    )
}

export default BlogPost;