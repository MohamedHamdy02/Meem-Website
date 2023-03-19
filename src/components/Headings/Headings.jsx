import React from 'react'

const Headings = ({ title, subtitle }) => {
  return (
    <>
      {subtitle && <h1>{subtitle}</h1>}
      {title && <h4>{title}</h4>}
    </>
  )
}

export default Headings