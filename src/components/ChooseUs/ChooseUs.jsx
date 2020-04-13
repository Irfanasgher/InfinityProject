import React, {Component} from 'react';
import './ChooseUs.scss';
import Button from "../Common/Button/Button";

class ChooseUs extends Component {
    render() {
        return (
            <div id={'choose'} className={'container mt-5'}>
                <div className={'row'}>
                    <div className={'col-md-6'}>
                        <h1>Why Choose Us</h1>
                        <p>Our countless frame types are loved by global frame lovers, due to the variety, quality yet simplicity.</p>
                        <div className={'row mt-5'}>
                            <div className={'col-md-6 d-flex justify-content-between align-items-center'}>
                                <img src={'20.png'} />
                                <div className={'ml-3'}>
                                    <h6>Free Shipping</h6>
                                    <p>You're here to buy art, not cardboard boxes.</p>
                                </div>
                            </div>
                            <div className={'col-md-6 d-flex justify-content-between align-items-center'}>
                                <img src={'21.png'} />
                                <div className={'ml-3'}>
                                    <h6>Free Design Advice</h6>
                                    <p>You're here to buy art, not cardboard boxes.</p>
                                </div>
                            </div>
                            <div className={'col-md-6 d-flex justify-content-between align-items-center'}>
                                <img src={'20a.png'} />
                                <div className={'ml-3'}>
                                    <h6>Everyday Low Price</h6>
                                    <p>You're here to buy art, not cardboard boxes.</p>
                                </div>
                            </div>
                            <div className={'col-md-6 d-flex justify-content-between align-items-center'}>
                                <img src={'21a.png'} />
                                <div className={'ml-3'}>
                                    <h6>Free Returns</h6>
                                    <p>Don't adore it? return it for free within 45 days.</p>
                                </div>
                            </div>
                            <div className={'ml-3 mt-4'}>
                                <Button text={'START FRAMING'}/>
                            </div>
                        </div>
                    </div>
                    <div className={'col-md-5 offset-md-1'}>
                        <img src={'19.png'} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ChooseUs;
