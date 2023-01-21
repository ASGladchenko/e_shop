import {Link} from "react-router-dom";

import {Col, Container, Row} from "react-bootstrap";

import Logo from "../../shared/Logo";
import FooterOrder from "./FooterOrder";

import {SvgSelector} from "../../helpers/SvgSelector/component";

import './styles.scss'

import {category} from "../../temporary_files/mocData";

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
                        <h5 className='text-center  '>Catalog</h5>
                        <Col className='d-flex flex-wrap  text-center'>
                            {category.map(({name, id}) => (
                                <Link to={`/catalog/${name.replaceAll(' ', '_').toLowerCase()}`} key={id} className="col-6 mb-1 hover"><p
                                    className='mb-1'>{name}</p></Link>
                            ))}
                        </Col>
                    </Col>
                    <Col lg={4} className='mt-lg-0 text-center '>
                        <h5>Company</h5>
                        <Col>
                            <Link to='/delivery_payment' className='hover'><p className='mb-1'>Delivery and payment</p>
                            </Link>
                            <Link to='/partners' className='hover'><p className='mb-1'>To partners</p></Link>
                            <Link to='/blog' className='hover'><p className='mb-1'>Blog</p></Link>
                            <Link to='/about_us' className='hover'><p className='mb-1'>About company</p></Link>
                            <Link to='/contract' className='hover'><p className='mb-1'>Public contract (offer)</p>
                            </Link>
                            <Link to='/support' className='hover'><p className='mb-1'>Technical support</p></Link>
                            <Link to='/contacts' className='hover'><p className='mb-1'>Contacts</p></Link>
                        </Col>
                    </Col>
                </Col>
                <Col className='col-md-4 col-lg-3 col-xl-2  mt-lg-0 social text-center'>
                    <h5 className='text-center mb-3'>Join Us</h5>
                    <Col className='d-flex justify-content-around'>
                        <Link className='hover-icon'><img alt='join_us_fb' src="https://img.icons8.com/ios/30/000000/facebook-new.png"/></Link>
                        <Link className='hover-icon'><img alt='join_us_instagram'  src="https://img.icons8.com/ios/30/000000/instagram-new--v1.png"/></Link>
                        <Link className='hover-icon'><img alt='join_us_telegram'  src="https://img.icons8.com/ios/30/null/telegram.png"/></Link>
                    </Col>
                </Col>
                <Row className='mt-4 justify-content-between align-items-center mx-auto'>
                    <Col xs={12} md={9} className='text-center text-md-start'>
                        <p className='mb-0'>© 2023 - 2024. Internet-shop Company Name - company mission</p>
                    </Col>
                    <Col xs={12} md={3}
                         className='d-flex justify-content-around align-items-center justify-content-md-end'>
                        <SvgSelector selector='master-card-secure'/>
                        <SvgSelector selector='verified-by-visa'/>
                    </Col>
                </Row>
            </Row>
        </Container>
    </footer>
)

export default Footer;