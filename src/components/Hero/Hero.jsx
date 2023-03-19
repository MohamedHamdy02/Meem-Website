import React from 'react'
import HeroTextArrow from '../../assets/SVG/HeroTextArrow'
import Buttons from '../Buttons/Buttons'
import Headings from '../Headings/Headings'
import HeroImage from '../../assets/images/Hero.png'
import HeroImageButton from '../../assets/SVG/HeroImageButton'
import HeroImageLine from "../../assets/images/Terrain02.png"

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className="hero-content">
        <div className="right-container">
          <div className="badge-container">
            <h4>عن تجسير</h4>
          </div>
          <div className="heading">
            <Headings subtitle='تحويل الأسر المنتجة إلى منشآت تجارية مستدامة' />
          </div>
        </div>
        <div className="left-container">
          <div className="left-container-content">
            <div className="text-wrapper">
              <HeroTextArrow />
              <p>يهدف برنامج تجسير لابتكار حلول مساعدة للأسر المنتجة لتمكينها من تحول أنشطتها إلى منشآت مستدامة وذلك بدعم حصولها على الحلول التمويلية ودعم مساهمتها في تنمية الاقتصاد المحلي وخلق فرص تسويقية للمشاريع المميزة منها محليًا ودوليًا</p>
            </div>
            <Buttons />
          </div>
        </div>
      </div>
      <div className="image-container">
        <img src={HeroImage} alt="heroimage" />
        <div className="hero-image-button">
          <HeroImageButton />
          <span className='layout'></span>
        </div>
        <div className='image-layout'>
          <img src={HeroImageLine} alt="HeroImageLine" />
        </div>
      </div>

    </div>
  )
}

export default Hero