import './App.css';
import Container from 'react-bootstrap/Container';
import Header from './components/Header/header';
import Banner from './components/Banner/banner';
import Services from './components/Services/services';
import Offers from './components/offers/offers';
import Feedback from './components/Feedback/feedback';
import Footer from './components/Footer/footer';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <Container fluid >
      <Row>
        <Header />
        <Banner />
        <Services />
        <Offers />
        <Feedback />
        <Footer />
      </Row>
    </Container>
  )
}

export default App;
