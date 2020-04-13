import React, {Component} from 'react';
import Heading from "../Common/Heading/Heading";
// import './FeatureProduct.scss';
import './ImpressiveWork.scss';

const data = [
    {
        id: 1,
        image: '16.png',
        heading: 'Dover'
    },
    {
        id: 2,
        image: '17.png',
        heading: 'Marquette '
    }
]

class ImpressiveWork extends Component {
    render() {
        const renderData = data.map((data, index) => {
            return(
                <div className={'col-md-6'} id={'scale-image'}>
                    <img src={data.image} alt={'image'} width={'100%'} className={'image'}/>
                </div>
            )
        })
        return (
            <div id={'impressive'} className={'container'}>
                <Heading text='Our Impressive Works' para={'Design a custom frame for photos, art and more.'}/>
                <div className={'row mt-5'} style={{height: '540px', overflow: 'hidden'}}>
                    <div className={'col-md-6'} id={'scale-image'}>
                        <div className={'line'} />
                        <img src={'15.png'} alt={'image'} width={'100%'} height={'100%'} className={'image'}/>
                    </div>
                    <div className={'col-md-6'}>
                        <div className={'row'}>
                            {renderData}
                        </div>
                        <div className={'col-md-12 mt-4'} style={{paddingRight: 0, paddingLeft: 0}} id={'scale-image'}>
                            <div className={'line'} />
                            <img src={'18.png'} alt={'image'} width={'100%'} className={'image'}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImpressiveWork;
