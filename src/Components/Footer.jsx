import { Col, Container, Nav, Navbar } from "react-bootstrap";
import "../Styles/customFooter.css"
import React from "react"

const Footer = () => <footer className="page-footer font-small blue text-black">
    <div className="container-fluid text-left text-md-left pt-5" style={{backgroundColor:"#C1C1C1"}}>
        <div className="row footerContainer">
            <div className="col-md-10 mt-md-0 mt-3">
                <h5 className="text-uppercase pl-0 pl-md-4">Footer Content</h5>
                <p className="pl-0 pl-md-4">Here you can use rows and columns to organize your footer content.</p>
            </div>

            <hr className="clearfix d-md-none pb-0 text-left ml-3" style={{width:"90%"}}/>

            <div className="col-md-2 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><b><a href="#!">Contacts</a></b></li>
                    <li><b><a href="#!">About Us</a></b></li>
                    <li><b><a href="#!">Connect</a></b></li>
                    <li><b><a href="#!">Rules</a></b></li>  
                </ul>
            </div>
        </div>
    <div className="footer-copyright row text-left py-3 footerContainer" style={{backgroundColor:"#C1C1C1"}}>
    <div className="col-md-12">
        <span className="pl-0 pl-md-3"><b> © 2022 Copyright:
           RustyDudes </b></span>
           </div>
    </div>
    </div>

</footer>

export default Footer