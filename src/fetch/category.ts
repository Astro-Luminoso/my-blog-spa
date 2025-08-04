import axios from "axios";
import {config} from "../config/config.ts";

const getCategories = async (): Promise<Category[]> => {
    const res = await axios.get(`${config.API_URL}/open/categories`);
    console.log(res.data);
    return res.data;
}

export default getCategories;

