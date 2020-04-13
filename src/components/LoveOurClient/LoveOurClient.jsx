import React, {Component} from 'react';
import './LoveOurClient.scss';
import Heading from "../Common/Heading/Heading";

class LoveOurClient extends Component {
    render() {
        return (
            <div id={'client'} className={'container'}>
                <Heading text='We Love Our Client' para={'Design a custom frame for photos, art and more.'}/>
                <div className={'row mt-5 d-flex align-items-end'}>
                    <div className={'col-md-4'}>
                        <img src={'22.png'} alt={'image'}/>
                    </div>
                    <div className={'col-md-8 pb-5'}>
                        <h6>JEREMY CROUSE</h6>
                        <p>(Graphic Designer)</p>
                        <p style={{fontSize: '16px', width: '90%'}}>" I was looking a way to save my University degree from getting damaged while showing to others and I found index, framing options. I have got my degree framed in stylish design which is also adding beauty to my room. "</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoveOurClient;
