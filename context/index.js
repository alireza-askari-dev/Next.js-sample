import react, { createContext, useState } from 'react';

export const Context = react.createContext({
    Example: [],
    setExample: [],
});

const ContextProvider = (props) => {
    const [Example, setExample] = react.useState([]);

    return (
        <Context.Provider
            value={{
                Example,
                setExample,
            }}
        >
            {props.children}
        </Context.Provider>
    );
}

export default ContextProvider;