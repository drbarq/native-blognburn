import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const BlogPostForm = (props) => {
    const [title, setTitle] = useState(props.initialValues.title)
    const [content, setContent] =  useState(props.initialValues.content)

    return (
        <View>
            <Text style={style.title}>Blog Post Title:</Text>
            <TextInput 
                style={style.input}
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <Text style={style.title}>Blog Post Content:</Text>
            <TextInput 
                style={style.input}
                value={content}
                onChangeText={(text) => setContent(text)}
            />
            <Button
                title="Save Blog Post"
                onPress={() => props.onSubmit(title, content)}
            />
        </View>
    )
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
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

export default BlogPostForm