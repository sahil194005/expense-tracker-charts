import React, { useRef, useState } from 'react'
export const GlobalContext = React.createContext();
export const GlobalContextProvider = (props) => {
    const amountRef = useRef(null);
    const descriptionRef = useRef(null);
    const categoryRef = useRef(null);
    const [totalExpense, setTotalExpense] = useState(0);
    const [expenses, setExpenses] = useState([]);
    let initVal = {
        amountRef,
        descriptionRef,
        categoryRef,
        totalExpense,
        setTotalExpense,
        expenses,
        setExpenses
    }

    return (
        <GlobalContext.Provider value={initVal} >
            {props.children}
        </GlobalContext.Provider>
    )
}