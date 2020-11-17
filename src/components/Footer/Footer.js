import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer-mainsection">
            <div className="container row">
            <div className=" mt-5 py-5">

                <div className="col-4 text-center">
                    <h1 className='p-5'>All right reserved @2020</h1>
                </div>
                
                {/* <div className="col-3 mr-auto">
                    <p className="mt-5">H#340 (4th Floor), Road #24, <br/> New DOHS, Mohakhali, Dhaka, Bangladesh<br/>Phone: 018XXXXXXXX<br/>E-mail: info@company.com</p>
                </div>
                <div className="col-2">
                    <h4 className="pb-4">Company</h4>
                    <p>About</p>
                    <p>Site Map</p>
                    <p>Support Center</p>
                    <p>Terms Conditions</p>
                    <p>Submit Listing</p>
                </div>
                <div className="col-2 ml-auto">
                    <h4 className="pb-4">Quick Links</h4>
                    <p>Quick Links</p>
                    <p>Rentals </p>
                    <p>Sales</p>
                    <p>Contact</p>
                    <p>Terms Conditions</p>
                    <p>Our blog</p>
                </div>
                <div className="col-3">
                    <h4 className="pb-4">About us</h4>
                    <p>We are the top real estate 
                    agency in Sydney, with agents 
                    available to answer any 
                    question 24/7.</p>

                    <ul className='d-flex social-media'>
                        <li className='list-unstyled'><a className='text-white' href="#"><FontAwesomeIcon icon={faFacebookSquare} /></a> </li>
                        <li className='pl-4 list-unstyled'><a className='text-white'  href="#"><FontAwesomeIcon icon={faYoutubeSquare} /></a> </li>
                        <li className='pl-4 list-unstyled'><a className='text-white'  href="#"><FontAwesomeIcon icon={faInstagramSquare} /></a> </li>
                        <li className='pl-4 list-unstyled'><a className='text-white'  href="#"><FontAwesomeIcon icon={faTwitterSquare} /></a> </li>
                    </ul>

                </div> */}
            </div>
            </div>
        </div>
    );
};

export default Footer;