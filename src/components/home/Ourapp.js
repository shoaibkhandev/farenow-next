import React from "react";
import {
  Button,
  Navbar,
  Container,
  NavDropdown,
  Nav,
  Row,
  Col,
} from "react-bootstrap";
import landon from "../../../public/static/img/landon-horz.ef01ad4.jpg";
import Image from "next/image";
import { Divider, Box } from "@mui/material";
export default function Trandingholiday() {
  return (
    <div>
      <Box my={5}>
        <Container>
          <section className="our-app">
            <div className="row">
              <div className="col-lg-5 offset-lg-7">
                <div className="app-right">
                  <h3>Planning a holiday just got easier.</h3>
                  <h6>A few clicks and you’re done! Download our app now.</h6>
                  <div className="clearfix">
                    <link target="blank" className="btn-app andriod"></link>
                    <link target="_blank" className="btn-app ios"></link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </Box>
    </div>
  );
}
