import React from 'react';
import Row from 'react-bootstrap/Row';
import '../../assets/style/scss/banner.scss';
import Images from '../../assets/Images/closedbanner.svg';

function Banner(){
    return (
        <div className='banner-container'>
            <Row>
                <div className='col-12 col-md-7 banner-text'>
                    <Row>
                        <h2>Unlock <span>the</span></h2>
                        <h1>Power of Digital <br />
                        Marketing <span> to</span><span> Transform</span>
                        </h1>
                        <h2>Your Business</h2>
                    </Row>
                </div>
                <div className='col-12 col-md-5 banner-image'>
                    <Row className='d-block'>
                        <img src={Images} alt="closebanner"/>
                    </Row>
                </div>  
            </Row>
      </div>
    )
}

export default Banner