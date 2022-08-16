import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Render from '../components/Render';

export default function Home() {
  return (
    <Container fluid>
      <Row>
        
        <Col md={8}>
          <Render  title="American Idiot" subtitle="Green Day" data={[129058343,1650423789,432890]} width={1600} height={1000} background={"#aa1114"}/>
        </Col>

        <Col md={4}>1 of 1</Col>
      </Row>
    </Container>
  )
}
