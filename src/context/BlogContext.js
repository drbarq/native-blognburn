import React, {useState} from 'react'

const BlogContext = React.createContext()

export const BlogProvider = ( props ) => {
    const [blogPosts, setBlogPosts] = useState([])


    return (
        <BlogContext.Provider
            value={{data: blogPosts}}
        >
            { props.children }
        </BlogContext.Provider>
    )
}

export default BlogContext