import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Container, Row, Card, Button, Col, Table } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavbarMain from '../components/Navbars/NavbarMain';  

export default function Home() {
  return (
    <>
    <NavbarMain />
    <Container fluid>
      <Head>
        <title>ReactJS with react-bootstrap</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      {/* Main 3 cols */}
      <Container>
        <Row className="">
          <Col xs={4}>
            <Image 
              alt="" 
              src="/adobe-stock-photos/AdobeStock_322363111.jpeg"
              width={500}
              height={500}
            />
          </Col>
          <Col xs={4}>
            <Image 
              alt="" 
              src="/adobe-stock-photos/AdobeStock_322363111.jpeg"
              width={500}
              height={500}
            />
          </Col>
          <Col xs={4}>
            <Image 
              alt="" 
              src="/adobe-stock-photos/AdobeStock_322363111.jpeg"
              width={500}
              height={500}
            />
          </Col>
        </Row>
      </Container>


    </Container>
    <footer className="cntr-footer">
      <a
        href="https://vercel.com?filter=next.js&utm_source=github&utm_medium=example&utm_campaign=next-example"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <img src="/vercel.svg" alt="Vercel Logo" className="sml-logo" />
      </a>
    </footer>
  </>
  )
}
