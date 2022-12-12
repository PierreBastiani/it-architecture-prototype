import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="col-md-3 footer-grid">
                        <h3>About Us</h3>
                    </div>
                    <div className="col-md-3 footer-grid ">
                        <h3>Menu</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/kitchen">Kitchen</Link></li>
                            <li><Link to="/care">Personal Care</Link></li>
                            <li><Link to="/house-hold">Household</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3 footer-grid ">
                        <h3>Useful links</h3>
                        <ul>
                            About Us
                            Contact
                            Hot deals
                            Promotions
                            New products
                            <li><Link to="/desclaimer">Disclaimer</Link></li>
                            <li><Link to="/faq">Faqs</Link></li>
                            <li><Link to="/privacy-and-policy">Privacy & Policy</Link></li>
                            <li><Link to="/term-and-condition">Terms &amp; Conditions</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3 footer-grid">
                        <h3>Help Center</h3>
                        <ul>
                            <li><Link to="/Payments">Payments</Link></li>
                            <li><Link to="/Refund">Refund</Link></li>
                            <li><Link to="/Checkout">Checkout</Link></li>
                            <li><Link to="/Shipping">Shipping</Link></li>
                            <li><Link to="/Q&A">Q&A</Link></li>
                            <li><Link to="/Privacy Policy">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div className="clearfix" />
                    <div className="footer-bottom">
                        <ul className="social-fo">
                            <li><Link to="#" className=" face"><i className="fa fa-facebook" aria-hidden="true" /></Link></li>
                            <li><Link to="#" className=" twi"><i className="fa fa-twitter" aria-hidden="true" /></Link></li>
                            <li><Link to="#" className=" pin"><i className="fa fa-pinterest-p" aria-hidden="true" /></Link></li>
                            <li><Link to="#" className=" dri"><i className="fa fa-dribbble" aria-hidden="true" /></Link></li>
                        </ul>
                        <div className=" address">
                            <div className="col-md-4 fo-grid1">
                                <p><i className="fa fa-home" aria-hidden="true" />Dublin City University, Collins Ave Ext,
                                    Whitehall, Dublin 9</p>
                            </div>
                            <div className="col-md-4 fo-grid1">
                                <p><i className="fa fa-phone" aria-hidden="true" />+256 17005000</p>
                            </div>
                            <div className="col-md-4 fo-grid1">
                                <p><Link to="/gmail.com"><i className="fa fa-envelope-o" aria-hidden="true" />groceyish@contact.com</Link></p>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
