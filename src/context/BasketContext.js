import { createContext, useContext, useState,useEffect } from "react";
const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
    const [basket, setBasket] = useState([]);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        let basket1 = localStorage.getItem("basket")
        setBasket(JSON.parse(basket1))
    }, []);

    useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(basket))
    }, [basket]);


    const values = {
        basket,
        setBasket,
        setBooks,
        books
    }
    return (
        <BasketContext.Provider value={values}>
            {children}
        </BasketContext.Provider>
    );
};

export const useBasket = () => useContext(BasketContext);