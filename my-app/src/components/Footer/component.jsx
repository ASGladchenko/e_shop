import {Col, Container, Row} from "react-bootstrap";

import Logo from "../../shared/Logo";
import FooterOrder from "./FooterOrder";

import './styles.scss'
import {SvgSelector} from "../../helpers/SvgSelector/component";

const mockData = [
    {name: 'Category', id: 1},
    {name: 'Category', id: 2},
    {name: 'Category', id: 3},
    {name: 'Category', id: 4},
    {name: 'Category', id: 5},
    {name: 'Category', id: 6},
    {name: 'Category', id: 7},
    {name: 'Category', id: 8},
    {name: 'Category', id: 9},
    {name: 'Category', id: 10},
    {name: 'Category', id: 11},
    {name: 'Category', id: 12},
    {name: 'Category', id: 13},

]

const Footer = () => (
    <footer className='pt-4 pb-3 mt-4 lay-out flex-wrap'>
        <Container className='container-xl'>
            <Row className='justify-content-between '>
                <Col sm={6} md={4} lg={3}>
                    <Logo path='https://dummyimage.com/195x55/00a819/fdcf01.jpg&text=Your+logo' width='195px'
                          className='mb-3 mx-auto'/>
                    <FooterOrder className='text-center'/>
                </Col>
                <Col sm={6} md={4} lg={6} className='d-flex justify-content-center mb-4 mb-md-0'>
                    <Col className='col-lg-8 d-none d-lg-block '>
                        <h5 className='text-center'>Catalog</h5>
                        <Col className='d-flex flex-wrap  text-center'>
                            {mockData.map(({name, id}) => (
                                <p key={id} className="col-6 mb-1"><a href='/' className='hover'>{name}</a></p>))}
                        </Col>
                    </Col>
                    <Col lg={4} className='mt-lg-0 text-center '>
                        <h5>Company</h5>
                        <Col>
                            <p className='mb-1 hover'><a href="/" className='hover'>Delivery and payment</a></p>
                            <p className='mb-1'><a href="/" className='hover'>To partners</a></p>
                            <p className='mb-1'><a href="/" className='hover'>Blog</a></p>
                            <p className='mb-1'><a href="/" className='hover'>About company</a></p>
                            <p className='mb-1'><a href="/" className='hover'>Public contract (offer)</a></p>
                            <p className='mb-1'><a href="/" className='hover'>Technical support</a></p>
                            <p className='mb-1'><a href="/" className='hover'>Contacts</a></p>
                        </Col>
                    </Col>
                </Col>
                <Col className='col-md-4 col-lg-3 col-xl-2  mt-lg-0 social text-center'>
                    <h5 className='text-center mb-3'>Join Us</h5>
                    <Col className='d-flex justify-content-around'>
                        {/*<SvgSelector selector='fb-join-us'/>*/}
                        <a className='hover-icon'><img src="https://img.icons8.com/ios/30/000000/facebook-new.png"/></a>
                        <a className='hover-icon'><img src="https://img.icons8.com/ios/30/000000/instagram-new--v1.png"/></a>
                        <a className='hover-icon'><img src="https://img.icons8.com/ios/30/null/telegram.png"/></a>
                    </Col>
                </Col>
                <Row className='mt-4 justify-content-between align-items-center mx-auto'>
                    <Col xs={12} md={9} className='text-center text-md-start'>
                        <p className='mb-0'>© 2023 - since Internet-shop Company Name - company mission</p>
                    </Col>
                    <Col xs={12} md={3} className='d-flex justify-content-around align-items-center justify-content-md-end' >
                        <SvgSelector selector='master-card-secure'/>
                        <SvgSelector selector={'verified-by-visa'}/>
                    </Col>

                </Row>

            </Row>
        </Container>
    </footer>
)

export default Footer;