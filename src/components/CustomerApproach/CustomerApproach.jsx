import React, {Component} from 'react';
import './CustomerApproach.scss';
import Button from "../Common/Button/Button";
class CustomerApproach extends Component {
    render() {
        return (
            <div className={'container'}>
                <div className={'row'}  id={'approach'}>
                    <div className={'col-md-6 '}>
                        <img src={'./1.png'} alt={'image'} />
                    </div>
                    <div className={'col-md-6 text-left d-flex align-items-center'}>
                        <div>
                            <h1>A NEW APPROACH TO CUSTOMER FRAME</h1>
                            <p className={'mt-2'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <Button text={'START FRAMING'}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CustomerApproach;
