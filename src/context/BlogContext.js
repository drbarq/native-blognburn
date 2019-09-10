import React from 'react'

const BlogContext = React.createContext()

export const BlogProvider = ( props ) => {

    const blogPosts = [
        {title: "First Blog"},
        {title: "Second Blog"}
    ]

    return (
        <BlogContext.Provider
            value={blogPosts}
        >
            { props.children }
        </BlogContext.Provider>
    )
} 

export default BlogContext
