import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react'

export const ValueContext = createContext(
    {} as {value: any; setValuePrice:(valueData: any)=> void }
)

export const ValueProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [value, setValue] = useState()

    async function setValuePrice(valueData: any) {
        setValue(valueData)
      }


    return (
        <ValueContext.Provider
            value={{
                setValuePrice,
                value,
            }}
        >
            {children}
        </ValueContext.Provider>
    )
}

export const useValuePrice=()=>{
    const context = useContext(ValueContext)
    return context
}
