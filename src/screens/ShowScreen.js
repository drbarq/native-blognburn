import React, {useContext} from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'

const ShowScreen = (props) => {
    const { state } = useContext(Context)
    const id = props.navigation.getParam('id')
    const blogPost = state.find((blogPost) => blogPost.id === id)

    return (
        <View>
            <Text>Show Screen</Text>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    )
}

const style = StyleSheet.create({})

export default ShowScreen