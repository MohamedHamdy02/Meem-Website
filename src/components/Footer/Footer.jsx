import React from 'react'
import { CiFacebook } from 'react-icons/ci'
import { FaTwitter } from "react-icons/fa"
import { AiOutlineInstagram } from "react-icons/ai"
import { AiFillYoutube } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import FooterIcon from "../../assets/images/FooterIcon.png"

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className="row">
        <div className="content-container">
          <div className="footer-right-side-container">
            <ul>
              <li>
                <a href="#">الرئيسية</a>
              </li>
              <li>
                <a href="#">عن المنصة</a>
              </li>
              <li>
                <a href="#">الخدمات</a>
              </li>
              <li>
                <a href="#">إنضم إلينا</a>
              </li>
            </ul>
          </div>
          <img src={FooterIcon} alt="footerImage" />
          <div className="footer-left-side-container">
            <div className="icon-circle">
              <AiFillLinkedin />
            </div>
            <div className="icon-circle">
              <AiFillYoutube />
            </div>
            <div className="icon-circle">
              <AiOutlineInstagram />
            </div>
            <div className="icon-circle">
              <FaTwitter />
            </div>
            <div className="icon-circle">
              <CiFacebook />
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className='bottom-container'>
        <a href="#">شروط الاستخدام</a>
        <a href="#">سياسة الخصوصية</a>
      </div>
    </footer>
  )
}

export default Footer