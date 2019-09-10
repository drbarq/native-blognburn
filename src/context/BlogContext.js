import React, { useReducer } from 'react'
import { DrawerActions } from 'react-navigation'

const BlogContext = React.createContext()

const blogReducer = (state, action ) => {
    switch (action.type) {
        case 'add_blogpost':
            return [
                ...state,
                {title: `New Blog Post #${state.length + 1}`}
            ]
        default:
            return state
    }
}

export const BlogProvider = ( props ) => {
    const [blogPosts, dispatch] = useReducer(blogReducer, [{title: "Test Blog Title", content: "Test Blog Content"}] )

    const addBlogPost = () => {
        return (
            dispatch({type: 'add_blogpost'})
        )
    }

    return (
        <BlogContext.Provider
            value={{data: blogPosts, addBlogPost}}
        >
            { props.children }
        </BlogContext.Provider>
    )
}

export default BlogContext