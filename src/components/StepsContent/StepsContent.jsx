import React, { useEffect, useState } from 'react'
import Headings from '../Headings/Headings'
import { data } from '../../data'
import StepsImage from '../../assets/images/StepsImage.png'

const StepsContent = () => {

  const [stepsIndex, setStepsIndex] = useState(0);

  const { steps } = data ?? {};

  useEffect(() => {
    const changeIndex = () => {
      if (steps.length-1 <= stepsIndex) setStepsIndex(0)

      else setStepsIndex((prevIndex) => prevIndex + 1)
    }


    const intervalID = setInterval(changeIndex, 5000);

    return () => {
      clearInterval(intervalID)
    }
  }, [stepsIndex])

  return (
    <div className='container'>
      <div className="heading">
        <Headings subtitle='جسر المستفيد' title='يعبر هذا النص العربي عن نص وهمي سيتم اضافة نص حقيقي قريباً' />
      </div>
      <div className="steps-container">

        {steps.map((item, index) => item?.name &&
          <div key={index} onClick={() => setStepsIndex(index)} className={`step-container ${stepsIndex === index && "active"}`}>
            <h5> {item.name}</h5>
          </div>
        )}
      </div>
      <div className="step-content-container">
        <div className='step-number'>
          {steps?.[stepsIndex]?.name && (
            <h1>{steps[stepsIndex].step}</h1>
          )}
        </div>
        <div className="step-content">
          {steps?.[stepsIndex]?.text && (
            <p>{steps[stepsIndex].text}</p>
          )}
        </div>
        <img src={StepsImage} alt="" />
      </div>
    </div>
  )
}

export default StepsContent