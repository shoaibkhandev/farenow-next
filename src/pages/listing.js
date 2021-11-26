import React from "react";
import { Divider, Box, Toolbar, Grid, Button } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import Tabs from "../components/home/Tabs";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import pia from "../../public/static/img/PK.8288519.png";
import Slider from "react-slick";
import Segment from "@components/listing/segment";
import Topsection from "../components/home/Topsection";
import Filter from "@components/listing/filter";

export default function Listing() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const listingArr = [
    {
      "totalPrice": "USD976.20",
      "basePrice": "MAD4625",
      "taxes": "USD460.20",
      "platingCarrier": "MS",
      "directions": [
        [
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "MS",
            "segments": [
              {
                "from": "CMN",
                "to": "CAI",
                "group": 0,
                "departure": "2021-12-20T13:50:00.000+01:00",
                "arrival": "2021-12-20T19:45:00.000+02:00",
                "airline": "MS",
                "flightNumber": "848",
                "uapi_segment_ref": "18Ghp0BqWDKAaoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAaoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "CAI",
                    "destinationTerminal": "3",
                    "departure": "2021-12-20T13:50:00.000+01:00",
                    "flightTime": "295",
                    "travelTime": "655",
                    "equipment": "738"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "738"
                ],
                "duration": [
                  "295"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LRIMSO"
              },
              {
                "from": "CAI",
                "to": "DXB",
                "group": 0,
                "departure": "2021-12-20T22:40:00.000+02:00",
                "arrival": "2021-12-21T03:45:00.000+04:00",
                "airline": "MS",
                "flightNumber": "910",
                "uapi_segment_ref": "18Ghp0BqWDKAcoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAcoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CAI",
                    "originTerminal": "2",
                    "destination": "DXB",
                    "destinationTerminal": "1",
                    "departure": "2021-12-20T22:40:00.000+02:00",
                    "flightTime": "185",
                    "travelTime": "655",
                    "equipment": "789"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "789"
                ],
                "duration": [
                  "185"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LXRIEGO"
              }
            ]
          }
        ],
        [
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "MS",
            "segments": [
              {
                "from": "CMN",
                "to": "CAI",
                "group": 1,
                "departure": "2022-02-20T13:50:00.000+01:00",
                "arrival": "2022-02-20T19:45:00.000+02:00",
                "airline": "MS",
                "flightNumber": "848",
                "uapi_segment_ref": "18Ghp0BqWDKAeoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAeoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "CAI",
                    "destinationTerminal": "3",
                    "departure": "2022-02-20T13:50:00.000+01:00",
                    "flightTime": "295",
                    "travelTime": "655",
                    "equipment": "738"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "738"
                ],
                "duration": [
                  "295"
                ],
                "techStops": [],
                "bookingClass": "S",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "SRIEGO"
              },
              {
                "from": "CAI",
                "to": "DXB",
                "group": 1,
                "departure": "2022-02-20T22:40:00.000+02:00",
                "arrival": "2022-02-21T03:45:00.000+04:00",
                "airline": "MS",
                "flightNumber": "910",
                "uapi_segment_ref": "18Ghp0BqWDKAgoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAgoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CAI",
                    "originTerminal": "2",
                    "destination": "DXB",
                    "destinationTerminal": "1",
                    "departure": "2022-02-20T22:40:00.000+02:00",
                    "flightTime": "185",
                    "travelTime": "655",
                    "equipment": "789"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "789"
                ],
                "duration": [
                  "185"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LXRIEGO"
              }
            ]
          }
        ]
      ],
      "bookingComponents": [
        {
          "totalPrice": "USD976.20",
          "basePrice": "MAD4625",
          "taxes": "USD460.20",
          "uapi_fare_reference": "18Ghp0BqWDKATqLlDAAAAA=="
        }
      ],
      "passengerFares": {
        "ADT": {
          "totalPrice": "USD976.20",
          "basePrice": "MAD4625",
          "equivalentBasePrice": "USD516.00",
          "taxes": "USD460.20"
        }
      },
      "passengerCounts": {
        "ADT": 1
      }
    },
    {
      "totalPrice": "USD977.60",
      "basePrice": "MAD4625",
      "taxes": "USD461.60",
      "platingCarrier": "MS",
      "directions": [
        [
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "MS",
            "segments": [
              {
                "from": "CMN",
                "to": "CAI",
                "group": 0,
                "departure": "2021-12-20T13:50:00.000+01:00",
                "arrival": "2021-12-20T19:45:00.000+02:00",
                "airline": "MS",
                "flightNumber": "848",
                "uapi_segment_ref": "18Ghp0BqWDKAaoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAaoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "CAI",
                    "destinationTerminal": "3",
                    "departure": "2021-12-20T13:50:00.000+01:00",
                    "flightTime": "295",
                    "travelTime": "655",
                    "equipment": "738"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "738"
                ],
                "duration": [
                  "295"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LRIMSO"
              },
              {
                "from": "CAI",
                "to": "DXB",
                "group": 0,
                "departure": "2021-12-21T03:10:00.000+02:00",
                "arrival": "2021-12-21T08:15:00.000+04:00",
                "airline": "MS",
                "flightNumber": "901",
                "uapi_segment_ref": "18Ghp0BqWDKAioLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAioLlDAAAAA==",
                "details": [
                  {
                    "origin": "CAI",
                    "originTerminal": "2",
                    "destination": "DXB",
                    "destinationTerminal": "1",
                    "departure": "2021-12-21T03:10:00.000+02:00",
                    "flightTime": "185",
                    "travelTime": "925",
                    "equipment": "32N"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "32N"
                ],
                "duration": [
                  "185"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LXRIEGO"
              }
            ]
          },
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "MS",
            "segments": [
              {
                "from": "CMN",
                "to": "CAI",
                "group": 0,
                "departure": "2021-12-20T13:50:00.000+01:00",
                "arrival": "2021-12-20T19:45:00.000+02:00",
                "airline": "MS",
                "flightNumber": "848",
                "uapi_segment_ref": "18Ghp0BqWDKAaoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAaoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "CAI",
                    "destinationTerminal": "3",
                    "departure": "2021-12-20T13:50:00.000+01:00",
                    "flightTime": "295",
                    "travelTime": "655",
                    "equipment": "738"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "738"
                ],
                "duration": [
                  "295"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LRIMSO"
              },
              {
                "from": "CAI",
                "to": "DXB",
                "group": 0,
                "departure": "2021-12-21T12:55:00.000+02:00",
                "arrival": "2021-12-21T18:00:00.000+04:00",
                "airline": "MS",
                "flightNumber": "905",
                "uapi_segment_ref": "18Ghp0BqWDKAkoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAkoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CAI",
                    "originTerminal": "2",
                    "destination": "DXB",
                    "destinationTerminal": "1",
                    "departure": "2021-12-21T12:55:00.000+02:00",
                    "flightTime": "185",
                    "travelTime": "1510",
                    "equipment": "32N"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "32N"
                ],
                "duration": [
                  "185"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LXRIEGO"
              }
            ]
          }
        ],
        [
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "MS",
            "segments": [
              {
                "from": "CMN",
                "to": "CAI",
                "group": 1,
                "departure": "2022-02-20T13:50:00.000+01:00",
                "arrival": "2022-02-20T19:45:00.000+02:00",
                "airline": "MS",
                "flightNumber": "848",
                "uapi_segment_ref": "18Ghp0BqWDKAeoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAeoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "CAI",
                    "destinationTerminal": "3",
                    "departure": "2022-02-20T13:50:00.000+01:00",
                    "flightTime": "295",
                    "travelTime": "655",
                    "equipment": "738"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "738"
                ],
                "duration": [
                  "295"
                ],
                "techStops": [],
                "bookingClass": "S",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "SRIEGO"
              },
              {
                "from": "CAI",
                "to": "DXB",
                "group": 1,
                "departure": "2022-02-20T22:40:00.000+02:00",
                "arrival": "2022-02-21T03:45:00.000+04:00",
                "airline": "MS",
                "flightNumber": "910",
                "uapi_segment_ref": "18Ghp0BqWDKAgoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAgoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CAI",
                    "originTerminal": "2",
                    "destination": "DXB",
                    "destinationTerminal": "1",
                    "departure": "2022-02-20T22:40:00.000+02:00",
                    "flightTime": "185",
                    "travelTime": "655",
                    "equipment": "789"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "789"
                ],
                "duration": [
                  "185"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LXRIEGO"
              }
            ]
          }
        ]
      ],
      "bookingComponents": [
        {
          "totalPrice": "USD977.60",
          "basePrice": "MAD4625",
          "taxes": "USD461.60",
          "uapi_fare_reference": "18Ghp0BqWDKAjqLlDAAAAA=="
        }
      ],
      "passengerFares": {
        "ADT": {
          "totalPrice": "USD977.60",
          "basePrice": "MAD4625",
          "equivalentBasePrice": "USD516.00",
          "taxes": "USD461.60"
        }
      },
      "passengerCounts": {
        "ADT": 1
      }
    },
    {
      "totalPrice": "USD977.60",
      "basePrice": "MAD4625",
      "taxes": "USD461.60",
      "platingCarrier": "MS",
      "directions": [
        [
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "MS",
            "segments": [
              {
                "from": "CMN",
                "to": "CAI",
                "group": 0,
                "departure": "2021-12-20T13:50:00.000+01:00",
                "arrival": "2021-12-20T19:45:00.000+02:00",
                "airline": "MS",
                "flightNumber": "848",
                "uapi_segment_ref": "18Ghp0BqWDKAaoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAaoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "CAI",
                    "destinationTerminal": "3",
                    "departure": "2021-12-20T13:50:00.000+01:00",
                    "flightTime": "295",
                    "travelTime": "655",
                    "equipment": "738"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "738"
                ],
                "duration": [
                  "295"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LRIMSO"
              },
              {
                "from": "CAI",
                "to": "DXB",
                "group": 0,
                "departure": "2021-12-20T22:40:00.000+02:00",
                "arrival": "2021-12-21T03:45:00.000+04:00",
                "airline": "MS",
                "flightNumber": "910",
                "uapi_segment_ref": "18Ghp0BqWDKAcoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAcoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CAI",
                    "originTerminal": "2",
                    "destination": "DXB",
                    "destinationTerminal": "1",
                    "departure": "2021-12-20T22:40:00.000+02:00",
                    "flightTime": "185",
                    "travelTime": "655",
                    "equipment": "789"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "789"
                ],
                "duration": [
                  "185"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LXRIEGO"
              }
            ]
          }
        ],
        [
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "MS",
            "segments": [
              {
                "from": "CMN",
                "to": "CAI",
                "group": 1,
                "departure": "2022-02-20T13:50:00.000+01:00",
                "arrival": "2022-02-20T19:45:00.000+02:00",
                "airline": "MS",
                "flightNumber": "848",
                "uapi_segment_ref": "18Ghp0BqWDKAeoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAeoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "CAI",
                    "destinationTerminal": "3",
                    "departure": "2022-02-20T13:50:00.000+01:00",
                    "flightTime": "295",
                    "travelTime": "655",
                    "equipment": "738"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "738"
                ],
                "duration": [
                  "295"
                ],
                "techStops": [],
                "bookingClass": "S",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "SRIEGO"
              },
              {
                "from": "CAI",
                "to": "DXB",
                "group": 1,
                "departure": "2022-02-21T03:10:00.000+02:00",
                "arrival": "2022-02-21T08:15:00.000+04:00",
                "airline": "MS",
                "flightNumber": "901",
                "uapi_segment_ref": "18Ghp0BqWDKAmoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAmoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CAI",
                    "originTerminal": "2",
                    "destination": "DXB",
                    "destinationTerminal": "1",
                    "departure": "2022-02-21T03:10:00.000+02:00",
                    "flightTime": "185",
                    "travelTime": "925",
                    "equipment": "32N"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "32N"
                ],
                "duration": [
                  "185"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LXRIEGO"
              }
            ]
          },
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "MS",
            "segments": [
              {
                "from": "CMN",
                "to": "CAI",
                "group": 1,
                "departure": "2022-02-20T13:50:00.000+01:00",
                "arrival": "2022-02-20T19:45:00.000+02:00",
                "airline": "MS",
                "flightNumber": "848",
                "uapi_segment_ref": "18Ghp0BqWDKAeoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAeoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "CAI",
                    "destinationTerminal": "3",
                    "departure": "2022-02-20T13:50:00.000+01:00",
                    "flightTime": "295",
                    "travelTime": "655",
                    "equipment": "738"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "738"
                ],
                "duration": [
                  "295"
                ],
                "techStops": [],
                "bookingClass": "S",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "SRIEGO"
              },
              {
                "from": "CAI",
                "to": "DXB",
                "group": 1,
                "departure": "2022-02-21T12:55:00.000+02:00",
                "arrival": "2022-02-21T18:00:00.000+04:00",
                "airline": "MS",
                "flightNumber": "905",
                "uapi_segment_ref": "18Ghp0BqWDKAooLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAooLlDAAAAA==",
                "details": [
                  {
                    "origin": "CAI",
                    "originTerminal": "2",
                    "destination": "DXB",
                    "destinationTerminal": "1",
                    "departure": "2022-02-21T12:55:00.000+02:00",
                    "flightTime": "185",
                    "travelTime": "1510",
                    "equipment": "32N"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "32N"
                ],
                "duration": [
                  "185"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LXRIEGO"
              }
            ]
          }
        ]
      ],
      "bookingComponents": [
        {
          "totalPrice": "USD977.60",
          "basePrice": "MAD4625",
          "taxes": "USD461.60",
          "uapi_fare_reference": "18Ghp0BqWDKA3qLlDAAAAA=="
        }
      ],
      "passengerFares": {
        "ADT": {
          "totalPrice": "USD977.60",
          "basePrice": "MAD4625",
          "equivalentBasePrice": "USD516.00",
          "taxes": "USD461.60"
        }
      },
      "passengerCounts": {
        "ADT": 1
      }
    },
    {
      "totalPrice": "USD978.10",
      "basePrice": "MAD4625",
      "taxes": "USD462.10",
      "platingCarrier": "MS",
      "directions": [
        [
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "MS",
            "segments": [
              {
                "from": "CMN",
                "to": "CAI",
                "group": 0,
                "departure": "2021-12-20T13:50:00.000+01:00",
                "arrival": "2021-12-20T19:45:00.000+02:00",
                "airline": "MS",
                "flightNumber": "848",
                "uapi_segment_ref": "18Ghp0BqWDKAaoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAaoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "CAI",
                    "destinationTerminal": "3",
                    "departure": "2021-12-20T13:50:00.000+01:00",
                    "flightTime": "295",
                    "travelTime": "655",
                    "equipment": "738"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "738"
                ],
                "duration": [
                  "295"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LRIMSO"
              },
              {
                "from": "CAI",
                "to": "DXB",
                "group": 0,
                "departure": "2021-12-21T09:55:00.000+02:00",
                "arrival": "2021-12-21T15:00:00.000+04:00",
                "airline": "MS",
                "flightNumber": "912",
                "uapi_segment_ref": "18Ghp0BqWDKAqoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAqoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CAI",
                    "originTerminal": "2",
                    "destination": "DXB",
                    "destinationTerminal": "1",
                    "departure": "2021-12-21T09:55:00.000+02:00",
                    "flightTime": "185",
                    "travelTime": "1330",
                    "equipment": "789"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "789"
                ],
                "duration": [
                  "185"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LXRIEGO"
              }
            ]
          }
        ],
        [
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "MS",
            "segments": [
              {
                "from": "CMN",
                "to": "CAI",
                "group": 1,
                "departure": "2022-02-20T13:50:00.000+01:00",
                "arrival": "2022-02-20T19:45:00.000+02:00",
                "airline": "MS",
                "flightNumber": "848",
                "uapi_segment_ref": "18Ghp0BqWDKAeoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAeoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "CAI",
                    "destinationTerminal": "3",
                    "departure": "2022-02-20T13:50:00.000+01:00",
                    "flightTime": "295",
                    "travelTime": "655",
                    "equipment": "738"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "738"
                ],
                "duration": [
                  "295"
                ],
                "techStops": [],
                "bookingClass": "S",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "SRIEGO"
              },
              {
                "from": "CAI",
                "to": "DXB",
                "group": 1,
                "departure": "2022-02-20T22:40:00.000+02:00",
                "arrival": "2022-02-21T03:45:00.000+04:00",
                "airline": "MS",
                "flightNumber": "910",
                "uapi_segment_ref": "18Ghp0BqWDKAgoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAgoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CAI",
                    "originTerminal": "2",
                    "destination": "DXB",
                    "destinationTerminal": "1",
                    "departure": "2022-02-20T22:40:00.000+02:00",
                    "flightTime": "185",
                    "travelTime": "655",
                    "equipment": "789"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "789"
                ],
                "duration": [
                  "185"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LXRIEGO"
              }
            ]
          }
        ]
      ],
      "bookingComponents": [
        {
          "totalPrice": "USD978.10",
          "basePrice": "MAD4625",
          "taxes": "USD462.10",
          "uapi_fare_reference": "18Ghp0BqWDKALrLlDAAAAA=="
        }
      ],
      "passengerFares": {
        "ADT": {
          "totalPrice": "USD978.10",
          "basePrice": "MAD4625",
          "equivalentBasePrice": "USD516.00",
          "taxes": "USD462.10"
        }
      },
      "passengerCounts": {
        "ADT": 1
      }
    },
    {
      "totalPrice": "USD978.10",
      "basePrice": "MAD4625",
      "taxes": "USD462.10",
      "platingCarrier": "MS",
      "directions": [
        [
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "MS",
            "segments": [
              {
                "from": "CMN",
                "to": "CAI",
                "group": 0,
                "departure": "2021-12-20T13:50:00.000+01:00",
                "arrival": "2021-12-20T19:45:00.000+02:00",
                "airline": "MS",
                "flightNumber": "848",
                "uapi_segment_ref": "18Ghp0BqWDKAaoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAaoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "CAI",
                    "destinationTerminal": "3",
                    "departure": "2021-12-20T13:50:00.000+01:00",
                    "flightTime": "295",
                    "travelTime": "655",
                    "equipment": "738"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "738"
                ],
                "duration": [
                  "295"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LRIMSO"
              },
              {
                "from": "CAI",
                "to": "DXB",
                "group": 0,
                "departure": "2021-12-20T22:40:00.000+02:00",
                "arrival": "2021-12-21T03:45:00.000+04:00",
                "airline": "MS",
                "flightNumber": "910",
                "uapi_segment_ref": "18Ghp0BqWDKAcoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAcoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CAI",
                    "originTerminal": "2",
                    "destination": "DXB",
                    "destinationTerminal": "1",
                    "departure": "2021-12-20T22:40:00.000+02:00",
                    "flightTime": "185",
                    "travelTime": "655",
                    "equipment": "789"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "789"
                ],
                "duration": [
                  "185"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LXRIEGO"
              }
            ]
          }
        ],
        [
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "MS",
            "segments": [
              {
                "from": "CMN",
                "to": "CAI",
                "group": 1,
                "departure": "2022-02-20T13:50:00.000+01:00",
                "arrival": "2022-02-20T19:45:00.000+02:00",
                "airline": "MS",
                "flightNumber": "848",
                "uapi_segment_ref": "18Ghp0BqWDKAeoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAeoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "CAI",
                    "destinationTerminal": "3",
                    "departure": "2022-02-20T13:50:00.000+01:00",
                    "flightTime": "295",
                    "travelTime": "655",
                    "equipment": "738"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "738"
                ],
                "duration": [
                  "295"
                ],
                "techStops": [],
                "bookingClass": "S",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "SRIEGO"
              },
              {
                "from": "CAI",
                "to": "DXB",
                "group": 1,
                "departure": "2022-02-21T09:55:00.000+02:00",
                "arrival": "2022-02-21T15:00:00.000+04:00",
                "airline": "MS",
                "flightNumber": "912",
                "uapi_segment_ref": "18Ghp0BqWDKAsoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAsoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CAI",
                    "originTerminal": "2",
                    "destination": "DXB",
                    "destinationTerminal": "1",
                    "departure": "2022-02-21T09:55:00.000+02:00",
                    "flightTime": "185",
                    "travelTime": "1330",
                    "equipment": "789"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "789"
                ],
                "duration": [
                  "185"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LXRIEGO"
              }
            ]
          }
        ]
      ],
      "bookingComponents": [
        {
          "totalPrice": "USD978.10",
          "basePrice": "MAD4625",
          "taxes": "USD462.10",
          "uapi_fare_reference": "18Ghp0BqWDKAcrLlDAAAAA=="
        }
      ],
      "passengerFares": {
        "ADT": {
          "totalPrice": "USD978.10",
          "basePrice": "MAD4625",
          "equivalentBasePrice": "USD516.00",
          "taxes": "USD462.10"
        }
      },
      "passengerCounts": {
        "ADT": 1
      }
    },
    {
      "totalPrice": "USD979.00",
      "basePrice": "MAD4625",
      "taxes": "USD463.00",
      "platingCarrier": "MS",
      "directions": [
        [
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "MS",
            "segments": [
              {
                "from": "CMN",
                "to": "CAI",
                "group": 0,
                "departure": "2021-12-20T13:50:00.000+01:00",
                "arrival": "2021-12-20T19:45:00.000+02:00",
                "airline": "MS",
                "flightNumber": "848",
                "uapi_segment_ref": "18Ghp0BqWDKAaoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAaoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "CAI",
                    "destinationTerminal": "3",
                    "departure": "2021-12-20T13:50:00.000+01:00",
                    "flightTime": "295",
                    "travelTime": "655",
                    "equipment": "738"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "738"
                ],
                "duration": [
                  "295"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LRIMSO"
              },
              {
                "from": "CAI",
                "to": "DXB",
                "group": 0,
                "departure": "2021-12-21T03:10:00.000+02:00",
                "arrival": "2021-12-21T08:15:00.000+04:00",
                "airline": "MS",
                "flightNumber": "901",
                "uapi_segment_ref": "18Ghp0BqWDKAioLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAioLlDAAAAA==",
                "details": [
                  {
                    "origin": "CAI",
                    "originTerminal": "2",
                    "destination": "DXB",
                    "destinationTerminal": "1",
                    "departure": "2021-12-21T03:10:00.000+02:00",
                    "flightTime": "185",
                    "travelTime": "925",
                    "equipment": "32N"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "32N"
                ],
                "duration": [
                  "185"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LXRIEGO"
              }
            ]
          },
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "MS",
            "segments": [
              {
                "from": "CMN",
                "to": "CAI",
                "group": 0,
                "departure": "2021-12-20T13:50:00.000+01:00",
                "arrival": "2021-12-20T19:45:00.000+02:00",
                "airline": "MS",
                "flightNumber": "848",
                "uapi_segment_ref": "18Ghp0BqWDKAaoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAaoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "CAI",
                    "destinationTerminal": "3",
                    "departure": "2021-12-20T13:50:00.000+01:00",
                    "flightTime": "295",
                    "travelTime": "655",
                    "equipment": "738"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "738"
                ],
                "duration": [
                  "295"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LRIMSO"
              },
              {
                "from": "CAI",
                "to": "DXB",
                "group": 0,
                "departure": "2021-12-21T12:55:00.000+02:00",
                "arrival": "2021-12-21T18:00:00.000+04:00",
                "airline": "MS",
                "flightNumber": "905",
                "uapi_segment_ref": "18Ghp0BqWDKAkoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAkoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CAI",
                    "originTerminal": "2",
                    "destination": "DXB",
                    "destinationTerminal": "1",
                    "departure": "2021-12-21T12:55:00.000+02:00",
                    "flightTime": "185",
                    "travelTime": "1510",
                    "equipment": "32N"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "32N"
                ],
                "duration": [
                  "185"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LXRIEGO"
              }
            ]
          }
        ],
        [
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "MS",
            "segments": [
              {
                "from": "CMN",
                "to": "CAI",
                "group": 1,
                "departure": "2022-02-20T13:50:00.000+01:00",
                "arrival": "2022-02-20T19:45:00.000+02:00",
                "airline": "MS",
                "flightNumber": "848",
                "uapi_segment_ref": "18Ghp0BqWDKAeoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAeoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "CAI",
                    "destinationTerminal": "3",
                    "departure": "2022-02-20T13:50:00.000+01:00",
                    "flightTime": "295",
                    "travelTime": "655",
                    "equipment": "738"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "738"
                ],
                "duration": [
                  "295"
                ],
                "techStops": [],
                "bookingClass": "S",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "SRIEGO"
              },
              {
                "from": "CAI",
                "to": "DXB",
                "group": 1,
                "departure": "2022-02-21T03:10:00.000+02:00",
                "arrival": "2022-02-21T08:15:00.000+04:00",
                "airline": "MS",
                "flightNumber": "901",
                "uapi_segment_ref": "18Ghp0BqWDKAmoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAmoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CAI",
                    "originTerminal": "2",
                    "destination": "DXB",
                    "destinationTerminal": "1",
                    "departure": "2022-02-21T03:10:00.000+02:00",
                    "flightTime": "185",
                    "travelTime": "925",
                    "equipment": "32N"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "32N"
                ],
                "duration": [
                  "185"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LXRIEGO"
              }
            ]
          },
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "MS",
            "segments": [
              {
                "from": "CMN",
                "to": "CAI",
                "group": 1,
                "departure": "2022-02-20T13:50:00.000+01:00",
                "arrival": "2022-02-20T19:45:00.000+02:00",
                "airline": "MS",
                "flightNumber": "848",
                "uapi_segment_ref": "18Ghp0BqWDKAeoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAeoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "CAI",
                    "destinationTerminal": "3",
                    "departure": "2022-02-20T13:50:00.000+01:00",
                    "flightTime": "295",
                    "travelTime": "655",
                    "equipment": "738"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "738"
                ],
                "duration": [
                  "295"
                ],
                "techStops": [],
                "bookingClass": "S",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "SRIEGO"
              },
              {
                "from": "CAI",
                "to": "DXB",
                "group": 1,
                "departure": "2022-02-21T12:55:00.000+02:00",
                "arrival": "2022-02-21T18:00:00.000+04:00",
                "airline": "MS",
                "flightNumber": "905",
                "uapi_segment_ref": "18Ghp0BqWDKAooLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAooLlDAAAAA==",
                "details": [
                  {
                    "origin": "CAI",
                    "originTerminal": "2",
                    "destination": "DXB",
                    "destinationTerminal": "1",
                    "departure": "2022-02-21T12:55:00.000+02:00",
                    "flightTime": "185",
                    "travelTime": "1510",
                    "equipment": "32N"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "32N"
                ],
                "duration": [
                  "185"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LXRIEGO"
              }
            ]
          }
        ]
      ],
      "bookingComponents": [
        {
          "totalPrice": "USD979.00",
          "basePrice": "MAD4625",
          "taxes": "USD463.00",
          "uapi_fare_reference": "18Ghp0BqWDKAtrLlDAAAAA=="
        }
      ],
      "passengerFares": {
        "ADT": {
          "totalPrice": "USD979.00",
          "basePrice": "MAD4625",
          "equivalentBasePrice": "USD516.00",
          "taxes": "USD463.00"
        }
      },
      "passengerCounts": {
        "ADT": 1
      }
    },
    {
      "totalPrice": "USD979.50",
      "basePrice": "MAD4625",
      "taxes": "USD463.50",
      "platingCarrier": "MS",
      "directions": [
        [
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "MS",
            "segments": [
              {
                "from": "CMN",
                "to": "CAI",
                "group": 0,
                "departure": "2021-12-20T13:50:00.000+01:00",
                "arrival": "2021-12-20T19:45:00.000+02:00",
                "airline": "MS",
                "flightNumber": "848",
                "uapi_segment_ref": "18Ghp0BqWDKAaoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAaoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "CAI",
                    "destinationTerminal": "3",
                    "departure": "2021-12-20T13:50:00.000+01:00",
                    "flightTime": "295",
                    "travelTime": "655",
                    "equipment": "738"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "738"
                ],
                "duration": [
                  "295"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LRIMSO"
              },
              {
                "from": "CAI",
                "to": "DXB",
                "group": 0,
                "departure": "2021-12-21T03:10:00.000+02:00",
                "arrival": "2021-12-21T08:15:00.000+04:00",
                "airline": "MS",
                "flightNumber": "901",
                "uapi_segment_ref": "18Ghp0BqWDKAioLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAioLlDAAAAA==",
                "details": [
                  {
                    "origin": "CAI",
                    "originTerminal": "2",
                    "destination": "DXB",
                    "destinationTerminal": "1",
                    "departure": "2021-12-21T03:10:00.000+02:00",
                    "flightTime": "185",
                    "travelTime": "925",
                    "equipment": "32N"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "32N"
                ],
                "duration": [
                  "185"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LXRIEGO"
              }
            ]
          },
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "MS",
            "segments": [
              {
                "from": "CMN",
                "to": "CAI",
                "group": 0,
                "departure": "2021-12-20T13:50:00.000+01:00",
                "arrival": "2021-12-20T19:45:00.000+02:00",
                "airline": "MS",
                "flightNumber": "848",
                "uapi_segment_ref": "18Ghp0BqWDKAaoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAaoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "CAI",
                    "destinationTerminal": "3",
                    "departure": "2021-12-20T13:50:00.000+01:00",
                    "flightTime": "295",
                    "travelTime": "655",
                    "equipment": "738"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "738"
                ],
                "duration": [
                  "295"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LRIMSO"
              },
              {
                "from": "CAI",
                "to": "DXB",
                "group": 0,
                "departure": "2021-12-21T12:55:00.000+02:00",
                "arrival": "2021-12-21T18:00:00.000+04:00",
                "airline": "MS",
                "flightNumber": "905",
                "uapi_segment_ref": "18Ghp0BqWDKAkoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAkoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CAI",
                    "originTerminal": "2",
                    "destination": "DXB",
                    "destinationTerminal": "1",
                    "departure": "2021-12-21T12:55:00.000+02:00",
                    "flightTime": "185",
                    "travelTime": "1510",
                    "equipment": "32N"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "32N"
                ],
                "duration": [
                  "185"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LXRIEGO"
              }
            ]
          }
        ],
        [
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "MS",
            "segments": [
              {
                "from": "CMN",
                "to": "CAI",
                "group": 1,
                "departure": "2022-02-20T13:50:00.000+01:00",
                "arrival": "2022-02-20T19:45:00.000+02:00",
                "airline": "MS",
                "flightNumber": "848",
                "uapi_segment_ref": "18Ghp0BqWDKAeoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAeoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "CAI",
                    "destinationTerminal": "3",
                    "departure": "2022-02-20T13:50:00.000+01:00",
                    "flightTime": "295",
                    "travelTime": "655",
                    "equipment": "738"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "738"
                ],
                "duration": [
                  "295"
                ],
                "techStops": [],
                "bookingClass": "S",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "SRIEGO"
              },
              {
                "from": "CAI",
                "to": "DXB",
                "group": 1,
                "departure": "2022-02-21T09:55:00.000+02:00",
                "arrival": "2022-02-21T15:00:00.000+04:00",
                "airline": "MS",
                "flightNumber": "912",
                "uapi_segment_ref": "18Ghp0BqWDKAsoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAsoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CAI",
                    "originTerminal": "2",
                    "destination": "DXB",
                    "destinationTerminal": "1",
                    "departure": "2022-02-21T09:55:00.000+02:00",
                    "flightTime": "185",
                    "travelTime": "1330",
                    "equipment": "789"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "789"
                ],
                "duration": [
                  "185"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LXRIEGO"
              }
            ]
          }
        ]
      ],
      "bookingComponents": [
        {
          "totalPrice": "USD979.50",
          "basePrice": "MAD4625",
          "taxes": "USD463.50",
          "uapi_fare_reference": "18Ghp0BqWDKAEsLlDAAAAA=="
        }
      ],
      "passengerFares": {
        "ADT": {
          "totalPrice": "USD979.50",
          "basePrice": "MAD4625",
          "equivalentBasePrice": "USD516.00",
          "taxes": "USD463.50"
        }
      },
      "passengerCounts": {
        "ADT": 1
      }
    },
    {
      "totalPrice": "USD979.50",
      "basePrice": "MAD4625",
      "taxes": "USD463.50",
      "platingCarrier": "MS",
      "directions": [
        [
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "MS",
            "segments": [
              {
                "from": "CMN",
                "to": "CAI",
                "group": 0,
                "departure": "2021-12-20T13:50:00.000+01:00",
                "arrival": "2021-12-20T19:45:00.000+02:00",
                "airline": "MS",
                "flightNumber": "848",
                "uapi_segment_ref": "18Ghp0BqWDKAaoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAaoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "CAI",
                    "destinationTerminal": "3",
                    "departure": "2021-12-20T13:50:00.000+01:00",
                    "flightTime": "295",
                    "travelTime": "655",
                    "equipment": "738"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "738"
                ],
                "duration": [
                  "295"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LRIMSO"
              },
              {
                "from": "CAI",
                "to": "DXB",
                "group": 0,
                "departure": "2021-12-21T09:55:00.000+02:00",
                "arrival": "2021-12-21T15:00:00.000+04:00",
                "airline": "MS",
                "flightNumber": "912",
                "uapi_segment_ref": "18Ghp0BqWDKAqoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAqoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CAI",
                    "originTerminal": "2",
                    "destination": "DXB",
                    "destinationTerminal": "1",
                    "departure": "2021-12-21T09:55:00.000+02:00",
                    "flightTime": "185",
                    "travelTime": "1330",
                    "equipment": "789"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "789"
                ],
                "duration": [
                  "185"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LXRIEGO"
              }
            ]
          }
        ],
        [
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "MS",
            "segments": [
              {
                "from": "CMN",
                "to": "CAI",
                "group": 1,
                "departure": "2022-02-20T13:50:00.000+01:00",
                "arrival": "2022-02-20T19:45:00.000+02:00",
                "airline": "MS",
                "flightNumber": "848",
                "uapi_segment_ref": "18Ghp0BqWDKAeoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAeoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "CAI",
                    "destinationTerminal": "3",
                    "departure": "2022-02-20T13:50:00.000+01:00",
                    "flightTime": "295",
                    "travelTime": "655",
                    "equipment": "738"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "738"
                ],
                "duration": [
                  "295"
                ],
                "techStops": [],
                "bookingClass": "S",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "SRIEGO"
              },
              {
                "from": "CAI",
                "to": "DXB",
                "group": 1,
                "departure": "2022-02-21T03:10:00.000+02:00",
                "arrival": "2022-02-21T08:15:00.000+04:00",
                "airline": "MS",
                "flightNumber": "901",
                "uapi_segment_ref": "18Ghp0BqWDKAmoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAmoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CAI",
                    "originTerminal": "2",
                    "destination": "DXB",
                    "destinationTerminal": "1",
                    "departure": "2022-02-21T03:10:00.000+02:00",
                    "flightTime": "185",
                    "travelTime": "925",
                    "equipment": "32N"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "32N"
                ],
                "duration": [
                  "185"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LXRIEGO"
              }
            ]
          },
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "MS",
            "segments": [
              {
                "from": "CMN",
                "to": "CAI",
                "group": 1,
                "departure": "2022-02-20T13:50:00.000+01:00",
                "arrival": "2022-02-20T19:45:00.000+02:00",
                "airline": "MS",
                "flightNumber": "848",
                "uapi_segment_ref": "18Ghp0BqWDKAeoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAeoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "CAI",
                    "destinationTerminal": "3",
                    "departure": "2022-02-20T13:50:00.000+01:00",
                    "flightTime": "295",
                    "travelTime": "655",
                    "equipment": "738"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "738"
                ],
                "duration": [
                  "295"
                ],
                "techStops": [],
                "bookingClass": "S",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "SRIEGO"
              },
              {
                "from": "CAI",
                "to": "DXB",
                "group": 1,
                "departure": "2022-02-21T12:55:00.000+02:00",
                "arrival": "2022-02-21T18:00:00.000+04:00",
                "airline": "MS",
                "flightNumber": "905",
                "uapi_segment_ref": "18Ghp0BqWDKAooLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAooLlDAAAAA==",
                "details": [
                  {
                    "origin": "CAI",
                    "originTerminal": "2",
                    "destination": "DXB",
                    "destinationTerminal": "1",
                    "departure": "2022-02-21T12:55:00.000+02:00",
                    "flightTime": "185",
                    "travelTime": "1510",
                    "equipment": "32N"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "32N"
                ],
                "duration": [
                  "185"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LXRIEGO"
              }
            ]
          }
        ]
      ],
      "bookingComponents": [
        {
          "totalPrice": "USD979.50",
          "basePrice": "MAD4625",
          "taxes": "USD463.50",
          "uapi_fare_reference": "18Ghp0BqWDKAYsLlDAAAAA=="
        }
      ],
      "passengerFares": {
        "ADT": {
          "totalPrice": "USD979.50",
          "basePrice": "MAD4625",
          "equivalentBasePrice": "USD516.00",
          "taxes": "USD463.50"
        }
      },
      "passengerCounts": {
        "ADT": 1
      }
    },
    {
      "totalPrice": "USD980.00",
      "basePrice": "MAD4625",
      "taxes": "USD464.00",
      "platingCarrier": "MS",
      "directions": [
        [
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "MS",
            "segments": [
              {
                "from": "CMN",
                "to": "CAI",
                "group": 0,
                "departure": "2021-12-20T13:50:00.000+01:00",
                "arrival": "2021-12-20T19:45:00.000+02:00",
                "airline": "MS",
                "flightNumber": "848",
                "uapi_segment_ref": "18Ghp0BqWDKAaoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAaoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "CAI",
                    "destinationTerminal": "3",
                    "departure": "2021-12-20T13:50:00.000+01:00",
                    "flightTime": "295",
                    "travelTime": "655",
                    "equipment": "738"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "738"
                ],
                "duration": [
                  "295"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LRIMSO"
              },
              {
                "from": "CAI",
                "to": "DXB",
                "group": 0,
                "departure": "2021-12-21T09:55:00.000+02:00",
                "arrival": "2021-12-21T15:00:00.000+04:00",
                "airline": "MS",
                "flightNumber": "912",
                "uapi_segment_ref": "18Ghp0BqWDKAqoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAqoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CAI",
                    "originTerminal": "2",
                    "destination": "DXB",
                    "destinationTerminal": "1",
                    "departure": "2021-12-21T09:55:00.000+02:00",
                    "flightTime": "185",
                    "travelTime": "1330",
                    "equipment": "789"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "789"
                ],
                "duration": [
                  "185"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LXRIEGO"
              }
            ]
          }
        ],
        [
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "MS",
            "segments": [
              {
                "from": "CMN",
                "to": "CAI",
                "group": 1,
                "departure": "2022-02-20T13:50:00.000+01:00",
                "arrival": "2022-02-20T19:45:00.000+02:00",
                "airline": "MS",
                "flightNumber": "848",
                "uapi_segment_ref": "18Ghp0BqWDKAeoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAeoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "CAI",
                    "destinationTerminal": "3",
                    "departure": "2022-02-20T13:50:00.000+01:00",
                    "flightTime": "295",
                    "travelTime": "655",
                    "equipment": "738"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "738"
                ],
                "duration": [
                  "295"
                ],
                "techStops": [],
                "bookingClass": "S",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "SRIEGO"
              },
              {
                "from": "CAI",
                "to": "DXB",
                "group": 1,
                "departure": "2022-02-21T09:55:00.000+02:00",
                "arrival": "2022-02-21T15:00:00.000+04:00",
                "airline": "MS",
                "flightNumber": "912",
                "uapi_segment_ref": "18Ghp0BqWDKAsoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAsoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CAI",
                    "originTerminal": "2",
                    "destination": "DXB",
                    "destinationTerminal": "1",
                    "departure": "2022-02-21T09:55:00.000+02:00",
                    "flightTime": "185",
                    "travelTime": "1330",
                    "equipment": "789"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "789"
                ],
                "duration": [
                  "185"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LXRIEGO"
              }
            ]
          }
        ]
      ],
      "bookingComponents": [
        {
          "totalPrice": "USD980.00",
          "basePrice": "MAD4625",
          "taxes": "USD464.00",
          "uapi_fare_reference": "18Ghp0BqWDKAssLlDAAAAA=="
        }
      ],
      "passengerFares": {
        "ADT": {
          "totalPrice": "USD980.00",
          "basePrice": "MAD4625",
          "equivalentBasePrice": "USD516.00",
          "taxes": "USD464.00"
        }
      },
      "passengerCounts": {
        "ADT": 1
      }
    },
    {
      "totalPrice": "USD2090.70",
      "basePrice": "MAD15885",
      "taxes": "USD319.70",
      "platingCarrier": "MS",
      "directions": [
        [
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "MS",
            "segments": [
              {
                "from": "CMN",
                "to": "AUH",
                "group": 0,
                "departure": "2021-12-20T16:50:00.000+01:00",
                "arrival": "2021-12-21T03:05:00.000+04:00",
                "airline": "EY",
                "flightNumber": "612",
                "uapi_segment_ref": "18Ghp0BqWDKAuoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAuoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "AUH",
                    "destinationTerminal": "3",
                    "departure": "2021-12-20T16:50:00.000+01:00",
                    "flightTime": "435",
                    "travelTime": "695",
                    "equipment": "789"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "789"
                ],
                "duration": [
                  "435"
                ],
                "techStops": [],
                "bookingClass": "Y",
                "baggage": [
                  {
                    "units": "kilograms",
                    "amount": 45
                  }
                ],
                "fareBasisCode": "YF1OW"
              },
              {
                "from": "AUH",
                "to": "XNB",
                "group": 0,
                "departure": "2021-12-21T05:25:00.000+04:00",
                "arrival": "2021-12-21T07:25:00.000+04:00",
                "airline": "EY",
                "flightNumber": "5418",
                "uapi_segment_ref": "18Ghp0BqWDKAwoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAwoLlDAAAAA==",
                "details": [
                  {
                    "origin": "AUH",
                    "originTerminal": "1",
                    "destination": "XNB",
                    "departure": "2021-12-21T05:25:00.000+04:00",
                    "flightTime": "120",
                    "travelTime": "695",
                    "equipment": "BUS"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "BUS"
                ],
                "duration": [
                  "120"
                ],
                "techStops": [],
                "bookingClass": "Y",
                "baggage": [
                  {
                    "units": "kilograms",
                    "amount": 45
                  }
                ],
                "fareBasisCode": "YF1OW"
              }
            ]
          },
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "MS",
            "segments": [
              {
                "from": "CMN",
                "to": "AUH",
                "group": 0,
                "departure": "2021-12-20T16:50:00.000+01:00",
                "arrival": "2021-12-21T03:05:00.000+04:00",
                "airline": "EY",
                "flightNumber": "612",
                "uapi_segment_ref": "18Ghp0BqWDKAuoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAuoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "AUH",
                    "destinationTerminal": "3",
                    "departure": "2021-12-20T16:50:00.000+01:00",
                    "flightTime": "435",
                    "travelTime": "695",
                    "equipment": "789"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "789"
                ],
                "duration": [
                  "435"
                ],
                "techStops": [],
                "bookingClass": "Y",
                "baggage": [
                  {
                    "units": "kilograms",
                    "amount": 45
                  }
                ],
                "fareBasisCode": "YF1OW"
              },
              {
                "from": "AUH",
                "to": "XNB",
                "group": 0,
                "departure": "2021-12-21T06:40:00.000+04:00",
                "arrival": "2021-12-21T08:40:00.000+04:00",
                "airline": "EY",
                "flightNumber": "5420",
                "uapi_segment_ref": "18Ghp0BqWDKAyoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAyoLlDAAAAA==",
                "details": [
                  {
                    "origin": "AUH",
                    "originTerminal": "1",
                    "destination": "XNB",
                    "departure": "2021-12-21T06:40:00.000+04:00",
                    "flightTime": "120",
                    "travelTime": "770",
                    "equipment": "BUS"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "BUS"
                ],
                "duration": [
                  "120"
                ],
                "techStops": [],
                "bookingClass": "Y",
                "baggage": [
                  {
                    "units": "kilograms",
                    "amount": 45
                  }
                ],
                "fareBasisCode": "YF1OW"
              }
            ]
          },
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "MS",
            "segments": [
              {
                "from": "CMN",
                "to": "AUH",
                "group": 0,
                "departure": "2021-12-20T16:50:00.000+01:00",
                "arrival": "2021-12-21T03:05:00.000+04:00",
                "airline": "EY",
                "flightNumber": "612",
                "uapi_segment_ref": "18Ghp0BqWDKAuoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAuoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "AUH",
                    "destinationTerminal": "3",
                    "departure": "2021-12-20T16:50:00.000+01:00",
                    "flightTime": "435",
                    "travelTime": "695",
                    "equipment": "789"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "789"
                ],
                "duration": [
                  "435"
                ],
                "techStops": [],
                "bookingClass": "Y",
                "baggage": [
                  {
                    "units": "kilograms",
                    "amount": 45
                  }
                ],
                "fareBasisCode": "YF1OW"
              },
              {
                "from": "AUH",
                "to": "XNB",
                "group": 0,
                "departure": "2021-12-21T07:30:00.000+04:00",
                "arrival": "2021-12-21T09:30:00.000+04:00",
                "airline": "EY",
                "flightNumber": "5422",
                "uapi_segment_ref": "18Ghp0BqWDKA0oLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKA0oLlDAAAAA==",
                "details": [
                  {
                    "origin": "AUH",
                    "originTerminal": "1",
                    "destination": "XNB",
                    "departure": "2021-12-21T07:30:00.000+04:00",
                    "flightTime": "120",
                    "travelTime": "820",
                    "equipment": "BUS"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "BUS"
                ],
                "duration": [
                  "120"
                ],
                "techStops": [],
                "bookingClass": "Y",
                "baggage": [
                  {
                    "units": "kilograms",
                    "amount": 45
                  }
                ],
                "fareBasisCode": "YF1OW"
              }
            ]
          },
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "MS",
            "segments": [
              {
                "from": "CMN",
                "to": "AUH",
                "group": 0,
                "departure": "2021-12-20T16:50:00.000+01:00",
                "arrival": "2021-12-21T03:05:00.000+04:00",
                "airline": "EY",
                "flightNumber": "612",
                "uapi_segment_ref": "18Ghp0BqWDKAuoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAuoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "AUH",
                    "destinationTerminal": "3",
                    "departure": "2021-12-20T16:50:00.000+01:00",
                    "flightTime": "435",
                    "travelTime": "695",
                    "equipment": "789"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "789"
                ],
                "duration": [
                  "435"
                ],
                "techStops": [],
                "bookingClass": "Y",
                "baggage": [
                  {
                    "units": "kilograms",
                    "amount": 45
                  }
                ],
                "fareBasisCode": "YF1OW"
              },
              {
                "from": "AUH",
                "to": "XNB",
                "group": 0,
                "departure": "2021-12-21T09:40:00.000+04:00",
                "arrival": "2021-12-21T11:40:00.000+04:00",
                "airline": "EY",
                "flightNumber": "5424",
                "uapi_segment_ref": "18Ghp0BqWDKA2oLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKA2oLlDAAAAA==",
                "details": [
                  {
                    "origin": "AUH",
                    "originTerminal": "1",
                    "destination": "XNB",
                    "departure": "2021-12-21T09:40:00.000+04:00",
                    "flightTime": "120",
                    "travelTime": "950",
                    "equipment": "BUS"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "BUS"
                ],
                "duration": [
                  "120"
                ],
                "techStops": [],
                "bookingClass": "Y",
                "baggage": [
                  {
                    "units": "kilograms",
                    "amount": 45
                  }
                ],
                "fareBasisCode": "YF1OW"
              }
            ]
          }
        ],
        [
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "MS",
            "segments": [
              {
                "from": "CMN",
                "to": "CAI",
                "group": 1,
                "departure": "2022-02-20T13:50:00.000+01:00",
                "arrival": "2022-02-20T19:45:00.000+02:00",
                "airline": "MS",
                "flightNumber": "848",
                "uapi_segment_ref": "18Ghp0BqWDKAeoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAeoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "CAI",
                    "destinationTerminal": "3",
                    "departure": "2022-02-20T13:50:00.000+01:00",
                    "flightTime": "295",
                    "travelTime": "655",
                    "equipment": "738"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "738"
                ],
                "duration": [
                  "295"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LRIMSO"
              },
              {
                "from": "CAI",
                "to": "DXB",
                "group": 1,
                "departure": "2022-02-20T22:40:00.000+02:00",
                "arrival": "2022-02-21T03:45:00.000+04:00",
                "airline": "MS",
                "flightNumber": "910",
                "uapi_segment_ref": "18Ghp0BqWDKAgoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAgoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CAI",
                    "originTerminal": "2",
                    "destination": "DXB",
                    "destinationTerminal": "1",
                    "departure": "2022-02-20T22:40:00.000+02:00",
                    "flightTime": "185",
                    "travelTime": "655",
                    "equipment": "789"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "789"
                ],
                "duration": [
                  "185"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LXRIEGO"
              }
            ]
          }
        ]
      ],
      "bookingComponents": [
        {
          "totalPrice": "USD2090.70",
          "basePrice": "MAD15885",
          "taxes": "USD319.70",
          "uapi_fare_reference": "18Ghp0BqWDKAtsLlDAAAAA=="
        }
      ],
      "passengerFares": {
        "ADT": {
          "totalPrice": "USD2090.70",
          "basePrice": "MAD15885",
          "equivalentBasePrice": "USD1771.00",
          "taxes": "USD319.70"
        }
      },
      "passengerCounts": {
        "ADT": 1
      }
    },
    {
      "totalPrice": "USD2092.10",
      "basePrice": "MAD15885",
      "taxes": "USD321.10",
      "platingCarrier": "MS",
      "directions": [
        [
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "MS",
            "segments": [
              {
                "from": "CMN",
                "to": "AUH",
                "group": 0,
                "departure": "2021-12-20T16:50:00.000+01:00",
                "arrival": "2021-12-21T03:05:00.000+04:00",
                "airline": "EY",
                "flightNumber": "612",
                "uapi_segment_ref": "18Ghp0BqWDKAuoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAuoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "AUH",
                    "destinationTerminal": "3",
                    "departure": "2021-12-20T16:50:00.000+01:00",
                    "flightTime": "435",
                    "travelTime": "695",
                    "equipment": "789"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "789"
                ],
                "duration": [
                  "435"
                ],
                "techStops": [],
                "bookingClass": "Y",
                "baggage": [
                  {
                    "units": "kilograms",
                    "amount": 45
                  }
                ],
                "fareBasisCode": "YF1OW"
              },
              {
                "from": "AUH",
                "to": "XNB",
                "group": 0,
                "departure": "2021-12-21T05:25:00.000+04:00",
                "arrival": "2021-12-21T07:25:00.000+04:00",
                "airline": "EY",
                "flightNumber": "5418",
                "uapi_segment_ref": "18Ghp0BqWDKAwoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAwoLlDAAAAA==",
                "details": [
                  {
                    "origin": "AUH",
                    "originTerminal": "1",
                    "destination": "XNB",
                    "departure": "2021-12-21T05:25:00.000+04:00",
                    "flightTime": "120",
                    "travelTime": "695",
                    "equipment": "BUS"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "BUS"
                ],
                "duration": [
                  "120"
                ],
                "techStops": [],
                "bookingClass": "Y",
                "baggage": [
                  {
                    "units": "kilograms",
                    "amount": 45
                  }
                ],
                "fareBasisCode": "YF1OW"
              }
            ]
          },
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "MS",
            "segments": [
              {
                "from": "CMN",
                "to": "AUH",
                "group": 0,
                "departure": "2021-12-20T16:50:00.000+01:00",
                "arrival": "2021-12-21T03:05:00.000+04:00",
                "airline": "EY",
                "flightNumber": "612",
                "uapi_segment_ref": "18Ghp0BqWDKAuoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAuoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "AUH",
                    "destinationTerminal": "3",
                    "departure": "2021-12-20T16:50:00.000+01:00",
                    "flightTime": "435",
                    "travelTime": "695",
                    "equipment": "789"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "789"
                ],
                "duration": [
                  "435"
                ],
                "techStops": [],
                "bookingClass": "Y",
                "baggage": [
                  {
                    "units": "kilograms",
                    "amount": 45
                  }
                ],
                "fareBasisCode": "YF1OW"
              },
              {
                "from": "AUH",
                "to": "XNB",
                "group": 0,
                "departure": "2021-12-21T06:40:00.000+04:00",
                "arrival": "2021-12-21T08:40:00.000+04:00",
                "airline": "EY",
                "flightNumber": "5420",
                "uapi_segment_ref": "18Ghp0BqWDKAyoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAyoLlDAAAAA==",
                "details": [
                  {
                    "origin": "AUH",
                    "originTerminal": "1",
                    "destination": "XNB",
                    "departure": "2021-12-21T06:40:00.000+04:00",
                    "flightTime": "120",
                    "travelTime": "770",
                    "equipment": "BUS"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "BUS"
                ],
                "duration": [
                  "120"
                ],
                "techStops": [],
                "bookingClass": "Y",
                "baggage": [
                  {
                    "units": "kilograms",
                    "amount": 45
                  }
                ],
                "fareBasisCode": "YF1OW"
              }
            ]
          },
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "MS",
            "segments": [
              {
                "from": "CMN",
                "to": "AUH",
                "group": 0,
                "departure": "2021-12-20T16:50:00.000+01:00",
                "arrival": "2021-12-21T03:05:00.000+04:00",
                "airline": "EY",
                "flightNumber": "612",
                "uapi_segment_ref": "18Ghp0BqWDKAuoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAuoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "AUH",
                    "destinationTerminal": "3",
                    "departure": "2021-12-20T16:50:00.000+01:00",
                    "flightTime": "435",
                    "travelTime": "695",
                    "equipment": "789"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "789"
                ],
                "duration": [
                  "435"
                ],
                "techStops": [],
                "bookingClass": "Y",
                "baggage": [
                  {
                    "units": "kilograms",
                    "amount": 45
                  }
                ],
                "fareBasisCode": "YF1OW"
              },
              {
                "from": "AUH",
                "to": "XNB",
                "group": 0,
                "departure": "2021-12-21T07:30:00.000+04:00",
                "arrival": "2021-12-21T09:30:00.000+04:00",
                "airline": "EY",
                "flightNumber": "5422",
                "uapi_segment_ref": "18Ghp0BqWDKA0oLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKA0oLlDAAAAA==",
                "details": [
                  {
                    "origin": "AUH",
                    "originTerminal": "1",
                    "destination": "XNB",
                    "departure": "2021-12-21T07:30:00.000+04:00",
                    "flightTime": "120",
                    "travelTime": "820",
                    "equipment": "BUS"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "BUS"
                ],
                "duration": [
                  "120"
                ],
                "techStops": [],
                "bookingClass": "Y",
                "baggage": [
                  {
                    "units": "kilograms",
                    "amount": 45
                  }
                ],
                "fareBasisCode": "YF1OW"
              }
            ]
          },
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "MS",
            "segments": [
              {
                "from": "CMN",
                "to": "AUH",
                "group": 0,
                "departure": "2021-12-20T16:50:00.000+01:00",
                "arrival": "2021-12-21T03:05:00.000+04:00",
                "airline": "EY",
                "flightNumber": "612",
                "uapi_segment_ref": "18Ghp0BqWDKAuoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAuoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "AUH",
                    "destinationTerminal": "3",
                    "departure": "2021-12-20T16:50:00.000+01:00",
                    "flightTime": "435",
                    "travelTime": "695",
                    "equipment": "789"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "789"
                ],
                "duration": [
                  "435"
                ],
                "techStops": [],
                "bookingClass": "Y",
                "baggage": [
                  {
                    "units": "kilograms",
                    "amount": 45
                  }
                ],
                "fareBasisCode": "YF1OW"
              },
              {
                "from": "AUH",
                "to": "XNB",
                "group": 0,
                "departure": "2021-12-21T09:40:00.000+04:00",
                "arrival": "2021-12-21T11:40:00.000+04:00",
                "airline": "EY",
                "flightNumber": "5424",
                "uapi_segment_ref": "18Ghp0BqWDKA2oLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKA2oLlDAAAAA==",
                "details": [
                  {
                    "origin": "AUH",
                    "originTerminal": "1",
                    "destination": "XNB",
                    "departure": "2021-12-21T09:40:00.000+04:00",
                    "flightTime": "120",
                    "travelTime": "950",
                    "equipment": "BUS"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "BUS"
                ],
                "duration": [
                  "120"
                ],
                "techStops": [],
                "bookingClass": "Y",
                "baggage": [
                  {
                    "units": "kilograms",
                    "amount": 45
                  }
                ],
                "fareBasisCode": "YF1OW"
              }
            ]
          }
        ],
        [
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "MS",
            "segments": [
              {
                "from": "CMN",
                "to": "CAI",
                "group": 1,
                "departure": "2022-02-20T13:50:00.000+01:00",
                "arrival": "2022-02-20T19:45:00.000+02:00",
                "airline": "MS",
                "flightNumber": "848",
                "uapi_segment_ref": "18Ghp0BqWDKAeoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAeoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "CAI",
                    "destinationTerminal": "3",
                    "departure": "2022-02-20T13:50:00.000+01:00",
                    "flightTime": "295",
                    "travelTime": "655",
                    "equipment": "738"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "738"
                ],
                "duration": [
                  "295"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LRIMSO"
              },
              {
                "from": "CAI",
                "to": "DXB",
                "group": 1,
                "departure": "2022-02-21T03:10:00.000+02:00",
                "arrival": "2022-02-21T08:15:00.000+04:00",
                "airline": "MS",
                "flightNumber": "901",
                "uapi_segment_ref": "18Ghp0BqWDKAmoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAmoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CAI",
                    "originTerminal": "2",
                    "destination": "DXB",
                    "destinationTerminal": "1",
                    "departure": "2022-02-21T03:10:00.000+02:00",
                    "flightTime": "185",
                    "travelTime": "925",
                    "equipment": "32N"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "32N"
                ],
                "duration": [
                  "185"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LXRIEGO"
              }
            ]
          },
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "MS",
            "segments": [
              {
                "from": "CMN",
                "to": "CAI",
                "group": 1,
                "departure": "2022-02-20T13:50:00.000+01:00",
                "arrival": "2022-02-20T19:45:00.000+02:00",
                "airline": "MS",
                "flightNumber": "848",
                "uapi_segment_ref": "18Ghp0BqWDKAeoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAeoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "CAI",
                    "destinationTerminal": "3",
                    "departure": "2022-02-20T13:50:00.000+01:00",
                    "flightTime": "295",
                    "travelTime": "655",
                    "equipment": "738"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "738"
                ],
                "duration": [
                  "295"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LRIMSO"
              },
              {
                "from": "CAI",
                "to": "DXB",
                "group": 1,
                "departure": "2022-02-21T12:55:00.000+02:00",
                "arrival": "2022-02-21T18:00:00.000+04:00",
                "airline": "MS",
                "flightNumber": "905",
                "uapi_segment_ref": "18Ghp0BqWDKAooLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAooLlDAAAAA==",
                "details": [
                  {
                    "origin": "CAI",
                    "originTerminal": "2",
                    "destination": "DXB",
                    "destinationTerminal": "1",
                    "departure": "2022-02-21T12:55:00.000+02:00",
                    "flightTime": "185",
                    "travelTime": "1510",
                    "equipment": "32N"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "32N"
                ],
                "duration": [
                  "185"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LXRIEGO"
              }
            ]
          }
        ]
      ],
      "bookingComponents": [
        {
          "totalPrice": "USD2092.10",
          "basePrice": "MAD15885",
          "taxes": "USD321.10",
          "uapi_fare_reference": "18Ghp0BqWDKAGtLlDAAAAA=="
        }
      ],
      "passengerFares": {
        "ADT": {
          "totalPrice": "USD2092.10",
          "basePrice": "MAD15885",
          "equivalentBasePrice": "USD1771.00",
          "taxes": "USD321.10"
        }
      },
      "passengerCounts": {
        "ADT": 1
      }
    },
    {
      "totalPrice": "USD2092.60",
      "basePrice": "MAD15885",
      "taxes": "USD321.60",
      "platingCarrier": "MS",
      "directions": [
        [
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "MS",
            "segments": [
              {
                "from": "CMN",
                "to": "AUH",
                "group": 0,
                "departure": "2021-12-20T16:50:00.000+01:00",
                "arrival": "2021-12-21T03:05:00.000+04:00",
                "airline": "EY",
                "flightNumber": "612",
                "uapi_segment_ref": "18Ghp0BqWDKAuoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAuoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "AUH",
                    "destinationTerminal": "3",
                    "departure": "2021-12-20T16:50:00.000+01:00",
                    "flightTime": "435",
                    "travelTime": "695",
                    "equipment": "789"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "789"
                ],
                "duration": [
                  "435"
                ],
                "techStops": [],
                "bookingClass": "Y",
                "baggage": [
                  {
                    "units": "kilograms",
                    "amount": 45
                  }
                ],
                "fareBasisCode": "YF1OW"
              },
              {
                "from": "AUH",
                "to": "XNB",
                "group": 0,
                "departure": "2021-12-21T05:25:00.000+04:00",
                "arrival": "2021-12-21T07:25:00.000+04:00",
                "airline": "EY",
                "flightNumber": "5418",
                "uapi_segment_ref": "18Ghp0BqWDKAwoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAwoLlDAAAAA==",
                "details": [
                  {
                    "origin": "AUH",
                    "originTerminal": "1",
                    "destination": "XNB",
                    "departure": "2021-12-21T05:25:00.000+04:00",
                    "flightTime": "120",
                    "travelTime": "695",
                    "equipment": "BUS"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "BUS"
                ],
                "duration": [
                  "120"
                ],
                "techStops": [],
                "bookingClass": "Y",
                "baggage": [
                  {
                    "units": "kilograms",
                    "amount": 45
                  }
                ],
                "fareBasisCode": "YF1OW"
              }
            ]
          },
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "MS",
            "segments": [
              {
                "from": "CMN",
                "to": "AUH",
                "group": 0,
                "departure": "2021-12-20T16:50:00.000+01:00",
                "arrival": "2021-12-21T03:05:00.000+04:00",
                "airline": "EY",
                "flightNumber": "612",
                "uapi_segment_ref": "18Ghp0BqWDKAuoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAuoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "AUH",
                    "destinationTerminal": "3",
                    "departure": "2021-12-20T16:50:00.000+01:00",
                    "flightTime": "435",
                    "travelTime": "695",
                    "equipment": "789"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "789"
                ],
                "duration": [
                  "435"
                ],
                "techStops": [],
                "bookingClass": "Y",
                "baggage": [
                  {
                    "units": "kilograms",
                    "amount": 45
                  }
                ],
                "fareBasisCode": "YF1OW"
              },
              {
                "from": "AUH",
                "to": "XNB",
                "group": 0,
                "departure": "2021-12-21T06:40:00.000+04:00",
                "arrival": "2021-12-21T08:40:00.000+04:00",
                "airline": "EY",
                "flightNumber": "5420",
                "uapi_segment_ref": "18Ghp0BqWDKAyoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAyoLlDAAAAA==",
                "details": [
                  {
                    "origin": "AUH",
                    "originTerminal": "1",
                    "destination": "XNB",
                    "departure": "2021-12-21T06:40:00.000+04:00",
                    "flightTime": "120",
                    "travelTime": "770",
                    "equipment": "BUS"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "BUS"
                ],
                "duration": [
                  "120"
                ],
                "techStops": [],
                "bookingClass": "Y",
                "baggage": [
                  {
                    "units": "kilograms",
                    "amount": 45
                  }
                ],
                "fareBasisCode": "YF1OW"
              }
            ]
          },
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "MS",
            "segments": [
              {
                "from": "CMN",
                "to": "AUH",
                "group": 0,
                "departure": "2021-12-20T16:50:00.000+01:00",
                "arrival": "2021-12-21T03:05:00.000+04:00",
                "airline": "EY",
                "flightNumber": "612",
                "uapi_segment_ref": "18Ghp0BqWDKAuoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAuoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "AUH",
                    "destinationTerminal": "3",
                    "departure": "2021-12-20T16:50:00.000+01:00",
                    "flightTime": "435",
                    "travelTime": "695",
                    "equipment": "789"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "789"
                ],
                "duration": [
                  "435"
                ],
                "techStops": [],
                "bookingClass": "Y",
                "baggage": [
                  {
                    "units": "kilograms",
                    "amount": 45
                  }
                ],
                "fareBasisCode": "YF1OW"
              },
              {
                "from": "AUH",
                "to": "XNB",
                "group": 0,
                "departure": "2021-12-21T07:30:00.000+04:00",
                "arrival": "2021-12-21T09:30:00.000+04:00",
                "airline": "EY",
                "flightNumber": "5422",
                "uapi_segment_ref": "18Ghp0BqWDKA0oLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKA0oLlDAAAAA==",
                "details": [
                  {
                    "origin": "AUH",
                    "originTerminal": "1",
                    "destination": "XNB",
                    "departure": "2021-12-21T07:30:00.000+04:00",
                    "flightTime": "120",
                    "travelTime": "820",
                    "equipment": "BUS"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "BUS"
                ],
                "duration": [
                  "120"
                ],
                "techStops": [],
                "bookingClass": "Y",
                "baggage": [
                  {
                    "units": "kilograms",
                    "amount": 45
                  }
                ],
                "fareBasisCode": "YF1OW"
              }
            ]
          },
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "MS",
            "segments": [
              {
                "from": "CMN",
                "to": "AUH",
                "group": 0,
                "departure": "2021-12-20T16:50:00.000+01:00",
                "arrival": "2021-12-21T03:05:00.000+04:00",
                "airline": "EY",
                "flightNumber": "612",
                "uapi_segment_ref": "18Ghp0BqWDKAuoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAuoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "AUH",
                    "destinationTerminal": "3",
                    "departure": "2021-12-20T16:50:00.000+01:00",
                    "flightTime": "435",
                    "travelTime": "695",
                    "equipment": "789"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "789"
                ],
                "duration": [
                  "435"
                ],
                "techStops": [],
                "bookingClass": "Y",
                "baggage": [
                  {
                    "units": "kilograms",
                    "amount": 45
                  }
                ],
                "fareBasisCode": "YF1OW"
              },
              {
                "from": "AUH",
                "to": "XNB",
                "group": 0,
                "departure": "2021-12-21T09:40:00.000+04:00",
                "arrival": "2021-12-21T11:40:00.000+04:00",
                "airline": "EY",
                "flightNumber": "5424",
                "uapi_segment_ref": "18Ghp0BqWDKA2oLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKA2oLlDAAAAA==",
                "details": [
                  {
                    "origin": "AUH",
                    "originTerminal": "1",
                    "destination": "XNB",
                    "departure": "2021-12-21T09:40:00.000+04:00",
                    "flightTime": "120",
                    "travelTime": "950",
                    "equipment": "BUS"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "BUS"
                ],
                "duration": [
                  "120"
                ],
                "techStops": [],
                "bookingClass": "Y",
                "baggage": [
                  {
                    "units": "kilograms",
                    "amount": 45
                  }
                ],
                "fareBasisCode": "YF1OW"
              }
            ]
          }
        ],
        [
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "MS",
            "segments": [
              {
                "from": "CMN",
                "to": "CAI",
                "group": 1,
                "departure": "2022-02-20T13:50:00.000+01:00",
                "arrival": "2022-02-20T19:45:00.000+02:00",
                "airline": "MS",
                "flightNumber": "848",
                "uapi_segment_ref": "18Ghp0BqWDKAeoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAeoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "CAI",
                    "destinationTerminal": "3",
                    "departure": "2022-02-20T13:50:00.000+01:00",
                    "flightTime": "295",
                    "travelTime": "655",
                    "equipment": "738"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "738"
                ],
                "duration": [
                  "295"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LRIMSO"
              },
              {
                "from": "CAI",
                "to": "DXB",
                "group": 1,
                "departure": "2022-02-21T09:55:00.000+02:00",
                "arrival": "2022-02-21T15:00:00.000+04:00",
                "airline": "MS",
                "flightNumber": "912",
                "uapi_segment_ref": "18Ghp0BqWDKAsoLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAsoLlDAAAAA==",
                "details": [
                  {
                    "origin": "CAI",
                    "originTerminal": "2",
                    "destination": "DXB",
                    "destinationTerminal": "1",
                    "departure": "2022-02-21T09:55:00.000+02:00",
                    "flightTime": "185",
                    "travelTime": "1330",
                    "equipment": "789"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "789"
                ],
                "duration": [
                  "185"
                ],
                "techStops": [],
                "bookingClass": "L",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "LXRIEGO"
              }
            ]
          }
        ]
      ],
      "bookingComponents": [
        {
          "totalPrice": "USD2092.60",
          "basePrice": "MAD15885",
          "taxes": "USD321.60",
          "uapi_fare_reference": "18Ghp0BqWDKAjtLlDAAAAA=="
        }
      ],
      "passengerFares": {
        "ADT": {
          "totalPrice": "USD2092.60",
          "basePrice": "MAD15885",
          "equivalentBasePrice": "USD1771.00",
          "taxes": "USD321.60"
        }
      },
      "passengerCounts": {
        "ADT": 1
      }
    },
    {
      "totalPrice": "USD3809.40",
      "basePrice": "MAD32910",
      "taxes": "USD139.40",
      "platingCarrier": "EK",
      "directions": [
        [
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "EK",
            "segments": [
              {
                "from": "CMN",
                "to": "DXB",
                "group": 0,
                "departure": "2021-12-20T15:05:00.000+01:00",
                "arrival": "2021-12-21T01:30:00.000+04:00",
                "airline": "EK",
                "flightNumber": "752",
                "uapi_segment_ref": "18Ghp0BqWDKA4oLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKA4oLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "DXB",
                    "destinationTerminal": "3",
                    "departure": "2021-12-20T15:05:00.000+01:00",
                    "flightTime": "445",
                    "travelTime": "445",
                    "equipment": "77W"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "77W"
                ],
                "duration": [
                  "445"
                ],
                "techStops": [],
                "bookingClass": "Y",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "YOWMA7"
              }
            ]
          }
        ],
        [
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "EK",
            "segments": [
              {
                "from": "CMN",
                "to": "DXB",
                "group": 1,
                "departure": "2022-02-20T15:05:00.000+01:00",
                "arrival": "2022-02-21T01:30:00.000+04:00",
                "airline": "EK",
                "flightNumber": "752",
                "uapi_segment_ref": "18Ghp0BqWDKA6oLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKA6oLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "2",
                    "destination": "DXB",
                    "destinationTerminal": "3",
                    "departure": "2022-02-20T15:05:00.000+01:00",
                    "flightTime": "445",
                    "travelTime": "445",
                    "equipment": "77W"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "77W"
                ],
                "duration": [
                  "445"
                ],
                "techStops": [],
                "bookingClass": "Y",
                "baggage": [
                  {
                    "units": "piece",
                    "amount": 2
                  }
                ],
                "fareBasisCode": "YOWMA7"
              }
            ]
          }
        ]
      ],
      "bookingComponents": [
        {
          "totalPrice": "USD3809.40",
          "basePrice": "MAD32910",
          "taxes": "USD139.40",
          "uapi_fare_reference": "18Ghp0BqWDKAktLlDAAAAA=="
        }
      ],
      "passengerFares": {
        "ADT": {
          "totalPrice": "USD3809.40",
          "basePrice": "MAD32910",
          "equivalentBasePrice": "USD3670.00",
          "taxes": "USD139.40"
        }
      },
      "passengerCounts": {
        "ADT": 1
      }
    },
    {
      "totalPrice": "USD4008.40",
      "basePrice": "MAD33210",
      "taxes": "USD305.40",
      "platingCarrier": "TK",
      "directions": [
        [
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "TK",
            "segments": [
              {
                "from": "CMN",
                "to": "IST",
                "group": 0,
                "departure": "2021-12-20T16:15:00.000+01:00",
                "arrival": "2021-12-20T22:55:00.000+03:00",
                "airline": "TK",
                "flightNumber": "618",
                "uapi_segment_ref": "18Ghp0BqWDKA8oLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKA8oLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "1",
                    "destination": "IST",
                    "departure": "2021-12-20T16:15:00.000+01:00",
                    "flightTime": "280",
                    "travelTime": "705",
                    "equipment": "333"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "333"
                ],
                "duration": [
                  "280"
                ],
                "techStops": [],
                "bookingClass": "O",
                "baggage": [
                  {
                    "units": "kilograms",
                    "amount": 30
                  }
                ],
                "fareBasisCode": "OLB2XPOW"
              },
              {
                "from": "IST",
                "to": "DXB",
                "group": 0,
                "departure": "2021-12-21T01:30:00.000+03:00",
                "arrival": "2021-12-21T07:00:00.000+04:00",
                "airline": "TK",
                "flightNumber": "762",
                "uapi_segment_ref": "18Ghp0BqWDKA+oLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKA+oLlDAAAAA==",
                "details": [
                  {
                    "origin": "IST",
                    "destination": "DXB",
                    "destinationTerminal": "1",
                    "departure": "2021-12-21T01:30:00.000+03:00",
                    "flightTime": "270",
                    "travelTime": "705",
                    "equipment": "359"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "359"
                ],
                "duration": [
                  "270"
                ],
                "techStops": [],
                "bookingClass": "Y",
                "baggage": [
                  {
                    "units": "kilograms",
                    "amount": 30
                  }
                ],
                "fareBasisCode": "YIFTK"
              }
            ]
          }
        ],
        [
          {
            "from": "CAS",
            "to": "DXB",
            "platingCarrier": "TK",
            "segments": [
              {
                "from": "CMN",
                "to": "IST",
                "group": 1,
                "departure": "2022-02-20T16:15:00.000+01:00",
                "arrival": "2022-02-20T22:55:00.000+03:00",
                "airline": "TK",
                "flightNumber": "618",
                "uapi_segment_ref": "18Ghp0BqWDKAApLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKAApLlDAAAAA==",
                "details": [
                  {
                    "origin": "CMN",
                    "originTerminal": "1",
                    "destination": "IST",
                    "departure": "2022-02-20T16:15:00.000+01:00",
                    "flightTime": "280",
                    "travelTime": "705",
                    "equipment": "77W"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "77W"
                ],
                "duration": [
                  "280"
                ],
                "techStops": [],
                "bookingClass": "Y",
                "baggage": [
                  {
                    "units": "kilograms",
                    "amount": 30
                  }
                ],
                "fareBasisCode": "YIFTK"
              },
              {
                "from": "IST",
                "to": "DXB",
                "group": 1,
                "departure": "2022-02-21T01:30:00.000+03:00",
                "arrival": "2022-02-21T07:00:00.000+04:00",
                "airline": "TK",
                "flightNumber": "762",
                "uapi_segment_ref": "18Ghp0BqWDKACpLlDAAAAA==",
                "uapiSegmentReference": "18Ghp0BqWDKACpLlDAAAAA==",
                "details": [
                  {
                    "origin": "IST",
                    "destination": "DXB",
                    "destinationTerminal": "1",
                    "departure": "2022-02-21T01:30:00.000+03:00",
                    "flightTime": "270",
                    "travelTime": "705",
                    "equipment": "77W"
                  }
                ],
                "serviceClass": "Economy",
                "plane": [
                  "77W"
                ],
                "duration": [
                  "270"
                ],
                "techStops": [],
                "bookingClass": "O",
                "baggage": [
                  {
                    "units": "kilograms",
                    "amount": 30
                  }
                ],
                "fareBasisCode": "OLB2XPOW"
              }
            ]
          }
        ]
      ],
      "bookingComponents": [
        {
          "totalPrice": "USD4008.40",
          "basePrice": "MAD33210",
          "taxes": "USD305.40",
          "uapi_fare_reference": "18Ghp0BqWDKAltLlDAAAAA=="
        }
      ],
      "passengerFares": {
        "ADT": {
          "totalPrice": "USD4008.40",
          "basePrice": "MAD33210",
          "equivalentBasePrice": "USD3703.00",
          "taxes": "USD305.40"
        }
      },
      "passengerCounts": {
        "ADT": 1
      }
    }
  ]

  return (
    <div>
      <Toolbar />
      <div className="modify-search">
        <div className="container-fluid">
          <ul className="nav align-items-center justify-content-between">
            <li className="navbar-text left-side">
              <h4>
                {" "}
                Lahore, Pakistan - Dubai, United Arab Emirates{" "}
                <small>(One Way)</small>
              </h4>
              class: <span>Economy</span> Traveller: <span>1</span> Date:{" "}
              <span>Fri,02 Oct 2020</span> <em>6 Flights Found</em>
            </li>
            <li className="navbar-text right-side">
              <button
                type="button"
                onClick={handleClick}
                className="btn btn-outline-info collapsed"
                aria-expanded="false"
                aria-controls="collapse-1"
              >
                MODIFY SEARCH
                <unicon name="angle-down" className="unicon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="inherit"
                  >
                    <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"></path>
                  </svg>
                </unicon>
              </button>
            </li>
          </ul>
        </div>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <div className="modify-wrapper">
            <Tabs />
          </div>
        </Collapse>
      </div>
      <div className="flights-wrapper pb-5">
        <div className="container-fluid">
          <Row>
            <Col md={3}>
              <Filter />
            </Col>
            <Col md={9}>
              <div className="flightResultsSortingPanel ">
                <div className="swipper-wrapper">
                  <Slider {...settings}>
                    {Array.from({ length: 12 }).map((_, idx) => (
                      <div key={idx} style={{ width: "163.667px" }}>
                        <div className="item-airline">
                          <a target="_self" className="pia-dcoration">
                            <figure>
                              <Image
                                src={pia}
                                width="25px"
                                height="20px"
                                className="img-fluid"
                              />
                            </figure>
                            <div className="item-airline-right">
                              <span className="txtEclipse d-block float-left">
                                Pakistan International Airlines
                              </span>{" "}
                              <span className="price">
                                {" "}
                                SAR{" "}
                                <strong className="priceTag">
                                  <em>668</em> <em className="decimel">.75</em>
                                </strong>
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
                <div className="flightResultsSortingPanel">
                  <div className="container-fluid ">
                    <ul className="nav sortby">
                      <li className="navbar-text">
                        <span>Sort By :</span>
                      </li>
                      <li className="navbar-text">
                        <select
                          className="custom-select"
                          id="__BVID__142"
                          style={{ WebkitAppearance: "none" }}
                        >
                          <option value="">Departure Time</option>
                          <option value="a">Earliest</option>
                          <option value="b">Latest</option>
                        </select>
                      </li>
                      <li className="navbar-text">
                        <select
                          className="custom-select"
                          style={{ WebkitAppearance: "none" }}
                          id="__BVID__143"
                        >
                          <option value="">Arrival Time</option>
                          <option value="a">Earliest</option>
                          <option value="b">Latest</option>
                        </select>
                      </li>
                      <li className="navbar-text">
                        <select
                          className="custom-select"
                          style={{ WebkitAppearance: "none" }}
                          id="__BVID__144"
                        >
                          <option value="">Trip Duration</option>
                          <option value="a">Shortest</option>
                          <option value="b">Longest</option>
                        </select>
                      </li>
                      <li className="navbar-text">
                        <select
                          className="custom-select"
                          style={{ WebkitAppearance: "none" }}
                          id="__BVID__145"
                        >
                          <option value="">Price</option>
                          <option value="a">Lowest</option>
                          <option value="b">Heighest</option>
                        </select>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* ................................ */}
              <Segment
                listingArr={listingArr}
              />

              {/* ....................... */}
            </Col>
          </Row>
        </div>
        <Topsection />
      </div>



    </div>
  );
}
