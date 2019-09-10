import React, {useReducer} from 'react'

const BlogContext = React.createContext()

const blogReducer = ( state, action ) => {
    switch (action.type) {
        case "add_blogpost":
            return [
                ...state, { title: `Blog Post #${state.length + 1}`}
            ]
        default:
            return state
    }
}

export const BlogProvider = ( props ) => {
    const [blogPosts, dispatch] = useReducer(blogReducer, [{title: "Test Blog", content: "Test Content"}])

    const addBlogPost = () => {
        dispatch({type: 'add_blogpost'})
    }

    return (
        <BlogContext.Provider
            value={{data: blogPosts, addBlogPost }}
        >
            { props.children }
        </BlogContext.Provider>
    )
}

export default BlogContext