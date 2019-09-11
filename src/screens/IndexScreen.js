import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'

const IndexScreen = props  => {
    const { state, addBlogPost, deleteBlogPost } = useContext(Context)

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item}) => {
                    return(
                        <View
                            style={styles.row}
                        >
                            <TouchableOpacity
                                onPress={() => props.navigation.navigate('Show', { id: item.id})}
                            >
                                <Text style={styles.title}>{item.title} - {item.id} </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => deleteBlogPost(item.id)} 
                            >
                                <Feather 
                                    name="trash"
                                    style={styles.icon} 
                                />
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </View>
    )
}

IndexScreen.navigationOptions = (props) => {
    return {
        headerRight: (
            <TouchableOpacity onPress={() => props.navigation.navigate('Create')}>
                <Feather name="plus" style={styles.plus} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginHorizontal: 10,
        // marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: 'grey'
    },
    icon: {
        fontSize: 30
    },
    title: {
        fontSize: 18 
    },
    plus: {
        fontSize: 30,
        paddingRight: 10
    }
})

export default IndexScreen