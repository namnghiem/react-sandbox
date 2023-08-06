import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Flag from 'react-world-flags'

import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import hero from '../public/dog.png'
import trees  from '../public/trees.png'

export default function Home() {
  return (
    <Container className={styles.container} fluid>
          <Navbar className={styles.nav} bg="white" expand="lg">
              <Navbar.Brand className={styles.navtitle} href="#home">... projectdog staging</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#link">Delivery</Nav.Link>
                  <NavDropdown title="About us" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
          </Navbar>
          <Container className={styles.main} fluid >
            <Row >
              <Col xs={12} md={6} className={styles.title} >
                <h1>Celebrate what you love.</h1>
                <h1>Art that&apos;s yours.</h1>
                <Button>Personalise your prints now</Button>
                <p className={styles.subtitle}>Painting-style prints of the place you met, your beloved pets, and anything in between. </p>

                <p className={styles.subtitle}>Made with ❤️ in Ireland</p>
              <Image  src={trees}/>
              </Col>
              <Col xs={12} md={6} className={styles.hero} >
              <Image  src={hero}/>

              </Col> 
            </Row>
            
          </Container>
    </Container>
  )
}
