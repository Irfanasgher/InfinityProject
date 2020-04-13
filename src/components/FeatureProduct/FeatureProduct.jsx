import React, {Component} from 'react';
import Heading from "../Common/Heading/Heading";
import './FeatureProduct.scss';

const data = [
    {
        id: 1,
        image: '9.png',
        heading: 'Dover'
    },
    {
        id: 2,
        image: '10.png',
        heading: 'Marquette '
    },
    {
        id: 3,
        image: '11.png',
        heading: 'Wren'
    },
    {
        id: 4,
        image: '12.png',
        heading: 'Jersey'
    },
    {
        id: 5,
        image: '13.png',
        heading: 'Everett'
    },
    {
        id: 6,
        image: '14.png',
        heading: 'Mandalay'
    },
]

class FeatureProduct extends Component {
    render() {
        const renderData = data.map((data, index) => {
            return(
                <div className={'col-md-4'}>
                    <img src={'heart.png'} alt={'image'} className={'heart'}/>
                    <img src={data.image} alt={'image'} width={'100%'} height={'90%'}/>
                    <h6>{data.heading} </h6>
                    <button className={'p-2'}> ADD TO CARD</button>
                </div>
            )
        })
        return (
            <div id={'feature'} className={'container'}>
                <Heading text='Feature Product' para={'Design a custom frame for photos, art and more.'}/>
                <div className={'row mt-5'}>
                    <div className={'col-md-4 py-5 bg-gray d-flex align-items-center'}>
                        <img src={'8.png'} alt={'image'} width={'100%'} className={'image'}/>
                    </div>
                    <div className={'col-md-8'}>
                        <div className={'row'}>
                            {renderData}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FeatureProduct;
