import { useRouter } from 'next/router'
import axios from 'axios';
import React, { useEffect } from "react";
import { Toolbar, } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import Tabs from "@components/home/Tabs";
import { Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import Segment from "@components/listing/segment";
import Topsection from "@components/home/Topsection";
import Filter from "@components/listing/filter";
import { Box, CircularProgress } from '@mui/material'
import { da } from 'date-fns/locale';

export async function getServerSideProps(context) {
  const { adults, childs, infants, type, classType, totalPersons, return_date } = context.query
  let params = {
    "legs": [],
    "passengers": {
      "ADT": Number(adults),
      "CNN": Number(childs),
      "INF": Number(infants)
    },
    "cabins": [classType],
    "pricing": {
      "currency": "USD"
    },
    totalPersons: totalPersons,
    departureDate: "",
    returnDate: return_date,
    fromCity: "",
    toCity: "",
    classType: classType
  }

  if (type == "multicity") {
    const { cities_length } = context.query
    for (let i = 1; i <= cities_length; i++) {
      params.legs.push(
        {
          to: context.query[`to${i}`],
          from: context.query[`from${i}`],
          departureDate: context.query[`depart_date${i}`]
        }
      )
    }
  }
  else {
    const { from, to, depart_date, from_city, to_city } = context.query
    params.legs = [
      {
        "from": from,
        "to": to,
        "departureDate": depart_date
      },
    ]
    params.departureDate = depart_date
    params.fromCity = from_city
    params.toCity = to_city

    if (type === "roundtrip") {
      params.legs.push(
        {
          "from": to,
          "to": from,
          "departureDate": return_date
        }
      )
    }

  }

  return {
    props: {
      params
    },
  }
}

export default function Listing({ params }) {
  const router = useRouter()
  console.log(params)
  // const listingData = {
  //   "flights": [
  //     {
  //       "totalPrice": "USD3281.10",
  //       "basePrice": "MAD25600",
  //       "taxes": "USD426.10",
  //       "platingCarrier": "GF",
  //       "directions": [
  //         [
  //           {
  //             "from": "CAS",
  //             "to": "CAI",
  //             "platingCarrier": "GF",
  //             "segments": [
  //               {
  //                 "from": "CMN",
  //                 "to": "CDG",
  //                 "group": 0,
  //                 "departure": "2021-12-20T11:20:00.000+01:00",
  //                 "arrival": "2021-12-20T14:30:00.000+01:00",
  //                 "airline": "AF",
  //                 "flightNumber": "1897",
  //                 "uapi_segment_ref": "MCo8k2/pWDKAC8ecBAAAAA==",
  //                 "uapiSegmentReference": "MCo8k2/pWDKAC8ecBAAAAA==",
  //                 "details": [
  //                   {
  //                     "origin": "CMN",
  //                     "originTerminal": "2",
  //                     "destination": "CDG",
  //                     "destinationTerminal": "2E",
  //                     "departure": "2021-12-20T11:20:00.000+01:00",
  //                     "flightTime": "190",
  //                     "travelTime": "705",
  //                     "equipment": "321"
  //                   }
  //                 ],
  //                 "serviceClass": "Economy",
  //                 "plane": [
  //                   "321"
  //                 ],
  //                 "duration": [
  //                   "190"
  //                 ],
  //                 "techStops": [],
  //                 "bookingClass": "Y",
  //                 "baggage": [
  //                   {
  //                     "units": "piece",
  //                     "amount": 2
  //                   }
  //                 ],
  //                 "fareBasisCode": "YS50BENN",
  //                 "airlines": {
  //                   "id": 114,
  //                   "name": "Air France",
  //                   "thumbnail": "http://localhost:3000/img/flights/airlines/AF.png",
  //                   "createdAt": "2021-12-01T20:37:44.000Z",
  //                   "updatedAt": "2021-12-01T20:37:44.000Z",
  //                   "price": "USD3281.10"
  //                 },
  //                 "fromLocations": {
  //                   "id": 248,
  //                   "name": "Mohamed V Arpt",
  //                   "code": "CMN",
  //                   "city_name": "Casablanca",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-10-17T09:29:40.000Z"
  //                 },
  //                 "toLocations": {
  //                   "id": 7748,
  //                   "name": "Charles De Gaulle Intl Arpt",
  //                   "code": "CDG",
  //                   "city_name": "Paris",
  //                   "createdAt": "2020-10-13T10:26:49.000Z",
  //                   "updatedAt": "2020-11-02T07:33:17.000Z"
  //                 }
  //               },
  //               {
  //                 "from": "CDG",
  //                 "to": "CAI",
  //                 "group": 0,
  //                 "departure": "2021-12-20T18:40:00.000+01:00",
  //                 "arrival": "2021-12-21T00:05:00.000+02:00",
  //                 "airline": "AF",
  //                 "flightNumber": "570",
  //                 "uapi_segment_ref": "MCo8k2/pWDKAE8ecBAAAAA==",
  //                 "uapiSegmentReference": "MCo8k2/pWDKAE8ecBAAAAA==",
  //                 "details": [
  //                   {
  //                     "origin": "CDG",
  //                     "originTerminal": "2E",
  //                     "destination": "CAI",
  //                     "destinationTerminal": "2",
  //                     "departure": "2021-12-20T18:40:00.000+01:00",
  //                     "flightTime": "265",
  //                     "travelTime": "705",
  //                     "equipment": "77W"
  //                   }
  //                 ],
  //                 "serviceClass": "Economy",
  //                 "plane": [
  //                   "77W"
  //                 ],
  //                 "duration": [
  //                   "265"
  //                 ],
  //                 "techStops": [],
  //                 "bookingClass": "Y",
  //                 "baggage": [
  //                   {
  //                     "units": "piece",
  //                     "amount": 2
  //                   }
  //                 ],
  //                 "fareBasisCode": "YS50BENN",
  //                 "airlines": {
  //                   "id": 114,
  //                   "name": "Air France",
  //                   "thumbnail": "http://localhost:3000/img/flights/airlines/AF.png",
  //                   "createdAt": "2021-12-01T20:37:44.000Z",
  //                   "updatedAt": "2021-12-01T20:37:44.000Z",
  //                   "price": "USD3281.10"
  //                 },
  //                 "fromLocations": {
  //                   "id": 7748,
  //                   "name": "Charles De Gaulle Intl Arpt",
  //                   "code": "CDG",
  //                   "city_name": "Paris",
  //                   "createdAt": "2020-10-13T10:26:49.000Z",
  //                   "updatedAt": "2020-11-02T07:33:17.000Z"
  //                 },
  //                 "toLocations": {
  //                   "id": 131,
  //                   "name": "Cairo Intl Arpt",
  //                   "code": "CAI",
  //                   "city_name": "Cairo",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-10-17T09:29:40.000Z"
  //                 }
  //               }
  //             ],
  //             "airlines": {
  //               "id": 209,
  //               "name": "Gulf Air",
  //               "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //               "createdAt": "2021-12-01T20:37:44.000Z",
  //               "updatedAt": "2021-12-01T20:37:44.000Z",
  //               "price": "USD3281.10"
  //             },
  //             "fromLocations": {
  //               "id": 138,
  //               "name": "Anfa Airport",
  //               "code": "CAS",
  //               "city_name": "Casablanca",
  //               "createdAt": "2020-10-13T10:26:41.000Z",
  //               "updatedAt": "2020-10-17T09:29:40.000Z"
  //             },
  //             "toLocations": {
  //               "id": 131,
  //               "name": "Cairo Intl Arpt",
  //               "code": "CAI",
  //               "city_name": "Cairo",
  //               "createdAt": "2020-10-13T10:26:41.000Z",
  //               "updatedAt": "2020-10-17T09:29:40.000Z"
  //             }
  //           },
  //           {
  //             "from": "CAS",
  //             "to": "CAI",
  //             "platingCarrier": "GF",
  //             "segments": [
  //               {
  //                 "from": "CMN",
  //                 "to": "CDG",
  //                 "group": 0,
  //                 "departure": "2021-12-20T08:10:00.000+01:00",
  //                 "arrival": "2021-12-20T11:25:00.000+01:00",
  //                 "airline": "AF",
  //                 "flightNumber": "1497",
  //                 "uapi_segment_ref": "MCo8k2/pWDKAG8ecBAAAAA==",
  //                 "uapiSegmentReference": "MCo8k2/pWDKAG8ecBAAAAA==",
  //                 "details": [
  //                   {
  //                     "origin": "CMN",
  //                     "originTerminal": "2",
  //                     "destination": "CDG",
  //                     "destinationTerminal": "2E",
  //                     "departure": "2021-12-20T08:10:00.000+01:00",
  //                     "flightTime": "195",
  //                     "travelTime": "895",
  //                     "equipment": "32A"
  //                   }
  //                 ],
  //                 "serviceClass": "Economy",
  //                 "plane": [
  //                   "32A"
  //                 ],
  //                 "duration": [
  //                   "195"
  //                 ],
  //                 "techStops": [],
  //                 "bookingClass": "Y",
  //                 "baggage": [
  //                   {
  //                     "units": "piece",
  //                     "amount": 2
  //                   }
  //                 ],
  //                 "fareBasisCode": "YS50BENN",
  //                 "airlines": {
  //                   "id": 114,
  //                   "name": "Air France",
  //                   "thumbnail": "http://localhost:3000/img/flights/airlines/AF.png",
  //                   "createdAt": "2021-12-01T20:37:44.000Z",
  //                   "updatedAt": "2021-12-01T20:37:44.000Z",
  //                   "price": "USD3281.10"
  //                 },
  //                 "fromLocations": {
  //                   "id": 248,
  //                   "name": "Mohamed V Arpt",
  //                   "code": "CMN",
  //                   "city_name": "Casablanca",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-10-17T09:29:40.000Z"
  //                 },
  //                 "toLocations": {
  //                   "id": 7748,
  //                   "name": "Charles De Gaulle Intl Arpt",
  //                   "code": "CDG",
  //                   "city_name": "Paris",
  //                   "createdAt": "2020-10-13T10:26:49.000Z",
  //                   "updatedAt": "2020-11-02T07:33:17.000Z"
  //                 }
  //               },
  //               {
  //                 "from": "CDG",
  //                 "to": "CAI",
  //                 "group": 0,
  //                 "departure": "2021-12-20T18:40:00.000+01:00",
  //                 "arrival": "2021-12-21T00:05:00.000+02:00",
  //                 "airline": "AF",
  //                 "flightNumber": "570",
  //                 "uapi_segment_ref": "MCo8k2/pWDKAE8ecBAAAAA==",
  //                 "uapiSegmentReference": "MCo8k2/pWDKAE8ecBAAAAA==",
  //                 "details": [
  //                   {
  //                     "origin": "CDG",
  //                     "originTerminal": "2E",
  //                     "destination": "CAI",
  //                     "destinationTerminal": "2",
  //                     "departure": "2021-12-20T18:40:00.000+01:00",
  //                     "flightTime": "265",
  //                     "travelTime": "705",
  //                     "equipment": "77W"
  //                   }
  //                 ],
  //                 "serviceClass": "Economy",
  //                 "plane": [
  //                   "77W"
  //                 ],
  //                 "duration": [
  //                   "265"
  //                 ],
  //                 "techStops": [],
  //                 "bookingClass": "Y",
  //                 "baggage": [
  //                   {
  //                     "units": "piece",
  //                     "amount": 2
  //                   }
  //                 ],
  //                 "fareBasisCode": "YS50BENN",
  //                 "airlines": {
  //                   "id": 114,
  //                   "name": "Air France",
  //                   "thumbnail": "http://localhost:3000/img/flights/airlines/AF.png",
  //                   "createdAt": "2021-12-01T20:37:44.000Z",
  //                   "updatedAt": "2021-12-01T20:37:44.000Z",
  //                   "price": "USD3281.10"
  //                 },
  //                 "fromLocations": {
  //                   "id": 7748,
  //                   "name": "Charles De Gaulle Intl Arpt",
  //                   "code": "CDG",
  //                   "city_name": "Paris",
  //                   "createdAt": "2020-10-13T10:26:49.000Z",
  //                   "updatedAt": "2020-11-02T07:33:17.000Z"
  //                 },
  //                 "toLocations": {
  //                   "id": 131,
  //                   "name": "Cairo Intl Arpt",
  //                   "code": "CAI",
  //                   "city_name": "Cairo",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-10-17T09:29:40.000Z"
  //                 }
  //               }
  //             ],
  //             "airlines": {
  //               "id": 209,
  //               "name": "Gulf Air",
  //               "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //               "createdAt": "2021-12-01T20:37:44.000Z",
  //               "updatedAt": "2021-12-01T20:37:44.000Z",
  //               "price": "USD3281.10"
  //             },
  //             "fromLocations": {
  //               "id": 138,
  //               "name": "Anfa Airport",
  //               "code": "CAS",
  //               "city_name": "Casablanca",
  //               "createdAt": "2020-10-13T10:26:41.000Z",
  //               "updatedAt": "2020-10-17T09:29:40.000Z"
  //             },
  //             "toLocations": {
  //               "id": 131,
  //               "name": "Cairo Intl Arpt",
  //               "code": "CAI",
  //               "city_name": "Cairo",
  //               "createdAt": "2020-10-13T10:26:41.000Z",
  //               "updatedAt": "2020-10-17T09:29:40.000Z"
  //             }
  //           }
  //         ],
  //         [
  //           {
  //             "from": "CAI",
  //             "to": "DXB",
  //             "platingCarrier": "GF",
  //             "segments": [
  //               {
  //                 "from": "CAI",
  //                 "to": "BAH",
  //                 "group": 1,
  //                 "departure": "2022-02-20T21:00:00.000+02:00",
  //                 "arrival": "2022-02-21T00:50:00.000+03:00",
  //                 "airline": "GF",
  //                 "flightNumber": "80",
  //                 "uapi_segment_ref": "MCo8k2/pWDKAI8ecBAAAAA==",
  //                 "uapiSegmentReference": "MCo8k2/pWDKAI8ecBAAAAA==",
  //                 "details": [
  //                   {
  //                     "origin": "CAI",
  //                     "originTerminal": "2",
  //                     "destination": "BAH",
  //                     "departure": "2022-02-20T21:00:00.000+02:00",
  //                     "flightTime": "170",
  //                     "travelTime": "310",
  //                     "equipment": "32N"
  //                   }
  //                 ],
  //                 "serviceClass": "Economy",
  //                 "plane": [
  //                   "32N"
  //                 ],
  //                 "duration": [
  //                   "170"
  //                 ],
  //                 "techStops": [],
  //                 "bookingClass": "W",
  //                 "baggage": [
  //                   {
  //                     "units": "piece",
  //                     "amount": 2
  //                   }
  //                 ],
  //                 "fareBasisCode": "YS50BENN",
  //                 "airlines": {
  //                   "id": 209,
  //                   "name": "Gulf Air",
  //                   "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //                   "createdAt": "2021-12-01T20:37:44.000Z",
  //                   "updatedAt": "2021-12-01T20:37:44.000Z",
  //                   "price": "USD3281.10"
  //                 },
  //                 "fromLocations": {
  //                   "id": 131,
  //                   "name": "Cairo Intl Arpt",
  //                   "code": "CAI",
  //                   "city_name": "Cairo",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-10-17T09:29:40.000Z"
  //                 },
  //                 "toLocations": {
  //                   "id": 337,
  //                   "name": "Bahrain Intl Arpt",
  //                   "code": "BAH",
  //                   "city_name": "Muharraq",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-11-02T07:32:41.000Z"
  //                 }
  //               },
  //               {
  //                 "from": "BAH",
  //                 "to": "DXB",
  //                 "group": 1,
  //                 "departure": "2022-02-21T01:55:00.000+03:00",
  //                 "arrival": "2022-02-21T04:10:00.000+04:00",
  //                 "airline": "GF",
  //                 "flightNumber": "500",
  //                 "uapi_segment_ref": "MCo8k2/pWDKAK8ecBAAAAA==",
  //                 "uapiSegmentReference": "MCo8k2/pWDKAK8ecBAAAAA==",
  //                 "details": [
  //                   {
  //                     "origin": "BAH",
  //                     "destination": "DXB",
  //                     "destinationTerminal": "1",
  //                     "departure": "2022-02-21T01:55:00.000+03:00",
  //                     "flightTime": "75",
  //                     "travelTime": "310",
  //                     "equipment": "32N"
  //                   }
  //                 ],
  //                 "serviceClass": "Economy",
  //                 "plane": [
  //                   "32N"
  //                 ],
  //                 "duration": [
  //                   "75"
  //                 ],
  //                 "techStops": [],
  //                 "bookingClass": "W",
  //                 "baggage": [
  //                   {
  //                     "units": "piece",
  //                     "amount": 2
  //                   }
  //                 ],
  //                 "fareBasisCode": "YS50BENN",
  //                 "airlines": {
  //                   "id": 209,
  //                   "name": "Gulf Air",
  //                   "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //                   "createdAt": "2021-12-01T20:37:44.000Z",
  //                   "updatedAt": "2021-12-01T20:37:44.000Z",
  //                   "price": "USD3281.10"
  //                 },
  //                 "fromLocations": {
  //                   "id": 337,
  //                   "name": "Bahrain Intl Arpt",
  //                   "code": "BAH",
  //                   "city_name": "Muharraq",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-11-02T07:32:41.000Z"
  //                 },
  //                 "toLocations": {
  //                   "id": 1438,
  //                   "name": "Dubai Intl Arpt",
  //                   "code": "DXB",
  //                   "city_name": "Dubai",
  //                   "createdAt": "2020-10-13T10:26:42.000Z",
  //                   "updatedAt": "2020-10-17T09:29:43.000Z"
  //                 }
  //               }
  //             ],
  //             "airlines": {
  //               "id": 209,
  //               "name": "Gulf Air",
  //               "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //               "createdAt": "2021-12-01T20:37:44.000Z",
  //               "updatedAt": "2021-12-01T20:37:44.000Z",
  //               "price": "USD3281.10"
  //             },
  //             "fromLocations": {
  //               "id": 131,
  //               "name": "Cairo Intl Arpt",
  //               "code": "CAI",
  //               "city_name": "Cairo",
  //               "createdAt": "2020-10-13T10:26:41.000Z",
  //               "updatedAt": "2020-10-17T09:29:40.000Z"
  //             },
  //             "toLocations": {
  //               "id": 1438,
  //               "name": "Dubai Intl Arpt",
  //               "code": "DXB",
  //               "city_name": "Dubai",
  //               "createdAt": "2020-10-13T10:26:42.000Z",
  //               "updatedAt": "2020-10-17T09:29:43.000Z"
  //             }
  //           },
  //           {
  //             "from": "CAI",
  //             "to": "DXB",
  //             "platingCarrier": "GF",
  //             "segments": [
  //               {
  //                 "from": "CAI",
  //                 "to": "BAH",
  //                 "group": 1,
  //                 "departure": "2022-02-20T13:55:00.000+02:00",
  //                 "arrival": "2022-02-20T17:45:00.000+03:00",
  //                 "airline": "GF",
  //                 "flightNumber": "70",
  //                 "uapi_segment_ref": "MCo8k2/pWDKAM8ecBAAAAA==",
  //                 "uapiSegmentReference": "MCo8k2/pWDKAM8ecBAAAAA==",
  //                 "details": [
  //                   {
  //                     "origin": "CAI",
  //                     "originTerminal": "2",
  //                     "destination": "BAH",
  //                     "departure": "2022-02-20T13:55:00.000+02:00",
  //                     "flightTime": "170",
  //                     "travelTime": "400",
  //                     "equipment": "321"
  //                   }
  //                 ],
  //                 "serviceClass": "Economy",
  //                 "plane": [
  //                   "321"
  //                 ],
  //                 "duration": [
  //                   "170"
  //                 ],
  //                 "techStops": [],
  //                 "bookingClass": "W",
  //                 "baggage": [
  //                   {
  //                     "units": "piece",
  //                     "amount": 2
  //                   }
  //                 ],
  //                 "fareBasisCode": "YS50BENN",
  //                 "airlines": {
  //                   "id": 209,
  //                   "name": "Gulf Air",
  //                   "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //                   "createdAt": "2021-12-01T20:37:44.000Z",
  //                   "updatedAt": "2021-12-01T20:37:44.000Z",
  //                   "price": "USD3281.10"
  //                 },
  //                 "fromLocations": {
  //                   "id": 131,
  //                   "name": "Cairo Intl Arpt",
  //                   "code": "CAI",
  //                   "city_name": "Cairo",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-10-17T09:29:40.000Z"
  //                 },
  //                 "toLocations": {
  //                   "id": 337,
  //                   "name": "Bahrain Intl Arpt",
  //                   "code": "BAH",
  //                   "city_name": "Muharraq",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-11-02T07:32:41.000Z"
  //                 }
  //               },
  //               {
  //                 "from": "BAH",
  //                 "to": "DXB",
  //                 "group": 1,
  //                 "departure": "2022-02-20T20:20:00.000+03:00",
  //                 "arrival": "2022-02-20T22:35:00.000+04:00",
  //                 "airline": "GF",
  //                 "flightNumber": "512",
  //                 "uapi_segment_ref": "MCo8k2/pWDKAO8ecBAAAAA==",
  //                 "uapiSegmentReference": "MCo8k2/pWDKAO8ecBAAAAA==",
  //                 "details": [
  //                   {
  //                     "origin": "BAH",
  //                     "destination": "DXB",
  //                     "destinationTerminal": "1",
  //                     "departure": "2022-02-20T20:20:00.000+03:00",
  //                     "flightTime": "75",
  //                     "travelTime": "400",
  //                     "equipment": "789"
  //                   }
  //                 ],
  //                 "serviceClass": "Economy",
  //                 "plane": [
  //                   "789"
  //                 ],
  //                 "duration": [
  //                   "75"
  //                 ],
  //                 "techStops": [],
  //                 "bookingClass": "W",
  //                 "baggage": [
  //                   {
  //                     "units": "piece",
  //                     "amount": 2
  //                   }
  //                 ],
  //                 "fareBasisCode": "YS50BENN",
  //                 "airlines": {
  //                   "id": 209,
  //                   "name": "Gulf Air",
  //                   "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //                   "createdAt": "2021-12-01T20:37:44.000Z",
  //                   "updatedAt": "2021-12-01T20:37:44.000Z",
  //                   "price": "USD3281.10"
  //                 },
  //                 "fromLocations": {
  //                   "id": 337,
  //                   "name": "Bahrain Intl Arpt",
  //                   "code": "BAH",
  //                   "city_name": "Muharraq",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-11-02T07:32:41.000Z"
  //                 },
  //                 "toLocations": {
  //                   "id": 1438,
  //                   "name": "Dubai Intl Arpt",
  //                   "code": "DXB",
  //                   "city_name": "Dubai",
  //                   "createdAt": "2020-10-13T10:26:42.000Z",
  //                   "updatedAt": "2020-10-17T09:29:43.000Z"
  //                 }
  //               }
  //             ],
  //             "airlines": {
  //               "id": 209,
  //               "name": "Gulf Air",
  //               "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //               "createdAt": "2021-12-01T20:37:44.000Z",
  //               "updatedAt": "2021-12-01T20:37:44.000Z",
  //               "price": "USD3281.10"
  //             },
  //             "fromLocations": {
  //               "id": 131,
  //               "name": "Cairo Intl Arpt",
  //               "code": "CAI",
  //               "city_name": "Cairo",
  //               "createdAt": "2020-10-13T10:26:41.000Z",
  //               "updatedAt": "2020-10-17T09:29:40.000Z"
  //             },
  //             "toLocations": {
  //               "id": 1438,
  //               "name": "Dubai Intl Arpt",
  //               "code": "DXB",
  //               "city_name": "Dubai",
  //               "createdAt": "2020-10-13T10:26:42.000Z",
  //               "updatedAt": "2020-10-17T09:29:43.000Z"
  //             }
  //           },
  //           {
  //             "from": "CAI",
  //             "to": "DXB",
  //             "platingCarrier": "GF",
  //             "segments": [
  //               {
  //                 "from": "CAI",
  //                 "to": "BAH",
  //                 "group": 1,
  //                 "departure": "2022-02-20T21:00:00.000+02:00",
  //                 "arrival": "2022-02-21T00:50:00.000+03:00",
  //                 "airline": "GF",
  //                 "flightNumber": "80",
  //                 "uapi_segment_ref": "MCo8k2/pWDKAI8ecBAAAAA==",
  //                 "uapiSegmentReference": "MCo8k2/pWDKAI8ecBAAAAA==",
  //                 "details": [
  //                   {
  //                     "origin": "CAI",
  //                     "originTerminal": "2",
  //                     "destination": "BAH",
  //                     "departure": "2022-02-20T21:00:00.000+02:00",
  //                     "flightTime": "170",
  //                     "travelTime": "310",
  //                     "equipment": "32N"
  //                   }
  //                 ],
  //                 "serviceClass": "Economy",
  //                 "plane": [
  //                   "32N"
  //                 ],
  //                 "duration": [
  //                   "170"
  //                 ],
  //                 "techStops": [],
  //                 "bookingClass": "W",
  //                 "baggage": [
  //                   {
  //                     "units": "piece",
  //                     "amount": 2
  //                   }
  //                 ],
  //                 "fareBasisCode": "YS50BENN",
  //                 "airlines": {
  //                   "id": 209,
  //                   "name": "Gulf Air",
  //                   "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //                   "createdAt": "2021-12-01T20:37:44.000Z",
  //                   "updatedAt": "2021-12-01T20:37:44.000Z",
  //                   "price": "USD3281.10"
  //                 },
  //                 "fromLocations": {
  //                   "id": 131,
  //                   "name": "Cairo Intl Arpt",
  //                   "code": "CAI",
  //                   "city_name": "Cairo",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-10-17T09:29:40.000Z"
  //                 },
  //                 "toLocations": {
  //                   "id": 337,
  //                   "name": "Bahrain Intl Arpt",
  //                   "code": "BAH",
  //                   "city_name": "Muharraq",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-11-02T07:32:41.000Z"
  //                 }
  //               },
  //               {
  //                 "from": "BAH",
  //                 "to": "DXB",
  //                 "group": 1,
  //                 "departure": "2022-02-21T07:15:00.000+03:00",
  //                 "arrival": "2022-02-21T09:35:00.000+04:00",
  //                 "airline": "GF",
  //                 "flightNumber": "502",
  //                 "uapi_segment_ref": "MCo8k2/pWDKAQ8ecBAAAAA==",
  //                 "uapiSegmentReference": "MCo8k2/pWDKAQ8ecBAAAAA==",
  //                 "details": [
  //                   {
  //                     "origin": "BAH",
  //                     "destination": "DXB",
  //                     "destinationTerminal": "1",
  //                     "departure": "2022-02-21T07:15:00.000+03:00",
  //                     "flightTime": "80",
  //                     "travelTime": "635",
  //                     "equipment": "32N"
  //                   }
  //                 ],
  //                 "serviceClass": "Economy",
  //                 "plane": [
  //                   "32N"
  //                 ],
  //                 "duration": [
  //                   "80"
  //                 ],
  //                 "techStops": [],
  //                 "bookingClass": "W",
  //                 "baggage": [
  //                   {
  //                     "units": "piece",
  //                     "amount": 2
  //                   }
  //                 ],
  //                 "fareBasisCode": "YS50BENN",
  //                 "airlines": {
  //                   "id": 209,
  //                   "name": "Gulf Air",
  //                   "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //                   "createdAt": "2021-12-01T20:37:44.000Z",
  //                   "updatedAt": "2021-12-01T20:37:44.000Z",
  //                   "price": "USD3281.10"
  //                 },
  //                 "fromLocations": {
  //                   "id": 337,
  //                   "name": "Bahrain Intl Arpt",
  //                   "code": "BAH",
  //                   "city_name": "Muharraq",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-11-02T07:32:41.000Z"
  //                 },
  //                 "toLocations": {
  //                   "id": 1438,
  //                   "name": "Dubai Intl Arpt",
  //                   "code": "DXB",
  //                   "city_name": "Dubai",
  //                   "createdAt": "2020-10-13T10:26:42.000Z",
  //                   "updatedAt": "2020-10-17T09:29:43.000Z"
  //                 }
  //               }
  //             ],
  //             "airlines": {
  //               "id": 209,
  //               "name": "Gulf Air",
  //               "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //               "createdAt": "2021-12-01T20:37:44.000Z",
  //               "updatedAt": "2021-12-01T20:37:44.000Z",
  //               "price": "USD3281.10"
  //             },
  //             "fromLocations": {
  //               "id": 131,
  //               "name": "Cairo Intl Arpt",
  //               "code": "CAI",
  //               "city_name": "Cairo",
  //               "createdAt": "2020-10-13T10:26:41.000Z",
  //               "updatedAt": "2020-10-17T09:29:40.000Z"
  //             },
  //             "toLocations": {
  //               "id": 1438,
  //               "name": "Dubai Intl Arpt",
  //               "code": "DXB",
  //               "city_name": "Dubai",
  //               "createdAt": "2020-10-13T10:26:42.000Z",
  //               "updatedAt": "2020-10-17T09:29:43.000Z"
  //             }
  //           },
  //           {
  //             "from": "CAI",
  //             "to": "DXB",
  //             "platingCarrier": "GF",
  //             "segments": [
  //               {
  //                 "from": "CAI",
  //                 "to": "BAH",
  //                 "group": 1,
  //                 "departure": "2022-02-20T21:00:00.000+02:00",
  //                 "arrival": "2022-02-21T00:50:00.000+03:00",
  //                 "airline": "GF",
  //                 "flightNumber": "80",
  //                 "uapi_segment_ref": "MCo8k2/pWDKAI8ecBAAAAA==",
  //                 "uapiSegmentReference": "MCo8k2/pWDKAI8ecBAAAAA==",
  //                 "details": [
  //                   {
  //                     "origin": "CAI",
  //                     "originTerminal": "2",
  //                     "destination": "BAH",
  //                     "departure": "2022-02-20T21:00:00.000+02:00",
  //                     "flightTime": "170",
  //                     "travelTime": "310",
  //                     "equipment": "32N"
  //                   }
  //                 ],
  //                 "serviceClass": "Economy",
  //                 "plane": [
  //                   "32N"
  //                 ],
  //                 "duration": [
  //                   "170"
  //                 ],
  //                 "techStops": [],
  //                 "bookingClass": "W",
  //                 "baggage": [
  //                   {
  //                     "units": "piece",
  //                     "amount": 2
  //                   }
  //                 ],
  //                 "fareBasisCode": "YS50BENN",
  //                 "airlines": {
  //                   "id": 209,
  //                   "name": "Gulf Air",
  //                   "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //                   "createdAt": "2021-12-01T20:37:44.000Z",
  //                   "updatedAt": "2021-12-01T20:37:44.000Z",
  //                   "price": "USD3281.10"
  //                 },
  //                 "fromLocations": {
  //                   "id": 131,
  //                   "name": "Cairo Intl Arpt",
  //                   "code": "CAI",
  //                   "city_name": "Cairo",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-10-17T09:29:40.000Z"
  //                 },
  //                 "toLocations": {
  //                   "id": 337,
  //                   "name": "Bahrain Intl Arpt",
  //                   "code": "BAH",
  //                   "city_name": "Muharraq",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-11-02T07:32:41.000Z"
  //                 }
  //               },
  //               {
  //                 "from": "BAH",
  //                 "to": "DXB",
  //                 "group": 1,
  //                 "departure": "2022-02-21T09:50:00.000+03:00",
  //                 "arrival": "2022-02-21T12:10:00.000+04:00",
  //                 "airline": "GF",
  //                 "flightNumber": "504",
  //                 "uapi_segment_ref": "MCo8k2/pWDKAS8ecBAAAAA==",
  //                 "uapiSegmentReference": "MCo8k2/pWDKAS8ecBAAAAA==",
  //                 "details": [
  //                   {
  //                     "origin": "BAH",
  //                     "destination": "DXB",
  //                     "destinationTerminal": "1",
  //                     "departure": "2022-02-21T09:50:00.000+03:00",
  //                     "flightTime": "80",
  //                     "travelTime": "790",
  //                     "equipment": "32N"
  //                   }
  //                 ],
  //                 "serviceClass": "Economy",
  //                 "plane": [
  //                   "32N"
  //                 ],
  //                 "duration": [
  //                   "80"
  //                 ],
  //                 "techStops": [],
  //                 "bookingClass": "W",
  //                 "baggage": [
  //                   {
  //                     "units": "piece",
  //                     "amount": 2
  //                   }
  //                 ],
  //                 "fareBasisCode": "YS50BENN",
  //                 "airlines": {
  //                   "id": 209,
  //                   "name": "Gulf Air",
  //                   "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //                   "createdAt": "2021-12-01T20:37:44.000Z",
  //                   "updatedAt": "2021-12-01T20:37:44.000Z",
  //                   "price": "USD3281.10"
  //                 },
  //                 "fromLocations": {
  //                   "id": 337,
  //                   "name": "Bahrain Intl Arpt",
  //                   "code": "BAH",
  //                   "city_name": "Muharraq",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-11-02T07:32:41.000Z"
  //                 },
  //                 "toLocations": {
  //                   "id": 1438,
  //                   "name": "Dubai Intl Arpt",
  //                   "code": "DXB",
  //                   "city_name": "Dubai",
  //                   "createdAt": "2020-10-13T10:26:42.000Z",
  //                   "updatedAt": "2020-10-17T09:29:43.000Z"
  //                 }
  //               }
  //             ],
  //             "airlines": {
  //               "id": 209,
  //               "name": "Gulf Air",
  //               "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //               "createdAt": "2021-12-01T20:37:44.000Z",
  //               "updatedAt": "2021-12-01T20:37:44.000Z",
  //               "price": "USD3281.10"
  //             },
  //             "fromLocations": {
  //               "id": 131,
  //               "name": "Cairo Intl Arpt",
  //               "code": "CAI",
  //               "city_name": "Cairo",
  //               "createdAt": "2020-10-13T10:26:41.000Z",
  //               "updatedAt": "2020-10-17T09:29:40.000Z"
  //             },
  //             "toLocations": {
  //               "id": 1438,
  //               "name": "Dubai Intl Arpt",
  //               "code": "DXB",
  //               "city_name": "Dubai",
  //               "createdAt": "2020-10-13T10:26:42.000Z",
  //               "updatedAt": "2020-10-17T09:29:43.000Z"
  //             }
  //           }
  //         ],
  //         [
  //           {
  //             "from": "DXB",
  //             "to": "AUH",
  //             "platingCarrier": "GF",
  //             "segments": [
  //               {
  //                 "from": "XNB",
  //                 "to": "AUH",
  //                 "group": 2,
  //                 "departure": "2022-03-20T04:45:00.000+04:00",
  //                 "arrival": "2022-03-20T06:05:00.000+04:00",
  //                 "airline": "PG",
  //                 "flightNumber": "4050",
  //                 "uapi_segment_ref": "MCo8k2/pWDKAU8ecBAAAAA==",
  //                 "uapiSegmentReference": "MCo8k2/pWDKAU8ecBAAAAA==",
  //                 "details": [
  //                   {
  //                     "origin": "XNB",
  //                     "destination": "AUH",
  //                     "destinationTerminal": "1",
  //                     "departure": "2022-03-20T04:45:00.000+04:00",
  //                     "flightTime": "80",
  //                     "travelTime": "80",
  //                     "equipment": "BUS"
  //                   }
  //                 ],
  //                 "serviceClass": "Economy",
  //                 "plane": [
  //                   "BUS"
  //                 ],
  //                 "duration": [
  //                   "80"
  //                 ],
  //                 "techStops": [],
  //                 "bookingClass": "G",
  //                 "baggage": [
  //                   {
  //                     "units": "piece",
  //                     "amount": 2
  //                   }
  //                 ],
  //                 "fareBasisCode": "YS50BENN",
  //                 "airlines": {
  //                   "id": 373,
  //                   "name": "Bangkok Airways",
  //                   "thumbnail": "http://localhost:3000/img/flights/airlines/PG.png",
  //                   "createdAt": "2021-12-01T20:37:44.000Z",
  //                   "updatedAt": "2021-12-01T20:37:44.000Z",
  //                   "price": "USD3281.10"
  //                 },
  //                 "fromLocations": {
  //                   "id": 3100,
  //                   "name": "Dubai Bus Station Arpt",
  //                   "code": "XNB",
  //                   "city_name": "Dubai",
  //                   "createdAt": "2020-10-13T10:26:44.000Z",
  //                   "updatedAt": "2020-10-17T09:29:49.000Z"
  //                 },
  //                 "toLocations": {
  //                   "id": 308,
  //                   "name": "Dhabi Intl Arpt",
  //                   "code": "AUH",
  //                   "city_name": "Abu Dhabi",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-10-17T09:29:40.000Z"
  //                 }
  //               }
  //             ],
  //             "airlines": {
  //               "id": 209,
  //               "name": "Gulf Air",
  //               "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //               "createdAt": "2021-12-01T20:37:44.000Z",
  //               "updatedAt": "2021-12-01T20:37:44.000Z",
  //               "price": "USD3281.10"
  //             },
  //             "fromLocations": {
  //               "id": 1438,
  //               "name": "Dubai Intl Arpt",
  //               "code": "DXB",
  //               "city_name": "Dubai",
  //               "createdAt": "2020-10-13T10:26:42.000Z",
  //               "updatedAt": "2020-10-17T09:29:43.000Z"
  //             },
  //             "toLocations": {
  //               "id": 308,
  //               "name": "Dhabi Intl Arpt",
  //               "code": "AUH",
  //               "city_name": "Abu Dhabi",
  //               "createdAt": "2020-10-13T10:26:41.000Z",
  //               "updatedAt": "2020-10-17T09:29:40.000Z"
  //             }
  //           },
  //           {
  //             "from": "DXB",
  //             "to": "AUH",
  //             "platingCarrier": "GF",
  //             "segments": [
  //               {
  //                 "from": "XNB",
  //                 "to": "AUH",
  //                 "group": 2,
  //                 "departure": "2022-03-20T06:00:00.000+04:00",
  //                 "arrival": "2022-03-20T07:20:00.000+04:00",
  //                 "airline": "PG",
  //                 "flightNumber": "4052",
  //                 "uapi_segment_ref": "MCo8k2/pWDKAW8ecBAAAAA==",
  //                 "uapiSegmentReference": "MCo8k2/pWDKAW8ecBAAAAA==",
  //                 "details": [
  //                   {
  //                     "origin": "XNB",
  //                     "destination": "AUH",
  //                     "destinationTerminal": "1",
  //                     "departure": "2022-03-20T06:00:00.000+04:00",
  //                     "flightTime": "80",
  //                     "travelTime": "80",
  //                     "equipment": "BUS"
  //                   }
  //                 ],
  //                 "serviceClass": "Economy",
  //                 "plane": [
  //                   "BUS"
  //                 ],
  //                 "duration": [
  //                   "80"
  //                 ],
  //                 "techStops": [],
  //                 "bookingClass": "G",
  //                 "baggage": [
  //                   {
  //                     "units": "piece",
  //                     "amount": 2
  //                   }
  //                 ],
  //                 "fareBasisCode": "YS50BENN",
  //                 "airlines": {
  //                   "id": 373,
  //                   "name": "Bangkok Airways",
  //                   "thumbnail": "http://localhost:3000/img/flights/airlines/PG.png",
  //                   "createdAt": "2021-12-01T20:37:44.000Z",
  //                   "updatedAt": "2021-12-01T20:37:44.000Z",
  //                   "price": "USD3281.10"
  //                 },
  //                 "fromLocations": {
  //                   "id": 3100,
  //                   "name": "Dubai Bus Station Arpt",
  //                   "code": "XNB",
  //                   "city_name": "Dubai",
  //                   "createdAt": "2020-10-13T10:26:44.000Z",
  //                   "updatedAt": "2020-10-17T09:29:49.000Z"
  //                 },
  //                 "toLocations": {
  //                   "id": 308,
  //                   "name": "Dhabi Intl Arpt",
  //                   "code": "AUH",
  //                   "city_name": "Abu Dhabi",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-10-17T09:29:40.000Z"
  //                 }
  //               }
  //             ],
  //             "airlines": {
  //               "id": 209,
  //               "name": "Gulf Air",
  //               "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //               "createdAt": "2021-12-01T20:37:44.000Z",
  //               "updatedAt": "2021-12-01T20:37:44.000Z",
  //               "price": "USD3281.10"
  //             },
  //             "fromLocations": {
  //               "id": 1438,
  //               "name": "Dubai Intl Arpt",
  //               "code": "DXB",
  //               "city_name": "Dubai",
  //               "createdAt": "2020-10-13T10:26:42.000Z",
  //               "updatedAt": "2020-10-17T09:29:43.000Z"
  //             },
  //             "toLocations": {
  //               "id": 308,
  //               "name": "Dhabi Intl Arpt",
  //               "code": "AUH",
  //               "city_name": "Abu Dhabi",
  //               "createdAt": "2020-10-13T10:26:41.000Z",
  //               "updatedAt": "2020-10-17T09:29:40.000Z"
  //             }
  //           }
  //         ]
  //       ],
  //       "bookingComponents": [
  //         {
  //           "totalPrice": "USD3281.10",
  //           "basePrice": "MAD25600",
  //           "taxes": "USD426.10",
  //           "uapi_fare_reference": "MCo8k2/pWDKAR+ecBAAAAA=="
  //         }
  //       ],
  //       "passengerFares": {
  //         "ADT": {
  //           "totalPrice": "USD3281.10",
  //           "basePrice": "MAD25600",
  //           "equivalentBasePrice": "USD2855.00",
  //           "taxes": "USD426.10"
  //         }
  //       },
  //       "passengerCounts": {
  //         "ADT": 1
  //       },
  //       "airlines": {
  //         "id": 209,
  //         "name": "Gulf Air",
  //         "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //         "createdAt": "2021-12-01T20:37:44.000Z",
  //         "updatedAt": "2021-12-01T20:37:44.000Z",
  //         "price": "USD3281.10"
  //       }
  //     },
  //     {
  //       "totalPrice": "USD3414.10",
  //       "basePrice": "MAD26345",
  //       "taxes": "USD476.10",
  //       "platingCarrier": "GF",
  //       "directions": [
  //         [
  //           {
  //             "from": "CAS",
  //             "to": "CAI",
  //             "platingCarrier": "GF",
  //             "segments": [
  //               {
  //                 "from": "CMN",
  //                 "to": "CDG",
  //                 "group": 0,
  //                 "departure": "2021-12-20T11:20:00.000+01:00",
  //                 "arrival": "2021-12-20T14:30:00.000+01:00",
  //                 "airline": "AF",
  //                 "flightNumber": "1897",
  //                 "uapi_segment_ref": "MCo8k2/pWDKAC8ecBAAAAA==",
  //                 "uapiSegmentReference": "MCo8k2/pWDKAC8ecBAAAAA==",
  //                 "details": [
  //                   {
  //                     "origin": "CMN",
  //                     "originTerminal": "2",
  //                     "destination": "CDG",
  //                     "destinationTerminal": "2E",
  //                     "departure": "2021-12-20T11:20:00.000+01:00",
  //                     "flightTime": "190",
  //                     "travelTime": "705",
  //                     "equipment": "321"
  //                   }
  //                 ],
  //                 "serviceClass": "Economy",
  //                 "plane": [
  //                   "321"
  //                 ],
  //                 "duration": [
  //                   "190"
  //                 ],
  //                 "techStops": [],
  //                 "bookingClass": "Y",
  //                 "baggage": [
  //                   {
  //                     "units": "piece",
  //                     "amount": 2
  //                   }
  //                 ],
  //                 "fareBasisCode": "YS50BENN",
  //                 "airlines": {
  //                   "id": 114,
  //                   "name": "Air France",
  //                   "thumbnail": "http://localhost:3000/img/flights/airlines/AF.png",
  //                   "createdAt": "2021-12-01T20:37:44.000Z",
  //                   "updatedAt": "2021-12-01T20:37:44.000Z",
  //                   "price": "USD3281.10"
  //                 },
  //                 "fromLocations": {
  //                   "id": 248,
  //                   "name": "Mohamed V Arpt",
  //                   "code": "CMN",
  //                   "city_name": "Casablanca",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-10-17T09:29:40.000Z"
  //                 },
  //                 "toLocations": {
  //                   "id": 7748,
  //                   "name": "Charles De Gaulle Intl Arpt",
  //                   "code": "CDG",
  //                   "city_name": "Paris",
  //                   "createdAt": "2020-10-13T10:26:49.000Z",
  //                   "updatedAt": "2020-11-02T07:33:17.000Z"
  //                 }
  //               },
  //               {
  //                 "from": "CDG",
  //                 "to": "CAI",
  //                 "group": 0,
  //                 "departure": "2021-12-20T18:40:00.000+01:00",
  //                 "arrival": "2021-12-21T00:05:00.000+02:00",
  //                 "airline": "AF",
  //                 "flightNumber": "570",
  //                 "uapi_segment_ref": "MCo8k2/pWDKAE8ecBAAAAA==",
  //                 "uapiSegmentReference": "MCo8k2/pWDKAE8ecBAAAAA==",
  //                 "details": [
  //                   {
  //                     "origin": "CDG",
  //                     "originTerminal": "2E",
  //                     "destination": "CAI",
  //                     "destinationTerminal": "2",
  //                     "departure": "2021-12-20T18:40:00.000+01:00",
  //                     "flightTime": "265",
  //                     "travelTime": "705",
  //                     "equipment": "77W"
  //                   }
  //                 ],
  //                 "serviceClass": "Economy",
  //                 "plane": [
  //                   "77W"
  //                 ],
  //                 "duration": [
  //                   "265"
  //                 ],
  //                 "techStops": [],
  //                 "bookingClass": "Y",
  //                 "baggage": [
  //                   {
  //                     "units": "piece",
  //                     "amount": 2
  //                   }
  //                 ],
  //                 "fareBasisCode": "YS50BENN",
  //                 "airlines": {
  //                   "id": 114,
  //                   "name": "Air France",
  //                   "thumbnail": "http://localhost:3000/img/flights/airlines/AF.png",
  //                   "createdAt": "2021-12-01T20:37:44.000Z",
  //                   "updatedAt": "2021-12-01T20:37:44.000Z",
  //                   "price": "USD3281.10"
  //                 },
  //                 "fromLocations": {
  //                   "id": 7748,
  //                   "name": "Charles De Gaulle Intl Arpt",
  //                   "code": "CDG",
  //                   "city_name": "Paris",
  //                   "createdAt": "2020-10-13T10:26:49.000Z",
  //                   "updatedAt": "2020-11-02T07:33:17.000Z"
  //                 },
  //                 "toLocations": {
  //                   "id": 131,
  //                   "name": "Cairo Intl Arpt",
  //                   "code": "CAI",
  //                   "city_name": "Cairo",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-10-17T09:29:40.000Z"
  //                 }
  //               }
  //             ],
  //             "airlines": {
  //               "id": 209,
  //               "name": "Gulf Air",
  //               "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //               "createdAt": "2021-12-01T20:37:44.000Z",
  //               "updatedAt": "2021-12-01T20:37:44.000Z",
  //               "price": "USD3281.10"
  //             },
  //             "fromLocations": {
  //               "id": 138,
  //               "name": "Anfa Airport",
  //               "code": "CAS",
  //               "city_name": "Casablanca",
  //               "createdAt": "2020-10-13T10:26:41.000Z",
  //               "updatedAt": "2020-10-17T09:29:40.000Z"
  //             },
  //             "toLocations": {
  //               "id": 131,
  //               "name": "Cairo Intl Arpt",
  //               "code": "CAI",
  //               "city_name": "Cairo",
  //               "createdAt": "2020-10-13T10:26:41.000Z",
  //               "updatedAt": "2020-10-17T09:29:40.000Z"
  //             }
  //           },
  //           {
  //             "from": "CAS",
  //             "to": "CAI",
  //             "platingCarrier": "GF",
  //             "segments": [
  //               {
  //                 "from": "CMN",
  //                 "to": "CDG",
  //                 "group": 0,
  //                 "departure": "2021-12-20T08:10:00.000+01:00",
  //                 "arrival": "2021-12-20T11:25:00.000+01:00",
  //                 "airline": "AF",
  //                 "flightNumber": "1497",
  //                 "uapi_segment_ref": "MCo8k2/pWDKAG8ecBAAAAA==",
  //                 "uapiSegmentReference": "MCo8k2/pWDKAG8ecBAAAAA==",
  //                 "details": [
  //                   {
  //                     "origin": "CMN",
  //                     "originTerminal": "2",
  //                     "destination": "CDG",
  //                     "destinationTerminal": "2E",
  //                     "departure": "2021-12-20T08:10:00.000+01:00",
  //                     "flightTime": "195",
  //                     "travelTime": "895",
  //                     "equipment": "32A"
  //                   }
  //                 ],
  //                 "serviceClass": "Economy",
  //                 "plane": [
  //                   "32A"
  //                 ],
  //                 "duration": [
  //                   "195"
  //                 ],
  //                 "techStops": [],
  //                 "bookingClass": "Y",
  //                 "baggage": [
  //                   {
  //                     "units": "piece",
  //                     "amount": 2
  //                   }
  //                 ],
  //                 "fareBasisCode": "YS50BENN",
  //                 "airlines": {
  //                   "id": 114,
  //                   "name": "Air France",
  //                   "thumbnail": "http://localhost:3000/img/flights/airlines/AF.png",
  //                   "createdAt": "2021-12-01T20:37:44.000Z",
  //                   "updatedAt": "2021-12-01T20:37:44.000Z",
  //                   "price": "USD3281.10"
  //                 },
  //                 "fromLocations": {
  //                   "id": 248,
  //                   "name": "Mohamed V Arpt",
  //                   "code": "CMN",
  //                   "city_name": "Casablanca",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-10-17T09:29:40.000Z"
  //                 },
  //                 "toLocations": {
  //                   "id": 7748,
  //                   "name": "Charles De Gaulle Intl Arpt",
  //                   "code": "CDG",
  //                   "city_name": "Paris",
  //                   "createdAt": "2020-10-13T10:26:49.000Z",
  //                   "updatedAt": "2020-11-02T07:33:17.000Z"
  //                 }
  //               },
  //               {
  //                 "from": "CDG",
  //                 "to": "CAI",
  //                 "group": 0,
  //                 "departure": "2021-12-20T18:40:00.000+01:00",
  //                 "arrival": "2021-12-21T00:05:00.000+02:00",
  //                 "airline": "AF",
  //                 "flightNumber": "570",
  //                 "uapi_segment_ref": "MCo8k2/pWDKAE8ecBAAAAA==",
  //                 "uapiSegmentReference": "MCo8k2/pWDKAE8ecBAAAAA==",
  //                 "details": [
  //                   {
  //                     "origin": "CDG",
  //                     "originTerminal": "2E",
  //                     "destination": "CAI",
  //                     "destinationTerminal": "2",
  //                     "departure": "2021-12-20T18:40:00.000+01:00",
  //                     "flightTime": "265",
  //                     "travelTime": "705",
  //                     "equipment": "77W"
  //                   }
  //                 ],
  //                 "serviceClass": "Economy",
  //                 "plane": [
  //                   "77W"
  //                 ],
  //                 "duration": [
  //                   "265"
  //                 ],
  //                 "techStops": [],
  //                 "bookingClass": "Y",
  //                 "baggage": [
  //                   {
  //                     "units": "piece",
  //                     "amount": 2
  //                   }
  //                 ],
  //                 "fareBasisCode": "YS50BENN",
  //                 "airlines": {
  //                   "id": 114,
  //                   "name": "Air France",
  //                   "thumbnail": "http://localhost:3000/img/flights/airlines/AF.png",
  //                   "createdAt": "2021-12-01T20:37:44.000Z",
  //                   "updatedAt": "2021-12-01T20:37:44.000Z",
  //                   "price": "USD3281.10"
  //                 },
  //                 "fromLocations": {
  //                   "id": 7748,
  //                   "name": "Charles De Gaulle Intl Arpt",
  //                   "code": "CDG",
  //                   "city_name": "Paris",
  //                   "createdAt": "2020-10-13T10:26:49.000Z",
  //                   "updatedAt": "2020-11-02T07:33:17.000Z"
  //                 },
  //                 "toLocations": {
  //                   "id": 131,
  //                   "name": "Cairo Intl Arpt",
  //                   "code": "CAI",
  //                   "city_name": "Cairo",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-10-17T09:29:40.000Z"
  //                 }
  //               }
  //             ],
  //             "airlines": {
  //               "id": 209,
  //               "name": "Gulf Air",
  //               "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //               "createdAt": "2021-12-01T20:37:44.000Z",
  //               "updatedAt": "2021-12-01T20:37:44.000Z",
  //               "price": "USD3281.10"
  //             },
  //             "fromLocations": {
  //               "id": 138,
  //               "name": "Anfa Airport",
  //               "code": "CAS",
  //               "city_name": "Casablanca",
  //               "createdAt": "2020-10-13T10:26:41.000Z",
  //               "updatedAt": "2020-10-17T09:29:40.000Z"
  //             },
  //             "toLocations": {
  //               "id": 131,
  //               "name": "Cairo Intl Arpt",
  //               "code": "CAI",
  //               "city_name": "Cairo",
  //               "createdAt": "2020-10-13T10:26:41.000Z",
  //               "updatedAt": "2020-10-17T09:29:40.000Z"
  //             }
  //           }
  //         ],
  //         [
  //           {
  //             "from": "CAI",
  //             "to": "DXB",
  //             "platingCarrier": "GF",
  //             "segments": [
  //               {
  //                 "from": "CAI",
  //                 "to": "BAH",
  //                 "group": 1,
  //                 "departure": "2022-02-20T21:00:00.000+02:00",
  //                 "arrival": "2022-02-21T00:50:00.000+03:00",
  //                 "airline": "GF",
  //                 "flightNumber": "80",
  //                 "uapi_segment_ref": "MCo8k2/pWDKAI8ecBAAAAA==",
  //                 "uapiSegmentReference": "MCo8k2/pWDKAI8ecBAAAAA==",
  //                 "details": [
  //                   {
  //                     "origin": "CAI",
  //                     "originTerminal": "2",
  //                     "destination": "BAH",
  //                     "departure": "2022-02-20T21:00:00.000+02:00",
  //                     "flightTime": "170",
  //                     "travelTime": "310",
  //                     "equipment": "32N"
  //                   }
  //                 ],
  //                 "serviceClass": "Economy",
  //                 "plane": [
  //                   "32N"
  //                 ],
  //                 "duration": [
  //                   "170"
  //                 ],
  //                 "techStops": [],
  //                 "bookingClass": "W",
  //                 "baggage": [
  //                   {
  //                     "units": "piece",
  //                     "amount": 2
  //                   }
  //                 ],
  //                 "fareBasisCode": "YS50BENN",
  //                 "airlines": {
  //                   "id": 209,
  //                   "name": "Gulf Air",
  //                   "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //                   "createdAt": "2021-12-01T20:37:44.000Z",
  //                   "updatedAt": "2021-12-01T20:37:44.000Z",
  //                   "price": "USD3281.10"
  //                 },
  //                 "fromLocations": {
  //                   "id": 131,
  //                   "name": "Cairo Intl Arpt",
  //                   "code": "CAI",
  //                   "city_name": "Cairo",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-10-17T09:29:40.000Z"
  //                 },
  //                 "toLocations": {
  //                   "id": 337,
  //                   "name": "Bahrain Intl Arpt",
  //                   "code": "BAH",
  //                   "city_name": "Muharraq",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-11-02T07:32:41.000Z"
  //                 }
  //               },
  //               {
  //                 "from": "BAH",
  //                 "to": "DXB",
  //                 "group": 1,
  //                 "departure": "2022-02-21T01:55:00.000+03:00",
  //                 "arrival": "2022-02-21T04:10:00.000+04:00",
  //                 "airline": "GF",
  //                 "flightNumber": "500",
  //                 "uapi_segment_ref": "MCo8k2/pWDKAK8ecBAAAAA==",
  //                 "uapiSegmentReference": "MCo8k2/pWDKAK8ecBAAAAA==",
  //                 "details": [
  //                   {
  //                     "origin": "BAH",
  //                     "destination": "DXB",
  //                     "destinationTerminal": "1",
  //                     "departure": "2022-02-21T01:55:00.000+03:00",
  //                     "flightTime": "75",
  //                     "travelTime": "310",
  //                     "equipment": "32N"
  //                   }
  //                 ],
  //                 "serviceClass": "Economy",
  //                 "plane": [
  //                   "32N"
  //                 ],
  //                 "duration": [
  //                   "75"
  //                 ],
  //                 "techStops": [],
  //                 "bookingClass": "W",
  //                 "baggage": [
  //                   {
  //                     "units": "piece",
  //                     "amount": 2
  //                   }
  //                 ],
  //                 "fareBasisCode": "YS50BENN",
  //                 "airlines": {
  //                   "id": 209,
  //                   "name": "Gulf Air",
  //                   "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //                   "createdAt": "2021-12-01T20:37:44.000Z",
  //                   "updatedAt": "2021-12-01T20:37:44.000Z",
  //                   "price": "USD3281.10"
  //                 },
  //                 "fromLocations": {
  //                   "id": 337,
  //                   "name": "Bahrain Intl Arpt",
  //                   "code": "BAH",
  //                   "city_name": "Muharraq",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-11-02T07:32:41.000Z"
  //                 },
  //                 "toLocations": {
  //                   "id": 1438,
  //                   "name": "Dubai Intl Arpt",
  //                   "code": "DXB",
  //                   "city_name": "Dubai",
  //                   "createdAt": "2020-10-13T10:26:42.000Z",
  //                   "updatedAt": "2020-10-17T09:29:43.000Z"
  //                 }
  //               }
  //             ],
  //             "airlines": {
  //               "id": 209,
  //               "name": "Gulf Air",
  //               "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //               "createdAt": "2021-12-01T20:37:44.000Z",
  //               "updatedAt": "2021-12-01T20:37:44.000Z",
  //               "price": "USD3281.10"
  //             },
  //             "fromLocations": {
  //               "id": 131,
  //               "name": "Cairo Intl Arpt",
  //               "code": "CAI",
  //               "city_name": "Cairo",
  //               "createdAt": "2020-10-13T10:26:41.000Z",
  //               "updatedAt": "2020-10-17T09:29:40.000Z"
  //             },
  //             "toLocations": {
  //               "id": 1438,
  //               "name": "Dubai Intl Arpt",
  //               "code": "DXB",
  //               "city_name": "Dubai",
  //               "createdAt": "2020-10-13T10:26:42.000Z",
  //               "updatedAt": "2020-10-17T09:29:43.000Z"
  //             }
  //           },
  //           {
  //             "from": "CAI",
  //             "to": "DXB",
  //             "platingCarrier": "GF",
  //             "segments": [
  //               {
  //                 "from": "CAI",
  //                 "to": "BAH",
  //                 "group": 1,
  //                 "departure": "2022-02-20T13:55:00.000+02:00",
  //                 "arrival": "2022-02-20T17:45:00.000+03:00",
  //                 "airline": "GF",
  //                 "flightNumber": "70",
  //                 "uapi_segment_ref": "MCo8k2/pWDKAM8ecBAAAAA==",
  //                 "uapiSegmentReference": "MCo8k2/pWDKAM8ecBAAAAA==",
  //                 "details": [
  //                   {
  //                     "origin": "CAI",
  //                     "originTerminal": "2",
  //                     "destination": "BAH",
  //                     "departure": "2022-02-20T13:55:00.000+02:00",
  //                     "flightTime": "170",
  //                     "travelTime": "400",
  //                     "equipment": "321"
  //                   }
  //                 ],
  //                 "serviceClass": "Economy",
  //                 "plane": [
  //                   "321"
  //                 ],
  //                 "duration": [
  //                   "170"
  //                 ],
  //                 "techStops": [],
  //                 "bookingClass": "W",
  //                 "baggage": [
  //                   {
  //                     "units": "piece",
  //                     "amount": 2
  //                   }
  //                 ],
  //                 "fareBasisCode": "YS50BENN",
  //                 "airlines": {
  //                   "id": 209,
  //                   "name": "Gulf Air",
  //                   "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //                   "createdAt": "2021-12-01T20:37:44.000Z",
  //                   "updatedAt": "2021-12-01T20:37:44.000Z",
  //                   "price": "USD3281.10"
  //                 },
  //                 "fromLocations": {
  //                   "id": 131,
  //                   "name": "Cairo Intl Arpt",
  //                   "code": "CAI",
  //                   "city_name": "Cairo",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-10-17T09:29:40.000Z"
  //                 },
  //                 "toLocations": {
  //                   "id": 337,
  //                   "name": "Bahrain Intl Arpt",
  //                   "code": "BAH",
  //                   "city_name": "Muharraq",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-11-02T07:32:41.000Z"
  //                 }
  //               },
  //               {
  //                 "from": "BAH",
  //                 "to": "DXB",
  //                 "group": 1,
  //                 "departure": "2022-02-20T20:20:00.000+03:00",
  //                 "arrival": "2022-02-20T22:35:00.000+04:00",
  //                 "airline": "GF",
  //                 "flightNumber": "512",
  //                 "uapi_segment_ref": "MCo8k2/pWDKAO8ecBAAAAA==",
  //                 "uapiSegmentReference": "MCo8k2/pWDKAO8ecBAAAAA==",
  //                 "details": [
  //                   {
  //                     "origin": "BAH",
  //                     "destination": "DXB",
  //                     "destinationTerminal": "1",
  //                     "departure": "2022-02-20T20:20:00.000+03:00",
  //                     "flightTime": "75",
  //                     "travelTime": "400",
  //                     "equipment": "789"
  //                   }
  //                 ],
  //                 "serviceClass": "Economy",
  //                 "plane": [
  //                   "789"
  //                 ],
  //                 "duration": [
  //                   "75"
  //                 ],
  //                 "techStops": [],
  //                 "bookingClass": "W",
  //                 "baggage": [
  //                   {
  //                     "units": "piece",
  //                     "amount": 2
  //                   }
  //                 ],
  //                 "fareBasisCode": "YS50BENN",
  //                 "airlines": {
  //                   "id": 209,
  //                   "name": "Gulf Air",
  //                   "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //                   "createdAt": "2021-12-01T20:37:44.000Z",
  //                   "updatedAt": "2021-12-01T20:37:44.000Z",
  //                   "price": "USD3281.10"
  //                 },
  //                 "fromLocations": {
  //                   "id": 337,
  //                   "name": "Bahrain Intl Arpt",
  //                   "code": "BAH",
  //                   "city_name": "Muharraq",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-11-02T07:32:41.000Z"
  //                 },
  //                 "toLocations": {
  //                   "id": 1438,
  //                   "name": "Dubai Intl Arpt",
  //                   "code": "DXB",
  //                   "city_name": "Dubai",
  //                   "createdAt": "2020-10-13T10:26:42.000Z",
  //                   "updatedAt": "2020-10-17T09:29:43.000Z"
  //                 }
  //               }
  //             ],
  //             "airlines": {
  //               "id": 209,
  //               "name": "Gulf Air",
  //               "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //               "createdAt": "2021-12-01T20:37:44.000Z",
  //               "updatedAt": "2021-12-01T20:37:44.000Z",
  //               "price": "USD3281.10"
  //             },
  //             "fromLocations": {
  //               "id": 131,
  //               "name": "Cairo Intl Arpt",
  //               "code": "CAI",
  //               "city_name": "Cairo",
  //               "createdAt": "2020-10-13T10:26:41.000Z",
  //               "updatedAt": "2020-10-17T09:29:40.000Z"
  //             },
  //             "toLocations": {
  //               "id": 1438,
  //               "name": "Dubai Intl Arpt",
  //               "code": "DXB",
  //               "city_name": "Dubai",
  //               "createdAt": "2020-10-13T10:26:42.000Z",
  //               "updatedAt": "2020-10-17T09:29:43.000Z"
  //             }
  //           },
  //           {
  //             "from": "CAI",
  //             "to": "DXB",
  //             "platingCarrier": "GF",
  //             "segments": [
  //               {
  //                 "from": "CAI",
  //                 "to": "BAH",
  //                 "group": 1,
  //                 "departure": "2022-02-20T21:00:00.000+02:00",
  //                 "arrival": "2022-02-21T00:50:00.000+03:00",
  //                 "airline": "GF",
  //                 "flightNumber": "80",
  //                 "uapi_segment_ref": "MCo8k2/pWDKAI8ecBAAAAA==",
  //                 "uapiSegmentReference": "MCo8k2/pWDKAI8ecBAAAAA==",
  //                 "details": [
  //                   {
  //                     "origin": "CAI",
  //                     "originTerminal": "2",
  //                     "destination": "BAH",
  //                     "departure": "2022-02-20T21:00:00.000+02:00",
  //                     "flightTime": "170",
  //                     "travelTime": "310",
  //                     "equipment": "32N"
  //                   }
  //                 ],
  //                 "serviceClass": "Economy",
  //                 "plane": [
  //                   "32N"
  //                 ],
  //                 "duration": [
  //                   "170"
  //                 ],
  //                 "techStops": [],
  //                 "bookingClass": "W",
  //                 "baggage": [
  //                   {
  //                     "units": "piece",
  //                     "amount": 2
  //                   }
  //                 ],
  //                 "fareBasisCode": "YS50BENN",
  //                 "airlines": {
  //                   "id": 209,
  //                   "name": "Gulf Air",
  //                   "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //                   "createdAt": "2021-12-01T20:37:44.000Z",
  //                   "updatedAt": "2021-12-01T20:37:44.000Z",
  //                   "price": "USD3281.10"
  //                 },
  //                 "fromLocations": {
  //                   "id": 131,
  //                   "name": "Cairo Intl Arpt",
  //                   "code": "CAI",
  //                   "city_name": "Cairo",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-10-17T09:29:40.000Z"
  //                 },
  //                 "toLocations": {
  //                   "id": 337,
  //                   "name": "Bahrain Intl Arpt",
  //                   "code": "BAH",
  //                   "city_name": "Muharraq",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-11-02T07:32:41.000Z"
  //                 }
  //               },
  //               {
  //                 "from": "BAH",
  //                 "to": "DXB",
  //                 "group": 1,
  //                 "departure": "2022-02-21T07:15:00.000+03:00",
  //                 "arrival": "2022-02-21T09:35:00.000+04:00",
  //                 "airline": "GF",
  //                 "flightNumber": "502",
  //                 "uapi_segment_ref": "MCo8k2/pWDKAQ8ecBAAAAA==",
  //                 "uapiSegmentReference": "MCo8k2/pWDKAQ8ecBAAAAA==",
  //                 "details": [
  //                   {
  //                     "origin": "BAH",
  //                     "destination": "DXB",
  //                     "destinationTerminal": "1",
  //                     "departure": "2022-02-21T07:15:00.000+03:00",
  //                     "flightTime": "80",
  //                     "travelTime": "635",
  //                     "equipment": "32N"
  //                   }
  //                 ],
  //                 "serviceClass": "Economy",
  //                 "plane": [
  //                   "32N"
  //                 ],
  //                 "duration": [
  //                   "80"
  //                 ],
  //                 "techStops": [],
  //                 "bookingClass": "W",
  //                 "baggage": [
  //                   {
  //                     "units": "piece",
  //                     "amount": 2
  //                   }
  //                 ],
  //                 "fareBasisCode": "YS50BENN",
  //                 "airlines": {
  //                   "id": 209,
  //                   "name": "Gulf Air",
  //                   "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //                   "createdAt": "2021-12-01T20:37:44.000Z",
  //                   "updatedAt": "2021-12-01T20:37:44.000Z",
  //                   "price": "USD3281.10"
  //                 },
  //                 "fromLocations": {
  //                   "id": 337,
  //                   "name": "Bahrain Intl Arpt",
  //                   "code": "BAH",
  //                   "city_name": "Muharraq",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-11-02T07:32:41.000Z"
  //                 },
  //                 "toLocations": {
  //                   "id": 1438,
  //                   "name": "Dubai Intl Arpt",
  //                   "code": "DXB",
  //                   "city_name": "Dubai",
  //                   "createdAt": "2020-10-13T10:26:42.000Z",
  //                   "updatedAt": "2020-10-17T09:29:43.000Z"
  //                 }
  //               }
  //             ],
  //             "airlines": {
  //               "id": 209,
  //               "name": "Gulf Air",
  //               "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //               "createdAt": "2021-12-01T20:37:44.000Z",
  //               "updatedAt": "2021-12-01T20:37:44.000Z",
  //               "price": "USD3281.10"
  //             },
  //             "fromLocations": {
  //               "id": 131,
  //               "name": "Cairo Intl Arpt",
  //               "code": "CAI",
  //               "city_name": "Cairo",
  //               "createdAt": "2020-10-13T10:26:41.000Z",
  //               "updatedAt": "2020-10-17T09:29:40.000Z"
  //             },
  //             "toLocations": {
  //               "id": 1438,
  //               "name": "Dubai Intl Arpt",
  //               "code": "DXB",
  //               "city_name": "Dubai",
  //               "createdAt": "2020-10-13T10:26:42.000Z",
  //               "updatedAt": "2020-10-17T09:29:43.000Z"
  //             }
  //           },
  //           {
  //             "from": "CAI",
  //             "to": "DXB",
  //             "platingCarrier": "GF",
  //             "segments": [
  //               {
  //                 "from": "CAI",
  //                 "to": "BAH",
  //                 "group": 1,
  //                 "departure": "2022-02-20T21:00:00.000+02:00",
  //                 "arrival": "2022-02-21T00:50:00.000+03:00",
  //                 "airline": "GF",
  //                 "flightNumber": "80",
  //                 "uapi_segment_ref": "MCo8k2/pWDKAI8ecBAAAAA==",
  //                 "uapiSegmentReference": "MCo8k2/pWDKAI8ecBAAAAA==",
  //                 "details": [
  //                   {
  //                     "origin": "CAI",
  //                     "originTerminal": "2",
  //                     "destination": "BAH",
  //                     "departure": "2022-02-20T21:00:00.000+02:00",
  //                     "flightTime": "170",
  //                     "travelTime": "310",
  //                     "equipment": "32N"
  //                   }
  //                 ],
  //                 "serviceClass": "Economy",
  //                 "plane": [
  //                   "32N"
  //                 ],
  //                 "duration": [
  //                   "170"
  //                 ],
  //                 "techStops": [],
  //                 "bookingClass": "W",
  //                 "baggage": [
  //                   {
  //                     "units": "piece",
  //                     "amount": 2
  //                   }
  //                 ],
  //                 "fareBasisCode": "YS50BENN",
  //                 "airlines": {
  //                   "id": 209,
  //                   "name": "Gulf Air",
  //                   "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //                   "createdAt": "2021-12-01T20:37:44.000Z",
  //                   "updatedAt": "2021-12-01T20:37:44.000Z",
  //                   "price": "USD3281.10"
  //                 },
  //                 "fromLocations": {
  //                   "id": 131,
  //                   "name": "Cairo Intl Arpt",
  //                   "code": "CAI",
  //                   "city_name": "Cairo",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-10-17T09:29:40.000Z"
  //                 },
  //                 "toLocations": {
  //                   "id": 337,
  //                   "name": "Bahrain Intl Arpt",
  //                   "code": "BAH",
  //                   "city_name": "Muharraq",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-11-02T07:32:41.000Z"
  //                 }
  //               },
  //               {
  //                 "from": "BAH",
  //                 "to": "DXB",
  //                 "group": 1,
  //                 "departure": "2022-02-21T09:50:00.000+03:00",
  //                 "arrival": "2022-02-21T12:10:00.000+04:00",
  //                 "airline": "GF",
  //                 "flightNumber": "504",
  //                 "uapi_segment_ref": "MCo8k2/pWDKAS8ecBAAAAA==",
  //                 "uapiSegmentReference": "MCo8k2/pWDKAS8ecBAAAAA==",
  //                 "details": [
  //                   {
  //                     "origin": "BAH",
  //                     "destination": "DXB",
  //                     "destinationTerminal": "1",
  //                     "departure": "2022-02-21T09:50:00.000+03:00",
  //                     "flightTime": "80",
  //                     "travelTime": "790",
  //                     "equipment": "32N"
  //                   }
  //                 ],
  //                 "serviceClass": "Economy",
  //                 "plane": [
  //                   "32N"
  //                 ],
  //                 "duration": [
  //                   "80"
  //                 ],
  //                 "techStops": [],
  //                 "bookingClass": "W",
  //                 "baggage": [
  //                   {
  //                     "units": "piece",
  //                     "amount": 2
  //                   }
  //                 ],
  //                 "fareBasisCode": "YS50BENN",
  //                 "airlines": {
  //                   "id": 209,
  //                   "name": "Gulf Air",
  //                   "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //                   "createdAt": "2021-12-01T20:37:44.000Z",
  //                   "updatedAt": "2021-12-01T20:37:44.000Z",
  //                   "price": "USD3281.10"
  //                 },
  //                 "fromLocations": {
  //                   "id": 337,
  //                   "name": "Bahrain Intl Arpt",
  //                   "code": "BAH",
  //                   "city_name": "Muharraq",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-11-02T07:32:41.000Z"
  //                 },
  //                 "toLocations": {
  //                   "id": 1438,
  //                   "name": "Dubai Intl Arpt",
  //                   "code": "DXB",
  //                   "city_name": "Dubai",
  //                   "createdAt": "2020-10-13T10:26:42.000Z",
  //                   "updatedAt": "2020-10-17T09:29:43.000Z"
  //                 }
  //               }
  //             ],
  //             "airlines": {
  //               "id": 209,
  //               "name": "Gulf Air",
  //               "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //               "createdAt": "2021-12-01T20:37:44.000Z",
  //               "updatedAt": "2021-12-01T20:37:44.000Z",
  //               "price": "USD3281.10"
  //             },
  //             "fromLocations": {
  //               "id": 131,
  //               "name": "Cairo Intl Arpt",
  //               "code": "CAI",
  //               "city_name": "Cairo",
  //               "createdAt": "2020-10-13T10:26:41.000Z",
  //               "updatedAt": "2020-10-17T09:29:40.000Z"
  //             },
  //             "toLocations": {
  //               "id": 1438,
  //               "name": "Dubai Intl Arpt",
  //               "code": "DXB",
  //               "city_name": "Dubai",
  //               "createdAt": "2020-10-13T10:26:42.000Z",
  //               "updatedAt": "2020-10-17T09:29:43.000Z"
  //             }
  //           }
  //         ],
  //         [
  //           {
  //             "from": "DXB",
  //             "to": "AUH",
  //             "platingCarrier": "GF",
  //             "segments": [
  //               {
  //                 "from": "XNB",
  //                 "to": "AUH",
  //                 "group": 2,
  //                 "departure": "2022-03-20T03:00:00.000+04:00",
  //                 "arrival": "2022-03-20T05:00:00.000+04:00",
  //                 "airline": "EY",
  //                 "flightNumber": "5411",
  //                 "uapi_segment_ref": "MCo8k2/pWDKAY8ecBAAAAA==",
  //                 "uapiSegmentReference": "MCo8k2/pWDKAY8ecBAAAAA==",
  //                 "details": [
  //                   {
  //                     "origin": "XNB",
  //                     "destination": "AUH",
  //                     "destinationTerminal": "1",
  //                     "departure": "2022-03-20T03:00:00.000+04:00",
  //                     "flightTime": "120",
  //                     "travelTime": "120",
  //                     "equipment": "BUS"
  //                   }
  //                 ],
  //                 "serviceClass": "Economy",
  //                 "plane": [
  //                   "BUS"
  //                 ],
  //                 "duration": [
  //                   "120"
  //                 ],
  //                 "techStops": [],
  //                 "bookingClass": "V",
  //                 "baggage": [
  //                   {
  //                     "units": "piece",
  //                     "amount": 2
  //                   }
  //                 ],
  //                 "fareBasisCode": "YS50BENN",
  //                 "airlines": {
  //                   "id": 31,
  //                   "name": "Etihad Airways",
  //                   "thumbnail": "http://localhost:3000/img/flights/airlines/EY.png",
  //                   "createdAt": "2021-12-01T20:37:44.000Z",
  //                   "updatedAt": "2021-12-01T20:37:44.000Z",
  //                   "price": "USD3414.10"
  //                 },
  //                 "fromLocations": {
  //                   "id": 3100,
  //                   "name": "Dubai Bus Station Arpt",
  //                   "code": "XNB",
  //                   "city_name": "Dubai",
  //                   "createdAt": "2020-10-13T10:26:44.000Z",
  //                   "updatedAt": "2020-10-17T09:29:49.000Z"
  //                 },
  //                 "toLocations": {
  //                   "id": 308,
  //                   "name": "Dhabi Intl Arpt",
  //                   "code": "AUH",
  //                   "city_name": "Abu Dhabi",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-10-17T09:29:40.000Z"
  //                 }
  //               }
  //             ],
  //             "airlines": {
  //               "id": 209,
  //               "name": "Gulf Air",
  //               "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //               "createdAt": "2021-12-01T20:37:44.000Z",
  //               "updatedAt": "2021-12-01T20:37:44.000Z",
  //               "price": "USD3281.10"
  //             },
  //             "fromLocations": {
  //               "id": 1438,
  //               "name": "Dubai Intl Arpt",
  //               "code": "DXB",
  //               "city_name": "Dubai",
  //               "createdAt": "2020-10-13T10:26:42.000Z",
  //               "updatedAt": "2020-10-17T09:29:43.000Z"
  //             },
  //             "toLocations": {
  //               "id": 308,
  //               "name": "Dhabi Intl Arpt",
  //               "code": "AUH",
  //               "city_name": "Abu Dhabi",
  //               "createdAt": "2020-10-13T10:26:41.000Z",
  //               "updatedAt": "2020-10-17T09:29:40.000Z"
  //             }
  //           },
  //           {
  //             "from": "DXB",
  //             "to": "AUH",
  //             "platingCarrier": "GF",
  //             "segments": [
  //               {
  //                 "from": "XNB",
  //                 "to": "AUH",
  //                 "group": 2,
  //                 "departure": "2022-03-20T04:00:00.000+04:00",
  //                 "arrival": "2022-03-20T06:00:00.000+04:00",
  //                 "airline": "EY",
  //                 "flightNumber": "5413",
  //                 "uapi_segment_ref": "MCo8k2/pWDKAa8ecBAAAAA==",
  //                 "uapiSegmentReference": "MCo8k2/pWDKAa8ecBAAAAA==",
  //                 "details": [
  //                   {
  //                     "origin": "XNB",
  //                     "destination": "AUH",
  //                     "destinationTerminal": "1",
  //                     "departure": "2022-03-20T04:00:00.000+04:00",
  //                     "flightTime": "120",
  //                     "travelTime": "120",
  //                     "equipment": "BUS"
  //                   }
  //                 ],
  //                 "serviceClass": "Economy",
  //                 "plane": [
  //                   "BUS"
  //                 ],
  //                 "duration": [
  //                   "120"
  //                 ],
  //                 "techStops": [],
  //                 "bookingClass": "V",
  //                 "baggage": [
  //                   {
  //                     "units": "piece",
  //                     "amount": 2
  //                   }
  //                 ],
  //                 "fareBasisCode": "YS50BENN",
  //                 "airlines": {
  //                   "id": 31,
  //                   "name": "Etihad Airways",
  //                   "thumbnail": "http://localhost:3000/img/flights/airlines/EY.png",
  //                   "createdAt": "2021-12-01T20:37:44.000Z",
  //                   "updatedAt": "2021-12-01T20:37:44.000Z",
  //                   "price": "USD3414.10"
  //                 },
  //                 "fromLocations": {
  //                   "id": 3100,
  //                   "name": "Dubai Bus Station Arpt",
  //                   "code": "XNB",
  //                   "city_name": "Dubai",
  //                   "createdAt": "2020-10-13T10:26:44.000Z",
  //                   "updatedAt": "2020-10-17T09:29:49.000Z"
  //                 },
  //                 "toLocations": {
  //                   "id": 308,
  //                   "name": "Dhabi Intl Arpt",
  //                   "code": "AUH",
  //                   "city_name": "Abu Dhabi",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-10-17T09:29:40.000Z"
  //                 }
  //               }
  //             ],
  //             "airlines": {
  //               "id": 209,
  //               "name": "Gulf Air",
  //               "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //               "createdAt": "2021-12-01T20:37:44.000Z",
  //               "updatedAt": "2021-12-01T20:37:44.000Z",
  //               "price": "USD3281.10"
  //             },
  //             "fromLocations": {
  //               "id": 1438,
  //               "name": "Dubai Intl Arpt",
  //               "code": "DXB",
  //               "city_name": "Dubai",
  //               "createdAt": "2020-10-13T10:26:42.000Z",
  //               "updatedAt": "2020-10-17T09:29:43.000Z"
  //             },
  //             "toLocations": {
  //               "id": 308,
  //               "name": "Dhabi Intl Arpt",
  //               "code": "AUH",
  //               "city_name": "Abu Dhabi",
  //               "createdAt": "2020-10-13T10:26:41.000Z",
  //               "updatedAt": "2020-10-17T09:29:40.000Z"
  //             }
  //           },
  //           {
  //             "from": "DXB",
  //             "to": "AUH",
  //             "platingCarrier": "GF",
  //             "segments": [
  //               {
  //                 "from": "XNB",
  //                 "to": "AUH",
  //                 "group": 2,
  //                 "departure": "2022-03-20T05:00:00.000+04:00",
  //                 "arrival": "2022-03-20T07:00:00.000+04:00",
  //                 "airline": "EY",
  //                 "flightNumber": "5415",
  //                 "uapi_segment_ref": "MCo8k2/pWDKAc8ecBAAAAA==",
  //                 "uapiSegmentReference": "MCo8k2/pWDKAc8ecBAAAAA==",
  //                 "details": [
  //                   {
  //                     "origin": "XNB",
  //                     "destination": "AUH",
  //                     "destinationTerminal": "1",
  //                     "departure": "2022-03-20T05:00:00.000+04:00",
  //                     "flightTime": "120",
  //                     "travelTime": "120",
  //                     "equipment": "BUS"
  //                   }
  //                 ],
  //                 "serviceClass": "Economy",
  //                 "plane": [
  //                   "BUS"
  //                 ],
  //                 "duration": [
  //                   "120"
  //                 ],
  //                 "techStops": [],
  //                 "bookingClass": "V",
  //                 "baggage": [
  //                   {
  //                     "units": "piece",
  //                     "amount": 2
  //                   }
  //                 ],
  //                 "fareBasisCode": "YS50BENN",
  //                 "airlines": {
  //                   "id": 31,
  //                   "name": "Etihad Airways",
  //                   "thumbnail": "http://localhost:3000/img/flights/airlines/EY.png",
  //                   "createdAt": "2021-12-01T20:37:44.000Z",
  //                   "updatedAt": "2021-12-01T20:37:44.000Z",
  //                   "price": "USD3414.10"
  //                 },
  //                 "fromLocations": {
  //                   "id": 3100,
  //                   "name": "Dubai Bus Station Arpt",
  //                   "code": "XNB",
  //                   "city_name": "Dubai",
  //                   "createdAt": "2020-10-13T10:26:44.000Z",
  //                   "updatedAt": "2020-10-17T09:29:49.000Z"
  //                 },
  //                 "toLocations": {
  //                   "id": 308,
  //                   "name": "Dhabi Intl Arpt",
  //                   "code": "AUH",
  //                   "city_name": "Abu Dhabi",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-10-17T09:29:40.000Z"
  //                 }
  //               }
  //             ],
  //             "airlines": {
  //               "id": 209,
  //               "name": "Gulf Air",
  //               "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //               "createdAt": "2021-12-01T20:37:44.000Z",
  //               "updatedAt": "2021-12-01T20:37:44.000Z",
  //               "price": "USD3281.10"
  //             },
  //             "fromLocations": {
  //               "id": 1438,
  //               "name": "Dubai Intl Arpt",
  //               "code": "DXB",
  //               "city_name": "Dubai",
  //               "createdAt": "2020-10-13T10:26:42.000Z",
  //               "updatedAt": "2020-10-17T09:29:43.000Z"
  //             },
  //             "toLocations": {
  //               "id": 308,
  //               "name": "Dhabi Intl Arpt",
  //               "code": "AUH",
  //               "city_name": "Abu Dhabi",
  //               "createdAt": "2020-10-13T10:26:41.000Z",
  //               "updatedAt": "2020-10-17T09:29:40.000Z"
  //             }
  //           },
  //           {
  //             "from": "DXB",
  //             "to": "AUH",
  //             "platingCarrier": "GF",
  //             "segments": [
  //               {
  //                 "from": "XNB",
  //                 "to": "AUH",
  //                 "group": 2,
  //                 "departure": "2022-03-20T06:05:00.000+04:00",
  //                 "arrival": "2022-03-20T08:05:00.000+04:00",
  //                 "airline": "EY",
  //                 "flightNumber": "5417",
  //                 "uapi_segment_ref": "MCo8k2/pWDKAe8ecBAAAAA==",
  //                 "uapiSegmentReference": "MCo8k2/pWDKAe8ecBAAAAA==",
  //                 "details": [
  //                   {
  //                     "origin": "XNB",
  //                     "destination": "AUH",
  //                     "destinationTerminal": "1",
  //                     "departure": "2022-03-20T06:05:00.000+04:00",
  //                     "flightTime": "120",
  //                     "travelTime": "120",
  //                     "equipment": "BUS"
  //                   }
  //                 ],
  //                 "serviceClass": "Economy",
  //                 "plane": [
  //                   "BUS"
  //                 ],
  //                 "duration": [
  //                   "120"
  //                 ],
  //                 "techStops": [],
  //                 "bookingClass": "V",
  //                 "baggage": [
  //                   {
  //                     "units": "piece",
  //                     "amount": 2
  //                   }
  //                 ],
  //                 "fareBasisCode": "YS50BENN",
  //                 "airlines": {
  //                   "id": 31,
  //                   "name": "Etihad Airways",
  //                   "thumbnail": "http://localhost:3000/img/flights/airlines/EY.png",
  //                   "createdAt": "2021-12-01T20:37:44.000Z",
  //                   "updatedAt": "2021-12-01T20:37:44.000Z",
  //                   "price": "USD3414.10"
  //                 },
  //                 "fromLocations": {
  //                   "id": 3100,
  //                   "name": "Dubai Bus Station Arpt",
  //                   "code": "XNB",
  //                   "city_name": "Dubai",
  //                   "createdAt": "2020-10-13T10:26:44.000Z",
  //                   "updatedAt": "2020-10-17T09:29:49.000Z"
  //                 },
  //                 "toLocations": {
  //                   "id": 308,
  //                   "name": "Dhabi Intl Arpt",
  //                   "code": "AUH",
  //                   "city_name": "Abu Dhabi",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-10-17T09:29:40.000Z"
  //                 }
  //               }
  //             ],
  //             "airlines": {
  //               "id": 209,
  //               "name": "Gulf Air",
  //               "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //               "createdAt": "2021-12-01T20:37:44.000Z",
  //               "updatedAt": "2021-12-01T20:37:44.000Z",
  //               "price": "USD3281.10"
  //             },
  //             "fromLocations": {
  //               "id": 1438,
  //               "name": "Dubai Intl Arpt",
  //               "code": "DXB",
  //               "city_name": "Dubai",
  //               "createdAt": "2020-10-13T10:26:42.000Z",
  //               "updatedAt": "2020-10-17T09:29:43.000Z"
  //             },
  //             "toLocations": {
  //               "id": 308,
  //               "name": "Dhabi Intl Arpt",
  //               "code": "AUH",
  //               "city_name": "Abu Dhabi",
  //               "createdAt": "2020-10-13T10:26:41.000Z",
  //               "updatedAt": "2020-10-17T09:29:40.000Z"
  //             }
  //           },
  //           {
  //             "from": "DXB",
  //             "to": "AUH",
  //             "platingCarrier": "GF",
  //             "segments": [
  //               {
  //                 "from": "XNB",
  //                 "to": "AUH",
  //                 "group": 2,
  //                 "departure": "2022-03-20T10:00:00.000+04:00",
  //                 "arrival": "2022-03-20T12:00:00.000+04:00",
  //                 "airline": "EY",
  //                 "flightNumber": "5419",
  //                 "uapi_segment_ref": "MCo8k2/pWDKAg8ecBAAAAA==",
  //                 "uapiSegmentReference": "MCo8k2/pWDKAg8ecBAAAAA==",
  //                 "details": [
  //                   {
  //                     "origin": "XNB",
  //                     "destination": "AUH",
  //                     "destinationTerminal": "1",
  //                     "departure": "2022-03-20T10:00:00.000+04:00",
  //                     "flightTime": "120",
  //                     "travelTime": "120",
  //                     "equipment": "BUS"
  //                   }
  //                 ],
  //                 "serviceClass": "Economy",
  //                 "plane": [
  //                   "BUS"
  //                 ],
  //                 "duration": [
  //                   "120"
  //                 ],
  //                 "techStops": [],
  //                 "bookingClass": "V",
  //                 "baggage": [
  //                   {
  //                     "units": "piece",
  //                     "amount": 2
  //                   }
  //                 ],
  //                 "fareBasisCode": "YS50BENN",
  //                 "airlines": {
  //                   "id": 31,
  //                   "name": "Etihad Airways",
  //                   "thumbnail": "http://localhost:3000/img/flights/airlines/EY.png",
  //                   "createdAt": "2021-12-01T20:37:44.000Z",
  //                   "updatedAt": "2021-12-01T20:37:44.000Z",
  //                   "price": "USD3414.10"
  //                 },
  //                 "fromLocations": {
  //                   "id": 3100,
  //                   "name": "Dubai Bus Station Arpt",
  //                   "code": "XNB",
  //                   "city_name": "Dubai",
  //                   "createdAt": "2020-10-13T10:26:44.000Z",
  //                   "updatedAt": "2020-10-17T09:29:49.000Z"
  //                 },
  //                 "toLocations": {
  //                   "id": 308,
  //                   "name": "Dhabi Intl Arpt",
  //                   "code": "AUH",
  //                   "city_name": "Abu Dhabi",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-10-17T09:29:40.000Z"
  //                 }
  //               }
  //             ],
  //             "airlines": {
  //               "id": 209,
  //               "name": "Gulf Air",
  //               "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //               "createdAt": "2021-12-01T20:37:44.000Z",
  //               "updatedAt": "2021-12-01T20:37:44.000Z",
  //               "price": "USD3281.10"
  //             },
  //             "fromLocations": {
  //               "id": 1438,
  //               "name": "Dubai Intl Arpt",
  //               "code": "DXB",
  //               "city_name": "Dubai",
  //               "createdAt": "2020-10-13T10:26:42.000Z",
  //               "updatedAt": "2020-10-17T09:29:43.000Z"
  //             },
  //             "toLocations": {
  //               "id": 308,
  //               "name": "Dhabi Intl Arpt",
  //               "code": "AUH",
  //               "city_name": "Abu Dhabi",
  //               "createdAt": "2020-10-13T10:26:41.000Z",
  //               "updatedAt": "2020-10-17T09:29:40.000Z"
  //             }
  //           },
  //           {
  //             "from": "DXB",
  //             "to": "AUH",
  //             "platingCarrier": "GF",
  //             "segments": [
  //               {
  //                 "from": "XNB",
  //                 "to": "AUH",
  //                 "group": 2,
  //                 "departure": "2022-03-20T14:45:00.000+04:00",
  //                 "arrival": "2022-03-20T16:45:00.000+04:00",
  //                 "airline": "EY",
  //                 "flightNumber": "5421",
  //                 "uapi_segment_ref": "MCo8k2/pWDKAi8ecBAAAAA==",
  //                 "uapiSegmentReference": "MCo8k2/pWDKAi8ecBAAAAA==",
  //                 "details": [
  //                   {
  //                     "origin": "XNB",
  //                     "destination": "AUH",
  //                     "destinationTerminal": "1",
  //                     "departure": "2022-03-20T14:45:00.000+04:00",
  //                     "flightTime": "120",
  //                     "travelTime": "120",
  //                     "equipment": "BUS"
  //                   }
  //                 ],
  //                 "serviceClass": "Economy",
  //                 "plane": [
  //                   "BUS"
  //                 ],
  //                 "duration": [
  //                   "120"
  //                 ],
  //                 "techStops": [],
  //                 "bookingClass": "V",
  //                 "baggage": [
  //                   {
  //                     "units": "piece",
  //                     "amount": 2
  //                   }
  //                 ],
  //                 "fareBasisCode": "YS50BENN",
  //                 "airlines": {
  //                   "id": 31,
  //                   "name": "Etihad Airways",
  //                   "thumbnail": "http://localhost:3000/img/flights/airlines/EY.png",
  //                   "createdAt": "2021-12-01T20:37:44.000Z",
  //                   "updatedAt": "2021-12-01T20:37:44.000Z",
  //                   "price": "USD3414.10"
  //                 },
  //                 "fromLocations": {
  //                   "id": 3100,
  //                   "name": "Dubai Bus Station Arpt",
  //                   "code": "XNB",
  //                   "city_name": "Dubai",
  //                   "createdAt": "2020-10-13T10:26:44.000Z",
  //                   "updatedAt": "2020-10-17T09:29:49.000Z"
  //                 },
  //                 "toLocations": {
  //                   "id": 308,
  //                   "name": "Dhabi Intl Arpt",
  //                   "code": "AUH",
  //                   "city_name": "Abu Dhabi",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-10-17T09:29:40.000Z"
  //                 }
  //               }
  //             ],
  //             "airlines": {
  //               "id": 209,
  //               "name": "Gulf Air",
  //               "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //               "createdAt": "2021-12-01T20:37:44.000Z",
  //               "updatedAt": "2021-12-01T20:37:44.000Z",
  //               "price": "USD3281.10"
  //             },
  //             "fromLocations": {
  //               "id": 1438,
  //               "name": "Dubai Intl Arpt",
  //               "code": "DXB",
  //               "city_name": "Dubai",
  //               "createdAt": "2020-10-13T10:26:42.000Z",
  //               "updatedAt": "2020-10-17T09:29:43.000Z"
  //             },
  //             "toLocations": {
  //               "id": 308,
  //               "name": "Dhabi Intl Arpt",
  //               "code": "AUH",
  //               "city_name": "Abu Dhabi",
  //               "createdAt": "2020-10-13T10:26:41.000Z",
  //               "updatedAt": "2020-10-17T09:29:40.000Z"
  //             }
  //           },
  //           {
  //             "from": "DXB",
  //             "to": "AUH",
  //             "platingCarrier": "GF",
  //             "segments": [
  //               {
  //                 "from": "XNB",
  //                 "to": "AUH",
  //                 "group": 2,
  //                 "departure": "2022-03-20T18:00:00.000+04:00",
  //                 "arrival": "2022-03-20T20:00:00.000+04:00",
  //                 "airline": "EY",
  //                 "flightNumber": "5423",
  //                 "uapi_segment_ref": "MCo8k2/pWDKAk8ecBAAAAA==",
  //                 "uapiSegmentReference": "MCo8k2/pWDKAk8ecBAAAAA==",
  //                 "details": [
  //                   {
  //                     "origin": "XNB",
  //                     "destination": "AUH",
  //                     "destinationTerminal": "1",
  //                     "departure": "2022-03-20T18:00:00.000+04:00",
  //                     "flightTime": "120",
  //                     "travelTime": "120",
  //                     "equipment": "BUS"
  //                   }
  //                 ],
  //                 "serviceClass": "Economy",
  //                 "plane": [
  //                   "BUS"
  //                 ],
  //                 "duration": [
  //                   "120"
  //                 ],
  //                 "techStops": [],
  //                 "bookingClass": "V",
  //                 "baggage": [
  //                   {
  //                     "units": "piece",
  //                     "amount": 2
  //                   }
  //                 ],
  //                 "fareBasisCode": "YS50BENN",
  //                 "airlines": {
  //                   "id": 31,
  //                   "name": "Etihad Airways",
  //                   "thumbnail": "http://localhost:3000/img/flights/airlines/EY.png",
  //                   "createdAt": "2021-12-01T20:37:44.000Z",
  //                   "updatedAt": "2021-12-01T20:37:44.000Z",
  //                   "price": "USD3414.10"
  //                 },
  //                 "fromLocations": {
  //                   "id": 3100,
  //                   "name": "Dubai Bus Station Arpt",
  //                   "code": "XNB",
  //                   "city_name": "Dubai",
  //                   "createdAt": "2020-10-13T10:26:44.000Z",
  //                   "updatedAt": "2020-10-17T09:29:49.000Z"
  //                 },
  //                 "toLocations": {
  //                   "id": 308,
  //                   "name": "Dhabi Intl Arpt",
  //                   "code": "AUH",
  //                   "city_name": "Abu Dhabi",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-10-17T09:29:40.000Z"
  //                 }
  //               }
  //             ],
  //             "airlines": {
  //               "id": 209,
  //               "name": "Gulf Air",
  //               "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //               "createdAt": "2021-12-01T20:37:44.000Z",
  //               "updatedAt": "2021-12-01T20:37:44.000Z",
  //               "price": "USD3281.10"
  //             },
  //             "fromLocations": {
  //               "id": 1438,
  //               "name": "Dubai Intl Arpt",
  //               "code": "DXB",
  //               "city_name": "Dubai",
  //               "createdAt": "2020-10-13T10:26:42.000Z",
  //               "updatedAt": "2020-10-17T09:29:43.000Z"
  //             },
  //             "toLocations": {
  //               "id": 308,
  //               "name": "Dhabi Intl Arpt",
  //               "code": "AUH",
  //               "city_name": "Abu Dhabi",
  //               "createdAt": "2020-10-13T10:26:41.000Z",
  //               "updatedAt": "2020-10-17T09:29:40.000Z"
  //             }
  //           },
  //           {
  //             "from": "DXB",
  //             "to": "AUH",
  //             "platingCarrier": "GF",
  //             "segments": [
  //               {
  //                 "from": "XNB",
  //                 "to": "AUH",
  //                 "group": 2,
  //                 "departure": "2022-03-20T20:05:00.000+04:00",
  //                 "arrival": "2022-03-20T22:05:00.000+04:00",
  //                 "airline": "EY",
  //                 "flightNumber": "5425",
  //                 "uapi_segment_ref": "MCo8k2/pWDKAm8ecBAAAAA==",
  //                 "uapiSegmentReference": "MCo8k2/pWDKAm8ecBAAAAA==",
  //                 "details": [
  //                   {
  //                     "origin": "XNB",
  //                     "destination": "AUH",
  //                     "destinationTerminal": "1",
  //                     "departure": "2022-03-20T20:05:00.000+04:00",
  //                     "flightTime": "120",
  //                     "travelTime": "120",
  //                     "equipment": "BUS"
  //                   }
  //                 ],
  //                 "serviceClass": "Economy",
  //                 "plane": [
  //                   "BUS"
  //                 ],
  //                 "duration": [
  //                   "120"
  //                 ],
  //                 "techStops": [],
  //                 "bookingClass": "V",
  //                 "baggage": [
  //                   {
  //                     "units": "piece",
  //                     "amount": 2
  //                   }
  //                 ],
  //                 "fareBasisCode": "YS50BENN",
  //                 "airlines": {
  //                   "id": 31,
  //                   "name": "Etihad Airways",
  //                   "thumbnail": "http://localhost:3000/img/flights/airlines/EY.png",
  //                   "createdAt": "2021-12-01T20:37:44.000Z",
  //                   "updatedAt": "2021-12-01T20:37:44.000Z",
  //                   "price": "USD3414.10"
  //                 },
  //                 "fromLocations": {
  //                   "id": 3100,
  //                   "name": "Dubai Bus Station Arpt",
  //                   "code": "XNB",
  //                   "city_name": "Dubai",
  //                   "createdAt": "2020-10-13T10:26:44.000Z",
  //                   "updatedAt": "2020-10-17T09:29:49.000Z"
  //                 },
  //                 "toLocations": {
  //                   "id": 308,
  //                   "name": "Dhabi Intl Arpt",
  //                   "code": "AUH",
  //                   "city_name": "Abu Dhabi",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-10-17T09:29:40.000Z"
  //                 }
  //               }
  //             ],
  //             "airlines": {
  //               "id": 209,
  //               "name": "Gulf Air",
  //               "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //               "createdAt": "2021-12-01T20:37:44.000Z",
  //               "updatedAt": "2021-12-01T20:37:44.000Z",
  //               "price": "USD3281.10"
  //             },
  //             "fromLocations": {
  //               "id": 1438,
  //               "name": "Dubai Intl Arpt",
  //               "code": "DXB",
  //               "city_name": "Dubai",
  //               "createdAt": "2020-10-13T10:26:42.000Z",
  //               "updatedAt": "2020-10-17T09:29:43.000Z"
  //             },
  //             "toLocations": {
  //               "id": 308,
  //               "name": "Dhabi Intl Arpt",
  //               "code": "AUH",
  //               "city_name": "Abu Dhabi",
  //               "createdAt": "2020-10-13T10:26:41.000Z",
  //               "updatedAt": "2020-10-17T09:29:40.000Z"
  //             }
  //           },
  //           {
  //             "from": "DXB",
  //             "to": "AUH",
  //             "platingCarrier": "GF",
  //             "segments": [
  //               {
  //                 "from": "XNB",
  //                 "to": "AUH",
  //                 "group": 2,
  //                 "departure": "2022-03-20T21:50:00.000+04:00",
  //                 "arrival": "2022-03-20T23:50:00.000+04:00",
  //                 "airline": "EY",
  //                 "flightNumber": "5427",
  //                 "uapi_segment_ref": "MCo8k2/pWDKAo8ecBAAAAA==",
  //                 "uapiSegmentReference": "MCo8k2/pWDKAo8ecBAAAAA==",
  //                 "details": [
  //                   {
  //                     "origin": "XNB",
  //                     "destination": "AUH",
  //                     "destinationTerminal": "1",
  //                     "departure": "2022-03-20T21:50:00.000+04:00",
  //                     "flightTime": "120",
  //                     "travelTime": "120",
  //                     "equipment": "BUS"
  //                   }
  //                 ],
  //                 "serviceClass": "Economy",
  //                 "plane": [
  //                   "BUS"
  //                 ],
  //                 "duration": [
  //                   "120"
  //                 ],
  //                 "techStops": [],
  //                 "bookingClass": "V",
  //                 "baggage": [
  //                   {
  //                     "units": "piece",
  //                     "amount": 2
  //                   }
  //                 ],
  //                 "fareBasisCode": "YS50BENN",
  //                 "airlines": {
  //                   "id": 31,
  //                   "name": "Etihad Airways",
  //                   "thumbnail": "http://localhost:3000/img/flights/airlines/EY.png",
  //                   "createdAt": "2021-12-01T20:37:44.000Z",
  //                   "updatedAt": "2021-12-01T20:37:44.000Z",
  //                   "price": "USD3414.10"
  //                 },
  //                 "fromLocations": {
  //                   "id": 3100,
  //                   "name": "Dubai Bus Station Arpt",
  //                   "code": "XNB",
  //                   "city_name": "Dubai",
  //                   "createdAt": "2020-10-13T10:26:44.000Z",
  //                   "updatedAt": "2020-10-17T09:29:49.000Z"
  //                 },
  //                 "toLocations": {
  //                   "id": 308,
  //                   "name": "Dhabi Intl Arpt",
  //                   "code": "AUH",
  //                   "city_name": "Abu Dhabi",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-10-17T09:29:40.000Z"
  //                 }
  //               }
  //             ],
  //             "airlines": {
  //               "id": 209,
  //               "name": "Gulf Air",
  //               "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //               "createdAt": "2021-12-01T20:37:44.000Z",
  //               "updatedAt": "2021-12-01T20:37:44.000Z",
  //               "price": "USD3281.10"
  //             },
  //             "fromLocations": {
  //               "id": 1438,
  //               "name": "Dubai Intl Arpt",
  //               "code": "DXB",
  //               "city_name": "Dubai",
  //               "createdAt": "2020-10-13T10:26:42.000Z",
  //               "updatedAt": "2020-10-17T09:29:43.000Z"
  //             },
  //             "toLocations": {
  //               "id": 308,
  //               "name": "Dhabi Intl Arpt",
  //               "code": "AUH",
  //               "city_name": "Abu Dhabi",
  //               "createdAt": "2020-10-13T10:26:41.000Z",
  //               "updatedAt": "2020-10-17T09:29:40.000Z"
  //             }
  //           },
  //           {
  //             "from": "DXB",
  //             "to": "AUH",
  //             "platingCarrier": "GF",
  //             "segments": [
  //               {
  //                 "from": "XNB",
  //                 "to": "AUH",
  //                 "group": 2,
  //                 "departure": "2022-03-20T22:40:00.000+04:00",
  //                 "arrival": "2022-03-21T00:40:00.000+04:00",
  //                 "airline": "EY",
  //                 "flightNumber": "5429",
  //                 "uapi_segment_ref": "MCo8k2/pWDKAq8ecBAAAAA==",
  //                 "uapiSegmentReference": "MCo8k2/pWDKAq8ecBAAAAA==",
  //                 "details": [
  //                   {
  //                     "origin": "XNB",
  //                     "destination": "AUH",
  //                     "destinationTerminal": "1",
  //                     "departure": "2022-03-20T22:40:00.000+04:00",
  //                     "flightTime": "120",
  //                     "travelTime": "120",
  //                     "equipment": "BUS"
  //                   }
  //                 ],
  //                 "serviceClass": "Economy",
  //                 "plane": [
  //                   "BUS"
  //                 ],
  //                 "duration": [
  //                   "120"
  //                 ],
  //                 "techStops": [],
  //                 "bookingClass": "V",
  //                 "baggage": [
  //                   {
  //                     "units": "piece",
  //                     "amount": 2
  //                   }
  //                 ],
  //                 "fareBasisCode": "YS50BENN",
  //                 "airlines": {
  //                   "id": 31,
  //                   "name": "Etihad Airways",
  //                   "thumbnail": "http://localhost:3000/img/flights/airlines/EY.png",
  //                   "createdAt": "2021-12-01T20:37:44.000Z",
  //                   "updatedAt": "2021-12-01T20:37:44.000Z",
  //                   "price": "USD3414.10"
  //                 },
  //                 "fromLocations": {
  //                   "id": 3100,
  //                   "name": "Dubai Bus Station Arpt",
  //                   "code": "XNB",
  //                   "city_name": "Dubai",
  //                   "createdAt": "2020-10-13T10:26:44.000Z",
  //                   "updatedAt": "2020-10-17T09:29:49.000Z"
  //                 },
  //                 "toLocations": {
  //                   "id": 308,
  //                   "name": "Dhabi Intl Arpt",
  //                   "code": "AUH",
  //                   "city_name": "Abu Dhabi",
  //                   "createdAt": "2020-10-13T10:26:41.000Z",
  //                   "updatedAt": "2020-10-17T09:29:40.000Z"
  //                 }
  //               }
  //             ],
  //             "airlines": {
  //               "id": 209,
  //               "name": "Gulf Air",
  //               "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //               "createdAt": "2021-12-01T20:37:44.000Z",
  //               "updatedAt": "2021-12-01T20:37:44.000Z",
  //               "price": "USD3281.10"
  //             },
  //             "fromLocations": {
  //               "id": 1438,
  //               "name": "Dubai Intl Arpt",
  //               "code": "DXB",
  //               "city_name": "Dubai",
  //               "createdAt": "2020-10-13T10:26:42.000Z",
  //               "updatedAt": "2020-10-17T09:29:43.000Z"
  //             },
  //             "toLocations": {
  //               "id": 308,
  //               "name": "Dhabi Intl Arpt",
  //               "code": "AUH",
  //               "city_name": "Abu Dhabi",
  //               "createdAt": "2020-10-13T10:26:41.000Z",
  //               "updatedAt": "2020-10-17T09:29:40.000Z"
  //             }
  //           }
  //         ]
  //       ],
  //       "bookingComponents": [
  //         {
  //           "totalPrice": "USD3414.10",
  //           "basePrice": "MAD26345",
  //           "taxes": "USD476.10",
  //           "uapi_fare_reference": "MCo8k2/pWDKAS+ecBAAAAA=="
  //         }
  //       ],
  //       "passengerFares": {
  //         "ADT": {
  //           "totalPrice": "USD3414.10",
  //           "basePrice": "MAD26345",
  //           "equivalentBasePrice": "USD2938.00",
  //           "taxes": "USD476.10"
  //         }
  //       },
  //       "passengerCounts": {
  //         "ADT": 1
  //       },
  //       "airlines": {
  //         "id": 209,
  //         "name": "Gulf Air",
  //         "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //         "createdAt": "2021-12-01T20:37:44.000Z",
  //         "updatedAt": "2021-12-01T20:37:44.000Z",
  //         "price": "USD3281.10"
  //       }
  //     }
  //   ],
  //   "airLines": {
  //     "GF": {
  //       "id": 209,
  //       "name": "Gulf Air",
  //       "thumbnail": "http://localhost:3000/img/flights/airlines/GF.png",
  //       "createdAt": "2021-12-01T20:37:44.000Z",
  //       "updatedAt": "2021-12-01T20:37:44.000Z",
  //       "price": "USD3281.10"
  //     }
  //   },
  //   "fromLocations": {
  //     "CMN": {
  //       "id": 248,
  //       "name": "Mohamed V Arpt",
  //       "code": "CMN",
  //       "city_name": "Casablanca",
  //       "createdAt": "2020-10-13T10:26:41.000Z",
  //       "updatedAt": "2020-10-17T09:29:40.000Z"
  //     },
  //     "CDG": {
  //       "id": 7748,
  //       "name": "Charles De Gaulle Intl Arpt",
  //       "code": "CDG",
  //       "city_name": "Paris",
  //       "createdAt": "2020-10-13T10:26:49.000Z",
  //       "updatedAt": "2020-11-02T07:33:17.000Z"
  //     },
  //     "XNB": {
  //       "id": 3100,
  //       "name": "Dubai Bus Station Arpt",
  //       "code": "XNB",
  //       "city_name": "Dubai",
  //       "createdAt": "2020-10-13T10:26:44.000Z",
  //       "updatedAt": "2020-10-17T09:29:49.000Z"
  //     }
  //   },
  //   "toLocations": {
  //     "CAI": {
  //       "id": 131,
  //       "name": "Cairo Intl Arpt",
  //       "code": "CAI",
  //       "city_name": "Cairo",
  //       "createdAt": "2020-10-13T10:26:41.000Z",
  //       "updatedAt": "2020-10-17T09:29:40.000Z"
  //     },
  //     "BAH": {
  //       "id": 337,
  //       "name": "Bahrain Intl Arpt",
  //       "code": "BAH",
  //       "city_name": "Muharraq",
  //       "createdAt": "2020-10-13T10:26:41.000Z",
  //       "updatedAt": "2020-11-02T07:32:41.000Z"
  //     }
  //   },
  //   "min_prices": 3281,
  //   "max_prices": 3414
  // }

  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true)
  const [listing, setListing] = React.useState([])
  const [actualListing, setActualListing] = React.useState([])
  const [airline, setAirline] = React.useState("")

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    await setLoading(true)
    try {
      const { data } = await axios.post(`http://localhost:3001/v1/flights/list`, params);
      await setListing(data.data)
      await setActualListing(data.data)
      await setLoading(false)
    } catch (error) {
      setLoading(false)
      setListing([])
      console.error(error);
    }
  }

  const changeAirline = (airline) => {
    setAirline(airline)
    setLoading(true)
    const result = actualListing.flights.filter(flight => {
      if (flight.airlines.name == airline) return flight
    })
    setListing({ ...actualListing, flights: result })
    setLoading(false)
  }

  const handleClick = () => {
    setOpen(!open);
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 5.2,
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

  return (
    <div>

      <Toolbar />
      <div className="modify-search">
        <div className="container-fluid">
          <ul className="nav align-items-center justify-content-between">
            <li className="navbar-text left-side">
              <h4>
                {" "}
                {params.fromCity} - {params.toCity}
              </h4>
              class: <span>{params.classType}</span> Traveller: <span>{params.totalPersons}</span> Date:{" "}
              <em>{!loading && listing.flights.length} Flights Found</em>
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
            {loading && <Col md={3}>
              <aside>
                <div className='aside-header'></div>
                <div className='filter-pannel'></div>
              </aside>
            </Col>}
            {!loading && <Col md={3}>
              <Filter airline={airline} setLoading={setLoading} loading={loading} listing={listing} setListing={setListing} actualListing={actualListing} />
            </Col>}
            <Col md={9}>
              <div className="flightResultsSortingPanel ">
                <div className="swipper-wrapper">
                  <Slider {...settings}>
                    {!loading && Object.keys(listing.airLines).map((key, index) => (
                      <div key={index} style={{ width: "163.667px" }}>
                        <div onClick={() => changeAirline(listing.airLines[key].name)} className={`item-airline ${airline == listing.airLines[key].name ? 'active' : ''}`}>
                          <a target="_self" className="pia-dcoration">
                            <figure>
                              <Box component="img"
                                src={listing.airLines[key].thumbnail}
                                width="25px"
                                height="20px"
                                className="img-fluid"
                              />
                            </figure>
                            <div className="item-airline-right">
                              <span className="txtEclipse d-block float-left">
                                {listing.airLines[key].name}
                              </span>{" "}
                              <span className="price">
                                <strong className="priceTag">
                                  <em>{listing.airLines[key].price}</em>
                                </strong>
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
                {/* <div className="flightResultsSortingPanel">
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
                </div> */}
              </div>

              {loading && <div className='pannel'>
                <CircularProgress />
              </div>}

              {!loading && !listing.flights.length && <div className='pannel'>
                No hotels found
              </div>}

              {!loading && <Segment
                listing={listing}
                totalPersons={params.totalPersons}
                departureDate={params.departureDate}
                returnDate={params.returnDate}
              />}

            </Col>
          </Row>
        </div>
        <Topsection />
      </div>
    </div>
  );
}
