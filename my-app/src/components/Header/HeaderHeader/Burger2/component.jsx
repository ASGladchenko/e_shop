import { Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import Info from '../Info/component'

import './styles.scss'

function MenuB() {
  return (
    <>
      <div className="bg-success">
        <Container>
          <Row className="h-100">
            <Col className="col-xl-6  ">
              {[false].map((expand) => (
                <Navbar bg="success" expand="xl">
                  {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="start"
                  >
                    <Nav className="navMenu text-white">
                      <Nav.Link href="#delivery">Доставка та оплата</Nav.Link>
                      <Nav.Link href="#partner">Партнерам HoReCa</Nav.Link>
                      <Nav.Link href="#blog">Блог</Nav.Link>
                      <Nav.Link href="#company">Про компанію</Nav.Link>
                      <Nav.Link href="#contact">Контакти</Nav.Link>
                      <Nav.Link href="#promotions">Акції</Nav.Link>
                    </Nav>
                  </Navbar.Offcanvas>
                </Navbar>
              ))}
            </Col>
            <Col className="col-10 col-lg-7 col-xl-6 d-flex justify-content-end ">
              <Nav className="justify-content-end ">
                <Info />
              </Nav>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default MenuB
