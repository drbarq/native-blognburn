import createDataContext from './createDataContext'

const blogReducer = ( state, action ) => {
    switch(action.type) {
        case 'add_blogpost':
            return [
                ...state, 
                {title: `Test Blog Title ${state.length}`}
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
    [{title: "Test Blog Post", content: "Test Blog Post Content"}]
)