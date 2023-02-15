import { createContext, useContext, useState, useEffect } from "react";
import Books from '../components/kitaplik.json';

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
    const [basket, setBasket] = useState([]);
    const [books, setBooks] = useState([]);

    const [filterText, setFilterText] = useState("");
    const filtered = Books.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
        )
    });

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
        books,
        filterText,
        setFilterText,
        filtered,
        Books
    }
    return (
        <BasketContext.Provider value={values}>
            {children}
        </BasketContext.Provider>
    );
};

export const useBasket = () => useContext(BasketContext);