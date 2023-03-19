import React, {  useState } from 'react'
import Headings from '../Headings/Headings'
import { data } from '../../data'
import Buttons from '../Buttons/Buttons'

const Services = () => {

  const [servicesIndex, setServicesIndex] = useState(0)

  const { services } = data ?? {};

  return (
    <div className='services-container'>

      <div className="heading">
        <Headings subtitle='خدماتنا' title='يعبر هذا النص العربي عن نص وهمي سيتم اضافة نص حقيقي قريباً' />
      </div>
      <div className="services-row">
        {services.map((item, index) => item?.images.png && (
          <div key={index} className={`services-item ${servicesIndex === index && "active"}`} onClick={() => setServicesIndex(index)}>

            <div className='img-container'>
              <img src={item.images.png} alt={item.name} />
              <div className="layout"></div>
            </div>
            {servicesIndex === index ? (
              <div className='service-content'>
                <h3>{item.name}</h3>
                <p>{item.title}</p>
                <div className='button'>
                  <Buttons />
                </div>
              </div>

            ) : <div className='not-active'>
              <h3>{item.name}</h3>
            </div>}

          </div>
        ))}
      </div>
    </div>
  )
}

export default Services