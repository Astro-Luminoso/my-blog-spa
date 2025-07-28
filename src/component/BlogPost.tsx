import {
    Box, Button, CircularProgress,
    Container,
    Paper,
    Table, TableBody,
    TableCell,
    TableContainer, TableFooter,
    TableHead, TablePagination,
    TableRow,
    Typography
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

import { motion } from "framer-motion";
import {buttonReaction, mainTitle} from "../style/SxProps.ts";
import * as React from "react";
import type {Post} from "../type/Post.ts";
import {config} from "../config/config.ts";
import axios from "axios";

type TableRowBuilderProps = {
    row1: string;
    row2: string;
    row3: string;
}

const TableRowBuilder: React.FC<TableRowBuilderProps> = ({row1, row2, row3}:TableRowBuilderProps) => {

    return (
        <TableRow>
            <TableCell sx={{width:'60%'}}>{row1}</TableCell>
            <TableCell sx={{width:'20%', borderLeft: '1px solid #CECECE'}}>{row2}</TableCell>
            <TableCell sx={{width:'20%', borderLeft: '1px solid #CECECE'}}>{row3}</TableCell>
        </TableRow>
    )
}

const MotionTypography = motion.create(Typography);
const MotionButton = motion.create(Button);


const PostIsLoading = () => {

    return (
        <TableRow>
            <TableCell colSpan={3}>
                <Box sx={{
                    height: `100%`,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center' // Add this line
                }}>
                    <CircularProgress color={'inherit'} />
                </Box>
            </TableCell>
        </TableRow>
    )
}

const showBlogPosts = (postList: Post[]) => {

    return (
        postList.map((post) => {
            return(
                <TableRowBuilder row1={post.title} row2={post.categoryTitle} row3={post.updateDate}/>
            )
        })

    )
}

const pageSizeOptions: number[] = [8, 15, 20];

const BlogPost = () => {

    const [pageSize, setPageSize] = React.useState(pageSizeOptions[0]);
    const [page, setPage] = React.useState(0);
    const [postList, setPostList] = React.useState<Post[] | null>(null);

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setPageSize(parseInt(event.target.value, 10));
    };

    const handleChangePage = (
        _: unknown | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };


    React.useEffect(() => {
        axios.get(`${config.API_URL}/open/blogposts`)
            .then(res => {
                setPostList(res.data);
            })
    }, []);

    // React.useEffect(() => {
    //     const timer = setTimeout(() => {
    //         axios.get(`${config.API_URL}/open/blogposts`)
    //             .then(res => {
    //                 setPostList(res.data);
    //             })
    //     }, 2000);
    //
    //     return () => clearTimeout(timer);
    // }, []);




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
                    <FilterListIcon sx={{marginLeft: '0.5rem'}}/>
                </MotionButton>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <TableContainer component={Paper}
                                elevation={0}
                                sx={{
                                    border: '2px solid #CECECE',
                                    justifyContent: 'center',
                                    borderLeft: 'none',
                                    borderRight: 'none',
                                    width: '90%',
                                    backgroundColor: '#FFFEF8',
                                    borderRadius: 0,
                                }}>
                    <Table aria-label={"blog posts table"} sx={{height: '36rem'}}>
                        <TableHead sx={{borderBottom: '2px solid #CECECE'}}>
                            <TableRowBuilder row1={"Title"} row2={"Category"} row3={"Date Issued"}/>
                        </TableHead>
                        <TableBody>
                            {postList === null ? <PostIsLoading /> : showBlogPosts(postList)}
                        </TableBody>
                        <TableFooter>
                            <TablePagination
                                rowsPerPageOptions={pageSizeOptions}
                                count={100} // This should be the total number of posts
                                colSpan={3}
                                rowsPerPage={pageSize}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}

                            />
                        </TableFooter>
                    </Table>
                </TableContainer>
            </Box>
    </Container>
    )
}

export default BlogPost;