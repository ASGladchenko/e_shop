import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Nav, Modal, Form, Row, Col, Button } from 'react-bootstrap'
import { BiUserCircle } from 'react-icons/bi'
import './styles.scss'

function Info() {
  const [show, setShow] = useState(false)

  const handeleClose = (show) => setShow(!show)

  const handleShow = () => setShow(true)

  const navigate = useNavigate()
  const lngNavigate = (path) => navigate(path, { replace: true })
  return (
    <>
      {/*  <div className="container ">
        <div className="row">
          <div className="col">
            <button>UK</button>|<button>ru</button>
          </div>
          <div className="col">
            <p>Нас. пункт</p>
            <button>Київ</button>
          </div>
          <div className="col">
            <BiUserCircle className={s.logo} />
            <p>Увійдіть в особистий кабінет</p>
          </div>
        </div>
      </div> */}
      <Row>
        <Col className="info justify-content-center ">
          <Nav className="d-flex align-items-center h-100">
            <div className="language ">
              <span
                className="text-uppercase"
                onClick={(e) => {
                  e.target.classList.toggle('fw-bold')
                  let x = e.target.innerHTML
                  lngNavigate(`/${x}`)
                }}
              >
                uk
              </span>
              <span className="px-1">|</span>
              <span
                className="text-uppercase"
                onClick={(e) => {
                  e.target.classList.toggle('fw-bold')
                  let x = e.target.innerHTML
                  lngNavigate(`/${x}`)
                }}
              >
                ru
              </span>
            </div>
            <div className="language">
              Нас. пукт
              <span className="ms-2 open-region-switch">Київ </span>
            </div>
            <Button
              variant="success"
              onClick={handleShow}
              className="d-flex p-0 align-items-center"
            >
              <BiUserCircle className="logo" />
              <p className="m-0 font-size-10">Увійдіть в особистий кабінет</p>
            </Button>
          </Nav>
          <Modal show={show} onHide={handeleClose}>
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
