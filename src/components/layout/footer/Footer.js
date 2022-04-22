import React from 'react'
import Logo from "../../../assets/images/Project X white.png"
import Instagram from "../../../assets/images/instagram.svg"
import Facebook from "../../../assets/images/facebook.svg"
import Youtube from "../../../assets/images/youtube.svg"
import Twitter from "../../../assets/images/twitter.svg"
import Location from "../../../assets/images/location.svg"
import Email from "../../../assets/images/email.svg"
import Phone from "../../../assets/images/phone.svg"


function Footer() {
  return (
    <footer className="footer">
        <div className="first-section">
            <div>
                <img src={Logo} alt="logo"/>
                <div className="first-section_icons">
                    <img src={Instagram} alt="logo"/>
                    <img src={Facebook} alt="logo"/>
                    <img src={Youtube} alt="logo"/>
                    <img src={Twitter} alt="logo"/>
                </div>
            </div>
            <ul>
                <p>Menu</p>
                <li>Yeni</li>
                <li>Endirimlər</li>
                <li>Aksessuarlar</li>
                <li>Bütün brendlər</li>
            </ul>
            <ul>
                <p>Kömək</p>
                <li>Tez-tez soruşulan suallar</li>
                <li>Çatdırılma xidməti</li>
                <li>Geri qaytarılma şərtləri</li>
            </ul>
            <ul>
                <p>Əlaqə</p>
                <li>
                    <img src={Location} alt="logo"/>
                    M. K. Ataturk avenue 89, Baku, Azerbaijan</li>
                <li>
                    <img src={Email} alt="logo"/>
                    example@gmail.com</li>
                <li>
                    <img src={Phone} alt="logo"/>
                    *2108</li>
            </ul>
        </div>
        <div className="second-section">
            <p className="right">PeojectX 2021. Bütün hüquqlar qorunur.</p>
            <div className="rules">
                <p>Qaydalar və şərtlər</p>
                <p>Məxfilik siyasəti</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer