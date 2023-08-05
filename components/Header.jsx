import React from 'react'

const Header = ({title1, image, children}) => {
  return (
    <header className='header'>
        <div className="header_container">
            <div className="header_container-bg">
                <img src={image} alt="Header Background Image" />
            </div>
            <div className='header_content'>
                <h2>{title1}</h2>
                <p>{children}</p>
            </div>
        </div>
    </header>
  )
}

export default Header
