import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const CreateScreen = () => {
    return (
        <View>
            <Text>Create Screen</Text>
            <Text>Blog Post Title</Text>
            <TextInput 
                style={style.input}
            />
            <Button
                title="Save Blog Post"
            />
        </View>
    )
}

const style = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'black'
    }
})

export default CreateScreen