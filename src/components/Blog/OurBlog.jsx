import React, {Component} from 'react';
import Heading from "../Common/Heading/Heading";
import Button from "../Common/Button/Button";

class OurBlog extends Component {
    render() {
        return (
            <div id={'blog'} className={'container'}>
                <Heading text='Our Blog' para={'Our countless frame types are loved by global frame lovers, due to the variety, quality yet simplicity'}/>
                <div className={'row mt-5'}>
                    <div className={'col-md-3'}>
                        <img src={'23.png'} alt={'image'} width={'100%'} height={'100%'}/>
                    </div>
                    <div className={'col-md-3'}>
                        <p>Category Blog</p>
                        <h6>A Very Anthropologie Holiday With Jodie Harrison</h6>
                        <div className={'d-flex justify-content-between'}>
                            <p>By Admin</p>
                            <p>30/3/2020</p>
                        </div>
                        <p>One of my favorite illustrators, dan who goes by the creative name of roach graphics,...</p>
                        <Button text={'READ MORE'} isSmallButton={true}/>
                    </div>
                    <div className={'col-md-3'}>
                        <img src={'24.png'} alt={'image'} width={'100%'} height={'100%'}/>
                    </div>
                    <div className={'col-md-3'}>
                        <p>Category Blog</p>
                        <h6>A Very Anthropologie Holiday With Jodie Harrison</h6>
                        <div className={'d-flex justify-content-between'}>
                            <p>By Admin</p>
                            <p>30/3/2020</p>
                        </div>
                        <p>One of my favorite illustrators, dan who goes by the creative name of roach graphics,...</p>
                        <Button text={'READ MORE'} isSmallButton={true}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default OurBlog;
