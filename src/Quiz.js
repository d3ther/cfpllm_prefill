import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Quiz.css"; // Assuming you have some CSS for styling

const questions = [
  {
    oldData: {
      pnr: "IJ56KL",
      flightCode: "VZ-1720",
      airlineClass: "Economy Class",
      originAirport: "Johor Bahru",
      originAirportCode: "JHB",
      destinationAirport: "Kuala Lumpur",
      destinationAirportCode: "KUL",
      departureDate: "5 September 2024",
      departureTime: "10:15",
      arrivalDate: "5 September 2024",
      arrivalTime: "11:15",
      emailDepartureDate: "Thu, 05 Sep",
      emailDepartureTime: "10:15",
      emailArrivalDate: "Thu, 05 Sep",
      emailArrivalTime: "11:15",
      flightDepartureDateTime: "2024-09-05T10:15",
      flightArrivalDateTime: "2024-09-05T11:15",
    },
    newData: {
      pnr: "IJ56KL",
      flightCode: "VZ-1722",
      departureTime: "11:30",
      departureDate: "5 September 2024",
      arrivalTime: "12:30",
      arrivalDate: "5 September 2024",
    },
    question: "Question 0",
    airline: "VZ",
    airlineName: "Vietjet Airlines",
    prefill: [
      "IJ56KL",
      "JHB",
      "KUL",
      "VZ",
      "VZ",
      "VZ-1722",
      "2024-09-05T11:30",
      "2024-09-05T12:30",
    ],
  },
  {
    oldData: {
      pnr: "V86T8W",
      flightCode: "VZ-2107",
      airlineClass: "Economy Class",
      originAirport: "Chiang Mai",
      originAirportCode: "CNX",
      destinationAirport: "Bangkok",
      destinationAirportCode: "BKK",
      departureDate: "11 June 2024",
      departureTime: "20:50",
      arrivalDate: "11 June 2024",
      arrivalTime: "22:10",
      emailDepartureDate: "Fri, 11 Jun",
      emailDepartureTime: "20:50",
      emailArrivalDate: "Fri, 11 Jun",
      emailArrivalTime: "22:10",
      flightDepartureDateTime: "2024-06-11T09:50",
      flightArrivalDateTime: "2024-06-11T22:10",
    },
    newData: {
      pnr: "V86T8W",
      flightCode: "VZ-119",
      departureTime: "22:25",
      departureDate: "11 June 2024",
      arrivalTime: "23:45",
      arrivalDate: "11 June 2024",
    },
    question: "Question 1",
    airline: "VZ",
    airlineName: "Vietjet Airlines",
    prefill: [
      "V86T8W",
      "CNX",
      "BKK",
      "VZ",
      "VZ",
      "VZ-119",
      "2024-06-11T22:25",
      "2024-06-11T23:45",
    ],
  },
  {
    oldData: {
      pnr: "A12B34",
      flightCode: "VZ-3056",
      airlineClass: "Economy Class",
      originAirport: "Phuket",
      originAirportCode: "HKT",
      destinationAirport: "Bangkok",
      destinationAirportCode: "BKK",
      departureDate: "15 July 2024",
      departureTime: "18:00",
      arrivalDate: "15 July 2024",
      arrivalTime: "19:20",
      emailDepartureDate: "Mon, 15 Jul",
      emailDepartureTime: "18:00",
      emailArrivalDate: "Mon, 15 Jul",
      emailArrivalTime: "19:20",
      flightDepartureDateTime: "2024-07-15T18:00",
      flightArrivalDateTime: "2024-07-15T19:20",
    },
    newData: {
      pnr: "A12B34",
      flightCode: "VZ-1023",
      departureTime: "19:45",
      departureDate: "15 July 2024",
      arrivalTime: "21:05",
      arrivalDate: "15 July 2024",
    },
    question: "Question 2",
    airline: "VZ",
    airlineName: "Vietjet Airlines",
    prefill: [
      "A12B34",
      "HKT",
      "BKK",
      "VZ",
      "VZ",
      "VZ-1023",
      "2024-07-15T19:45",
      "2024-07-15T21:05",
    ],
  },
  {
    oldData: {
      pnr: "C56D78",
      flightCode: "VZ-4089",
      airlineClass: "Economy Class",
      originAirport: "Hanoi",
      originAirportCode: "HAN",
      destinationAirport: "Ho Chi Minh City",
      destinationAirportCode: "SGN",
      departureDate: "20 August 2024",
      departureTime: "09:30",
      arrivalDate: "20 August 2024",
      arrivalTime: "11:30",
      emailDepartureDate: "Tue, 20 Aug",
      emailDepartureTime: "09:30",
      emailArrivalDate: "Tue, 20 Aug",
      emailArrivalTime: "11:30",
      flightDepartureDateTime: "2024-08-20T09:30",
      flightArrivalDateTime: "2024-08-20T11:30",
    },
    newData: {
      pnr: "C56D78",
      flightCode: "VZ-4089",
      departureTime: "11:50",
      departureDate: "20 August 2024",
      arrivalTime: "13:50",
      arrivalDate: "20 August 2024",
    },
    question: "Question 3", //sengaja salah
    airline: "VZ",
    airlineName: "Vietjet Airlines",
    prefill: [
      "C56D78",
      "HAN",
      "SGN",
      "VZ",
      "VZ",
      "VZ-408",
      "2024-08-20T09:30",
      "2024-08-20T11:30",
    ],
  },
  {
    oldData: {
      pnr: "HEGCVE",
      flightCode: "FY-1424",
      airlineClass: "Economy Class",
      originAirport: "Subang",
      originAirportCode: "SZB",
      destinationAirport: "Penang",
      destinationAirportCode: "PEN",
      departureDate: "1 May 2024",
      departureTime: "0645HRS",
      arrivalDate: "1 May 2024",
      arrivalTime: "0745HRS",
      emailDepartureDate: "Wed, 01 May",
      emailDepartureTime: "06:45",
      emailArrivalDate: "Wed, 01 May",
      emailArrivalTime: "07:45",
      flightDepartureDateTime: "2024-05-01T06:45",
      flightArrivalDateTime: "2024-05-01T07:45",
    },
    newData: {
      pnr: "HEGCVE",
      flightCode: "FY-1426",
      departureTime: "0735HRS",
      departureDate: "1 May 2024",
      emailDepartureDate: "Wed, 01 May",
      emailDepartureTime: "07:35",
      emailArrivalDate: "Wed, 01 May",
      emailArrivalTime: "08:35",
      flightDepartureDateTime: "2024-05-01T07:35",
      flightArrivalDateTime: "2024-05-01T08:35",
    },
    question: "Question 4", //sengaja salah
    airline: "FY",
    airlineName: "Firefly Airlines",
    prefill: [
      "HEGCVE",
      "PEN",
      "SZB",
      "FY",
      "FY",
      "FY-1426",
      "2024-05-01T07:35",
      "2024-05-01T09:35",
    ],
  },
  {
    oldData: {
      pnr: "AB12CD",
      flightCode: "FY-1530",
      airlineClass: "Economy Class",
      originAirport: "Subang",
      originAirportCode: "SZB",
      destinationAirport: "Langkawi",
      destinationAirportCode: "LGK",
      departureDate: "10 July 2024",
      departureTime: "0815HRS",
      arrivalDate: "10 July 2024",
      arrivalTime: "0915HRS",
      emailDepartureDate: "Wed, 10 Jul",
      emailDepartureTime: "08:15",
      emailArrivalDate: "Wed, 10 Jul",
      emailArrivalTime: "09:15",
      flightDepartureDateTime: "2024-07-10T08:15",
      flightArrivalDateTime: "2024-07-10T09:15",
    },
    newData: {
      pnr: "AB12CD",
      flightCode: "FY-1532",
      departureTime: "0930HRS",
      departureDate: "10 July 2024",
      emailDepartureDate: "Wed, 10 Jul",
      emailDepartureTime: "09:30",
      emailArrivalDate: "Wed, 10 Jul",
      emailArrivalTime: "10:30",
      flightDepartureDateTime: "2024-07-10T09:30",
      flightArrivalDateTime: "2024-07-10T10:30",
    },
    question: "Question 5",
    airline: "FY",
    airlineName: "Firefly Airlines",
    prefill: [
      "AB12CD",
      "SZB",
      "LGK",
      "FY",
      "FY",
      "FY-1532",
      "2024-07-10T09:30",
      "2024-07-10T10:30",
    ],
  },
  {
    oldData: {
      pnr: "EF34GH",
      flightCode: "FY-1620",
      airlineClass: "Economy Class",
      originAirport: "Penang",
      originAirportCode: "PEN",
      destinationAirport: "Kota Bharu",
      destinationAirportCode: "KBR",
      departureDate: "20 August 2024",
      departureTime: "1115HRS",
      arrivalDate: "20 August 2024",
      arrivalTime: "1215HRS",
      emailDepartureDate: "Tue, 20 Aug",
      emailDepartureTime: "11:15",
      emailArrivalDate: "Tue, 20 Aug",
      emailArrivalTime: "12:15",
      flightDepartureDateTime: "2024-08-20T11:15",
      flightArrivalDateTime: "2024-08-20T12:15",
    },
    newData: {
      pnr: "EF34GH",
      flightCode: "FY-1620",
      departureTime: "1230HRS",
      departureDate: "20 August 2024",
      emailDepartureDate: "Tue, 20 Aug",
      emailDepartureTime: "12:30",
      emailArrivalDate: "Tue, 20 Aug",
      emailArrivalTime: "13:30",
      flightDepartureDateTime: "2024-08-20T12:30",
      flightArrivalDateTime: "2024-08-20T13:30",
    },
    question: "Question 6", //sengaja salah
    airline: "FY",
    airlineName: "Firefly Airlines",
    prefill: [
      "EF34GH",
      "PEN",
      "KBR",
      "FY",
      "FY",
      "FY-1620",
      "2024-08-30T11:15",
      "2024-08-30T12:15",
    ],
  },
  {
    oldData: {
      pnr: "IJ56KL",
      flightCode: "FY-1720",
      airlineClass: "Economy Class",
      originAirport: "Johor Bahru",
      originAirportCode: "JHB",
      destinationAirport: "Kuala Lumpur",
      destinationAirportCode: "KUL",
      departureDate: "5 September 2024",
      departureTime: "1015HRS",
      arrivalDate: "5 September 2024",
      arrivalTime: "1115HRS",
      emailDepartureDate: "Thu, 05 Sep",
      emailDepartureTime: "10:15",
      emailArrivalDate: "Thu, 05 Sep",
      emailArrivalTime: "11:15",
      flightDepartureDateTime: "2024-09-05T10:15",
      flightArrivalDateTime: "2024-09-05T11:15",
    },
    newData: {
      pnr: "IJ56KL",
      flightCode: "FY-1722",
      departureTime: "1130HRS",
      departureDate: "5 September 2024",
      emailDepartureDate: "Thu, 05 Sep",
      emailDepartureTime: "11:30",
      emailArrivalDate: "Thu, 05 Sep",
      emailArrivalTime: "12:30",
      flightDepartureDateTime: "2024-09-05T11:30",
      flightArrivalDateTime: "2024-09-05T12:30",
    },
    question: "Question 7",
    airline: "FY",
    airlineName: "Firefly Airlines",
    prefill: [
      "IJ56KL",
      "JHB",
      "KUL",
      "FY",
      "FY",
      "FY-1722",
      "2024-09-05T11:30",
      "2024-09-05T12:30",
    ],
  },
  {
    oldData: {
      pnr: "N89OU6",
      flightCode: "VN-210",
      airlineClass: "Economy Class (Q)",
      originAirport: "Ho Chi Minh, Vietnam",
      originAirportCode: "SGN",
      destinationAirport: "Hanoi, Vietnam",
      destinationAirportCode: "HAN",
      departureDate: "Wednesday, 01/05/2024",
      departureTime: "10:00",
      arrivalDate: "Wednesday, 01/05/2024",
      arrivalTime: "12:15",
      emailDepartureDate: "Tue, 25 Jun",
      emailDepartureTime: "07:00",
      emailArrivalDate: "Tue, 25 Jun",
      emailArrivalTime: "07:45",
      flightDepartureDateTime: "2024-06-25T07:00",
      flightArrivalDateTime: "2024-06-25T07:45",
    },
    newData: {
      pnr: "N89OU6",
      flightCode: "VN-246",
      departureTime: "11H00",
      departureDateEN: "01MAY",
      departureDateVN: "01 THANG 05",
      emailDepartureDate: "Tue, 27 Jun",
      emailDepartureTime: "07:00",
      emailArrivalDate: "Tue, 27 Jun",
      emailArrivalTime: "07:45",
      flightDepartureDateTime: "2024-06-27T07:00",
      flightArrivalDateTime: "2024-06-27T07:45",
    },
    question: "Question 8",
    airline: "VN",
    airlineName: "Vietnam Airlines",
    prefill: [
      "N890U6",
      "SGN",
      "HAN",
      "VN",
      "VN",
      "VN-246",
      "2024-06-27T07:00",
      "2024-06-27T07:45",
    ],
  },
  {
    oldData: {
      pnr: "Y32TR9",
      flightCode: "VN-312",
      airlineClass: "Economy Class (Q)",
      originAirport: "Da Nang, Vietnam",
      originAirportCode: "DAD",
      destinationAirport: "Ho Chi Minh, Vietnam",
      destinationAirportCode: "SGN",
      departureDate: "Thursday, 15/08/2024",
      departureTime: "13:00",
      arrivalDate: "Thursday, 15/08/2024",
      arrivalTime: "14:30",
      emailDepartureDate: "Thu, 15 Aug",
      emailDepartureTime: "13:00",
      emailArrivalDate: "Thu, 15 Aug",
      emailArrivalTime: "14:30",
      flightDepartureDateTime: "2024-08-15T13:00",
      flightArrivalDateTime: "2024-08-15T14:30",
    },
    newData: {
      pnr: "Y32TR9",
      flightCode: "VN-312",
      departureTime: "14:00",
      departureDateEN: "15AUG",
      departureDateVN: "15 THANG 08",
      emailDepartureDate: "Thu, 15 Aug",
      emailDepartureTime: "14:00",
      emailArrivalDate: "Thu, 15 Aug",
      emailArrivalTime: "15:30",
      flightDepartureDateTime: "2024-08-15T14:00",
      flightArrivalDateTime: "2024-08-15T15:30",
    },
    question: "Question 9",
    airline: "VN",
    airlineName: "Vietnam Airlines",
    prefill: [
      "Y32TR9",
      "DAD",
      "SGN",
      "VN",
      "VN",
      "VN-312",
      "2024-08-15T14:00",
      "2024-08-15T15:30",
    ],
  },
  {
    oldData: {
      pnr: "F56KLM",
      flightCode: "VN-120",
      airlineClass: "Economy Class (Q)",
      originAirport: "Nha Trang, Vietnam",
      originAirportCode: "CXR",
      destinationAirport: "Hanoi, Vietnam",
      destinationAirportCode: "HAN",
      departureDate: "Friday, 20/09/2024",
      departureTime: "09:00",
      arrivalDate: "Friday, 20/09/2024",
      arrivalTime: "11:30",
      emailDepartureDate: "Fri, 20 Sep",
      emailDepartureTime: "09:00",
      emailArrivalDate: "Fri, 20 Sep",
      emailArrivalTime: "11:30",
      flightDepartureDateTime: "2024-09-20T09:00",
      flightArrivalDateTime: "2024-09-20T11:30",
    },
    newData: {
      pnr: "F56KLM",
      flightCode: "VN-120",
      departureTime: "10:00",
      departureDateEN: "20SEP",
      departureDateVN: "20 THANG 09",
      emailDepartureDate: "Fri, 20 Sep",
      emailDepartureTime: "10:00",
      emailArrivalDate: "Fri, 20 Sep",
      emailArrivalTime: "12:30",
      flightDepartureDateTime: "2024-09-20T10:00",
      flightArrivalDateTime: "2024-09-20T12:30",
    },
    question: "Question 10",
    airline: "VN",
    airlineName: "Vietnam Airlines",
    prefill: [
      "F56KLM",
      "CXR",
      "HAN",
      "VN",
      "VN",
      "VN-120",
      "2024-09-20T10:00",
      "2024-09-20T12:30",
    ],
  },
  {
    oldData: {
      pnr: "G78NOP",
      flightCode: "VN-218",
      airlineClass: "Economy Class (Q)",
      originAirport: "Ho Chi Minh, Vietnam",
      originAirportCode: "SGN",
      destinationAirport: "Da Nang, Vietnam",
      destinationAirportCode: "DAD",
      departureDate: "Sunday, 10/11/2024",
      departureTime: "15:30",
      arrivalDate: "Sunday, 10/11/2024",
      arrivalTime: "17:00",
      emailDepartureDate: "Sun, 10 Nov",
      emailDepartureTime: "15:30",
      emailArrivalDate: "Sun, 10 Nov",
      emailArrivalTime: "17:00",
      flightDepartureDateTime: "2024-11-10T15:30",
      flightArrivalDateTime: "2024-11-10T17:00",
    },
    newData: {
      pnr: "G78NOP",
      flightCode: "VN-220",
      departureTime: "16:30",
      departureDateEN: "10NOV",
      departureDateVN: "10 THANG 11",
      emailDepartureDate: "Sun, 10 Nov",
      emailDepartureTime: "16:30",
      emailArrivalDate: "Sun, 10 Nov",
      emailArrivalTime: "18:00",
      flightDepartureDateTime: "2024-11-10T16:30",
      flightArrivalDateTime: "2024-11-10T18:00",
    },
    question: "Question 11", //sengaja salah
    airline: "VN",
    airlineName: "Vietnam Airlines",
    prefill: [
      "G78NOP",
      "SGN",
      "DAD",
      "VN",
      "VN",
      "VN-218",
      "2024-11-10T16:30",
      "2024-11-10T18:00",
    ],
  },
];

// const LeftContainer = ({ textObject, titleText }) => {
//   const { text, highlight } = textObject;

//   // Split the text into words and wrap highlighted words in a span
//   const parts = text.split(new RegExp(`(${highlight.join("|")})`, "gi"));

//   return (
//     <div className="html-css-component">
//       {parts.map((part, index) => (
//         <>
//           <span
//             key={index}
//             className={highlight.includes(part) ? "highlighted" : ""}
//           >
//             {part}
//           </span>
//           <span
//             key={index}
//             className={highlight.includes(part) ? "highlighted" : ""}
//           >
//             alasjdflkajdf sentence alsdfladskjf highlighted dadskfjlask jf
//           </span>
//           <br />
//           <br />
//         </>
//       ))}
//     </div>
//   );
// };

//VZ, VN, FY

const LeftContainer = ({
  titleText,
  oldData,
  newData,
  question,
  airline,
  airlineName,
  prefill,
  screen,
}) => {
  return (
    <div className="html-css-component">
      {airline == "VZ" && (
        <FirstContainerVZ
          titleText={titleText}
          oldData={oldData}
          newData={newData}
          question={question}
          airline={airline}
          airlineName={airlineName}
          prefill={prefill}
          screen={screen}
        />
      )}
      {airline == "VN" && (
        <FirstContainerVN
          titleText={titleText}
          oldData={oldData}
          newData={newData}
          question={question}
          airline={airline}
          airlineName={airlineName}
          prefill={prefill}
          screen={screen}
        />
      )}
      {airline == "FY" && (
        <FirstContainerFY
          titleText={titleText}
          oldData={oldData}
          newData={newData}
          question={question}
          airline={airline}
          airlineName={airlineName}
          prefill={prefill}
          screen={screen}
        />
      )}
    </div>
  );
};

