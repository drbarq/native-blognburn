import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = (props) => {
    const { state, editBlogPost } = useContext(Context)
    const id = props.navigation.getParam('id')
    const blogPost = state.find(blogPost => blogPost.id === id)
    const callback = () => props.navigation.navigate('Index')

    return (
        <BlogPostForm
            initialValues={{title: blogPost.title, content: blogPost.content}}
            onSubmit={(id, title, content) => {
                editBlogPost(id, title, content, callback)
            }}
        />
    )
}

const style = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'black',
        fontSize: 18,
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    title: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
})

export default EditScreen