import React, {useState} from 'react'

const BlogContext = React.createContext()

export const BlogProvider = ( props ) => {
    const [blogPosts, setBlogPosts] = useState([])

    const addBlogPost = () => {
        return setBlogPosts([
            ...blogPosts, 
            {title: `new Post #${blogPosts.length + 1}`}
        ])
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