import React from "react";
import {
  Container,
} from "react-bootstrap";
import Image from "next/image";
import { Divider, Box } from "@mui/material";
export default function Trandingholiday() {
  return (
    <div>
      <Box my={5}>
        <Container>
          <section className="essantial">
            <ul>
              <li className="easy-fast">
                <h4>Easy &amp; Fast Booking</h4>
                <p>
                  Search, compare and book your tickets at the lowest fares.
                </p>
              </li>
              <li className="multi-payment">
                <h4>Multi Payment Option</h4>
                <p>Choose how you want to pay for your bookings.</p>
                <Box
                  component="img"
                  src='static/img/secure-payment.v12346.a0c655a.png'
                  width="200px"
                  height="35px"
                  className="img-fluid"
                  sx={{ objecFit: "contain", mt: 1 }}
                />
              </li>
              <li className="support">
                <h4>24/7 Customer Support</h4>
                <p>We’re here to help you, round the clock.</p>
              </li>
            </ul>
          </section>
        </Container>
      </Box>
    </div>
  );
}
