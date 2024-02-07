import React from 'react';
import Row from 'react-bootstrap/Row';
import '../../assets/style/scss/offers.scss';
import Images from '../../assets/Images/responseoffers.svg';

function Offers(){
    return (
        <div className='offers-container'>
        <Row>
          <div className='col-12 col-md-8 offers-text'>
            <h2>We’re <br />TechyPeep’s.</h2>
            <h1>We Plan, Create,<br /> and Optimize Digital<br /> Content Experiences.</h1>
          </div>
          <div className='col-12 col-md-4 offers-image'>
            <Row className='d-block'>
  <img src={Images} alt="offers"/>
            </Row>
          </div>
        </Row>
      </div>
    )
}

export default Offers