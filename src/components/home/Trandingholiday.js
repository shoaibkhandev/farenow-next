import React from "react";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";
import {Box} from '@mui/material'
export default function Trandingholiday() {
  return (
    <div>
      <Container>
        <section className="holidays">
          <div className="section-title text-center">
            <h2>Trending Holidays</h2>
            <p>Chosen by our happy customers</p>
          </div>
          <Row>
            <Col xs={12} md={3}>
              <div className="text-white">
                <div className="holiday-item">
                  <div className="overly"></div>
                  <Box component="img" src="/static/img/holiday-dubai.10a510e.png" className="img-fluid" />
                  <div className="middle-text">
                    <h5> Dubai, United Arab Emirates</h5>
                    <button variant="outline-primary"> View Holidays </button>
                  </div>
                  <div className="text-bottom">
                    <span className="d-block"> Dubai</span>
                    <button variant="outline-primary"> View Holidays </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={3}>
              <div className="text-white">
                <div className="holiday-item">
                  <div className="overly"></div>
                  <Box component="img" src="/static/img/holiday-Egypt.0206352.png" className="img-fluid" />
                  <div className="middle-text">
                    <h5>Cairo, Egypt</h5>
                    <button variant="outline-primary"> View Holidays </button>
                  </div>
                  <div className="text-bottom">
                    <span className="d-block">Egypt</span>
                    <button variant="outline-primary"> View Holidays </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={3}>
              <div className="text-white">
                <div className="holiday-item">
                  <div className="overly"></div>
                  <Box component="img" src="/static/img/holiday-Maldives.45483c4.png" className="img-fluid" />
                  <div className="middle-text">
                    <h5>Maldives, Maldives</h5>
                    <button variant="outline-primary"> View Holidays </button>
                  </div>
                  <div className="text-bottom">
                    <span className="d-block">Maldives</span>
                    <button variant="outline-primary"> View Holidays </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={3}>
              <div className="text-white">
                <div className="holiday-item">
                  <div className="overly"></div>
                  <Box component="img" src="/static/img/holiday-georgia.8a71386.png" className="img-fluid" />
                  <div className="middle-text">
                    <h5>Tbilisi, Georgia</h5>
                    <button variant="outline-primary"> View Holidays </button>
                  </div>
                  <div className="text-bottom">
                    <span className="d-block">Tbilisi</span>
                    <button variant="outline-primary"> View Holidays </button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
}
