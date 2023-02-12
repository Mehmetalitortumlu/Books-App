import React from 'react'
import { Link } from 'react-router-dom';
import { useBasket } from '../context/BasketContext';
import Books from './kitaplik.json';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Book = () => {
    const { basket, setBasket, setBooks } = useBasket();
    return (
        <div className='container '>
            <div className="row mt-5 ">

                {Books.map((book, i) => (
                    <div key={i} className="col-6 col-md-4 col-lg-2 mb-3 d-flex justify-content-center books-div">
                        <div className='border' style={{ width: "14rem" }}>
                            <Link to={`bookdetail/${book.id}`}>
                                <img onClick={() => setBooks([book])}
                                    height={"200"} src={book.img} className="card-img-top " alt="..." /> </Link>
                            <div className="card-body ">
                                <h6 className="card-title mt-4">{book.title}</h6>
                                <p className="card-text fw-bold text-center mt-4">Fiyat: {book.price}</p>
                                <div className='d-flex flex-column'>
                                    <button onClick={() => {
                                        const arr = [...basket];
                                        if (arr.findIndex((ind) => {
                                            return book.id === ind.id;
                                        }) === -1) {
                                            arr.push(book);
                                            setBasket(arr)
                                        } else {
                                            arr.map((item) => {
                                                if (item.id === book.id) {
                                                    return (book.adet += 1)
                                                }
                                                setBasket(arr);
                                            })
                                        }
                                        console.log(basket);
                                        toast.success("Sepete eklendi")
                                    }} className="btn btn-outline-success"> Sepete Ekle</button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
             
            </div>
        </div>
    );
};

export default React.memo(Book);
