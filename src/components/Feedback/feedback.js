/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Row from 'react-bootstrap/Row';
import '../../assets/style/scss/feedback.scss';
import Images from '../../assets/Images/feedback.svg';
import ClientLogo from '../../assets/Images/client-logo.svg';


function Services(){
    return (
        <div className='feedback-container'>
        <Row>
          <div className='col-12 col-md-6 feedback-text-image'>
            <img src={Images} alt="closebanner"/>
          </div>
          <div className='col-12 col-md-5 feedback-text'>
            <h1>
              What Our <br />Clients Say
            </h1>
            <div className='client-feedback'>
              <h4>Aakash Chauhan, CEO</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <ul className='d-flex list-group-horizontal list-unstyled'>
                <li><a href="#">google.com</a></li>
                <li><img src={ClientLogo} alt="" /></li>
              </ul>
            </div>
          </div>
        </Row>
      </div>
    )
}

export default Services