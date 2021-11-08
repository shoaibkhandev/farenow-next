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
            <section class="our-app">
        <div class="row">
          <div class="col-lg-5 offset-lg-7">
            <div class="app-right">
              <h3>Planning a holiday just got easier.</h3>
              <h6>A few clicks and you’re done! Download our app now.</h6>
              <div class="clearfix">
                <link  target="blank" class="btn-app andriod"></link>
                <link  target="_blank" class="btn-app ios"></link>
              </div>
            </div>
          </div>
        </div>
      </section>
            </Container>
            </Box>
        </div>
    )
}
