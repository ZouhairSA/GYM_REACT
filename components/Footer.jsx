import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'
import {FaLinkedin} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
       <div className='container footer_container'>
        <article>
            <Link to='/' className='logo'>
                <img src={Logo} alt="Footer Logo" />
            </Link>
            <p>
            A gym website is an online platform that represents a physical gym or fitness center. It typically provides information about the gym's location, hours of operation, membership options, and the
             types of equipment and classes offered. A gym website may also allow users to sign up for memberships
            </p>
            <div className="footer_socials">
                <a href="http://linkedin.com" target="_blank" rel='noreferrer noopener'><FaLinkedin/></a>
                <a href="http://facebook.com" target="_blank" rel='noreferrer noopener'><FaFacebook/></a>
                <a href="http://twitter.com" target="_blank" rel='noreferrer noopener'><AiOutlineTwitter/></a>
                <a href="http://instagram.com" target="_blank" rel='noreferrer noopener'><AiFillInstagram/></a>
            </div>
        </article>
        <article className='zh'>
            <h4>Permalinks</h4>
            <Link to="/about">About</Link>
            <Link to="/plans">Plans</Link>
            <Link to="/trainer">Trainer</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
        </article>
        <article>
            <h4>Insights</h4>
            <Link to="/about">Blog</Link>
            <Link to="/plans">Case Studies</Link>
            <Link to="/trainer">Events</Link>
            <Link to="/gallery">Communities</Link>
            <Link to="/contact">FAQs</Link>
        </article>
        <article>
            <h4>Get In Thought</h4>
            <Link to="/contact">Contact Us</Link>
            <Link to="/support">Support</Link>
        </article>
        <div className='footer_copyrihgt'></div>
        </div> 
    </footer>
  )
}

export default Footer
