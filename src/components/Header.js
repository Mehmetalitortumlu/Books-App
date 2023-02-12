import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

function Header() {
    const { theme, setTheme } = useTheme();
    const [themeChange, setThemeChange] = useState(true);

    const dark = () => {
        setTheme(theme === "dark" ? "light" : "dark")
        setThemeChange(themeChange === true ? false : true)
    };

    return (
        <div className="container navbar headers">
            <div className="row mx-auto">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-evenly py-1 mb-4 border-bottom">
                    {themeChange && <i onClick={dark} style={{ fontSize: "1.5rem" }} className="fa-solid fa-moon"></i>}
                    {!themeChange && <i onClick={dark} className="fa-solid fa-sun"></i>}

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 ul-list">
                        <li><Link to="/" className="nav-link px-2 link-dark">Yurt Dışından Kitap</Link></li>
                        <li><Link to="/" className="nav-link px-2 link-dark">Hediye Kartı</Link></li>
                        <li><Link to="/" className="nav-link px-2 link-dark">Markalar</Link></li>
                        <li><Link to="/" className="nav-link px-2 link-dark">Yayınevleri</Link></li>
                        <li><Link to="/" className="nav-link px-2 link-dark">Yazarlar</Link></li>
                        <li><Link to="/" className="nav-link px-2 link-dark">Mağaza Etkinlikleri</Link></li>
                        <li><Link to="/" className="nav-link px-2 link-dark">Mağazalar</Link></li>
                        <li><Link to="/" className="nav-link px-2 link-dark">Sipariş Takiptleri</Link></li>
                    </ul>
                    <i className="fa-brands fa-linkedin p-3"> </i>
                    <i className="fa-brands fa-youtube p-3"></i>
                    <i className="fa-brands fa-whatsapp p-3"> </i>
                    <i>999-999-999</i>
                </header>
            </div>
        </div>
    );
};

export default React.memo(Header);

