import React from 'react'
import {Button,Navbar,Container, NavDropdown,Nav,Row,Col } from 'react-bootstrap'
import landon from '../../../public/static/img/landon-horz.ef01ad4.jpg'
import Image from 'next/image';
import { Divider, Box } from '@mui/material';
export default function Trandingholiday() {
    return (
        <div>
            <Box my={5} >
            <Container>
            <section className="vaction-in-london">
        <div className="vaction-wrapper">        
             <Row>
            <Col  md={8}>
            <Image src={landon} className="img-fluid"  />
            </Col>
            <Col  md={4}>
            <div className="vaction-right">
                <h1>Planning a vacationin London?</h1>
                <p>
                  Choose your holiday packages in London. Book online or talk to
                  our holiday experts
                </p>
                <button variant="primary" className="btn btn-primary booknow "  >Book Now</button>
              </div>
            </Col>
          </Row>
          </div>
          </section>
            </Container>
            </Box>
        </div>
    )
}
