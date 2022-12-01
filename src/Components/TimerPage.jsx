import { Col, Container, Row } from "react-bootstrap";
import videoTrailer from "../trailer.mp4";
import "../Styles/mainpage.css";
import { BsFillArrowDownSquareFill } from "react-icons/bs";
import { FaDiscord,FaInstagram } from "react-icons/fa";
import { useEffect, useState } from "react";

const TimerPage = () => {



  return (
    <Container fluid className="p-0">
      <div>
        <video
          loop
          autoPlay
          muted
          disablePictureInPicture
          className="ml-auto mr-auto videoBg"
        >
          <source src={videoTrailer} height={10} />
        </video>
      </div>
      <div className="content">
        <Row className="mr-0 pr-0">
          <Col xs={6} className="d-flex justify-content-start" >
            <img height={50} className="mt-4 ml-5 text-left logoImg" src="https://cdn.discordapp.com/attachments/295854094831190016/1019969309537226872/Rusty_Dudes_Logo_1.png" alt="" />
          </Col>
          <Col xs={6} className="d-flex justify-content-end">
              <a className="mr-4 text-white mt-4" href="#" style={{fontSize:"30px"}}><FaDiscord className="discordIcon"/></a>
              <a href="#" className="text-white mr-5 mt-4" style={{fontSize:"30px"}}><FaInstagram className="instaIcon"/></a>
           
            



            {/* <ul className="pt-5 pr-5 mr-5 text-right social_icons ">
              <li><a href="#"><FaDiscord className="contactIcon"/></a></li>
              <li><a href="#"><FaInstagram className="contactIcon"/></a></li>
            </ul> */}
          </Col>
        </Row>
      </div>
      <div className="secondContent">
        <Row className="mr-0 pr-0 mt-auto mb-auto">
          <Col xs={12}>
            <h2 className="text-left welcome">Welcome to</h2>
            <h1 className="name ">Rusty Dudes</h1>
          </Col>
          <Col className="offset-5" xs={7}>
            <p className="description text-left p-lg-2 pb-md-0 pt-md-0 pl-md-2 pb-0 pt-0 pl-2">
              We provide you a outstanding new <b>Vanilla</b> community{" "}
              <b>Rust</b> server
              <br /> with full time active admins, experience the game in best
              way possible!
              <br />
              Interested? <span style={{ color: "red" }}>
               <b> CONNECT</b>
              </span> now!
            </p>
            <div className="box-1 d-flex justify-content-start">
            <a href="/" style={{textDecoration:'none'}}>
              <div className="btn btn-one pr-5 pl-5 pt-2 pb-2">
                <span style={{color:"white"}}>Connect</span>
              </div>
            </a>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default TimerPage;
