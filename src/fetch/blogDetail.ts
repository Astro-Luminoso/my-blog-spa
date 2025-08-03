import axios from "axios";
import {config} from "../config/config.ts";
import * as React from "react";

const DEFAULT_QUERY = Object.freeze('');
const DEFAULT_CATEGORY_ID = Object.freeze(0);
const DEFAULT_PAGE = Object.freeze(0);
const DEFAULT_PAGE_SIZE = Object.freeze(8);

const handlePostList =
    (listSetter:React.Dispatch<React.SetStateAction<Post[] | null>>,
     countSetter:React.Dispatch<React.SetStateAction<number>>,
     page: number | null, size: number | null, query: string | null, categoryId: number | null) => {

    listSetter(null);
    countSetter(0);

    const baseUrl = `${config.API_URL}/open/blogposts`;
    const queries : string[] = []
    if (query !== DEFAULT_QUERY) {
        queries.push(`query=${query}`);
    }
    if (categoryId !== DEFAULT_CATEGORY_ID) {
        queries.push(`categoryId=${categoryId}`);
    }
    if (page !== DEFAULT_PAGE) {
        queries.push(`page=${page}`);
    }
    if (size !== DEFAULT_PAGE_SIZE)  {
        queries.push(`size=${size}`);
    }
    const queryString = queries.length > 0 ? `?${queries.join('&')}` : '';

    console.log(`queryString=${queryString}`);
    axios.get(baseUrl + queryString)
        .then(res => {
            const postList: Post[] = res.data['postList'];
            const totalCount: number = res.data['totalCount'];
            listSetter(postList);
            countSetter(totalCount);
        });
    }


export { handlePostList, };