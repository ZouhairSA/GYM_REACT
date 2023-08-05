import React from 'react'
import './contact.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'

const Contact = () => {
  return (
    <>
    <Header title="Get in Touch" image={HeaderImage}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, cum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, cum.

    </Header>
    <section className='contact'>
      <div className='container contact_container'>
        <div className='contact_wrapper'>
          <a href="mailto:giedre_savickiene@yahoo.com" target="_blank" rel='noreferrer noopen'><MdEmail/></a>
          <a href="http://m.me/Giedre.Savickiene" target="_blank" rel='noreferrer noopen'><BsMessenger/></a>
          <a href="https://wa.me/" target="_blank" rel='noreferrer noopen'><IoLogoWhatsapp/></a>
        </div>

      </div>

    </section>
    </>
  )
}

export default Contact