const FirstContainerVZ = ({
  titleText,
  oldData,
  newData,
  question,
  airline,
  airlineName,
  prefill,
  screen,
}) => {
  return (
    <div className="html-css-component">
      <div className="b-email-wrap">
        <div className style={{}}>
          <div className="b-container">
            <div className="b-header ">
              <div
                className="content-header"
                style={{ width: "100%", float: "right", textAlign: "right" }}
              >
                <img
                  src="https://s3.ap-southeast-1.amazonaws.com/vz-flight-notification-dev/uploads/eBP9Dy54uJyzO5Aag6P7pA8RT0IvW89moFSbi8Y7.png"
                  alt=""
                  width={200}
                  height={34}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="b-container">
          <div className="b-panel">
            <p style={{ textAlign: "right" }}>
              <strong>Flight Cancelled Notification</strong>
            </p>
            <p style={{ textAlign: "right" }}>
              <strong>Booking :</strong>&nbsp;{" "}
              <strong>
                <span style={{ color: "#e74c3c" }}>{oldData.pnr}</span>
              </strong>
            </p>
            <p>&nbsp;</p>
            <p>
              <strong>Dear Valued Passenger,</strong>
            </p>
            <p>
              We regret to inform you that your Thai VietJet Air flight{" "}
              <span style={{ color: "#000000" }}>
                <strong>{oldData.flightCode}</strong>
                &nbsp;from&nbsp;{" "}
                <strong>
                  {oldData.originAirport} ({oldData.originAirportCode})
                </strong>
                &nbsp; <strong>{oldData.departureTime}</strong>
                &nbsp;to&nbsp;{" "}
                <strong>
                  {oldData.destinationAirport} ({oldData.destinationAirportCode}
                  ) {oldData.arrivalTime}
                </strong>
                &nbsp;on&nbsp; <strong>{oldData.departureDate}</strong> has been
                cancelled due to " <strong>OPERATIONAL REASON</strong>
                ". Please check your new flight details below.{" "}
              </span>
            </p>
            <p>&nbsp;</p>
            <p>
              <span style={{ color: "#000000" }}>
                <strong>New Flight Details:</strong>
              </span>
            </p>
            <p>
              <span style={{ color: "#000000" }}>
                Flight Number:&nbsp; <strong>{newData.flightCode}</strong>
              </span>
            </p>
            <p>
              <span style={{ color: "#000000" }}>
                Departure Date:&nbsp; <strong>{newData.arrivalDate}</strong>
              </span>
            </p>
            <p>
              <span style={{ color: "#000000" }}>
                Depart from&nbsp;{" "}
                <strong>
                  {oldData.originAirport} ({oldData.originAirportCode}){" "}
                  {newData.departureTime}
                </strong>
                &nbsp;local time.{" "}
              </span>
            </p>
            <p>
              <span style={{ color: "#000000" }}>
                Arrival to{" "}
                <strong>
                  {oldData.destinationAirport} ({oldData.destinationAirportCode}
                  ) {newData.arrivalTime}
                </strong>
                &nbsp;local time.{" "}
              </span>
            </p>
            <p>&nbsp;</p>
            <p>
              We sincerely apologize for any inconvenience caused, and we would
              like to offer you the following service recovery options as below:
            </p>
            <p>&nbsp;</p>
            <p>
              <strong>Move Flight</strong>
            </p>
            <p>
              Passengers are entitled to move your flight one time free of
              charge to another date/time on the same route within 30 calendar
              days from the original departure date without any additional cost.
            </p>
            <p>
              To change your flight without any additional cost, please
              visit&nbsp;{" "}
              <a
                href="https://th.vietjetair.com/search-reservation"
                target="_blank"
                rel="noopener"
              >
                <span style={{ color: "#3598db" }}>
                  <strong>Manage Booking</strong>
                </span>
              </a>{" "}
              page. If there are any costs associated with changing flight fee.
              Please do not proceed and instead contact our support channels.{" "}
            </p>
            <p>&nbsp;</p>
            <p>
              <strong>Credit Shell</strong>
            </p>
            <p>
              Passengers are entitled to keep ticket value as Credit Shell to
              make payment for all booking reservation tickets and ancillary
              services; baggage payment, seat reservation and/or meal order for
              any passengers in any segment operated by Thai VietJet (VZ).
            </p>
            <p>
              In case passengers booked the ticket via Thai Vietjet channel or
              AMY Chatbot, passengers are entitled to keep ticket value as{" "}
              <a
                href="https://th.vietjetair.com/ecs"
                target="_blank"
                rel="noopener"
              >
                <span style={{ color: "#3598db" }}>
                  <strong>Electronic Credit Shell</strong>
                </span>
              </a>{" "}
              (ECS) to be use through your FUN Member account.{" "}
            </p>
            <p>
              <em>
                *Credit Shell and Electronic Credit Shell is valid for 365 days
                from the date of departure.
              </em>
            </p>
            <p>&nbsp;</p>
            <p>
              <strong>Full Refund</strong>
            </p>
            <p>
              Passengers are entitled to request{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd7j_E8hFctZW-TTFXAnnqA3-Jo6EkGGfP9EU23pBf-FTL8BA/viewform"
                target="_blank"
                rel="noopener"
              >
                <span style={{ color: "#3598db" }}>
                  <strong>Full Refund</strong>
                </span>
              </a>{" "}
              of ticket value. The refund shall be return back to the original
              payment channel which passenger has booked the reservation and the
              refund process will be within 45 days.&nbsp;{" "}
            </p>
            <p>&nbsp;</p>
            <p>
              Should you require assistance regarding the service recoveries
              above, please kindly contact our support channels below.
            </p>
            <p>&nbsp;</p>
            <p>
              Any inconvenience caused is much regretted and we look forward to
              welcoming you onboard soon.&nbsp;
            </p>
            <p>*Please disregard this email if any changes has been made.*</p>
            <p>&nbsp;</p>
            <p>Regards,</p>
            <p>Thai VietJet Air</p>
          </div>
        </div>
        <div className="b-footer" style={{ marginTop: "0px" }}>
          <div className="b-container">
            <div className="b-panel-footer">
              <p style={{ textAlign: "center", marginBottom: 0 }}>
                <em>
                  ***This is an automated message from Thai Vietjet Air. Please
                  do not reply to this message***
                </em>
              </p>
              <table
                style={{
                  width: "100%",
                  borderSpacing: "10px",
                  borderTop: "1px solid #000",
                }}
              >
                <tbody>
                  <tr>
                    <td style={{ textAlign: "center" }}>
                      <p
                        style={{ fontSize: "18px", fontWeight: 500, margin: 0 }}
                      >
                        Contact Us
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "center" }}>
                      <a
                        style={{ textDecoration: "none" }}
                        href="https://page.line.me/thaivietjet/"
                      >
                        <img
                          style={{ width: "35px", marginRight: "10px" }}
                          src="https://s3.ap-southeast-1.amazonaws.com/vz-flight-notification-dev/uploads/eoLH7elf0ET9ZTyRqepunWeX1t7h00tHpB8qXALl.png"
                          alt="icon-line"
                          height={35}
                        />
                      </a>
                      <a
                        style={{ textDecoration: "none" }}
                        href="https://www.facebook.com/VietJetThailand/"
                      >
                        <img
                          style={{ width: "35px", marginRight: "10px" }}
                          src="https://s3.ap-southeast-1.amazonaws.com/vz-flight-notification-dev/uploads/vOeTOc2fosjFajW94p39pVVgl2ch0lqDnOXLjITQ.png"
                          alt="icon-fb"
                          height={35}
                        />
                      </a>
                      <a
                        style={{ textDecoration: "none" }}
                        href="https://th.vietjetair.com/"
                      >
                        <img
                          style={{ width: "35px" }}
                          src="https://s3.ap-southeast-1.amazonaws.com/vz-flight-notification-dev/uploads/xOhzqnkbnpaZzXzhAtLCdkxApZd1clqocnW6yiw1.png"
                          alt="icon-amy"
                          height={30}
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "center" }}>
                      <div
                        className="link-item"
                        style={{
                          display: "inline",
                          padding: "5px 10px 5px 0",
                          borderRight: "2px solid #000",
                        }}
                      >
                        <a
                          style={{ color: "#000" }}
                          href="https://th.vietjetair.com/page/online-checkin"
                        >
                          Web Check-in
                        </a>
                      </div>
                      <div
                        className="link-item"
                        style={{
                          display: "inline",
                          padding: "5px 10px",
                          borderRight: "2px solid #000",
                        }}
                      >
                        <a
                          style={{ color: "#000" }}
                          href="https://th.vietjetair.com/search-reservation"
                        >
                          Manage Booking
                        </a>
                      </div>
                      <div
                        className="link-item"
                        style={{
                          display: "inline",
                          padding: "5px 10px",
                          borderRight: "2px solid #000",
                        }}
                      >
                        <a
                          style={{ color: "#000" }}
                          href="https://th.vietjetair.com/page/contact-center"
                        >
                          Customer Support
                        </a>
                      </div>
                      <div
                        className="link-item"
                        style={{ display: "inline", padding: "5px 0 5px 10px" }}
                      >
                        <a
                          style={{ color: "#000" }}
                          href="https://th.vietjetair.com/page/frequently-asked-questions"
                        >
                          FAQ
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FirstContainerVN = ({
  titleText,
  oldData,
  newData,
  question,
  airline,
  airlineName,
  prefill,
  screen,
}) => {
  return (
    <div className="html-css-component">
      <div>
        <div
          className="div"
          style={{
            width: "100%",
            margin: "0 auto",
            overflow: "hidden",
            fontFamily: '"Roboto", sans-serif',
          }}
        >
          <div className="header">
            <img
              src="https://vna-reh.ngsd.vn/images/icons/email/header.jpg"
              width="100%"
            />
          </div>
          <div className="div-2">
            <div
              style={{
                marginTop: "48px",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              <img
                src="https://vna-reh.ngsd.vn/images/icons/email/bell.png"
                width="80px"
                style={{ width: "80px", height: "80px" }}
              />
              <div style={{ marginTop: "16px", textAlign: "center" }}>
                <p
                  style={{
                    color: "#005E80",
                    fontSize: "24px",
                    lineHeight: "32px",
                    fontWeight: 500,
                    margin: 0,
                  }}
                >
                  Thông báo thay đổi lịch bay{" "}
                </p>
                <p
                  style={{
                    color: "#2C98B2",
                    fontWeight: 500,
                    lineHeight: "28px",
                    fontSize: "20px",
                    margin: 0,
                  }}
                >
                  Schedule Change Notice
                </p>
              </div>
            </div>
            <div className="div-7">
              <div
                style={{
                  fontWeight: 500,
                  fontStyle: "italic",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                <p style={{ margin: 0 }}>
                  <span style={{ color: "#005E80" }}>Kính gửi Quý khách /</span>
                  <span style={{ color: "#2C98B2" }}>
                    Dear valued customer,
                  </span>
                </p>
              </div>
              <div
                className="div-12"
                style={{ fontSize: "16px", lineHeight: "24px" }}
              >
                Vietnam Airlines xin cáo lỗi quý khách{" "}
                <span style={{ fontWeight: 600 }}>THI NGOC PHAM</span> và khách
                đi cùng, thông tin chuyến bay trong mã số đặt chỗ{" "}
                <span style={{ fontWeight: 600 }}>{oldData.pnr}</span> THAY DOI
                SANG {newData.pnr} {newData.departureDateVN}, GIO BAY MOI LA{" "}
                {newData.departureTime}.
                <span style={{ color: "rgba(27, 33, 50, 1)" }}>
                  Vui lòng liên hệ nơi mua vé hoặc
                </span>
                <span style={{ color: "rgba(0, 94, 128, 1)", fontWeight: 600 }}>
                  19001100
                </span>
                <span style={{ color: "rgba(27, 33, 50, 1)" }}>
                  nếu bạn cần hỗ trợ.
                </span>
              </div>

              <div
                className="div-15"
                style={{
                  fontSize: 16,
                  lineHeight: "24px",
                  marginTop: 16,
                  color: "rgb(73, 91, 101)",
                }}
              >
                Vietnam Airlines apologizes to{" "}
                <span style={{ fontWeight: 600 }}>THI NGOC PHAM</span> and
                accompanying passengers, the flight infomation in the booking
                code <span style={{ fontWeight: 600 }}>{oldData.pnr}</span> HAS
                BEEN CHANGE TO {newData.pnr} {newData.departureDateEN}, NEW TIME{" "}
                {newData.departureTime}. Please contact your issuing office or
                VN call center if you need support.{" "}
              </div>

              <div
                style={{
                  marginTop: "32px",
                  marginBottom: "32px",
                  width: "100%",
                }}
                id="flightInfo"
              >
                <div
                  className
                  style={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    backgroundColor: "#005E80",
                    borderRadius: "8px 8px 0px 0px",
                    border: "12px solid #005E80",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      color: "#ffffff",
                      fontSize: "16px",
                      lineHeight: "24px",
                    }}
                  >
                    Information change/ Thông tin thay đổi
                  </p>
                </div>
                <div
                  id="infoContainer"
                  style={{
                    border: "1px solid #E3EBF1",
                    borderTop: "none",
                    position: "relative",
                  }}
                >
                  <table
                    style={{
                      border: "none",
                      position: "relative",
                      zIndex: 2,
                      borderCollapse: "collapse",
                      width: "100%",
                      tableLayout: "fixed",
                    }}
                  >
                    <tbody>
                      <tr>
                        <td
                          style={{
                            padding: "16px 24px",
                            backgroundColor: "#F6F7F6",
                            width: "50%",
                          }}
                          className="after"
                        >
                          <p
                            style={{
                              borderBottom: "1px solid black",
                              paddingBottom: "16px",
                              fontSize: "18px",
                              lineHeight: "26px",
                              color: "#1B2132",
                              margin: 0,
                            }}
                          >
                            Original/Ban đầu
                          </p>
                        </td>
                        <td style={{ padding: "16px 24px", width: "50%" }}>
                          <div
                            style={{
                              borderBottom: "1px solid black",
                              paddingBottom: "16px",
                            }}
                          >
                            <table>
                              <tbody>
                                <tr>
                                  <td>
                                    <img src="https://vna-reh.ngsd.vn/images/icons/email/check.png" />
                                  </td>
                                  <td>
                                    <span
                                      className
                                      style={{
                                        marginLeft: "8px",
                                        fontSize: "18px",
                                        lineHeight: "26px",
                                        color: "#1B2132",
                                      }}
                                    >
                                      Changed/Thay đổi
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            {/* <img src="https://vna-reh.ngsd.vn/images/icons/email/check.png" style="float: left;margin-right: 10px;padding-top: 3px;"/> */}
                          </div>
                        </td>
                      </tr>
                      <tr style={{ borderTop: "1px solid #E3EBF1" }}>
                        <td
                          style={{
                            padding: "20px 24px 16px",
                            width: "50%",
                            backgroundColor: "#F6F7F6",
                          }}
                          className="after"
                        >
                          <table>
                            <tbody>
                              <tr>
                                <td
                                  style={{
                                    width: "28px",
                                    verticalAlign: "top",
                                  }}
                                >
                                  <div
                                    className="rounded-full from"
                                    style={{ textAlign: "center" }}
                                  >
                                    <img
                                      src="https://vna-reh.ngsd.vn/images/icons/email/from.png"
                                      alt=""
                                      className="from"
                                    />
                                    {/* <img src="https://vna-reh.ngsd.vn/images/icons/email/to.png" alt="" class="to"> */}
                                  </div>
                                </td>

                                <td
                                  style={{
                                    width: "50px",
                                    fontWeight: 700,
                                    verticalAlign: "top",
                                    textAlign: "center",
                                    paddingTop: "5px",
                                  }}
                                >
                                  {oldData.originAirportCode}
                                </td>

                                <td>
                                  <div
                                    className="itinerary-info"
                                    style={{ paddingTop: "5px" }}
                                  >
                                    <p
                                      style={{
                                        margin: 0,
                                        color: "#1B2132",
                                        paddingBottom: "16px",
                                      }}
                                    >
                                      {oldData.originAirport}
                                    </p>
                                    <p
                                      style={{
                                        margin: 0,
                                        color: "#1B2132",
                                        paddingBottom: "16px",
                                      }}
                                    >
                                      <span>{oldData.departureTime}</span> -{" "}
                                      {oldData.departureDate}
                                    </p>
                                    <p style={{ margin: 0, color: "#495962" }}>
                                      {oldData.flightCode}, {oldData.airline}
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table style={{ marginTop: "16px" }}>
                            <tbody>
                              <tr>
                                <td
                                  style={{
                                    width: "28px",
                                    verticalAlign: "top",
                                  }}
                                >
                                  <div
                                    className="rounded-full to"
                                    style={{ textAlign: "center" }}
                                  >
                                    {/* <img src="https://vna-reh.ngsd.vn/images/icons/email/from.png" alt="" class="from"> */}
                                    <img
                                      src="https://vna-reh.ngsd.vn/images/icons/email/to.png"
                                      alt=""
                                      className="to"
                                    />
                                  </div>
                                </td>

                                <td
                                  style={{
                                    width: "50px",
                                    fontWeight: 700,
                                    verticalAlign: "top",
                                    textAlign: "center",
                                    paddingTop: "5px",
                                  }}
                                >
                                  {oldData.destinationAirportCode}
                                </td>

                                <td style={{ paddingTop: "5px" }}>
                                  <div className="itinerary-info">
                                    <p
                                      style={{
                                        margin: 0,
                                        color: "#1B2132",
                                        paddingBottom: "16px",
                                      }}
                                    >
                                      {oldData.destinationAirport}
                                    </p>
                                    <p style={{ margin: 0, color: "#1B2132" }}>
                                      <span>{oldData.arrivalTime}</span> -{" "}
                                      {oldData.arrivalDate}
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>

                        <td
                          style={{
                            width: "50%",
                            verticalAlign: "top",
                            padding: "0 24px 16px",
                          }}
                        >
                          <div
                            className="itinerary-reason"
                            style={{
                              marginTop: "20px",
                              backgroundColor: "#F3F6FA",
                              borderRadius: "12px",
                              fontSize: "14px",
                              lineHeight: "20px",
                              border: "12px solid #F3F6FA",
                            }}
                          >
                            <p style={{ margin: 0, color: "#495962" }}>
                              The flight{" "}
                              <span
                                className="red"
                                style={{ color: "#DB221F" }}
                              >
                                HAS BEEN CHANGE TO {newData.flightCode}{" "}
                                {newData.departureDateEN}, NEW TIME{" "}
                                {newData.departureTime}
                              </span>
                              / Chuyến bay{" "}
                              <span
                                className="red"
                                style={{ color: "#DB221F" }}
                              >
                                THAY DOI SANG {newData.flightCode}{" "}
                                {newData.departureDateVN}, GIO BAY MOI LA
                                {newData.departureTime}
                              </span>
                              .{" "}
                            </p>
                            <p style={{ margin: 0, color: "#495962" }}>
                              Reason/ Lý Do:{" "}
                              <span style={{ color: "#DB8325" }}>
                                Operation/ Khai thác
                              </span>
                            </p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="div-14" style={{ marginTop: "20px" }}>
              Trân trọng cảm ơn quý khách!
            </div>
            <div className="div-14" style={{ marginBottom: "20px" }}>
              Thank you!
            </div>
            <div
              className="div-14"
              style={{ fontWeight: 600, color: "#005E80" }}
            >
              Vietnam Airlines.
            </div>
            <div
              className="div-19"
              style={{
                height: "1px",
                background: "#E3EBF1",
                width: "95%",
                margin: "20px auto",
              }}
            />
          </div>
          <div className="div-20">
            <div>
              <div className="div-22" style={{ color: "#121619" }}>
                {" "}
                Để biết thêm thông tin chi tiết và được hỗ trợ, quý khách vui
                lòng liên hệ liên hệ{" "}
                <a
                  href="https://u40801077.ct.sendgrid.net/ls/click?upn=u001.6ua2nfrtMCWkEvl5N-2BVqoF-2Fo8noz77hbmo15t8rflhn4ZtCcf3WHXJnI9cDCEfAsWcGRkjU5S0quulTjXBugbW1lJZQ3y5F-2BaurdS6RC0tXEAwNIlpdBDuOtmcxAN2UWQyI9Q27WoWJKTIHmTgzq5iC4LbbW7Fn4A7apuSiVrTGjrasLrHhMzNdU4C2Jcejx7BiTtDbcOmbAl7JyIEKxhBplpH9DUMRSJa5wkaaupbiXVaZUGvozpqSz06LZ5BH-2Brf1Kwu3N5oHYq6TYLcdUbE-2FOs396BNK7TcBl8NjcxaskLgBJ7zoCsjzxXzNl7gmKMIzFLFoUJnxXfJcwcBs3cVnnMbhDI0Fy5MR73mZU0Jb3D5D1ffkIiyHRX8KXkKq5q-2F2mmVYlc-2B2JfmdGCogbr2jBZkQXoACSOOu-2BIixAZ57lrj6afeWW1jlj41P0hoT8Rezfv7yURhUvglgjJmNnJQVJXakFOb17faaGAL50uaZXz-2BTq-2F5iWVEk1mjr-2Bt2anN0DLuA0mGwRRTj1W766zc1lgsYRvTVfHHSz9-2BCgJ6-2BQ-3DYC20_sg0UkebLMcGdmimTXOPri-2FkCk8tPfdDHFClzhewi8fo7u74BEtYIGsQ-2B7L-2B9g-2FJJxPDnHu867q-2Br2MJGw1OwM6ih-2FEPD4t7ONsPnPHviOKnwLahYLKfc4Hy3tEU4bfNogKL5mkAlBv-2BxATAWT35fd41GZT87N-2FqArJ6bhCAztk1hcU2pmKZfoTr-2ByhtiVN0Rl9JGUYEgl5fei9IGGXLg-2B8oLul9L9zznQOY2lweID6Q-3D"
                  style={{
                    textDecoration: "underline",
                    color: "rgba(0, 94, 128, 1)",
                  }}
                  target="_blank"
                >
                  {" "}
                  Chi nhánh Vietnam Airlines
                </a>
                , nơi mua vé hoặc Trung tâm chăm sóc khách hàng của Vietnam
                Airlines trước ngày khởi hành chặng bay đầu tiên trên vé.{" "}
                <ul>
                  <li style={{ marginLeft: "20px" }}>
                    Gọi trong Việt Nam: 19001100
                  </li>
                  <li style={{ marginLeft: "20px" }}>
                    Khách hàng Hội viên: 19001800
                  </li>
                  <li style={{ marginLeft: "20px" }}>
                    {" "}
                    Gọi từ nước ngoài: +84 24 38320320{" "}
                  </li>
                  <li style={{ marginLeft: "20px" }}>
                    {" "}
                    Fanpage:{" "}
                    <a
                      href="https://u40801077.ct.sendgrid.net/ls/click?upn=u001.6ua2nfrtMCWkEvl5N-2BVqoF-2Fo8noz77hbmo15t8rflhn4ZtCcf3WHXJnI9cDCEfAsWcGRkjU5S0quulTjXBugbVISXGreYPhboI9N8RTaHDaMwvXPK6WGxQ-2Bje-2BeGmOpGhkJrh-2B-2BBIhWm55DVrw-2BfzR-2FxlG4MbMhwK-2BZvfWhvtUVzL0OvhhL5F2FhI6sfuDxjGrtfODR1uRrvGEYoartMD6I2yYv2LvBywMGPF-2FtxOWdie-2F2plqLKxeNeSoN1s455-2B5kbcZYlDtkrUF21GgEhILUNMtEZQQU7LE5uUROkoM-2BYMGtEiXC08kSpttzLFdZQLU5IqMqy4k6F-2FhXnbsw2-2FvAOmdP7iXHp-2B8O8qL7hgZgra9J2Y6mZ0sPdjbjj-2BQULpNBgbMaRwwG90WokuZQ0AxyPOIJE2AFsnWpFuiXNvo98wlWOF2gnOjMCT2w3CEOeaXfuJyZT0qZGXPCjkpNuCwp13rt8z5mBS6WQx6U4wJJbnsrq2n-2BunlF-2BrwGVwSzpd6mTTPKBDE2TuHczXHVWIw-3D-3DciDa_sg0UkebLMcGdmimTXOPri-2FkCk8tPfdDHFClzhewi8fo7u74BEtYIGsQ-2B7L-2B9g-2FJJxPDnHu867q-2Br2MJGw1OwM23tsJoKs8iMETWZMk92BzfNDab08sJAXCqgvuBsXWqG-2ByD-2FVyRRmHkG58tqFlOHp-2B-2B4TKc6a-2FpTaeyny5A2er2YkxrjgZzPgekmVTwldDCaa9ZU9kTHjf1y3TXjowL2rGl2EAeoPpLZY1YtkKkwVIk-3D"
                      style={{
                        textDecoration: "underline",
                        color: "rgba(0, 94, 128, 1)",
                      }}
                      target="_blank"
                    >
                      {" "}
                      fb.com/VietnamAirlines{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="div-23"
                style={{ marginTop: "20px", color: "#121619" }}
              >
                {" "}
                Chúng tôi xin lỗi quý khách về sự bất tiện trên và mong đợi được
                chào đón quý khách trên chuyến bay của Vietnam Airlines!Trân
                trọng cám ơn quý khách!{" "}
              </div>
              <div
                className="div-24"
                style={{ marginTop: "32px", color: "#495962" }}
              >
                {" "}
                For further assistance, please kindly contact{" "}
                <a
                  href="https://u40801077.ct.sendgrid.net/ls/click?upn=u001.6ua2nfrtMCWkEvl5N-2BVqoF-2Fo8noz77hbmo15t8rflhn4ZtCcf3WHXJnI9cDCEfAsWcGRkjU5S0quulTjXBugbW1lJZQ3y5F-2BaurdS6RC0tXEAwNIlpdBDuOtmcxAN2UW3Qs3D6iDSNs3gnvsyWWRKGw5IDaByPa9-2BDNpuoGAGEj55cqrDFa3bwTBlzbbDMZzUFnmSwRhpFNflwp8aosO-2FSFBd6K-2BTnpVTOoCcp9M28qPHEJJ-2Fr6MLGXiWDpS6n6bkyFuQ5opbzZ3ySLtM29rhfEuQPkM6Rs4iitGAJdv7U8tUDCVyDMERHIlRpMysnxW36k2YcZLdEaxGRhTaRxmhTJlgjVXR99zlF1M0v34RCDlAAhxb6IXSbXoXmc-2FuJnktPUEQPac1z6W-2FsdOclP35eA53XrSKy76aoFafuTl9QNTrq8g6G-2BlUdyj-2BIrDy6Op-2F9kGqpmXlwzsAvK4p1y69ivQH5Co77yRtCHllRMR2y4PexbmSm0xurRVO6-2B9NwbSVme4CAK-2BCKVjNTrdCZDOL-2FjWqGoSSoVCcvfi26R2Av-2F7bIA6jj0kVljZ6Yyd3Ad4NVrI_sg0UkebLMcGdmimTXOPri-2FkCk8tPfdDHFClzhewi8fo7u74BEtYIGsQ-2B7L-2B9g-2FJJxPDnHu867q-2Br2MJGw1OwMzIRdf3Me5x7A8s5xAfW1syiBu13SLYWFaTAdWRh4jactJCYVQU49Som6Uni2Jl0UOmi8ShRsCey8AnTbmyYZMRP9mPfCQf9EeNOeNy8O160wQ187TK5xO19lzmC6h6-2B4s3ZS-2F23N3PMIjdmXBywAO0-3D"
                  style={{
                    textDecoration: "underline",
                    color: "rgba(0, 94, 128, 1)",
                  }}
                  target="_blank"
                >
                  {" "}
                  Vietnam Airlines' branches
                </a>
                , your place of ticket purchase or our Contact Center before
                departure date of the first flight on your tickets.{" "}
                <ul>
                  <li style={{ marginLeft: "20px" }}>
                    {" "}
                    Tel: 19001100 Call from domestic Vietnam{" "}
                  </li>
                  <li style={{ marginLeft: "20px" }}>
                    {" "}
                    Tel: 19001800 For Platinum and Gold members{" "}
                  </li>
                  <li style={{ marginLeft: "20px" }}>
                    {" "}
                    Tel: +84 24 38320320 Call from outside Vietnam{" "}
                  </li>
                  <li style={{ marginLeft: "20px" }}>
                    {" "}
                    Fanpage:{" "}
                    <a
                      href="https://u40801077.ct.sendgrid.net/ls/click?upn=u001.6ua2nfrtMCWkEvl5N-2BVqoF-2Fo8noz77hbmo15t8rflhn4ZtCcf3WHXJnI9cDCEfAsWcGRkjU5S0quulTjXBugbVISXGreYPhboI9N8RTaHDaMwvXPK6WGxQ-2Bje-2BeGmOpGhkJrh-2B-2BBIhWm55DVrw-2BfzR-2FxlG4MbMhwK-2BZvfWhvtUVzL0OvhhL5F2FhI6sfuDxjbLKE5t8NjBl-2Bssr6SIo8ctlyHrqm-2FpphQ6IoMqKPT-2FWmpZaDFNh09N6Cl6dme4VyFUNxLwQFuul1p7ZT6MnlyQ-2ByFySoQxUuxb9nM8EIyFf-2Fn3sQtAivgUJjYO-2BaNsN5dqFwDyD2V9OuJr3GjBySqzBTF-2BYmC7nsfwk9u154Dd4dUafDiUyy9VFML3II-2Bo-2B1gl2nwviWGtA7EPle4FWn4IERpCZi5oveqXs-2FhQLm0GhgrTC2Li9av3LF-2FhASzZOYlmj797gxn-2BgRTMKt2EULilSEBixWJ4dKKyQKdy2pb2l2fAYm2vm1nce7UFlvRxm8EnsgEvZcV0-2BEXt4v7a16Ag-3D-3DPYN2_sg0UkebLMcGdmimTXOPri-2FkCk8tPfdDHFClzhewi8fo7u74BEtYIGsQ-2B7L-2B9g-2FJJxPDnHu867q-2Br2MJGw1OwM2PWAI-2B4maezwvWx24Jh01rb4G9u2yjpIcr0GPxvxY2V0DuBMgEhxSV3A8Joby0k9V8jbgnUCsD3RruP7xFop2VOJ49vmDfb8rBbPQGy1slpzewNMveOnVnjvKv1Ot0SDFTaVHbF-2FRzvPb9goD3plFc-3D"
                      style={{
                        textDecoration: "underline",
                        color: "rgba(0, 94, 128, 1)",
                      }}
                      target="_blank"
                    >
                      {" "}
                      fb.com/VietnamAirlines{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="div-25"
                style={{
                  marginTop: "8px",
                  fontStyle: "italic",
                  color: "#495962",
                  fontSize: "15px",
                  lineHeight: "24px",
                }}
              >
                {" "}
                We apologize for any inconvenience and hope to receive your
                understanding. We look forward to welcoming you onboard
                soon!Thanks you!{" "}
              </div>
              <div
                style={{
                  margin: "10px 0px",
                  width: "100%",
                  border: "1px solid #E3EBF1",
                }}
              />
              <div
                style={{
                  color: "#1B2132",
                  fontStyle: "italic",
                  fontSize: "15px",
                  lineHeight: "24px",
                }}
              >
                {" "}
                Đây là email một chiều, quý khách vui lòng không phản hồi lại.
                Nếu quý khách có thêm yêu cầu, xin vui lòng liên hệ nơi mua vé.{" "}
                <br /> Trân trọng cám ơn!{" "}
              </div>
              <div
                style={{
                  color: "#495962",
                  fontStyle: "italic",
                  fontSize: "15px",
                  lineHeight: "24px",
                }}
              >
                {" "}
                This is an one-way email, please do not reply. If you have
                further requirements, please contact to issuing agent. <br />{" "}
                Thank you!{" "}
              </div>
            </div>
            <img
              loading="lazy"
              src="https://vna-reh.ngsd.vn/logo_vna.png"
              className="img-3"
              style={{ width: "180px", marginTop: "24px" }}
              width={180}
            />
          </div>
        </div>
        <div
          className="div-30"
          style={{
            textAlign: "center",
            padding: "18px 0px",
            backgroundColor: "var(--600, #00496e)",
            color: "#ffffff",
            marginTop: "24px",
          }}
        >
          © 2023 Vietnam Airlines JSC
        </div>
        <img
          src="https://u40801077.ct.sendgrid.net/wf/open?upn=u001.C-2BFG-2BF-2BHch0v7NHgFfVAw1TecIZ-2FDzyNRPKgrwMu5QaSIBEyc1ytccmQ8i82wdiE9HRzPxIqESBRvoyNKUVUJuzg8N8wbfepI3Okb6RrBTEGtJ3zPaaKpEBB492G-2FDjdRaXI5Oz-2BVYfn0u-2Flj31Z5YXoW-2BhmbwMXykW6zcmuyrd92Qsw1EloPu-2FBqZJptMq5GnojbviRkwbrWaSwvYNq8iuxeiV9cKFvUYY8gFxv3wA-3D"
          alt=""
          width={1}
          height={1}
          border={0}
          style={{
            height: "1px !important",
            width: "1px !important",
            borderWidth: "0 !important",
            marginTop: "0 !important",
            marginBottom: "0 !important",
            marginRight: "0 !important",
            marginLeft: "0 !important",
            paddingTop: "0 !important",
            paddingBottom: "0 !important",
            paddingRight: "0 !important",
            paddingLeft: "0 !important",
          }}
        />
        <p /> -- <br /> You received this message because you are subscribed to
        the Google Groups "E-ticketAirline" group. <br /> To unsubscribe from
        this group and stop receiving emails from it, send an email to{" "}
        <a href="mailto:E-ticketAirline+unsubscribe@traveloka.com">
          E-ticketAirline+unsubscribe@traveloka.com
        </a>
        . <br /> To view this discussion on the web visit{" "}
        <a href="https://groups.google.com/a/traveloka.com/d/msgid/E-ticketAirline/829201590.17583.1714492873021%40notification-gateway-5f855c5-q75qr?utm_medium=email&utm_source=footer">
          https://groups.google.com/a/traveloka.com/d/msgid/E-ticketAirline/829201590.17583.1714492873021%40notification-gateway-5f855c5-q75qr
        </a>
        . <br />
      </div>
    </div>
  );
};

const FirstContainerFY = ({
  titleText,
  oldData,
  newData,
  question,
  airline,
  airlineName,
  prefill,
  screen,
}) => {
  return (
    <div className="html-css-component">
      <div>
        <p>
          <strong style={{ fontSize: "large" }}>
            Booking reference: {oldData.pnr}
          </strong>
        </p>
        <p>
          <strong>DearMR Jirawan Chiwyai,</strong>
          <br />
          <br />
          This email is to inform you about a minor schedule change for your
          upcoming Firefly flight.
        </p>
        <p />
        <table style={{ width: "100%", borderCollapse: "collapse" }} border={2}>
          <tbody>
            <tr>
              <td style={{ width: "14.2857%", height: "64px" }}>&nbsp;</td>
              <td style={{ width: "12.74%", height: "64px" }} width={114}>
                <p style={{ textAlign: "center" }}>
                  <strong>FLIGHT NO.</strong>
                </p>
              </td>
              <td style={{ width: "32.4607%", height: "64px" }} width={155}>
                <p style={{ textAlign: "center" }}>
                  <strong>ORIGIN/DESTINATION</strong>
                </p>
              </td>
              <td style={{ width: "11.5183%", height: "64px" }} width={123}>
                <p style={{ textAlign: "center" }}>
                  <strong>DATE</strong>
                </p>
              </td>
              <td style={{ width: "11.3438%", height: "64px" }} width={100}>
                <p style={{ textAlign: "center" }}>
                  <strong>TIME</strong>
                </p>
              </td>
            </tr>
            <tr style={{ backgroundColor: "#fa9f6c" }}>
              <td
                style={{
                  width: "14.2857%",
                  height: "64px",
                  textAlign: "center",
                }}
              >
                <strong style={{ textAlign: "center" }}>NEW DEPARTURE</strong>
              </td>
              <td style={{ width: "12.74%", height: "64px" }} width={114}>
                <p style={{ textAlign: "center" }}>{newData.flightCode} </p>
              </td>
              <td style={{ width: "32.4607%", height: "64px" }} width={155}>
                <p style={{ textAlign: "center" }}>
                  {oldData.originAirportCode} - {oldData.destinationAirportCode}
                </p>
              </td>
              <td style={{ width: "11.5183%", height: "64px" }} width={123}>
                <p style={{ textAlign: "center" }}>{newData.departureDate}</p>
              </td>
              <td style={{ width: "11.3438%", height: "64px" }} width={100}>
                <p style={{ textAlign: "center" }}>{newData.departureTime}</p>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  width: "14.2857%",
                  height: "64px",
                  textAlign: "center",
                }}
              >
                <strong style={{ textAlign: "center" }}>
                  PREVIOUS DEPARTURE
                </strong>
              </td>
              <td style={{ width: "12.74%", height: "64px" }} width={114}>
                <p style={{ textAlign: "center" }}>{oldData.flightCode}</p>
              </td>
              <td style={{ width: "32.4607%", height: "64px" }} width={155}>
                <p style={{ textAlign: "center" }}>
                  {oldData.originAirportCode} - {oldData.destinationAirportCode}
                </p>
              </td>
              <td style={{ width: "11.5183%", height: "64px" }} width={123}>
                <p style={{ textAlign: "center" }}>{oldData.departureDate}</p>
              </td>
              <td style={{ width: "11.3438%", height: "64px" }} width={100}>
                <p style={{ textAlign: "center" }}>{oldData.departureTime}</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p />
        <p>
          We understand this change may affect your travel plans. We apologise
          for any inconveniences caused.
        </p>
        <p />
        <p>
          <strong>If you booked directly with Firefly Airlines:</strong>
        </p>
        <ul>
          <li>
            You don't need to take any action! Your ticket will automatically
            reflect the new departure time.
          </li>
          <li>
            For questions or concerns, you can contact our call centre at
            03-7845 4543 (between 8:00 AM and 7:00 PM) or alternatively, you can
            chat with our Live Agent at{" "}
            <a href="https://www.fireflyz.com.my/my/en/support/faq.html">
              https://www.fireflyz.com.my/my/en/support/faq.html
            </a>{" "}
            for assistance (between 9:00 AM and 6:00 PM, Monday to Friday){" "}
          </li>
          <li>
            Provide feedback through our online form:{" "}
            <a href="https://www.fireflyz.com.my/contact-us/customer-feedback">
              https://www.fireflyz.com.my/contact-us/customer-feedback
            </a>
          </li>
        </ul>
        <p>
          <strong>If you booked through a travel agent:</strong>
        </p>
        <ul>
          <li>
            Please reach out to your travel agent for assistance with any
            changes you may need to make.
          </li>
        </ul>
        <p />
        <p>
          Thank you for your understanding. We appreciate your patience and look
          forward to welcoming you onboard!
        </p>
        <p />
        <p>Sincerely,</p>
        <p />
        <p>Firefly Airlines</p>
        <p />
        <p>
          <img
            src="https://m.fireflyz.com.my/images/fysmsfooterimage.png"
            alt=""
            width={538}
            height={162}
          />
        </p>
      </div>
    </div>
  );
};

const FirstRightContainer = ({
  prefill,
  onInputChange,
  userAnswers,
  startIndex,
  endIndex,
  withCheckboxes,
  handleCheckboxChange,
  enabledFields,
}) => {
  return (
    <div className="text-fields-component">
      <div className="horizontalAlign">
        <p className="firstTextContent">Search Type</p>
        <select className="selectValues">
          <option value="PNR_SEARCH" selected>
            PNR_SEARCH
          </option>
          <option value="SINGLE_FLIGHT_SEARCH">SINGLE_FLIGHT_SEARCH</option>
          <option value="MULTIPLE_FLIGHT_SEARCH">MULTIPLE_FLIGHT_SEARCH</option>
        </select>
      </div>
      <div className="requiredContainer">
        <i className="firstTextContent">
          (<span style={{ color: "red" }}>*</span>) Required
        </i>
      </div>

      <div className="actualContentContainer">
        <p className="firstTextContent">
          PNR<span style={{ color: "red" }}>*</span>
        </p>
        <input
          type="text"
          value={userAnswers[0] !== undefined ? userAnswers[0] : prefill[0]}
          onChange={(e) => onInputChange(e, 0)}
          disabled={withCheckboxes && !enabledFields[0]}
        />
      </div>

      <div className="actualContentContainer">
        <p className="firstTextContent">
          Origin Airport<span style={{ color: "red" }}>*</span>
        </p>
        <input
          type="text"
          value={userAnswers[1] !== undefined ? userAnswers[1] : prefill[1]}
          onChange={(e) => onInputChange(e, 1)}
          disabled={withCheckboxes && !enabledFields[1]}
        />
      </div>

      <div className="actualContentContainer">
        <p className="firstTextContent">
          Destination Airport<span style={{ color: "red" }}>*</span>
        </p>
        <input
          type="text"
          value={userAnswers[2] !== undefined ? userAnswers[2] : prefill[2]}
          onChange={(e) => onInputChange(e, 2)}
          disabled={withCheckboxes && !enabledFields[2]}
        />
      </div>

      <div className="actualContentContainer">
        <p className="firstTextContent">
          Airline Code<span style={{ color: "red" }}>*</span>
        </p>
        <input
          type="text"
          value={userAnswers[3] !== undefined ? userAnswers[3] : prefill[3]}
          onChange={(e) => onInputChange(e, 3)}
          disabled={withCheckboxes && !enabledFields[3]}
        />
      </div>

      {/* {prefill.slice(startIndex, endIndex + 1).map((_, index) => (
        <div key={index}>
          <label>
            {withCheckboxes && (
              <input
                type="checkbox"
                checked={enabledFields[startIndex + index]}
                onChange={() => handleCheckboxChange(startIndex + index)}
              />
            )}
            {` Blank ${startIndex + index + 1}`}
          </label>
          <input
            type="text"
            value={
              userAnswers[startIndex + index] !== undefined
                ? userAnswers[startIndex + index]
                : prefill[startIndex + index]
            }
            onChange={(e) => onInputChange(e, startIndex + index)}
            disabled={withCheckboxes && !enabledFields[startIndex + index]}
          />
        </div>
      ))} */}
    </div>
  );
};

const SecondRightContainer = ({
  prefill,
  onInputChange,
  userAnswers,
  startIndex,
  endIndex,
  withCheckboxes,
  handleCheckboxChange,
  enabledFields,
  airline,
  oldData,
  flightDateTimeDeparture,
  setFlightDateTimeDeparture,
  flightDateTimeArrival,
  setFlightDateTimeArrival,
}) => {
  // Handle the change event of the input
  const handleChangeDateDeparture = (event) => {
    const value = event.target.value;
    if (value) {
      setFlightDateTimeDeparture(value);
      setFormattedDateDeparture(value);
    }
  };

  const handleChangeDateArrival = (event) => {
    const value = event.target.value;
    if (value) {
      setFlightDateTimeArrival(value);
      setFormattedDateArrival(value);
    }
  };

  const [dateTime, setDateTime] = useState([
    formatDateTime(oldData.flightDepartureDateTime),
    formatDateTime(oldData.flightArrivalDateTime),
    formatDateTime(prefill[6]),
    formatDateTime(prefill[7]),
  ]);

  const [formattedDateDeparture, setFormattedDateDeparture] = useState("");
  const [formattedDateArrival, setFormattedDateArrival] = useState("");

  return (
    <div className="text-fields-component">
      <div className="horizontalAlign">
        <p className="firstTextContent">Category</p>
        <select className="selectValues">
          <option value="RESCHEDULE" selected>
            RESCHEDULE
          </option>
          <option value="REROUTE">REROUTE</option>
          <option value="CANCELLATION">CANCELLATION</option>
          <option value="FORWARD">FORWARD</option>
          <option value="TERMINAL_RELOCATION">TERMINAL_RELOCATION</option>
          <option value="FORCE_MAJEURE">FORCE_MAJEURE</option>
        </select>
      </div>
      <div className="requiredContainer">
        <p className="firstTextContent title">Original Airport Info</p>
        <div className="secondScreen__horizontalContainer">
          <div className="secondScreen__contentContainer">
            <p className="firstTextContent title">Departure Airport</p>
            <p>{userAnswers[1]}</p>
          </div>
          <div className="secondScreen__contentContainer">
            <p className="firstTextContent title">Arrival Airport</p>
            <p>{userAnswers[2]}</p>
          </div>
        </div>
      </div>
      <div className="requiredContainer">
        <div className="secondScreen__horizontalContainer">
          <div className="secondScreen__contentContainer">
            <p className="firstTextContent title">Old Flight</p>
          </div>
          <div className="secondScreen__contentContainer">
            <p className="firstTextContent title">New Flight</p>
          </div>
        </div>
        <p>Tick before applying changes</p>
      </div>
      <div className="requiredContainer">
        <div className="secondScreen__horizontalContainer">
          <div className="secondScreen__contentContainer">
            <p className="firstTextContent title">Airline Code</p>
            <input type="text" value={airline} />
            <input
              type="checkbox"
              checked={enabledFields[4]}
              onChange={() => handleCheckboxChange(4)}
            />
          </div>
          <div className="secondScreen__contentContainer">
            <p className="firstTextContent title">Airline Code</p>
            <input
              type="text"
              value={userAnswers[4] !== undefined ? userAnswers[4] : prefill[4]}
              onChange={(e) => onInputChange(e, 4)}
              disabled={withCheckboxes && !enabledFields[4]}
            />
          </div>
        </div>
      </div>
      <div className="requiredContainer">
        <div className="secondScreen__horizontalContainer">
          <div className="secondScreen__contentContainer">
            <p className="firstTextContent title">Flight Code</p>
            <input type="text" value={oldData.flightCode} />
            <input
              type="checkbox"
              checked={enabledFields[5]}
              onChange={() => handleCheckboxChange(5)}
            />
          </div>
          <div className="secondScreen__contentContainer">
            <p className="firstTextContent title">Flight Code</p>
            <input
              type="text"
              value={userAnswers[5] !== undefined ? userAnswers[5] : prefill[5]}
              onChange={(e) => onInputChange(e, 5)}
              disabled={withCheckboxes && !enabledFields[5]}
            />
          </div>
        </div>
      </div>
      <div className="requiredContainer">
        <div className="secondScreen__horizontalContainer">
          <div className="secondScreen__contentContainer">
            <p className="firstTextContent title">Departure Date & Time</p>
            <input
              type="text"
              // value={setFormattedDate(oldData.flightDepartureDateTime)}
              value={dateTime[0]}
            />
            <input
              type="checkbox"
              checked={enabledFields[6]}
              onChange={() => handleCheckboxChange(6)}
            />
          </div>
          <div className="secondScreen__contentContainer">
            <p className="firstTextContent title">Departure Date & Time</p>
            <input
              type="datetime-local"
              value={
                formattedDateDeparture !== ""
                  ? formattedDateDeparture
                  : prefill[6]
              }
              onChange={handleChangeDateDeparture}
              disabled={withCheckboxes && !enabledFields[6]}
            />
          </div>
        </div>
      </div>
      <div className="requiredContainer">
        <div className="secondScreen__horizontalContainer">
          <div className="secondScreen__contentContainer">
            <p className="firstTextContent title">Arrival Date & Time</p>
            <input type="text" value={dateTime[1]} />
            <input
              type="checkbox"
              checked={enabledFields[7]}
              onChange={() => handleCheckboxChange(7)}
            />
          </div>
          <div className="secondScreen__contentContainer">
            <p className="firstTextContent title">Arrival Date & Time</p>
            <input
              type="datetime-local"
              // value={
              //   userAnswers[7] !== undefined ? userAnswers[7] : dateTime[3]
              // }
              value={
                formattedDateArrival !== "" ? formattedDateArrival : prefill[7]
              }
              onChange={handleChangeDateArrival}
              disabled={withCheckboxes && !enabledFields[7]}
            />
          </div>
        </div>
      </div>

      {/* {prefill.slice(startIndex, endIndex + 1).map((_, index) => (
        <div key={index}>
          <label>
            {withCheckboxes && (
              <input
                type="checkbox"
                checked={enabledFields[startIndex + index]}
                onChange={() => handleCheckboxChange(startIndex + index)}
              />
            )}
            {` Blank ${startIndex + index + 1}`}
          </label>
          <input
            type="text"
            value={
              userAnswers[startIndex + index] !== undefined
                ? userAnswers[startIndex + index]
                : prefill[startIndex + index]
            }
            onChange={(e) => onInputChange(e, startIndex + index)}
            disabled={withCheckboxes && !enabledFields[startIndex + index]}
          />
        </div>
      ))} */}
    </div>
  );
};

const EmailPreviewContainer = ({
  userAnswers,
  oldData,
  newData,
  question,
  airline,
  airlineName,
  prefill,
  flightDateTimeDeparture,
  flightDateTimeArrival,
}) => {
  console.log("flightDateTimeDeparture", flightDateTimeDeparture);
  const formattedFlightDateTimeDeparture = formatDate(flightDateTimeDeparture); // 01 Jun 2023
  const formattedFlightTimeDeparture = formatEmailTime(flightDateTimeDeparture); // 01:11

  const formattedFlightDateTimeArrival = formatDate(flightDateTimeArrival);
  const formattedFlightTimeArrival = formatEmailTime(flightDateTimeArrival);

  return (
    <div>
      <div className="ui top attached label found">
        <p className="emailContainer__title">0 passenger(s) excluded</p>
        <p className="emailContainer__subtitle">
          as the bookings already match the new schedule
        </p>
      </div>
      <div className="text-fields-component">
        <div class="jsx-1937648046 wcnB8G1zHlh2M_epx7eie">
          <div class="jsx-1937648046">
            <div class="Pz8OQbeub-yMNG2bBrcdk">
              <div class="_1SWssdxrJMr8C3WOUlkIE3">
                <div class="_2zyEiwrVa4jirjAshdlzha">Recipients</div>
                <button class="ui mini basic button _2DDvq8jNkxad2Y1MJA-Vu3">
                  <i aria-hidden="true" class="write icon"></i> Edit Recipients{" "}
                </button>
              </div>
              <div class="_9Yl4pfWAHx3Os73_MLAkv">
                <div class="_3slibX1bacNjyzP1U-XUj_">
                  jon.nugroho@traveloka.com &lt;X_BZRIBA&gt;
                </div>
              </div>
            </div>
            <div class="MsxKWx9ED_qoMFw_780Oa">
              <div class="_30WEd9Yz4jJR77YiiKwhuJ">Email</div>
              <div class="_2zk8_MhJX3d_SUKIGKClvv">
                <div>Customers may see different email</div>
                <div>(e.g., different original departure time)</div>
              </div>
            </div>
          </div>
          <center
            style={{
              boxSizing: "border-box",
              width: "100%",
              height: "auto",
              backgroundColor: "#EBEDEF",
            }}
          >
            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              style={{
                width: "100%",
                maxWidth: "756px",
                borderSpacing: 0,
                boxSizing: "border-box",
                WebkitTextSizeAdjust: "100%",
                msTextSizeAdjust: "100%",
                msoTableLspace: "0pt",
                msoTableRspace: "0pt",
                borderCollapse: "collapse !important",
              }}
            >
              <tbody style={{ boxSizing: "border-box" }}>
                <tr style={{ boxSizing: "border-box" }}>
                  <td
                    align="center"
                    valign="top"
                    style={{
                      boxSizing: "border-box",
                      WebkitTextSizeAdjust: "100%",
                      msTextSizeAdjust: "100%",
                      msoTableLspace: "0pt",
                      msoTableRspace: "0pt",
                      verticalAlign: "top",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "32px",
                        display: "block",
                        boxSizing: "border-box",
                        verticalAlign: "top",
                      }}
                    ></div>
                    {/* BEGIN BODY // */}
                    <table
                      border={0}
                      cellPadding={0}
                      cellSpacing={0}
                      className="templateBody"
                      style={{
                        boxSizing: "border-box",
                        WebkitTextSizeAdjust: "100%",
                        msTextSizeAdjust: "100%",
                        msoTableLspace: "0pt",
                        msoTableRspace: "0pt",
                        verticalAlign: "top",
                        backgroundColor: "#FFFFFF",
                        borderRadius: "2px",
                        WebkitBorderRadius: "2px",
                        MozBorderRadius: "2px",
                        overflow: "hidden",
                        boxShadow:
                          "0px 0px 2px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.24)",
                        margin: "auto",
                        width: "100%",
                        maxWidth: "756px",
                        borderCollapse: "collapse !important",
                      }}
                    >
                      <tbody
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "top",
                        }}
                      >
                        <tr
                          style={{
                            boxSizing: "border-box",
                            verticalAlign: "top",
                          }}
                        >
                          <td
                            valign="top"
                            style={{
                              backgroundImage:
                                "url(https://cntres-assets-ap-southeast-1-056133037349-a178b4376041780d.s3.amazonaws.com/imageResource/2021/01/28/1611807774129-fced766cd2b0831be60553e26e12a542.png)",
                              backgroundRepeat: "repeat-x no-repeat",
                              width: "100%",
                              height: "3px",
                              backgroundColor: "#ffffff",
                              display: "block",
                              boxSizing: "border-box",
                              WebkitTextSizeAdjust: "100%",
                              msTextSizeAdjust: "100%",
                              msoTableLspace: "0pt",
                              msoTableRspace: "0pt",
                              verticalAlign: "top",
                            }}
                          ></td>
                        </tr>
                        <tr
                          style={{
                            boxSizing: "border-box",
                            verticalAlign: "top",
                          }}
                        >
                          <td
                            valign="top"
                            className="bodyContent"
                            style={{
                              color: "#434343",
                              paddingLeft: "16px",
                              paddingRight: "16px",
                              paddingTop: "32px",
                              paddingBottom: "32px",
                              boxSizing: "border-box",
                              WebkitTextSizeAdjust: "100%",
                              msTextSizeAdjust: "100%",
                              msoTableLspace: "0pt",
                              msoTableRspace: "0pt",
                              verticalAlign: "top",
                              fontSize: "12px",
                              lineHeight: "16px",
                              fontWeight: 300,
                              textAlign: "left",
                            }}
                          >
                            <img
                              src="https://cntres-assets-ap-southeast-1-056133037349-a178b4376041780d.s3.amazonaws.com/imageResource/2021/01/28/1611804554890-3f80aa76cbaab04e6844340d72453ba8.png"
                              alt="Traveloka"
                              width={90}
                              style={{
                                boxSizing: "border-box",
                                msInterpolationMode: "bicubic",
                                border: 0,
                                height: "auto",
                                lineHeight: "100%",
                                outline: "none",
                                textDecoration: "none",
                                verticalAlign: "top",
                                display: "inline",
                                maxWidth: "560px",
                              }}
                            />
                            {/* Email Opener */}
                            <div
                              style={{
                                width: "100%",
                                height: "32px",
                                display: "block",
                                boxSizing: "border-box",
                                verticalAlign: "top",
                              }}
                            ></div>
                            <h1
                              style={{
                                fontWeight: "normal",
                                boxSizing: "border-box",
                                display: "block",
                                fontSize: "20px",
                                lineHeight: "100%",
                                fontStyle: "normal",
                                letterSpacing: "normal",
                                marginTop: 0,
                                marginRight: 0,
                                marginBottom: 0,
                                marginLeft: 0,
                                textAlign: "left",
                                verticalAlign: "top",
                                color: "#000000 !important",
                              }}
                            >
                              {airlineName} has modified your flight
                            </h1>
                            <div
                              style={{
                                width: "100%",
                                height: "16px",
                                display: "block",
                                boxSizing: "border-box",
                                verticalAlign: "top",
                              }}
                            ></div>
                            <div
                              style={{
                                color: "#434343",
                                fontWeight: "normal",
                                fontSize: "14px",
                                boxSizing: "border-box",
                                verticalAlign: "top",
                              }}
                            >
                              <p
                                style={{
                                  marginBottom: "12px",
                                  boxSizing: "border-box",
                                  WebkitTextSizeAdjust: "100%",
                                  msTextSizeAdjust: "100%",
                                  margin: "0px",
                                  fontStyle: "normal",
                                  fontWeight: "normal",
                                  fontSize: "12px",
                                  lineHeight: "16px",
                                  color: "#555555",
                                  verticalAlign: "top",
                                }}
                              >
                                <strong>Dear Muhammad Fajrin,</strong>
                              </p>
                              <p
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTextSizeAdjust: "100%",
                                  msTextSizeAdjust: "100%",
                                  margin: "0px",
                                  fontStyle: "normal",
                                  fontWeight: "normal",
                                  fontSize: "12px",
                                  lineHeight: "16px",
                                  color: "#555555",
                                  verticalAlign: "top",
                                }}
                              >
                                Your flight with {airlineName} from{" "}
                                {oldData.originAirport} to{" "}
                                {oldData.destinationAirport} on{" "}
                                {oldData.departureDate} has been modified due to
                                operational reasons. Please see your new flight
                                below.
                              </p>
                            </div>
                            {/* Email Opener end */}
                            {/* divider */}
                            <div
                              style={{
                                width: "100%",
                                height: "16px",
                                display: "block",
                                boxSizing: "border-box",
                                verticalAlign: "top",
                              }}
                            ></div>
                            {/* divider */}
                            {/* impacted flight context  */}
                            <table
                              className="flight-context"
                              border={0}
                              cellPadding={0}
                              cellSpacing={0}
                              style={{
                                width: "100%",
                                boxSizing: "border-box",
                                WebkitTextSizeAdjust: "100%",
                                msTextSizeAdjust: "100%",
                                msoTableLspace: "0pt",
                                msoTableRspace: "0pt",
                                verticalAlign: "top",
                                tableLayout: "fixed",
                                borderCollapse: "collapse !important",
                              }}
                            >
                              <tbody
                                style={{
                                  boxSizing: "border-box",
                                  verticalAlign: "top",
                                }}
                              >
                                <tr
                                  style={{
                                    boxSizing: "border-box",
                                    verticalAlign: "top",
                                  }}
                                >
                                  <td
                                    style={{
                                      boxSizing: "border-box",
                                      WebkitTextSizeAdjust: "100%",
                                      msTextSizeAdjust: "100%",
                                      msoTableLspace: "0pt",
                                      msoTableRspace: "0pt",
                                      verticalAlign: "top",
                                      minWidth: "350px",
                                    }}
                                  >
                                    <p
                                      className="section-title"
                                      style={{
                                        boxSizing: "border-box",
                                        WebkitTextSizeAdjust: "100%",
                                        msTextSizeAdjust: "100%",
                                        margin: "0px",
                                        fontStyle: "normal",
                                        fontWeight: 600,
                                        fontSize: "14px",
                                        lineHeight: "20px",
                                        color: "#03121A",
                                        verticalAlign: "top",
                                        textTransform: "uppercase",
                                        marginBottom: "8px",
                                      }}
                                    >
                                      Change Details
                                    </p>
                                    <div
                                      className="itinerary-wrapper"
                                      style={{
                                        boxSizing: "border-box",
                                        verticalAlign: "top",
                                        width: "100%",
                                        display: "block",
                                        textAlign: "left",
                                      }}
                                    >
                                      <div
                                        className="itinerary-item"
                                        style={{
                                          boxSizing: "border-box",
                                          verticalAlign: "top",
                                          textAlign: "left",
                                          display: "inline-block",
                                          width: "49%",
                                          marginBottom: "16px",
                                          minWidth: "350px",
                                          maxWidth: "100%",
                                          marginRight: "8px",
                                        }}
                                      >
                                        <div
                                          className="section-box"
                                          style={{
                                            boxSizing: "border-box",
                                            verticalAlign: "top",
                                            padding: "10px",
                                            width: "100%",
                                            height: "auto",
                                            background: "#FFFFFF",
                                            border: "1px solid #DADADA",
                                            borderRadius: "6px",
                                          }}
                                        >
                                          <div
                                            className="itinerary-item_summary"
                                            style={{
                                              boxSizing: "border-box",
                                              verticalAlign: "top",
                                              display: "block",
                                              marginBottom: "8px",
                                              color: "#03121A",
                                              fontWeight: 400,
                                              fontSize: "11px",
                                              lineHeight: "11px",
                                            }}
                                          >
                                            <img
                                              src="https://d3q1s0lzrazpnf.cloudfront.net/imageResource/2023/08/24/1692863866231-2639e27d194bc775b50e8b659eba2848.png"
                                              alt=""
                                              style={{
                                                boxSizing: "border-box",
                                                msInterpolationMode: "bicubic",
                                                border: 0,
                                                height: "16px",
                                                lineHeight: "100%",
                                                outline: "none",
                                                textDecoration: "none",
                                                verticalAlign: "middle",
                                                display: "inline",
                                                maxWidth: "560px",
                                                width: "16px",
                                                marginRight: "8px",
                                              }}
                                            />
                                            <div
                                              style={{
                                                boxSizing: "border-box",
                                                verticalAlign: "middle",
                                                display: "inline-block",
                                              }}
                                            >
                                              New Flight
                                            </div>
                                            <div
                                              className="indicator"
                                              style={{
                                                verticalAlign: "middle",
                                                fontWeight: 500,
                                                fontFamily:
                                                  "MuseoSans,sans-serif",
                                                fontSize: "10px",
                                                lineHeight: "10px",
                                                color: "white",
                                                background: "#FF5E1F",
                                                borderRadius: "99px",
                                                padding: "4px 8px",
                                                display: "inline-block",
                                                height: "18px",
                                                boxSizing: "border-box",
                                                marginLeft: "8px",
                                              }}
                                            >
                                              New
                                            </div>
                                          </div>
                                          {/* set have transit or not */}
                                          {/* end have transit or not */}
                                          <div
                                            style={{
                                              display: "block",
                                              boxSizing: "border-box",
                                              verticalAlign: "top",
                                            }}
                                          >
                                            <div
                                              className="section-top"
                                              style={{
                                                boxSizing: "border-box",
                                                verticalAlign: "top",
                                                marginBottom: "16px",
                                                display: "inline-block",
                                              }}
                                            >
                                              <p
                                                style={{
                                                  fontSize: "12px",
                                                  lineHeight: "20px",
                                                  letterSpacing: "0.5px",
                                                  color: "#8F8F8F",
                                                  marginBottom: "4px",
                                                  boxSizing: "border-box",
                                                  WebkitTextSizeAdjust: "100%",
                                                  msTextSizeAdjust: "100%",
                                                  margin: "0px",
                                                  fontStyle: "normal",
                                                  fontWeight: "normal",
                                                  verticalAlign: "top",
                                                }}
                                              >
                                                Departure Flight
                                              </p>
                                              <div
                                                style={{
                                                  boxSizing: "border-box",
                                                  verticalAlign: "top",
                                                }}
                                              >
                                                <img
                                                  style={{
                                                    height: "12px",
                                                    display: "inline-block",
                                                    verticalAlign: "middle",
                                                    marginRight: "4px",
                                                    boxSizing: "border-box",
                                                    msInterpolationMode:
                                                      "bicubic",
                                                    border: 0,
                                                    lineHeight: "100%",
                                                    outline: "none",
                                                    textDecoration: "none",
                                                    maxWidth: "560px",
                                                  }}
                                                  src="https://d3q1s0lzrazpnf.cloudfront.net/imageResource/2015/12/17/1450349861201-09ec8f298222a73d66e8e96aa3b918f0.png"
                                                  alt=""
                                                />
                                                <b
                                                  style={{
                                                    display: "inline-block",
                                                    verticalAlign: "middle",
                                                    fontSize: "14px",
                                                    lineHeight: "20px",
                                                    color: "#03121A",
                                                    fontWeight: 700,
                                                    boxSizing: "border-box",
                                                  }}
                                                >
                                                  {airlineName}{" "}
                                                  {newData.flightCode}
                                                </b>
                                              </div>
                                              <p
                                                style={{
                                                  fontSize: "12px",
                                                  lineHeight: "16px",
                                                  color: "#687176",
                                                  boxSizing: "border-box",
                                                  WebkitTextSizeAdjust: "100%",
                                                  msTextSizeAdjust: "100%",
                                                  margin: "0px",
                                                  fontStyle: "normal",
                                                  fontWeight: "normal",
                                                  verticalAlign: "top",
                                                }}
                                              >
                                                {oldData.airlineClass}
                                              </p>
                                            </div>
                                            <div
                                              className="section-bid"
                                              style={{
                                                boxSizing: "border-box",
                                                verticalAlign: "top",
                                                marginBottom: "24px",
                                                display: "inline-block",
                                                float: "right",
                                              }}
                                            >
                                              <p
                                                style={{
                                                  fontSize: "12px",
                                                  lineHeight: "20px",
                                                  letterSpacing: "0.5px",
                                                  color: "#8F8F8F",
                                                  marginBottom: "4px",
                                                  boxSizing: "border-box",
                                                  WebkitTextSizeAdjust: "100%",
                                                  msTextSizeAdjust: "100%",
                                                  margin: "0px",
                                                  fontStyle: "normal",
                                                  fontWeight: "normal",
                                                  verticalAlign: "top",
                                                }}
                                              >
                                                Booking Code (PNR)
                                              </p>
                                              <p
                                                className="bid"
                                                style={{
                                                  boxSizing: "border-box",
                                                  WebkitTextSizeAdjust: "100%",
                                                  msTextSizeAdjust: "100%",
                                                  margin: "0px",
                                                  fontStyle: "normal",
                                                  fontWeight: "bold",
                                                  fontSize: "12px",
                                                  lineHeight: "16px",
                                                  color: "#03121A",
                                                  verticalAlign: "top",
                                                  textAlign: "right",
                                                }}
                                              >
                                                {newData.pnr}
                                              </p>
                                            </div>
                                          </div>
                                          <div
                                            className="itinerary"
                                            style={{
                                              boxSizing: "border-box",
                                              verticalAlign: "top",
                                            }}
                                          >
                                            {/* timeline */}
                                            <div
                                              style={{
                                                marginBottom: "16px",
                                                boxSizing: "border-box",
                                                verticalAlign: "top",
                                              }}
                                            >
                                              <table
                                                style={{
                                                  width: "100%",
                                                  borderCollapse:
                                                    "collapse!important",
                                                  height: "100%",
                                                  tableLayout: "fixed",
                                                  boxSizing: "border-box",
                                                  WebkitTextSizeAdjust: "100%",
                                                  msTextSizeAdjust: "100%",
                                                  msoTableLspace: "0pt",
                                                  msoTableRspace: "0pt",
                                                  verticalAlign: "top",
                                                }}
                                                cellPadding={0}
                                                cellSpacing={0}
                                              >
                                                <tbody
                                                  style={{
                                                    boxSizing: "border-box",
                                                    verticalAlign: "top",
                                                  }}
                                                >
                                                  <tr
                                                    style={{
                                                      boxSizing: "border-box",
                                                      verticalAlign: "top",
                                                    }}
                                                  >
                                                    <td
                                                      style={{
                                                        width: "86px",
                                                        verticalAlign: "top",
                                                        boxSizing: "border-box",
                                                        WebkitTextSizeAdjust:
                                                          "100%",
                                                        msTextSizeAdjust:
                                                          "100%",
                                                        msoTableLspace: "0pt",
                                                        msoTableRspace: "0pt",
                                                        minWidth: "320px",
                                                      }}
                                                    >
                                                      <b
                                                        style={{
                                                          fontSize: "14px",
                                                          color: "#434343",
                                                          boxSizing:
                                                            "border-box",
                                                          fontWeight: 700,
                                                          verticalAlign: "top",
                                                        }}
                                                      >
                                                        {
                                                          formattedFlightTimeDeparture
                                                        }
                                                      </b>
                                                      <div
                                                        style={{
                                                          fontSize: "12px",
                                                          color: "#8f8f8f",
                                                          boxSizing:
                                                            "border-box",
                                                          verticalAlign: "top",
                                                        }}
                                                      >
                                                        {
                                                          formattedFlightDateTimeDeparture
                                                        }
                                                      </div>
                                                    </td>
                                                    <td
                                                      valign="top"
                                                      style={{
                                                        position: "relative",
                                                        verticalAlign: "top",
                                                        width: "12px",
                                                        boxSizing: "border-box",
                                                        WebkitTextSizeAdjust:
                                                          "100%",
                                                        msTextSizeAdjust:
                                                          "100%",
                                                        msoTableLspace: "0pt",
                                                        msoTableRspace: "0pt",
                                                        minWidth: "320px",
                                                      }}
                                                    >
                                                      <div
                                                        style={{
                                                          position: "relative",
                                                          paddingTop: "6px",
                                                          boxSizing:
                                                            "border-box",
                                                          verticalAlign: "top",
                                                        }}
                                                      >
                                                        <div
                                                          style={{
                                                            width: "12px",
                                                            height: "12px",
                                                            border:
                                                              "2px solid #1ba0e2",
                                                            backgroundColor:
                                                              "white",
                                                            borderRadius:
                                                              "12px",
                                                            boxSizing:
                                                              "border-box",
                                                            verticalAlign:
                                                              "top",
                                                          }}
                                                        />
                                                      </div>
                                                      <div
                                                        style={{
                                                          backgroundColor:
                                                            "#dadada",
                                                          width: "2px",
                                                          display: "block",
                                                          minHeight: "60px",
                                                          margin: "auto",
                                                          position: "relative",
                                                          height: "100%",
                                                          boxSizing:
                                                            "border-box",
                                                          verticalAlign: "top",
                                                        }}
                                                      />
                                                    </td>
                                                    <td
                                                      style={{
                                                        width: "100%",
                                                        verticalAlign: "top",
                                                        boxSizing: "border-box",
                                                        WebkitTextSizeAdjust:
                                                          "100%",
                                                        msTextSizeAdjust:
                                                          "100%",
                                                        msoTableLspace: "0pt",
                                                        msoTableRspace: "0pt",
                                                        minWidth: "320px",
                                                      }}
                                                    >
                                                      <b
                                                        style={{
                                                          fontSize: "14px",
                                                          color: "#434343",
                                                          marginBottom: "4px",
                                                          paddingLeft: "20px",
                                                          display: "flex",
                                                          flexDirection: "row",
                                                          alignItems:
                                                            "flex-start",
                                                          boxSizing:
                                                            "border-box",
                                                          fontWeight: 700,
                                                          verticalAlign: "top",
                                                        }}
                                                      >
                                                        <div
                                                          style={{
                                                            boxSizing:
                                                              "border-box",
                                                            verticalAlign:
                                                              "top",
                                                          }}
                                                        >
                                                          {
                                                            oldData.originAirport
                                                          }{" "}
                                                          (
                                                          {
                                                            oldData.originAirportCode
                                                          }
                                                          )
                                                        </div>
                                                      </b>
                                                      {/* <div
                                                        style={{
                                                          fontSize: "14px",
                                                          color: "#8f8f8f",
                                                          paddingLeft: "20px",
                                                          boxSizing:
                                                            "border-box",
                                                          verticalAlign: "top",
                                                        }}
                                                      >
                                                        Ngurah Rai International
                                                        Airport
                                                      </div> */}
                                                    </td>
                                                  </tr>
                                                  {/* row 2 connector  */}
                                                  <tr
                                                    style={{
                                                      boxSizing: "border-box",
                                                      verticalAlign: "top",
                                                    }}
                                                  >
                                                    <td
                                                      style={{
                                                        width: "74px",
                                                        verticalAlign: "center",
                                                        boxSizing: "border-box",
                                                        WebkitTextSizeAdjust:
                                                          "100%",
                                                        msTextSizeAdjust:
                                                          "100%",
                                                        msoTableLspace: "0pt",
                                                        msoTableRspace: "0pt",
                                                        minWidth: "320px",
                                                      }}
                                                    >
                                                      <div
                                                        style={{
                                                          fontSize: "12px",
                                                          color: "#8f8f8f",
                                                          boxSizing:
                                                            "border-box",
                                                          verticalAlign: "top",
                                                        }}
                                                      >
                                                        {/* $segments.getTotalTime() */}
                                                      </div>
                                                    </td>
                                                    <td
                                                      style={{
                                                        verticalAlign: "top",
                                                        boxSizing: "border-box",
                                                        WebkitTextSizeAdjust:
                                                          "100%",
                                                        msTextSizeAdjust:
                                                          "100%",
                                                        msoTableLspace: "0pt",
                                                        msoTableRspace: "0pt",
                                                        minWidth: "320px",
                                                      }}
                                                    >
                                                      <div
                                                        style={{
                                                          backgroundColor:
                                                            "#dadada",
                                                          width: "2px",
                                                          display: "block",
                                                          minHeight: "24px",
                                                          margin: "auto",
                                                          boxSizing:
                                                            "border-box",
                                                          verticalAlign: "top",
                                                        }}
                                                      />
                                                    </td>
                                                    <td
                                                      style={{
                                                        boxSizing: "border-box",
                                                        WebkitTextSizeAdjust:
                                                          "100%",
                                                        msTextSizeAdjust:
                                                          "100%",
                                                        msoTableLspace: "0pt",
                                                        msoTableRspace: "0pt",
                                                        verticalAlign: "top",
                                                        minWidth: "320px",
                                                      }}
                                                    />
                                                  </tr>
                                                  {/* row 2 connector  */}
                                                  <tr
                                                    style={{
                                                      boxSizing: "border-box",
                                                      verticalAlign: "top",
                                                    }}
                                                  >
                                                    <td
                                                      style={{
                                                        width: "74px",
                                                        verticalAlign: "top",
                                                        boxSizing: "border-box",
                                                        WebkitTextSizeAdjust:
                                                          "100%",
                                                        msTextSizeAdjust:
                                                          "100%",
                                                        msoTableLspace: "0pt",
                                                        msoTableRspace: "0pt",
                                                        minWidth: "320px",
                                                      }}
                                                    >
                                                      <b
                                                        style={{
                                                          fontSize: "14px",
                                                          color: "#434343",
                                                          boxSizing:
                                                            "border-box",
                                                          fontWeight: 700,
                                                          verticalAlign: "top",
                                                        }}
                                                      >
                                                        {
                                                          formattedFlightTimeArrival
                                                        }
                                                      </b>
                                                      <div
                                                        style={{
                                                          fontSize: "12px",
                                                          color: "#8f8f8f",
                                                          boxSizing:
                                                            "border-box",
                                                          verticalAlign: "top",
                                                        }}
                                                      >
                                                        {
                                                          formattedFlightDateTimeArrival
                                                        }
                                                      </div>
                                                    </td>
                                                    <td
                                                      valign="top"
                                                      style={{
                                                        position: "relative",
                                                        verticalAlign: "top",
                                                        boxSizing: "border-box",
                                                        WebkitTextSizeAdjust:
                                                          "100%",
                                                        msTextSizeAdjust:
                                                          "100%",
                                                        msoTableLspace: "0pt",
                                                        msoTableRspace: "0pt",
                                                        minWidth: "320px",
                                                      }}
                                                    >
                                                      <div
                                                        style={{
                                                          position: "relative",
                                                          boxSizing:
                                                            "border-box",
                                                          verticalAlign: "top",
                                                        }}
                                                      >
                                                        <div
                                                          style={{
                                                            width: "2px",
                                                            height: "4px",
                                                            backgroundColor:
                                                              "#dadada",
                                                            display: "block",
                                                            margin: "auto",
                                                            boxSizing:
                                                              "border-box",
                                                            verticalAlign:
                                                              "top",
                                                          }}
                                                        />
                                                        <div
                                                          style={{
                                                            width: "12px",
                                                            height: "12px",
                                                            backgroundColor:
                                                              "#1ba0e2",
                                                            borderRadius:
                                                              "12px",
                                                            boxSizing:
                                                              "border-box",
                                                            verticalAlign:
                                                              "top",
                                                          }}
                                                        />
                                                      </div>
                                                    </td>
                                                    <td
                                                      style={{
                                                        width: "100%",
                                                        boxSizing: "border-box",
                                                        WebkitTextSizeAdjust:
                                                          "100%",
                                                        msTextSizeAdjust:
                                                          "100%",
                                                        msoTableLspace: "0pt",
                                                        msoTableRspace: "0pt",
                                                        verticalAlign: "top",
                                                        minWidth: "320px",
                                                      }}
                                                    >
                                                      <b
                                                        style={{
                                                          fontSize: "14px",
                                                          color: "#434343",
                                                          marginBottom: "4px",
                                                          paddingLeft: "20px",
                                                          display: "flex",
                                                          flexDirection: "row",
                                                          alignItems:
                                                            "flex-start",
                                                          boxSizing:
                                                            "border-box",
                                                          fontWeight: 700,
                                                          verticalAlign: "top",
                                                        }}
                                                      >
                                                        <div
                                                          style={{
                                                            boxSizing:
                                                              "border-box",
                                                            verticalAlign:
                                                              "top",
                                                          }}
                                                        >
                                                          {
                                                            oldData.destinationAirport
                                                          }{" "}
                                                          (
                                                          {
                                                            oldData.destinationAirportCode
                                                          }
                                                          )
                                                        </div>
                                                      </b>
                                                      {/* <div
                                                        style={{
                                                          fontSize: "14px",
                                                          color: "#8f8f8f",
                                                          paddingLeft: "20px",
                                                          boxSizing:
                                                            "border-box",
                                                          verticalAlign: "top",
                                                        }}
                                                      >
                                                        Soekarno Hatta Intl
                                                        Airport
                                                      </div> */}
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                            {/* timeline end */}
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="itinerary-item"
                                        style={{
                                          boxSizing: "border-box",
                                          verticalAlign: "top",
                                          textAlign: "left",
                                          display: "inline-block",
                                          width: "49%",
                                          marginBottom: "16px",
                                          minWidth: "350px",
                                          maxWidth: "100%",
                                        }}
                                      >
                                        <div
                                          className="section-box original-context"
                                          style={{
                                            boxSizing: "border-box",
                                            verticalAlign: "top",
                                            padding: "10px",
                                            width: "100%",
                                            height: "auto",
                                            background: "#FFFFFF",
                                            border: "1px solid #DADADA",
                                            borderRadius: "6px",
                                            backgroundColor: "#F7F9FA",
                                          }}
                                        >
                                          <div
                                            className="itinerary-item_summary"
                                            style={{
                                              boxSizing: "border-box",
                                              verticalAlign: "top",
                                              display: "block",
                                              marginBottom: "8px",
                                              color: "#03121A",
                                              fontWeight: 400,
                                              fontSize: "11px",
                                              lineHeight: "11px",
                                            }}
                                          >
                                            <img
                                              src="https://d3q1s0lzrazpnf.cloudfront.net/imageResource/2023/08/24/1692863866231-2639e27d194bc775b50e8b659eba2848.png"
                                              alt=""
                                              style={{
                                                boxSizing: "border-box",
                                                msInterpolationMode: "bicubic",
                                                border: 0,
                                                height: "16px",
                                                lineHeight: "100%",
                                                outline: "none",
                                                textDecoration: "none",
                                                verticalAlign: "middle",
                                                display: "inline",
                                                maxWidth: "560px",
                                                width: "16px",
                                                marginRight: "8px",
                                              }}
                                            />
                                            <div
                                              style={{
                                                boxSizing: "border-box",
                                                verticalAlign: "middle",
                                                display: "inline-block",
                                              }}
                                            >
                                              Original Flight
                                            </div>
                                          </div>
                                          {/* set have transit or not */}
                                          {/* end have transit or not */}
                                          <div
                                            style={{
                                              display: "flex",
                                              flexDirection: "row",
                                              boxSizing: "border-box",
                                              verticalAlign: "top",
                                            }}
                                          >
                                            <div
                                              className="section-top"
                                              style={{
                                                boxSizing: "border-box",
                                                verticalAlign: "top",
                                                marginBottom: "16px",
                                              }}
                                            >
                                              <img
                                                style={{
                                                  height: "12px",
                                                  display: "inline-block",
                                                  verticalAlign: "middle",
                                                  marginRight: "4px",
                                                  boxSizing: "border-box",
                                                  msInterpolationMode:
                                                    "bicubic",
                                                  border: 0,
                                                  lineHeight: "100%",
                                                  outline: "none",
                                                  textDecoration: "none",
                                                  maxWidth: "560px",
                                                }}
                                                src="https://d3q1s0lzrazpnf.cloudfront.net/imageResource/2021/05/12/1620813570103-6da835947eed70d76bac1c3a4cfa0376.png"
                                                alt=""
                                              />
                                              <b
                                                style={{
                                                  display: "inline-block",
                                                  verticalAlign: "middle",
                                                  fontSize: "14px",
                                                  lineHeight: "22px",
                                                  letterSpacing: "0.4px",
                                                  color: "#434343",
                                                  boxSizing: "border-box",
                                                  fontWeight: 500,
                                                }}
                                              >
                                                {airlineName}{" "}
                                                {oldData.flightCode}
                                              </b>
                                              <p
                                                style={{
                                                  fontSize: "12px",
                                                  lineHeight: "20px",
                                                  letterSpacing: "0.5px",
                                                  color: "#8F8F8F",
                                                  boxSizing: "border-box",
                                                  WebkitTextSizeAdjust: "100%",
                                                  msTextSizeAdjust: "100%",
                                                  margin: "0px",
                                                  fontStyle: "normal",
                                                  fontWeight: "normal",
                                                  verticalAlign: "top",
                                                }}
                                              >
                                                {oldData.airlineClass}
                                              </p>
                                            </div>
                                          </div>
                                          <div
                                            className="itinerary"
                                            style={{
                                              boxSizing: "border-box",
                                              verticalAlign: "top",
                                            }}
                                          >
                                            {/* timeline */}
                                            <div
                                              style={{
                                                marginBottom: "16px",
                                                boxSizing: "border-box",
                                                verticalAlign: "top",
                                              }}
                                            >
                                              <table
                                                style={{
                                                  width: "100%",
                                                  borderCollapse:
                                                    "collapse!important",
                                                  height: "100%",
                                                  tableLayout: "fixed",
                                                  boxSizing: "border-box",
                                                  WebkitTextSizeAdjust: "100%",
                                                  msTextSizeAdjust: "100%",
                                                  msoTableLspace: "0pt",
                                                  msoTableRspace: "0pt",
                                                  verticalAlign: "top",
                                                }}
                                                cellPadding={0}
                                                cellSpacing={0}
                                              >
                                                <tbody
                                                  style={{
                                                    boxSizing: "border-box",
                                                    verticalAlign: "top",
                                                  }}
                                                >
                                                  <tr
                                                    style={{
                                                      boxSizing: "border-box",
                                                      verticalAlign: "top",
                                                    }}
                                                  >
                                                    <td
                                                      style={{
                                                        width: "74px",
                                                        verticalAlign: "top",
                                                        boxSizing: "border-box",
                                                        WebkitTextSizeAdjust:
                                                          "100%",
                                                        msTextSizeAdjust:
                                                          "100%",
                                                        msoTableLspace: "0pt",
                                                        msoTableRspace: "0pt",
                                                        minWidth: "320px",
                                                      }}
                                                    >
                                                      <b
                                                        style={{
                                                          fontSize: "14px",
                                                          color: "#434343",
                                                          boxSizing:
                                                            "border-box",
                                                          fontWeight: 500,
                                                          verticalAlign: "top",
                                                        }}
                                                      >
                                                        {
                                                          oldData.emailDepartureTime
                                                        }
                                                      </b>
                                                      <div
                                                        style={{
                                                          fontSize: "12px",
                                                          color: "#8f8f8f",
                                                          boxSizing:
                                                            "border-box",
                                                          verticalAlign: "top",
                                                        }}
                                                      >
                                                        {
                                                          oldData.emailDepartureDate
                                                        }
                                                      </div>
                                                    </td>
                                                    <td
                                                      valign="top"
                                                      style={{
                                                        position: "relative",
                                                        verticalAlign: "top",
                                                        width: "12px",
                                                        boxSizing: "border-box",
                                                        WebkitTextSizeAdjust:
                                                          "100%",
                                                        msTextSizeAdjust:
                                                          "100%",
                                                        msoTableLspace: "0pt",
                                                        msoTableRspace: "0pt",
                                                        minWidth: "320px",
                                                      }}
                                                    >
                                                      <div
                                                        style={{
                                                          position: "relative",
                                                          paddingTop: "6px",
                                                          boxSizing:
                                                            "border-box",
                                                          verticalAlign: "top",
                                                        }}
                                                      >
                                                        <div
                                                          style={{
                                                            width: "12px",
                                                            height: "12px",
                                                            border:
                                                              "2px solid #1ba0e2",
                                                            backgroundColor:
                                                              "white",
                                                            borderRadius:
                                                              "12px",
                                                            boxSizing:
                                                              "border-box",
                                                            verticalAlign:
                                                              "top",
                                                          }}
                                                        />
                                                      </div>
                                                      <div
                                                        style={{
                                                          backgroundColor:
                                                            "#dadada",
                                                          width: "2px",
                                                          display: "block",
                                                          minHeight: "60px",
                                                          margin: "auto",
                                                          position: "relative",
                                                          height: "100%",
                                                          boxSizing:
                                                            "border-box",
                                                          verticalAlign: "top",
                                                        }}
                                                      />
                                                    </td>
                                                    <td
                                                      style={{
                                                        width: "100%",
                                                        verticalAlign: "top",
                                                        boxSizing: "border-box",
                                                        WebkitTextSizeAdjust:
                                                          "100%",
                                                        msTextSizeAdjust:
                                                          "100%",
                                                        msoTableLspace: "0pt",
                                                        msoTableRspace: "0pt",
                                                        minWidth: "320px",
                                                      }}
                                                    >
                                                      <b
                                                        style={{
                                                          fontSize: "14px",
                                                          color: "#434343",
                                                          marginBottom: "4px",
                                                          paddingLeft: "20px",
                                                          display: "block",
                                                          boxSizing:
                                                            "border-box",
                                                          fontWeight: 500,
                                                          verticalAlign: "top",
                                                        }}
                                                      >
                                                        {oldData.originAirport}{" "}
                                                        (
                                                        {
                                                          oldData.originAirportCode
                                                        }
                                                        )
                                                      </b>
                                                      {/* <div
                                                        style={{
                                                          fontSize: "14px",
                                                          color: "#8f8f8f",
                                                          paddingLeft: "20px",
                                                          boxSizing:
                                                            "border-box",
                                                          verticalAlign: "top",
                                                        }}
                                                      >
                                                        Ngurah Rai International
                                                        Airport
                                                      </div> */}
                                                    </td>
                                                  </tr>
                                                  {/* row 2 connector  */}
                                                  <tr
                                                    style={{
                                                      boxSizing: "border-box",
                                                      verticalAlign: "top",
                                                    }}
                                                  >
                                                    <td
                                                      style={{
                                                        width: "74px",
                                                        verticalAlign: "center",
                                                        boxSizing: "border-box",
                                                        WebkitTextSizeAdjust:
                                                          "100%",
                                                        msTextSizeAdjust:
                                                          "100%",
                                                        msoTableLspace: "0pt",
                                                        msoTableRspace: "0pt",
                                                        minWidth: "320px",
                                                      }}
                                                    >
                                                      <div
                                                        style={{
                                                          fontSize: "12px",
                                                          color: "#8f8f8f",
                                                          boxSizing:
                                                            "border-box",
                                                          verticalAlign: "top",
                                                        }}
                                                      >
                                                        {/* $segments.getTotalTime() */}
                                                      </div>
                                                    </td>
                                                    <td
                                                      style={{
                                                        verticalAlign: "top",
                                                        boxSizing: "border-box",
                                                        WebkitTextSizeAdjust:
                                                          "100%",
                                                        msTextSizeAdjust:
                                                          "100%",
                                                        msoTableLspace: "0pt",
                                                        msoTableRspace: "0pt",
                                                        minWidth: "320px",
                                                      }}
                                                    >
                                                      <div
                                                        style={{
                                                          backgroundColor:
                                                            "#dadada",
                                                          width: "2px",
                                                          display: "block",
                                                          minHeight: "24px",
                                                          margin: "auto",
                                                          boxSizing:
                                                            "border-box",
                                                          verticalAlign: "top",
                                                        }}
                                                      />
                                                    </td>
                                                    <td
                                                      style={{
                                                        boxSizing: "border-box",
                                                        WebkitTextSizeAdjust:
                                                          "100%",
                                                        msTextSizeAdjust:
                                                          "100%",
                                                        msoTableLspace: "0pt",
                                                        msoTableRspace: "0pt",
                                                        verticalAlign: "top",
                                                        minWidth: "320px",
                                                      }}
                                                    />
                                                  </tr>
                                                  {/* row 2 connector  */}
                                                  <tr
                                                    style={{
                                                      boxSizing: "border-box",
                                                      verticalAlign: "top",
                                                    }}
                                                  >
                                                    <td
                                                      style={{
                                                        width: "74px",
                                                        verticalAlign: "top",
                                                        boxSizing: "border-box",
                                                        WebkitTextSizeAdjust:
                                                          "100%",
                                                        msTextSizeAdjust:
                                                          "100%",
                                                        msoTableLspace: "0pt",
                                                        msoTableRspace: "0pt",
                                                        minWidth: "320px",
                                                      }}
                                                    >
                                                      <b
                                                        style={{
                                                          fontSize: "14px",
                                                          color: "#434343",
                                                          boxSizing:
                                                            "border-box",
                                                          fontWeight: 500,
                                                          verticalAlign: "top",
                                                        }}
                                                      >
                                                        {
                                                          oldData.emailArrivalTime
                                                        }
                                                      </b>
                                                      <div
                                                        style={{
                                                          fontSize: "12px",
                                                          color: "#8f8f8f",
                                                          boxSizing:
                                                            "border-box",
                                                          verticalAlign: "top",
                                                        }}
                                                      >
                                                        {
                                                          oldData.emailArrivalDate
                                                        }
                                                      </div>
                                                    </td>
                                                    <td
                                                      valign="top"
                                                      style={{
                                                        position: "relative",
                                                        verticalAlign: "top",
                                                        boxSizing: "border-box",
                                                        WebkitTextSizeAdjust:
                                                          "100%",
                                                        msTextSizeAdjust:
                                                          "100%",
                                                        msoTableLspace: "0pt",
                                                        msoTableRspace: "0pt",
                                                        minWidth: "320px",
                                                      }}
                                                    >
                                                      <div
                                                        style={{
                                                          position: "relative",
                                                          boxSizing:
                                                            "border-box",
                                                          verticalAlign: "top",
                                                        }}
                                                      >
                                                        <div
                                                          style={{
                                                            width: "2px",
                                                            height: "4px",
                                                            backgroundColor:
                                                              "#dadada",
                                                            display: "block",
                                                            margin: "auto",
                                                            boxSizing:
                                                              "border-box",
                                                            verticalAlign:
                                                              "top",
                                                          }}
                                                        />
                                                        <div
                                                          style={{
                                                            width: "12px",
                                                            height: "12px",
                                                            backgroundColor:
                                                              "#1ba0e2",
                                                            borderRadius:
                                                              "12px",
                                                            boxSizing:
                                                              "border-box",
                                                            verticalAlign:
                                                              "top",
                                                          }}
                                                        />
                                                      </div>
                                                    </td>
                                                    <td
                                                      style={{
                                                        width: "100%",
                                                        boxSizing: "border-box",
                                                        WebkitTextSizeAdjust:
                                                          "100%",
                                                        msTextSizeAdjust:
                                                          "100%",
                                                        msoTableLspace: "0pt",
                                                        msoTableRspace: "0pt",
                                                        verticalAlign: "top",
                                                        minWidth: "320px",
                                                      }}
                                                    >
                                                      <b
                                                        style={{
                                                          fontSize: "14px",
                                                          color: "#434343",
                                                          marginBottom: "4px",
                                                          paddingLeft: "20px",
                                                          boxSizing:
                                                            "border-box",
                                                          fontWeight: 500,
                                                          verticalAlign: "top",
                                                        }}
                                                      >
                                                        {
                                                          oldData.destinationAirport
                                                        }{" "}
                                                        (
                                                        {
                                                          oldData.destinationAirportCode
                                                        }
                                                        )
                                                      </b>
                                                      {/* <div
                                                        style={{
                                                          fontSize: "14px",
                                                          color: "#8f8f8f",
                                                          paddingLeft: "20px",
                                                          boxSizing:
                                                            "border-box",
                                                          verticalAlign: "top",
                                                        }}
                                                      >
                                                        Soekarno Hatta Intl
                                                        Airport
                                                      </div> */}
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                            {/* timeline end */}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            {/* impacted flight context end  */}
                            <div
                              style={{
                                width: "100%",
                                height: "16px",
                                display: "block",
                                boxSizing: "border-box",
                                verticalAlign: "top",
                              }}
                            ></div>
                            <div
                              className="preflight-bridge"
                              style={{
                                boxSizing: "border-box",
                                verticalAlign: "top",
                              }}
                            >
                              <div
                                className="pb-title"
                                style={{
                                  boxSizing: "border-box",
                                  verticalAlign: "top",
                                  fontSize: "14px",
                                  fontStyle: "normal",
                                  fontWeight: 600,
                                  lineHeight: "20px",
                                  fontFamily: "MuseoSans,sans-serif",
                                  marginBottom: "8px",
                                }}
                              >
                                The changes don't suit you?
                              </div>
                              <div
                                className="pb-desc"
                                style={{
                                  boxSizing: "border-box",
                                  verticalAlign: "top",
                                  fontSize: "12px",
                                  fontStyle: "normal",
                                  lineHeight: "16px",
                                  fontFamily: "MuseoSans,sans-serif",
                                }}
                              >
                                You can reschedule or refund your flight if the
                                changes don't suit you.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "100%",
                                height: "16px",
                                display: "block",
                                boxSizing: "border-box",
                                verticalAlign: "top",
                              }}
                            ></div>
                            <div
                              className="section-content-box"
                              style={{
                                boxSizing: "border-box",
                                verticalAlign: "top",
                                borderRadius: "6px",
                                backgroundColor: "#F7F9FA",
                                borderLeft: "4px solid #0194F3",
                                overflow: "hidden",
                                padding: "12px 0px",
                                position: "relative",
                                backgroundImage:
                                  "url( https://d3q1s0lzrazpnf.cloudfront.net/imageResource/2023/08/28/1693201864834-eedb7edcb0bb9d5b891190e77407c3cc.png )",
                                backgroundPosition: "top right",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "70px 70px",
                              }}
                            >
                              <p
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTextSizeAdjust: "100%",
                                  msTextSizeAdjust: "100%",
                                  margin: "0px",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "12px",
                                  lineHeight: "16px",
                                  color: "#555555",
                                  verticalAlign: "top",
                                  position: "relative",
                                  padding: "0px 12px",
                                  zIndex: 2,
                                }}
                              >
                                Please note that this booking will only be
                                canceled if your refund or reschedule request is
                                approved later.
                              </p>
                            </div>
                            <div
                              style={{
                                width: "100%",
                                height: "16px",
                                display: "block",
                                boxSizing: "border-box",
                                verticalAlign: "top",
                              }}
                            ></div>
                            <div
                              className="pb-title"
                              style={{
                                boxSizing: "border-box",
                                verticalAlign: "top",
                                fontSize: "14px",
                                fontStyle: "normal",
                                fontWeight: 600,
                                lineHeight: "20px",
                                fontFamily: "MuseoSans,sans-serif",
                                marginBottom: "8px",
                                textAlign: "left",
                                display: "block",
                              }}
                            >
                              Your Options
                            </div>
                            {/* recovery Options */}
                            <div
                              className="itinerary-wrapper recovery"
                              style={{
                                boxSizing: "border-box",
                                verticalAlign: "top",
                                width: "100%",
                                display: "block",
                                textAlign: "left",
                              }}
                            >
                              <div
                                className="new-itinerary-item"
                                style={{
                                  boxSizing: "border-box",
                                  verticalAlign: "top",
                                  textAlign: "left",
                                  display: "inline-block",
                                  width: "49%",
                                  marginBottom: "16px",
                                  maxWidth: "100%",
                                  minWidth: "350px",
                                  marginRight: "8px",
                                }}
                              >
                                <div
                                  className="nii-header"
                                  style={{
                                    boxSizing: "border-box",
                                    verticalAlign: "top",
                                    display: "block",
                                    minHeight: "42px",
                                  }}
                                >
                                  <img
                                    src="https://d3q1s0lzrazpnf.cloudfront.net/imageResource/2023/08/24/1692863617216-eb5776b7f6fd2d6026f86092039c53c3.png"
                                    alt=""
                                    style={{
                                      boxSizing: "border-box",
                                      msInterpolationMode: "bicubic",
                                      border: 0,
                                      height: "32px",
                                      lineHeight: "100%",
                                      outline: "none",
                                      textDecoration: "none",
                                      verticalAlign: "top",
                                      display: "inline-block",
                                      maxWidth: "560px",
                                      width: "32px",
                                    }}
                                  />
                                  <div
                                    className="nii-header_content"
                                    style={{
                                      boxSizing: "border-box",
                                      verticalAlign: "middle",
                                      marginBottom: "12px",
                                      display: "inline-block",
                                      paddingLeft: "8px",
                                      width: "calc(100% - 40px)",
                                    }}
                                  >
                                    <div
                                      className="nii-header_title"
                                      style={{
                                        boxSizing: "border-box",
                                        verticalAlign: "top",
                                        fontFamily: "MuseoSans,sans-serif",
                                        fontSize: "14px",
                                        fontStyle: "normal",
                                        fontWeight: 700,
                                        lineHeight: "20px",
                                        color: "#0264C8",
                                        textAlign: "left",
                                      }}
                                    >
                                      RESCHEDULE
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="nii-item"
                                  style={{
                                    boxSizing: "border-box",
                                    verticalAlign: "top",
                                    width: "100%",
                                    borderRadius: "6px",
                                    border: "1px solid  #CDD0D1",
                                    padding: "12px",
                                    marginBottom: "12px",
                                  }}
                                >
                                  <div
                                    className="nii-item_head"
                                    style={{
                                      boxSizing: "border-box",
                                      verticalAlign: "top",
                                    }}
                                  >
                                    <div
                                      className="nii-item_head_title"
                                      style={{
                                        boxSizing: "border-box",
                                        verticalAlign: "top",
                                        fontSize: "12px",
                                        fontStyle: "normal",
                                        fontWeight: 700,
                                        lineHeight: "16px",
                                        marginBottom: "8px",
                                      }}
                                    >
                                      Regular
                                    </div>
                                    <div
                                      className="nii-item_head_desc"
                                      style={{
                                        boxSizing: "border-box",
                                        verticalAlign: "top",
                                        fontSize: "12px",
                                        fontStyle: "normal",
                                        fontWeight: 400,
                                        lineHeight: "16px",
                                      }}
                                    >
                                      Regular Reschedule allows you to change:
                                    </div>
                                  </div>
                                  <div
                                    className="nii--item_benefit_list"
                                    style={{
                                      boxSizing: "border-box",
                                      verticalAlign: "top",
                                    }}
                                  >
                                    <div
                                      className="nii-item_bl_i"
                                      style={{
                                        boxSizing: "border-box",
                                        verticalAlign: "top",
                                        alignItems: "center",
                                        whiteSpace: "nowrap",
                                      }}
                                    >
                                      <img
                                        src="https://d3q1s0lzrazpnf.cloudfront.net/imageResource/2023/08/24/1692864384960-a41b52a3a652e4cff13d413434506adf.png"
                                        alt=""
                                        style={{
                                          boxSizing: "border-box",
                                          msInterpolationMode: "bicubic",
                                          border: 0,
                                          height: "12px",
                                          lineHeight: "100%",
                                          outline: "none",
                                          textDecoration: "none",
                                          verticalAlign: "middle",
                                          display: "inline-block",
                                          maxWidth: "560px",
                                          width: "12px",
                                        }}
                                      />
                                      <div
                                        style={{
                                          boxSizing: "border-box",
                                          verticalAlign: "middle",
                                          display: "inline-block",
                                          width: "calc(100% - 14px)",
                                          paddingLeft: "6px",
                                          whiteSpace: "normal",
                                          fontSize: "12px",
                                          fontStyle: "normal",
                                          fontWeight: 400,
                                          lineHeight: "16px",
                                        }}
                                      >
                                        Departure date &amp; time
                                      </div>
                                    </div>
                                    <div
                                      className="nii-item_bl_i"
                                      style={{
                                        boxSizing: "border-box",
                                        verticalAlign: "top",
                                        alignItems: "center",
                                        whiteSpace: "nowrap",
                                      }}
                                    >
                                      <img
                                        src="https://d3q1s0lzrazpnf.cloudfront.net/imageResource/2023/08/24/1692864377671-eb87db2d0ddc603fd466d3c8813e54f5.png"
                                        alt=""
                                        style={{
                                          boxSizing: "border-box",
                                          msInterpolationMode: "bicubic",
                                          border: 0,
                                          height: "12px",
                                          lineHeight: "100%",
                                          outline: "none",
                                          textDecoration: "none",
                                          verticalAlign: "middle",
                                          display: "inline-block",
                                          maxWidth: "560px",
                                          width: "12px",
                                        }}
                                      />
                                      <div
                                        style={{
                                          boxSizing: "border-box",
                                          verticalAlign: "middle",
                                          display: "inline-block",
                                          width: "calc(100% - 14px)",
                                          paddingLeft: "6px",
                                          whiteSpace: "normal",
                                          fontSize: "12px",
                                          fontStyle: "normal",
                                          fontWeight: 400,
                                          lineHeight: "16px",
                                        }}
                                      >
                                        Travel route
                                      </div>
                                    </div>
                                    <div
                                      className="nii-item_bl_i"
                                      style={{
                                        boxSizing: "border-box",
                                        verticalAlign: "top",
                                        alignItems: "center",
                                        whiteSpace: "nowrap",
                                      }}
                                    >
                                      <img
                                        src="https://d3q1s0lzrazpnf.cloudfront.net/imageResource/2023/08/24/1692864377671-eb87db2d0ddc603fd466d3c8813e54f5.png"
                                        alt=""
                                        style={{
                                          boxSizing: "border-box",
                                          msInterpolationMode: "bicubic",
                                          border: 0,
                                          height: "12px",
                                          lineHeight: "100%",
                                          outline: "none",
                                          textDecoration: "none",
                                          verticalAlign: "middle",
                                          display: "inline-block",
                                          maxWidth: "560px",
                                          width: "12px",
                                        }}
                                      />
                                      <div
                                        style={{
                                          boxSizing: "border-box",
                                          verticalAlign: "middle",
                                          display: "inline-block",
                                          width: "calc(100% - 14px)",
                                          paddingLeft: "6px",
                                          whiteSpace: "normal",
                                          fontSize: "12px",
                                          fontStyle: "normal",
                                          fontWeight: 400,
                                          lineHeight: "16px",
                                        }}
                                      >
                                        Airline
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="pre-divide"
                                    style={{
                                      boxSizing: "border-box",
                                      verticalAlign: "top",
                                      width: "100%",
                                      height: "1px",
                                      backgroundColor: "#CDD0D1",
                                      marginBottom: "8px",
                                      marginTop: "8px",
                                    }}
                                  />
                                  <div
                                    className="nii-item_re_detail"
                                    style={{
                                      boxSizing: "border-box",
                                      verticalAlign: "top",
                                    }}
                                  >
                                    <div
                                      className="niiird--title"
                                      style={{
                                        boxSizing: "border-box",
                                        verticalAlign: "top",
                                        fontSize: "12px",
                                        fontStyle: "normal",
                                        fontWeight: 400,
                                        lineHeight: "16px",
                                        marginBottom: "8px",
                                      }}
                                    >
                                      Please prepare your Booking ID
                                      (100275556).
                                    </div>
                                    <div
                                      className="niiird--description"
                                      style={{
                                        boxSizing: "border-box",
                                        verticalAlign: "top",
                                        whiteSpace: "nowrap",
                                      }}
                                    >
                                      <img
                                        src="https://d3q1s0lzrazpnf.cloudfront.net/imageResource/2023/06/13/1686645740236-4ca2a1fc074f755bf2bf2acf6941c989.png"
                                        alt=""
                                        style={{
                                          boxSizing: "border-box",
                                          msInterpolationMode: "bicubic",
                                          border: 0,
                                          height: "auto",
                                          lineHeight: "100%",
                                          outline: "none",
                                          textDecoration: "none",
                                          verticalAlign: "middle",
                                          display: "inline-block",
                                          maxWidth: "560px",
                                          width: "42px",
                                          marginRight: "8px",
                                        }}
                                      />
                                      <div
                                        className="niiird--description_text"
                                        style={{
                                          boxSizing: "border-box",
                                          verticalAlign: "middle",
                                          fontSize: "12px",
                                          fontStyle: "normal",
                                          fontWeight: 400,
                                          lineHeight: "16px",
                                          color: "#687176",
                                          width: "calc(100% - 52px)",
                                          whiteSpace: "normal",
                                          display: "inline-block",
                                        }}
                                      >
                                        For Regular Reschedule, please submit
                                        via Customer Service
                                      </div>
                                    </div>
                                    <a
                                      href=" https://www.traveloka.com/en-id/contactus"
                                      className="niiird-action"
                                      style={{
                                        boxSizing: "border-box",
                                        WebkitTextSizeAdjust: "100%",
                                        msTextSizeAdjust: "100%",
                                        verticalAlign: "top",
                                        textAlign: "center",
                                        borderRadius: "6px",
                                        display: "block",
                                        marginTop: "8px",
                                        width: "100%",
                                        padding: "8px 12px",
                                        backgroundColor: "#F7F9FA",
                                        fontSize: "14px",
                                        fontStyle: "normal",
                                        lineHeight: "16px",
                                        color: "#0194F3 !important",
                                        fontWeight: "600 !important",
                                        textDecoration: "none !important",
                                      }}
                                    >
                                      Continue with Regular Reschedule
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="nii-disclaimer"
                                  style={{
                                    boxSizing: "border-box",
                                    verticalAlign: "top",
                                    fontSize: "12px",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    lineHeight: "16px",
                                    color: "#687176",
                                  }}
                                >
                                  <ul
                                    style={{
                                      boxSizing: "border-box",
                                      paddingLeft: "16px",
                                      margin: "0px",
                                      verticalAlign: "top",
                                    }}
                                  />
                                </div>
                                <div
                                  className="nii-action"
                                  style={{
                                    boxSizing: "border-box",
                                    verticalAlign: "top",
                                    marginTop: "12px",
                                    marginBottom: "12px",
                                  }}
                                >
                                  <div
                                    className="niia-submit_deadline"
                                    style={{
                                      boxSizing: "border-box",
                                      verticalAlign: "top",
                                      fontSize: "12px",
                                      fontStyle: "normal",
                                      fontWeight: 400,
                                      lineHeight: "16px",
                                      width: "100%",
                                      textAlign: "center",
                                    }}
                                  >
                                    <img
                                      src="https://d3q1s0lzrazpnf.cloudfront.net/imageResource/2023/08/24/1692863796074-dea6844321393a4e88ec05239d3017ac.png"
                                      alt=""
                                      style={{
                                        boxSizing: "border-box",
                                        msInterpolationMode: "bicubic",
                                        border: 0,
                                        height: "16px",
                                        lineHeight: "100%",
                                        outline: "none",
                                        textDecoration: "none",
                                        verticalAlign: "middle",
                                        display: "inline-block",
                                        maxWidth: "560px",
                                        width: "16px",
                                      }}
                                    />
                                    <span
                                      style={{
                                        boxSizing: "border-box",
                                        verticalAlign: "top",
                                      }}
                                    >
                                      {" "}
                                      Submission Deadline: 26-Jun-2024, 07:00
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="new-itinerary-item"
                                style={{
                                  boxSizing: "border-box",
                                  verticalAlign: "top",
                                  textAlign: "left",
                                  display: "inline-block",
                                  width: "49%",
                                  marginBottom: "16px",
                                  maxWidth: "100%",
                                  minWidth: "350px",
                                }}
                              >
                                <div
                                  className="nii-header"
                                  style={{
                                    boxSizing: "border-box",
                                    verticalAlign: "top",
                                    display: "block",
                                    minHeight: "42px",
                                  }}
                                >
                                  <img
                                    src="https://d3q1s0lzrazpnf.cloudfront.net/imageResource/2023/08/24/1692863662486-c8194e3aae1f8cb89b6cf150fe7d9b81.png"
                                    alt=""
                                    style={{
                                      boxSizing: "border-box",
                                      msInterpolationMode: "bicubic",
                                      border: 0,
                                      height: "32px",
                                      lineHeight: "100%",
                                      outline: "none",
                                      textDecoration: "none",
                                      verticalAlign: "top",
                                      display: "inline-block",
                                      maxWidth: "560px",
                                      width: "32px",
                                    }}
                                  />
                                  <div
                                    className="nii-header_content"
                                    style={{
                                      boxSizing: "border-box",
                                      verticalAlign: "middle",
                                      marginBottom: "12px",
                                      display: "inline-block",
                                      paddingLeft: "8px",
                                      width: "calc(100% - 40px)",
                                    }}
                                  >
                                    <div
                                      className="nii-header_title"
                                      style={{
                                        boxSizing: "border-box",
                                        verticalAlign: "top",
                                        fontFamily: "MuseoSans,sans-serif",
                                        fontSize: "14px",
                                        fontStyle: "normal",
                                        fontWeight: 700,
                                        lineHeight: "20px",
                                        color: "#0264C8",
                                        textAlign: "left",
                                      }}
                                    >
                                      REFUND
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="nii-item refund"
                                  style={{
                                    boxSizing: "border-box",
                                    verticalAlign: "top",
                                    width: "100%",
                                    borderRadius: "6px",
                                    border: "1px solid  #CDD0D1",
                                    padding: "12px",
                                  }}
                                >
                                  <div
                                    className="nii-item_re_detail"
                                    style={{
                                      boxSizing: "border-box",
                                      verticalAlign: "top",
                                    }}
                                  >
                                    <div
                                      className="niiird--title"
                                      style={{
                                        boxSizing: "border-box",
                                        verticalAlign: "top",
                                        fontSize: "12px",
                                        fontStyle: "normal",
                                        fontWeight: 400,
                                        lineHeight: "16px",
                                        marginBottom: "8px",
                                      }}
                                    >
                                      Please prepare your Booking ID
                                      (100275556).
                                    </div>
                                    <div
                                      className="niiird--description"
                                      style={{
                                        boxSizing: "border-box",
                                        verticalAlign: "top",
                                        whiteSpace: "nowrap",
                                      }}
                                    >
                                      <img
                                        src="https://d3q1s0lzrazpnf.cloudfront.net/imageResource/2023/06/13/1686645740236-4ca2a1fc074f755bf2bf2acf6941c989.png"
                                        alt=""
                                        style={{
                                          boxSizing: "border-box",
                                          msInterpolationMode: "bicubic",
                                          border: 0,
                                          height: "auto",
                                          lineHeight: "100%",
                                          outline: "none",
                                          textDecoration: "none",
                                          verticalAlign: "middle",
                                          display: "inline-block",
                                          maxWidth: "560px",
                                          width: "42px",
                                          marginRight: "8px",
                                        }}
                                      />
                                      <div
                                        className="niiird--description_text"
                                        style={{
                                          boxSizing: "border-box",
                                          verticalAlign: "middle",
                                          fontSize: "12px",
                                          fontStyle: "normal",
                                          fontWeight: 400,
                                          lineHeight: "16px",
                                          color: "#687176",
                                          width: "calc(100% - 52px)",
                                          whiteSpace: "normal",
                                          display: "inline-block",
                                        }}
                                      >
                                        Please submit your refund via Customer
                                        Service
                                      </div>
                                    </div>
                                    <a
                                      href=" https://www.traveloka.com/en-id/contactus"
                                      className="niiird-action"
                                      style={{
                                        boxSizing: "border-box",
                                        WebkitTextSizeAdjust: "100%",
                                        msTextSizeAdjust: "100%",
                                        verticalAlign: "top",
                                        textAlign: "center",
                                        borderRadius: "6px",
                                        display: "block",
                                        marginTop: "8px",
                                        width: "100%",
                                        padding: "8px 12px",
                                        backgroundColor: "#F7F9FA",
                                        fontSize: "14px",
                                        fontStyle: "normal",
                                        lineHeight: "16px",
                                        color: "#0194F3 !important",
                                        fontWeight: "600 !important",
                                        textDecoration: "none !important",
                                      }}
                                    >
                                      Continue with Refund
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="nii-disclaimer"
                                  style={{
                                    boxSizing: "border-box",
                                    verticalAlign: "top",
                                    fontSize: "12px",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    lineHeight: "16px",
                                    color: "#687176",
                                    paddingTop: "12px",
                                  }}
                                >
                                  <ul
                                    style={{
                                      boxSizing: "border-box",
                                      paddingLeft: "16px",
                                      margin: "0px",
                                      verticalAlign: "top",
                                    }}
                                  />
                                </div>
                                <div
                                  className="nii-action"
                                  style={{
                                    boxSizing: "border-box",
                                    verticalAlign: "top",
                                    marginTop: "12px",
                                    marginBottom: "12px",
                                  }}
                                >
                                  <div
                                    className="niia-submit_deadline"
                                    style={{
                                      boxSizing: "border-box",
                                      verticalAlign: "top",
                                      fontSize: "12px",
                                      fontStyle: "normal",
                                      fontWeight: 400,
                                      lineHeight: "16px",
                                      width: "100%",
                                      textAlign: "center",
                                    }}
                                  >
                                    <img
                                      src="https://d3q1s0lzrazpnf.cloudfront.net/imageResource/2023/08/24/1692863796074-dea6844321393a4e88ec05239d3017ac.png"
                                      alt=""
                                      style={{
                                        boxSizing: "border-box",
                                        msInterpolationMode: "bicubic",
                                        border: 0,
                                        height: "16px",
                                        lineHeight: "100%",
                                        outline: "none",
                                        textDecoration: "none",
                                        verticalAlign: "middle",
                                        display: "inline-block",
                                        maxWidth: "560px",
                                        width: "16px",
                                      }}
                                    />
                                    <span
                                      style={{
                                        boxSizing: "border-box",
                                        verticalAlign: "top",
                                      }}
                                    >
                                      Submission Deadline: 26-Jun-2024, 07:00
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* recovery options end */}
                            {/* general disclaimer   */}
                            <div
                              className="notification-box warning"
                              style={{
                                boxSizing: "border-box",
                                verticalAlign: "top",
                                borderRadius: "6px",
                                border: "0.5px solid #FFDC00",
                                background: "#FFFAD9",
                                width: "100%",
                                padding: "8px 12px",
                              }}
                            >
                              <div
                                className="nb-header"
                                style={{
                                  boxSizing: "border-box",
                                  verticalAlign: "top",
                                  marginBottom: "8px",
                                }}
                              >
                                <img
                                  src="https://d3q1s0lzrazpnf.cloudfront.net/imageResource/2023/08/24/1692863540799-0a49d7366729d6f59ae2c86de97fa075.png"
                                  alt=""
                                  style={{
                                    boxSizing: "border-box",
                                    msInterpolationMode: "bicubic",
                                    border: 0,
                                    height: "16px",
                                    lineHeight: "100%",
                                    outline: "none",
                                    textDecoration: "none",
                                    verticalAlign: "middle",
                                    display: "inline-block",
                                    maxWidth: "560px",
                                    width: "16px",
                                  }}
                                />
                                <span
                                  className="nbh-title"
                                  style={{
                                    boxSizing: "border-box",
                                    verticalAlign: "middle",
                                    display: "inline-block",
                                    paddingLeft: "4px",
                                    fontSize: "12px",
                                    fontStyle: "normal",
                                    fontWeight: 600,
                                    lineHeight: "16px",
                                  }}
                                >
                                  Important
                                </span>
                              </div>
                              <div
                                className="nbh-content"
                                style={{
                                  boxSizing: "border-box",
                                  verticalAlign: "top",
                                  color: "#B15400",
                                  fontSize: "12px",
                                  fontWeight: 400,
                                  lineHeight: "16px",
                                }}
                              >
                                * Please note that the special policy above will
                                not apply if you have rescheduled directly with
                                the airline prior to this notice.
                                <br />* The refund amount and reschedule fee
                                above is only an estimation and can change any
                                time.
                                <br />* If you submit a refund and reschedule
                                after the deadline stated above, a different
                                policy will apply.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "100%",
                                height: "16px",
                                display: "block",
                                boxSizing: "border-box",
                                verticalAlign: "top",
                              }}
                            ></div>
                            {/* general disclaimer end */}
                            {/* <div class="preflight-closing">
                        termsConditionMore
                      </div> */}
                            {/* Additional Purchases  */}
                            {/* Additional Purchases  End */}
                            {/* divider */}
                            <div
                              style={{
                                width: "100%",
                                height: "16px",
                                display: "block",
                                boxSizing: "border-box",
                                verticalAlign: "top",
                              }}
                            ></div>
                            <div
                              style={{
                                width: "100%",
                                height: "1px",
                                backgroundColor: "#f8f8f8",
                                display: "block",
                                borderTop: "0.5px dashed #8A8A8A",
                                boxSizing: "border-box",
                                verticalAlign: "top",
                              }}
                            />
                            <div
                              style={{
                                width: "100%",
                                height: "16px",
                                display: "block",
                                boxSizing: "border-box",
                                verticalAlign: "top",
                              }}
                            ></div>
                            {/* divider */}
                            {/* Body Closing */}
                            <p
                              style={{
                                boxSizing: "border-box",
                                WebkitTextSizeAdjust: "100%",
                                msTextSizeAdjust: "100%",
                                margin: "0px",
                                fontStyle: "normal",
                                fontWeight: "normal",
                                fontSize: "12px",
                                lineHeight: "16px",
                                color: "#555555",
                                verticalAlign: "top",
                              }}
                            >
                              testing tanpa link buat CTV AFF
                            </p>
                            {/* Body Closing End */}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    {/* END BODY */}
                    {/* End Core */}
                    <div
                      style={{
                        width: "100%",
                        height: "24px",
                        display: "block",
                        boxSizing: "border-box",
                        verticalAlign: "top",
                      }}
                    ></div>
                    {/* BEGIN FOOTER // */}
                    <table
                      border={0}
                      cellPadding={0}
                      cellSpacing={0}
                      width="100%"
                      className="templateBody"
                      style={{
                        WebkitTextSizeAdjust: "100%",
                        msTextSizeAdjust: "100%",
                        msoTableLspace: "0pt",
                        msoTableRspace: "0pt",
                        backgroundColor: "#FFFFFF",
                        borderRadius: "2px",
                        WebkitBorderRadius: "2px",
                        MozBorderRadius: "2px",
                        overflow: "hidden",
                        boxShadow:
                          "0px 0px 2px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.24)",
                        borderCollapse: "collapse !important",
                        boxSizing: "border-box",
                        verticalAlign: "top",
                        margin: "auto",
                        width: "100%",
                        maxWidth: "756px",
                      }}
                    >
                      <tbody
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "top",
                        }}
                      >
                        <tr
                          style={{
                            boxSizing: "border-box",
                            verticalAlign: "top",
                          }}
                        >
                          <td
                            valign="top"
                            className="bodyContent"
                            style={{
                              WebkitTextSizeAdjust: "100%",
                              msTextSizeAdjust: "100%",
                              msoTableLspace: "0pt",
                              msoTableRspace: "0pt",
                              color: "#505050",
                              fontFamily: "sans-serif",
                              fontSize: "14px",
                              lineHeight: "150%",
                              fontWeight: 300,
                              paddingTop: "16px",
                              paddingRight: "24px",
                              paddingBottom: "0px",
                              paddingLeft: "24px",
                              textAlign: "left",
                              boxSizing: "border-box",
                              verticalAlign: "top",
                            }}
                          >
                            <table
                              align="center"
                              cellPadding={0}
                              cellSpacing={0}
                              border={0}
                              width="100%"
                            >
                              <tbody>
                                <tr>
                                  <td>
                                    <p
                                      style={{
                                        float: "left",
                                        margin: "0px",
                                        padding: "0px",
                                      }}
                                    >
                                      <span
                                        style={{
                                          fontSize: "20px",
                                          lineHeight: "28px",
                                          fontWeight: 500,
                                          color: "#03121A",
                                        }}
                                      >
                                        We’re ready to help you
                                      </span>
                                      <br />
                                      <span
                                        style={{
                                          fontSize: "14px",
                                          lineHeight: "20px",
                                          color: "#687176",
                                        }}
                                      >
                                        Inform your booking ID 100275556 when
                                        contacting us via call or email below:
                                      </span>
                                      <br />
                                    </p>
                                    <br />
                                    <div
                                      style={{
                                        marginTop: "45px",
                                        clear: "both",
                                      }}
                                    >
                                      <img
                                        style={{
                                          width: "24px",
                                          height: "24px",
                                          marginRight: "8px",
                                          display: "inline-block",
                                          verticalAlign: "middle",
                                        }}
                                        src="https://d3q1s0lzrazpnf.cloudfront.net/imageResource/2023/10/18/1697613863731-f9cf46ec2a8560d7e96c1819f823ec62.png"
                                      />
                                      <span
                                        style={{
                                          fontSize: "16px",
                                          lineHeight: "24px",
                                          fontWeight: "bold",
                                          display: "inline-block",
                                          verticalAlign: "middle",
                                        }}
                                      >
                                        0804-1500-308
                                      </span>
                                      <br />
                                    </div>
                                    <div style={{ marginTop: "8px" }}>
                                      <img
                                        style={{
                                          width: "24px",
                                          height: "24px",
                                          marginRight: "8px",
                                          display: "inline-block",
                                          verticalAlign: "middle",
                                        }}
                                        src="https://d3q1s0lzrazpnf.cloudfront.net/imageResource/2023/10/18/1697613861429-2594847a9de7839acd7a8835e45d6de2.png"
                                      />
                                      <span
                                        style={{
                                          fontSize: "16px",
                                          lineHeight: "24px",
                                          fontWeight: "bold",
                                          display: "inline-block",
                                          verticalAlign: "middle",
                                        }}
                                      >
                                        cs@traveloka.com
                                      </span>
                                      <br />
                                    </div>
                                    <div style={{ marginTop: "8px" }}>
                                      <img
                                        style={{
                                          width: "24px",
                                          height: "24px",
                                          marginRight: "8px",
                                          display: "inline-block",
                                          verticalAlign: "middle",
                                        }}
                                        src="https://d3q1s0lzrazpnf.cloudfront.net/imageResource/2023/10/18/1697613858398-8b7893f216fc90deb807584926a50543.png"
                                      />
                                      <a
                                        style={{
                                          fontSize: "16px",
                                          lineHeight: "24px",
                                          fontWeight: "bold",
                                          color: "#0194F3",
                                          display: "inline-block",
                                          verticalAlign: "middle",
                                          textDecoration: "none",
                                        }}
                                        href="http://www.traveloka.com/contactus?source=Flight_preflight_email"
                                      >
                                        Contact Us
                                      </a>
                                      <br />
                                    </div>
                                    <div style={{ marginTop: "8px" }}>
                                      <img
                                        style={{
                                          width: "24px",
                                          height: "24px",
                                          marginRight: "8px",
                                          display: "inline-block",
                                          verticalAlign: "middle",
                                        }}
                                        src="https://d3q1s0lzrazpnf.cloudfront.net/imageResource/2023/10/18/1697613866136-2764ff01b3dfa00b9d278cc7e9da95d2.png"
                                      />
                                      <a
                                        style={{
                                          fontSize: "16px",
                                          lineHeight: "24px",
                                          fontWeight: "bold",
                                          color: "#0194F3",
                                          display: "inline-block",
                                          verticalAlign: "middle",
                                          textDecoration: "none",
                                        }}
                                        href="https://trv.lk/help?source=Flight_preflight_email"
                                      >
                                        Go to Help Center
                                      </a>
                                      <br />
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr
                          style={{
                            boxSizing: "border-box",
                            verticalAlign: "top",
                          }}
                        >
                          <td
                            valign="top"
                            style={{
                              WebkitTextSizeAdjust: "100%",
                              msTextSizeAdjust: "100%",
                              msoTableLspace: "0pt",
                              msoTableRspace: "0pt",
                              width: "100%",
                              height: "12px",
                              boxSizing: "border-box",
                              verticalAlign: "top",
                            }}
                          ></td>
                        </tr>
                      </tbody>
                    </table>
                    <div
                      style={{
                        width: "100%",
                        height: "24px",
                        display: "block",
                        boxSizing: "border-box",
                        verticalAlign: "top",
                      }}
                    ></div>
                    {/* End Core */}
                    {/* BEGIN BODY // */}
                    <table
                      border={0}
                      cellPadding={0}
                      cellSpacing={0}
                      width="100%"
                      style={{
                        boxSizing: "border-box",
                        WebkitTextSizeAdjust: "100%",
                        msTextSizeAdjust: "100%",
                        msoTableLspace: "0pt",
                        msoTableRspace: "0pt",
                        verticalAlign: "top",
                        borderCollapse: "collapse !important",
                      }}
                    >
                      <tbody>
                        <tr
                          style={{
                            boxSizing: "border-box",
                            verticalAlign: "top",
                          }}
                        >
                          <td
                            valign="top"
                            style={{
                              textAlign: "center",
                              paddingLeft: "20px",
                              paddingRight: "20px",
                              boxSizing: "border-box",
                              WebkitTextSizeAdjust: "100%",
                              msTextSizeAdjust: "100%",
                              msoTableLspace: "0pt",
                              msoTableRspace: "0pt",
                              verticalAlign: "top",
                            }}
                          >
                            <span
                              style={{
                                fontFamily: "sans-serif",
                                fontWeight: "normal",
                                fontSize: "13px",
                                color: "#727272",
                                lineHeight: "18px",
                                boxSizing: "border-box",
                                verticalAlign: "top",
                              }}
                            >
                              This email is intended solely for Muhammad Fajrin,
                              because you have made a reservation through
                              Traveloka.
                              <br
                                style={{
                                  boxSizing: "border-box",
                                  verticalAlign: "top",
                                }}
                              />
                              <br
                                style={{
                                  boxSizing: "border-box",
                                  verticalAlign: "top",
                                }}
                              />
                              &amp;copy; 2023 Traveloka. All Rights Reserved.
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    {/* End Core */}
                    <div
                      style={{
                        width: "100%",
                        height: "32px",
                        display: "block",
                        boxSizing: "border-box",
                        verticalAlign: "top",
                      }}
                    ></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </center>
        </div>
      </div>
    </div>
  );
};

