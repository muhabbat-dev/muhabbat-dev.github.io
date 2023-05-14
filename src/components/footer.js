import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
    return (<footer className="footer p-10 bg-neutral text-neutral-content flex flex-row justify-around">
    <div>
      <span className="footer-title">About</span> 
      <Link to="/" className="link link-hover">Home</Link>
      <Link to="/portfolio" className="link link-hover">Projects</Link>
      <Link to="/blogs" className="link link-hover">Blogs</Link>
      <Link to="/" className="link link-hover">Download CV</Link>
    </div> 
    {/* <div>
      <span className="footer-title">Company</span> 
      <a className="link link-hover">About us</a>
      <a className="link link-hover">Contact</a>
      <a className="link link-hover">Jobs</a>
      <a className="link link-hover">Press kit</a>
    </div>  */}
    <div>
      <span className="footer-title">Social</span> 
      <a href='https://github.com/dev-mohib' target="__blank" className="link link-hover">Github</a>
      <a href='https://twitter.com/dev_mohib' target="__blank" className="link link-hover">Twitter</a>
      <a href='https://linkedin.com/in/dev-mohib' target="__blank" className="link link-hover">LinkedIn</a>
    </div>
  </footer>)
}


export default Footer