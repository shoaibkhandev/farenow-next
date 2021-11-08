import React from 'react'
import {Button,Navbar,Container, NavDropdown,Nav,Row,Col } from 'react-bootstrap'
import landon from '../../../public/static/img/secure-payment.v12346.a0c655a.png'
import Image from 'next/image';
import { Divider, Box } from '@mui/material';
export default function Trandingholiday() {
    return (
        <div>
            <Box my={5} >
            <Container>
            <section class="essantial">
        <ul>
          <li class="easy-fast">
            <h4>Easy &amp; Fast Booking</h4>
            <p>Search, compare and book your tickets at the lowest fares.</p>
          </li>
          <li class="multi-payment">
            <h4>Multi Payment Option</h4>
            <p>Choose how you want to pay for your bookings.</p>
            <Image
              src={landon}
              fluid
              width="200px"
              height="35px"
              className="img-fluid"
            />
          </li>
          <li class="support">
            <h4>24/7 Customer Support</h4>
            <p>We’re here to help you, round the clock.</p>
          </li>
        </ul>
      </section>
            </Container>
            </Box>
        </div>
    )
}
