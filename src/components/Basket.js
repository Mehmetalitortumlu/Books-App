import React from 'react'
import { useBasket } from '../context/BasketContext'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Basket() {
    const { basket, setBasket } = useBasket();
    console.log(basket.length);

    const removeBasket = (todoIndex) => {
        const newList = basket.filter((_, index) => index != todoIndex);
        setBasket(newList);
        toast.success("silme işlemi başarlı")
    };
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex  justify-content-center flex-wrap ">
                    {
                        basket.length === 0 &&
                        <div className='d-flex align-items-center flex-column'>
                            <h4 className='mt-5'>Sepetiniz Boş</h4>
                            <img className='mt-5' src="https://www.dr.com.tr/Themes/DR/Content/NewTheme/images/empty-basket.png" alt="" />
                            <h5 className='mt-5'>Nasıl Alışveriş Yapabilirsiniz?</h5>
                            <ol class="bulletList dark" style={{ margin: "20px 0px" }}>
                                <li className='circle'>İncelediğiniz ürünü sepetinize ekleyiniz.</li>
                                <li className='circle'>“Sepetim” sayfasında ürün bilgilerinizi kontrol ediniz. Değişiklik yapmak istediğiniz alanlar varsa güncelleyiniz.</li>
                                <li className='circle'>Ödeme yapmak için “devam et” butonuna basınız.</li>
                                <li className='circle'> Teslimat ve fatura adresinizi seçiniz. “yeni adres ekle” seçeneği ile farklı bir teslimat adresi girebilirsiniz.</li>
                                <li className='circle'>“Fatura ürün ile birlikte gelsin” seçeneğini tıkladığınızda, teslimat adresinize fatura kesilecektir.</li>
                                <li className='circle'> Farklı bir adres ve kişiye/kuruma fatura kesilecek ise; tiki kaldırmanız gerekmektedir. Bu durumda yeni adres bilgilerini ekleyebilirsiniz.</li>
                                <li className='circle'>Devam et butonuna basarak “Ödeme” sayfasına gelerek ödeme tipini seçiniz.</li>
                                <li className='circle'>“Mesafeli Satış” ve “Ön Bilgilendirme” kabul sözleşmelerini onayladıktan sonra “satın al” seçeneği ile siparişinizi tamamlayınız.</li>
                            </ol>
                        </div>
                    }
                    {basket.length > 0 && basket.map((book, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-2 p-2 mb-3 d-flex justify-content-center">
                            <div className='border p-2' style={{ width: "18rem" }}>
                                <img height={"220"} src={book.img} className="card-img-top" alt="..." />
                                <div className="card-body d-flex flex-column justify-content-center p-1">
                                    <h6 className="card-title text-center">{book.title}</h6>
                                    <p className="card-text fw-bold text-center">{book.price}</p>
                                    <p className="card-text fw-bold text-center">
                                        Adet: {book.adet}
                                    </p>
                                    <button onClick={() => {
                                        setBasket([])
                                        toast.success("Satın alma işlemi başarılı")
                                    }} className="btn btn-outline-success"> Satın al</button>
                                    <button onClick={() => removeBasket(index)} className="btn btn-outline-success ">  Sepetten sil </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default React.memo(Basket);
