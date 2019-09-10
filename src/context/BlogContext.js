import createDataContext from '../context/createDataContext'

const blogReducer = (state, action ) => {
    switch (action.type) {
        case 'add_blogpost':
            return [
                ...state,
                {title: `New Blog Post #${state.length + 1}`}
            ]
        default:
            return state
    }
}

const addBlogPost = dispatch => {
    return () => {
        dispatch({type: 'add_blogpost'})
    }
}

export const { Context, Provider } = createDataContext(
        blogReducer,
        {addBlogPost},
        [{title: "Text Blog Title", content: "Test Blog Content"}]
    )