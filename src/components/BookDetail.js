import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useBasket } from '../context/BasketContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BookDetail() {
    const { id } = useParams();
    const { books, setBasket, basket } = useBasket();

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {
                        books.map(book => (
                            <div className='d-flex justify-content-center mt-5 '>

                                <div className='border p-5'>
                                    <img src={book.img} alt="resim-bulunamadı" />
                                </div>

                                <div className='p-5 border'>
                                    <h1 className='mt-3'> {book.title} </h1> <hr />
                                    <p className='mt-3'>Yazar : <b>{book.yazar} </b> </p><hr />
                                    <h2 className='mt-3'>{book.price}</h2><hr />
                                    <p className='mt-3'> {book.content} </p><hr />
                                    <button onClick={() => {
                                        const arr = [...basket];
                                        if (arr.findIndex((ind) => {
                                            return book.id === ind.id;
                                        }) === -1) {
                                            arr.push(book);
                                            setBasket(arr);
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
                                    <Link to={"/"}> <button className=' btn btn-outline-success text-center'>Önceki sayfa </button> </Link>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default React.memo(BookDetail);
