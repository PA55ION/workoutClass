import React from 'react';

interface AppContext {

}

interface Children {
    children: React.ReactNode;
}

const Context = React.createContext<Partial<AppContext>>({});

const ContextProvider = ({ children }: Children) => {
    return(
       <Context.Provider value=''>
           { children }
       </Context.Provider>
    )
}

export { ContextProvider, Context}