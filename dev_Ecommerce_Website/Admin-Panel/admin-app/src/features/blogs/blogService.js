import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";


// blog 
const createBlogs = async (blog) => {
    const response = await axios.post(`${base_url}blog/`, blog, config);
    return response.data;
}
// get blogs 
const getBlogs = async () => {
    const response = await axios.get(`${base_url}blog/`);
    return response.data;
}

// get blog
const getBlog = async (id) => {
    const response = await axios.get(`${base_url}blog/${id}`,config);
    return response.data;
}
// update  blog 
const updateBlog = async (blog) => {
    const response = await axios.put(`${base_url}blog/${blog.id}`,
    {
        title: blog.blogData.title,
        description: blog.blogData.description,
        category: blog.blogData.category,
        images : blog.blogData.images,
    },
    config
    );
    return response.data;
}

const deleteBlog = async (id) => {
    const response = await axios.delete(`${base_url}blog/${id}`,config);
    return response.data;
}


const blogService = {
    getBlogs,
    createBlogs,
    getBlog,
    updateBlog,
    deleteBlog,
};


export default blogService;
