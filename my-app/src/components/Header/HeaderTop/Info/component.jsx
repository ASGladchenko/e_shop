import React, { useState } from 'react'
import { Nav, Modal, Form, Row, Col, Button } from 'react-bootstrap'
import { BiUserCircle } from 'react-icons/bi'
import './styles.scss'

function Info() {
  const [show, setShow] = useState(false)

  const handleSetShow = () => setShow(!show)

  return (
    <>
      <Row>
        <Col className="info justify-content-center ">
          <Nav className="d-flex align-items-center h-100">
            <div className="language ">
              <span className="text-uppercase">uk</span>
              <span className="px-1">|</span>
              <span className="text-uppercase">ru</span>
            </div>
            <div className="language">
              Нас. пукт
              <span className="ms-2 open-region-switch">Київ </span>
            </div>
            <Button
              onClick={handleSetShow}
              className="d-flex p-0 align-items-center bg-second border-0"
            >
              <BiUserCircle className="logo" />
              <p className="m-0 font-size-10">Увійдіть в особистий кабінет</p>
            </Button>
          </Nav>
          <Modal show={show} onHide={handleSetShow}>
            <Modal.Header closeButton>
              <Modal.Title>Log in</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    fwsgwersgrfsdfrds
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmailPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckBox">
                  <Form.Label>Email</Form.Label>
                  <Form.Check type="checkbox" placeholder="Remember me" />
                </Form.Group>
              </Form>
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
    </>
  )
}

export default Info
