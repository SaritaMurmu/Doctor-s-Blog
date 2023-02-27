import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axiosInstance from '../API/APIUrl'                   // http://localhost:3002/api/

const initialState = ({
    blogData: [],
    singleBlogData: {},
    popularBlogData: [],
    status: 'success'
})

export const fetchBlog = createAsyncThunk(
    "Blogs/fetch",
    async () => {
        try {
            const response = await axiosInstance.get('allBlogs')
            // console.log('API response: ', response.data)
            return response?.data
        } catch (error) {
            console.log(error)
        }
    })

export const fetchSingleBlog = createAsyncThunk(
    "SingleBlog/fetch",
    async id => {
        try {
            const res = await axiosInstance.get(`singleBlog/${id.id}`)
            return res?.data
        } catch (error) {
            console.log(error)
        }
    })

export const popularBlog = createAsyncThunk(
    "PopularBlogs/fetch",
    async () => {
        try {
            const res = await axiosInstance.get('popularBlogs')
            return res?.data
        } catch (error) {
            console.log(error)
        }
    })

export const BlogSlice = createSlice({
    name: 'Blog',
    initialState,
    reducer: {},
    extraReducers: {
        // All Blogs
        [fetchBlog.pending]: state => {
            state.status = "loading..."
            state.blogData = null
            state.singleBlogData = null
        },
        [fetchBlog.fulfilled]: (state, { payload }) => {
            state.status = "success"
            state.blogData = payload
            state.singleBlogData = payload
            // console.log('', payload)
        },
        [fetchBlog.rejected]: state => {
            state.status = "rejected"
        },

        // Single Blog
        [fetchSingleBlog.pending]: state => {
            state.status = "Loading..."
            state.singleBlogData = {}
        },
        [fetchSingleBlog.fulfilled]: (state, { payload }) => {
            state.status = "success"
            state.singleBlogData = payload
        },
        [fetchSingleBlog.rejected]: state => {
            state.status = "Rejected"
        },

        // Popular Blogs
        [popularBlog.pending]: state => {
            state.status = "Loading..."
            state.popularBlogData = null
        },
        [popularBlog.fulfilled]: (state, { payload }) => {
            state.status = "success"
            state.popularBlogData = payload
        },
        [popularBlog.rejected]: state => {
            state.status = "rejected"
        }
    }
})