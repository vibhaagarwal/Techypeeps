import React from 'react';
// import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../../assets/style/scss/footer.scss';
import Images from '../../assets/Images/Footer-logo.svg';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF } from '@fortawesome/free-solid-svg-icons';

// library.add( faFacebookF)
// const element = <FontAwesomeIcon icon={ faFacebookF} />

function Services() {
  return (
    <Container fluid className='footer'>
      <Row>
        <div className='col-12 col-md-4 feedback-text-image'>
          <img src={Images} alt="closebanner" />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className='col-12 col-md-5 links'>
          <Row>
            <div className='col-12 col-md-6'>
              <h4>About us</h4>
              <ul className='list-group list-unstyled'>
                <li>Company</li>
                <li>Portfolio</li>
                <li>Careers</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div className='col-12 col-md-6'>
              <h4>Contact us</h4>
              <ul className='list-group list-unstyled'>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                <li>+9000 0000 000</li>
              </ul>
            </div>
          </Row>
        </div>
        <div className='col-12 col-md-3 social-media'>
          <ul className='d-flex list-group-horizontal list-unstyled'>
            {/* <li>{element}</li> */}
            <li></li>
          </ul>
        </div>
        <hr />
        <p className='text-center'>Copyright ® 2024 Company All rights Rcerved</p>
      </Row>
    </Container>
  )
}

export default Services