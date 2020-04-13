import React, {Component} from 'react';
import './Footer.scss';
class Footer extends Component {
    render() {
        return (
            <div>
                <div id={'footer'} className={'mt-5'}>
                    <div className={'container'}>
                        <div className={'row py-5'}>
                            <div className={'col-md-3'}>
                                <ul>
                                    <li>Get the app <i className={'fa fa-apple ml-2'} style={{fontSize: '20px'}}></i> </li>
                                    <li>Follow us</li>
                                    <li style={{fontSize: '24px'}}><i className={'fa fa-twitter'}></i> <i className={'fa fa-facebook'}></i> <i className="fa fa-instagram"></i> </li>
                                    <li>Get insprition</li>

                                    <div className="input-group mb-3 mt-3">
                                        <input type="text" className="form-control" placeholder="ENTER YOUR EMAIL"
                                               aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                            <div className="input-group-append">
                                                <span className="input-group-text" id="basic-addon2">SUBMIT</span>
                                            </div>
                                    </div>
                                </ul>
                            </div>
                            <div className={'col-md-9'}>
                                <div className={'row'}>
                                    <div className={'col-md-2 offset-md-1'}>
                                        <ul>
                                            <li>How it Works</li>
                                            <li>Press</li>
                                            <li>For Art & Trade</li>
                                            <li>The Shop</li>
                                        </ul>
                                    </div>
                                    <div className={'col-md-2'}>
                                        <ul>
                                            <li>FAQ</li>
                                            <li>For Business</li>
                                            <li>Company</li>
                                            <li>Careers</li>
                                        </ul>
                                    </div>
                                    <div className={'col-md-2'}>
                                        <ul>
                                            <li>Stores</li>
                                            <li>Pricing</li>
                                            <li>Reviews</li>
                                            <li>Design Services</li>
                                        </ul>
                                    </div>
                                    <div className={'col-md-2'}>
                                        <ul>
                                            <li>About Us</li>
                                            <li>Gift Card</li>
                                            <li>Contact Us</li>
                                        </ul>
                                    </div>
                                    <div className={'col-md-3'}>
                                        <ul>
                                            <li>Terms Of Service</li>
                                            <li>Privacy Policy</li>
                                            <li>Accessibility</li>
                                            <li>Sitemap</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'inner-footer p-4'}>
                    &copy; 2020 Index.
                </div>
            </div>

        );
    }
}

export default Footer;
