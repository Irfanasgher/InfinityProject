import React, {Component} from 'react';
import Heading from "../Common/Heading/Heading";

import './Frames.scss';
const data = [
    {
        id: 1,
        image: '2.png',
        heading: 'Original Art'
    },
    {
        id: 2,
        image: '3.png',
        heading: 'Object'
    },
    {
        id: 3,
        image: '4.png',
        heading: 'Textile'
    },
    {
        id: 4,
        image: '5.png',
        heading: 'Jersey'
    },
    {
        id: 5,
        image: '6.png',
        heading: 'Photography'
    },
    {
        id: 6,
        image: '7.png',
        heading: 'Something Else'
    },
]
class Frames extends Component {

    render() {
        const renderData = data.map((data, index) => {
            return(
                <div className={'col-md-2'}>
                    <div className={'frame-now p-2'}>
                        <h6>FRAME NOW</h6>
                    </div>
                    <img src={data.image} alt={'image'} width={'100%'} height={'90%'} className={'image'}/>
                    <h6>{data.heading} </h6>
                </div>
            )
        })
        return (
                <div id={'frame'} className={'container'}>
                    <Heading text='What Are You Framing?' para={'Design a custom frame for photos, art and more.'}/>
                    <div className={'row mt-5'}>
                        {renderData}
                    </div>
                </div>
             )
         }
    }

export default Frames;