// Function to format the date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { weekday: "short" };
  const weekday = date.toLocaleDateString("en-US", options);
  const day = date.getDate();
  const month = date.toLocaleDateString("en-US", { month: "short" });
  return `${weekday}, ${String(day).padStart(2, "0")} ${month}`;
};

const formatEmailTime = (dateString) => {
  const date = new Date(dateString);
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
};

const formatDateTime = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${day} ${month} ${year}, ${hours}:${minutes}`;
};

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentScreen, setCurrentScreen] = useState(0);
  const [userAnswers, setUserAnswers] = useState(
    questions.map((q) => q.prefill.slice())
  );

  const [enabledFields, setEnabledFields] = useState(
    questions.map((q) => new Array(q.prefill.length).fill(false))
  );
  const currentQuestionData = questions[currentQuestion];
  const [flightDateTimeDeparture, setFlightDateTimeDeparture] = useState(
    currentQuestionData.prefill[6]
  );
  const [flightDateTimeArrival, setFlightDateTimeArrival] = useState(
    currentQuestionData.prefill[7]
  );

  const [startTime, setStartTime] = useState(Date.now());
  const [intervalTimes, setIntervalTimes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // console.log(userAnswers);
  }, [userAnswers]);

  const handleInputChange = (e, index) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion][index] = e.target.value;
    setUserAnswers(newAnswers);
  };

  const handleCheckboxChange = (index) => {
    const newEnabledFields = [...enabledFields];
    newEnabledFields[currentQuestion][index] =
      !newEnabledFields[currentQuestion][index];
    setEnabledFields(newEnabledFields);
  };

  const handleNextScreen = () => {
    if (currentScreen < 2) {
      setCurrentScreen(currentScreen + 1);
    } else {
      const endTime = Date.now();
      const newIntervalTimes = [...intervalTimes, endTime - startTime];
      setIntervalTimes(newIntervalTimes);
      setStartTime(endTime);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setCurrentScreen(0);
      } else {
        navigate("/result", {
          state: { userAnswers, intervalTimes: newIntervalTimes },
        });
      }
    }
  };

  const handlePrevScreen = () => {
    if (currentScreen > 0) {
      setCurrentScreen(currentScreen - 1);
    } else if (currentScreen === 0 && currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setCurrentScreen(2);
    }
  };

  return (
    <div className="mainContainer">
      {currentScreen === 0 && (
        <div className="screen-1">
          <div className="subMainContainer">
            <div className="emailContainer">
              <div className="ui top attached label">Email Content</div>
              <LeftContainer
                titleText={"Title Question 1"}
                oldData={currentQuestionData.oldData}
                newData={currentQuestionData.newData}
                question={currentQuestionData.question}
                airline={currentQuestionData.airline}
                airlineName={currentQuestionData.airlineName}
                prefill={currentQuestionData.prefill}
                screen={currentScreen}
              />
            </div>
            <div className="contentContainer">
              <div className="ui top attached label">Flight Search</div>
              <FirstRightContainer
                prefill={currentQuestionData.prefill}
                userAnswers={userAnswers[currentQuestion]}
                onInputChange={(e, index) => handleInputChange(e, index)}
                startIndex={0}
                endIndex={3}
                withCheckboxes={false}
                oldData={currentQuestionData.oldData}
                newData={currentQuestionData.newData}
              />
              <div class="nextButtonContainer">
                <button className="nextButton" onClick={handleNextScreen}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {currentScreen === 1 && (
        <div className="screen-2">
          <div className="subMainContainer">
            <div className="emailContainer">
              <div className="ui top attached label">
                This preflight job is completed!
              </div>
              <LeftContainer
                titleText={"Title Question 2"}
                oldData={currentQuestionData.oldData}
                newData={currentQuestionData.newData}
                question={currentQuestionData.question}
                airline={currentQuestionData.airline}
                airlineName={currentQuestionData.airlineName}
                prefill={currentQuestionData.prefill}
                screen={currentScreen}
              />
            </div>
            <div className="contentContainer">
              <div className="ui top attached label found">
                <p className="emailContainer__title">1 booking(s) found!</p>
                <p className="emailContainer__subtitle">
                  Fill out the new schedule below
                </p>
              </div>
              <SecondRightContainer
                prefill={currentQuestionData.prefill}
                userAnswers={userAnswers[currentQuestion]}
                onInputChange={(e, index) => handleInputChange(e, index)}
                startIndex={4}
                endIndex={currentQuestionData.prefill.length - 1}
                withCheckboxes={true}
                handleCheckboxChange={handleCheckboxChange}
                enabledFields={enabledFields[currentQuestion]}
                oldData={currentQuestionData.oldData}
                newData={currentQuestionData.newData}
                airline={currentQuestionData.airline}
                flightDateTimeDeparture={currentQuestionData.prefill[6]}
                setFlightDateTimeDeparture={setFlightDateTimeDeparture}
                flightDateTimeArrival={currentQuestionData.prefill[7]}
                setFlightDateTimeArrival={setFlightDateTimeArrival}
              />
              <div className="buttonContainer">
                <button className="prevButton" onClick={handlePrevScreen}>
                  Back
                </button>
                <button className="nextButton" onClick={handleNextScreen}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {currentScreen === 2 && (
        <div className="screen-3">
          <div className="subMainContainer">
            <div className="emailContainer">
              <div className="ui top attached label">
                This preflight job is completed!
              </div>
              <LeftContainer
                titleText={"Title Question 3"}
                oldData={currentQuestionData.oldData}
                newData={currentQuestionData.newData}
                question={currentQuestionData.question}
                airline={currentQuestionData.airline}
                airlineName={currentQuestionData.airlineName}
                prefill={currentQuestionData.prefill}
                screen={currentScreen}
              />
            </div>

            <div className="contentContainer">
              <div className="ui top attached label">Preview</div>
              <EmailPreviewContainer
                userAnswers={userAnswers[currentQuestion]}
                oldData={currentQuestionData.oldData}
                newData={currentQuestionData.newData}
                question={currentQuestionData.question}
                airline={currentQuestionData.airline}
                airlineName={currentQuestionData.airlineName}
                prefill={currentQuestionData.prefill}
                flightDateTimeDeparture={currentQuestionData.prefill[6]}
                flightDateTimeArrival={currentQuestionData.prefill[7]}
              />
              <div className="buttonContainer">
                <button className="prevButton" onClick={handlePrevScreen}>
                  Back
                </button>
                <button className="nextButton" onClick={handleNextScreen}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
