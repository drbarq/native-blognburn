import React, { useReducer } from 'react'

// pass in the three things that need to be provided to create a context
export default(reducer, actions, initialState) => {
    const Context = React.createContext()

    const Provider = (props) => {
        const [state, dispatch] = useReducer(reducer, initialState)

        const boundActions = {}
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch)
        }

        return (
            <Context.Provider
                value={{ state, ...boundActions }}
            >
                { props.children }
            </Context.Provider>
        )
    }

    return { Context, Provider }
}