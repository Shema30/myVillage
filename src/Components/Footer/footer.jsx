import React, { Component } from 'react';
import './footer.css'

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <footer>
                    <div class="row primary">
                        <div class="column about col-xl-3 col-lg-12">

                            <h3 className='footer-logo'>My Village</h3>

                        </div>

                        <div class="column links col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                            <h3>Useful Links</h3>

                            <ul>
                                <li><a href="#">Relocate</a></li>
                                <li><a href="#">Check Status</a></li>
                            </ul>

                        </div>

                        <div className='column col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6'>
                            <h3>Support</h3>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Cookies Policy</a></li>
                                <li><a href="#">Terms Of Service</a></li>
                            </ul>

                        </div>

                        <div class="column subscribe col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                            <h3>Social Media</h3>

                            <div class="social">
                                <a href=""><i class="fa-brands fa-facebook"></i></a>
                                <a href=""><i class="fa-brands fa-instagram"></i></a>
                                <a href=""><i class="fa-brands fa-twitter"></i></a>
                                <a href=""><i class="fa-brands fa-whatsapp"></i></a>
                            </div>
                        </div>

                    </div>

                    <div class="copyright">
                        <p>Copyright 2023</p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;