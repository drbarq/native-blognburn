import React, {useState, useContext} from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Context } from '../context/BlogContext'

const CreateScreen = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] =  useState('')
    const { addBlogPost } = useContext(Context)

    return (
        <View>
            <Text style={style.title}>Blog Post Title:</Text>
            <TextInput 
                style={style.input}
                value={title}
                onChangeText={() => setTitle(title)}
            />
            <Text style={style.title}>Blog Post Content:</Text>
            <TextInput 
                style={style.input}
                value={content}
                onChangeText={() => setContent(content)}
            />
            <Button
                title="Save Blog Post"
                onPress={() => addBlogPost(title, content)}
            />
        </View>
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

export default CreateScreen