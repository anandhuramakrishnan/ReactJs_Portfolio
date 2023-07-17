import React from 'react'
import '../Footer/Footer.css'
import {FaInstagram,FaLinkedin,FaGithub} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer class="portfolio-footer">
  <div class="footer-content">
    <h3>Contact</h3>
    <p>Email: anandhurk1888@gmail.com</p>
    <p>Phone: 8921431355</p>
    <p>Address: Edappillil H , Keerampara p.o, punnekkad, 686681</p>
  </div>
  <div class="footer-social">
    <h3>Follow Me</h3>
    <ul>
      <li><a href="#"><FaGithub/>Github</a></li>
      <li><a href="#"><FaInstagram/> Instagram</a></li>
      <li><a href="#"><FaLinkedin/>Linkedin</a></li>
    </ul>
  </div>
</footer>

  )
}

export default Footer
