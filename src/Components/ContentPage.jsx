import { useEffect } from "react"
import { useState } from "react"
import { Button, Col, Collapse, Container, Nav, Row, Tab, Tabs } from "react-bootstrap"
import "../Styles/contentPage.css"
import { FaAngleDown,FaAngleLeft,FaRegArrowAltCircleRight } from "react-icons/fa";

const ContentPage = () =>{

      // rules 
      const [open, setOpen] = useState(false);
      const [open2, setOpen2] = useState(false);
      const [open3, setOpen3] = useState(false);
      const [open4, setOpen4] = useState(false);
      const [open5, setOpen5] = useState(false);
      const [open6, setOpen6] = useState(false);
      const [open7, setOpen7] = useState(false);
      const [open8, setOpen8] = useState(false);
      const [open9, setOpen9] = useState(false);
      const [open10, setOpen10] = useState(false);
      const [open11, setOpen11] = useState(false);

      // menu
    const [firstTwoToWhite,setFirstTwoToWhite] = useState(false)
    const [thirdToWhite,setThirdToWhite] = useState(false)
    const [forthToWhite , setForthToWhite] = useState(false)

    

    const makingFirstWhite = () => {
        setFirstTwoToWhite(false);
        setThirdToWhite(false)
        setForthToWhite(false)
    }

    const makingSecondWhite = () => {
        setFirstTwoToWhite(true);
        setThirdToWhite(false)
        setForthToWhite(false)
    }

    const makingThirdWhite = () => {
        setFirstTwoToWhite(null);
        setThirdToWhite(true)
        setForthToWhite(false)
    }
    const makingForthWhite = () =>{
      setForthToWhite(true);
      setFirstTwoToWhite(null)
      setThirdToWhite(null)
    }

    const fetchServerStatus = async () =>{
      try {
        let response = await fetch(`https://rustydudes.com/api`,{
          method : 'GET',
          mode : 'cors',
          headers: {
            "Content-Type": "application/json",
          }
        })
        let data = await response.json()
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(()=>{
      fetchServerStatus()
    },[])
    return(
        <Container style={{backgroundColor:'black'}} fluid>
            <Row className={firstTwoToWhite === true ? "contentBg2" : "contentBg"}>
                <Col xs={12} className="mt-md-5 mt-1">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row className="py-md-5 mt-sm-0 mt-5 mt-md-5 mainMiddleContent">
    <Col xs={12}>
      <Nav className="pt-md-2 contentstabs d-flex justify-content-center">
        <Col xs={12} md={3}>
        <Nav.Item>
          <Nav.Link className={firstTwoToWhite === false ? "secondStyle mt-2 pt-3 ml-md-0 mr-md-0 ml-5 mr-5 px-4" : "firstStyle ml-md-0 mr-md-0 ml-5 mr-5 mt-2 pt-3 px-4 border-left border-right "} onClick={makingFirstWhite} eventKey="first"><h5><b>Connect</b></h5></Nav.Link>
        </Nav.Item>
        </Col>
        <Col xs={12} md={3}>
        <Nav.Item>
          <Nav.Link className={firstTwoToWhite === true ? "secondStyle mt-2 pt-3 ml-md-0 mr-md-0 ml-5 mr-5 px-4" : "firstStyle mt-2 pt-3 ml-md-0 mr-md-0 ml-5 mr-5 px-4 border-left border-right "} onClick={makingSecondWhite} eventKey="second"><h5><b>Rules</b></h5></Nav.Link>
        </Nav.Item>
        </Col>
        <Col>
        <Nav.Item xs={12} md={3}>
          <Nav.Link className={thirdToWhite === true ? "secondStyle mt-2 pt-3 ml-md-0 mr-md-0 ml-5 mr-5 px-4" : "firstStyle mt-2 pt-3 ml-md-0 mr-md-0 ml-5 mr-5 px-4 border-left border-right "}  onClick={makingThirdWhite} eventKey="third"><h5><b>Server</b></h5></Nav.Link>
        </Nav.Item>
        </Col>
        <Col xs={12} md={3}>
        <Nav.Item>
          <Nav.Link className={forthToWhite === true ? "secondStyle mt-2 pt-3 ml-md-0 mr-md-0 ml-5 mr-5 px-4" : "firstStyle mt-2 pt-3 ml-md-0 mr-md-0 ml-5 mr-5 px-4 border-left border-right "}  onClick={makingForthWhite} eventKey="forth"><h5><b>Contacts</b></h5></Nav.Link>
        </Nav.Item>
        </Col>
      </Nav>
      {/* style={thirdToWhite === true ? {backgroundColor:"white",color:"black"} : {backgroundColor:"black",color:"white"}} */}
    </Col>
    <Col md={12}>
      <Tab.Content className="text-white mainContents mt-md-5 mt-4">
        <Tab.Pane eventKey="first">
          <Container>
            <Row style={{borderRadius:"10px"}} className="shadow-lg mb-5">
              <Col xs={12} className="px-0">
         <h3 className="display-4 text-left mb-3 connentingContainer pl-4 py-2"><b>Join <span>Us</span></b></h3>
              </Col>
              <Col style={{fontSize:"17px"}}>
              <p className="text-left mt-5">Joining our server is super easy , all you have to do is follow these two steps : </p>
              <ol  className="text-left mt-5 ">
                <li>
                  <p className="text-left">Make sure you have rust installed on your pc (From steam)</p>
                </li>
                <li>
                  <p className="text-left">Click on the "Join Me" button down here and enjoy!</p>
                </li>
                <button className="noselect mt-4 joinButton"><b>Join Me</b></button>
              </ol>
              </Col>
            </Row>
          </Container>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <Container>
            <Row style={{borderRadius:"10px"}} className="shadow-lg mb-5">
              <Col xs={12} className="px-0">
         <h3 className="display-4 text-left mb-3 connentingContainer pl-3 py-2"><b>Get To Know <span>Us</span></b></h3>
              </Col>
              <Col style={{fontSize:"17px"}} xs={12}>
              <p className="text-left mt-5">We are just couple of friends and developers who were wondering that it would be <b>amazing</b> if we get our own server in our favorite game <b>Rust.</b> So here we are ,
               we just started our new server and our goal is to get to the OFFICIAL section in rust servers and with help of you we can grow this server together! we just want you to simply play in our server and have fun and be with us in this road.
                We provide you 24h online admin to take care of anything ( Cheaters ) and also you can contact our admins from discord. Enjoy <span style={{color:"red"}}><b>Vanilla Rust</b></span> on its best.</p>
                <p className="text-left"><b>Want to get in touch? Check out our Contacts</b></p>
              </Col>
              <Col xs={12} className="px-0">
              <h3 className="display-4 text-left mb-3 connentingContainer pl-3 py-2 mt-4"><b>Rules Of Server</b></h3>
              </Col>
              <Col xs={12}>
              <button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="text-white mt-5 p-2"
        style={{fontSize:"20px",width:"100%",backgroundColor:"#23293D",border:"none",borderRadius:"10px 25px 10px 25px"}}
      >
      <div className="d-flex justify-content-between "><span className="pl-4"><FaRegArrowAltCircleRight className="mb-1 mr-3" color="red"/></span><b>Cheating Or Scripting</b> {open === true ? <FaAngleDown className="pr-2" fontSize={30}/> : <FaAngleLeft className="pr-2" fontSize={30}/>} </div>
      </button>
      <Collapse in={open}>
        <div id="example-collapse-text" className="text-left px-3" style={{fontSize:"17px"}}>
          <p className="pt-3">
        Do not use any third-party paid or free programs which provide an unfair advantage in-game.
This includes scripts which can perform any action that is otherwise not possible to be performed ingame.
                </p></div>
      </Collapse>
              </Col>
              <Col xs={12}>
              <button
        onClick={() => setOpen2(!open2)}
        aria-controls="example-collapse-text"
        aria-expanded={open2}
        className="text-white mt-1 p-2"
        style={{fontSize:"20px",width:"100%",backgroundColor:"#23293D",border:"none",borderRadius:"10px 25px 10px 25px"}}
      >
      <div className="d-flex justify-content-between align-items-center"><span className="pl-4"><FaRegArrowAltCircleRight className="mb-1 mr-3" color="red"/></span><b>  Ban Evasion </b>{open2 === true ? <FaAngleDown className="pr-2" fontSize={30}/> : <FaAngleLeft className="pr-2" fontSize={30}/>}</div>
      </button>
      <Collapse in={open2}>
        <div id="example-collapse-text" className="text-left px-3" style={{fontSize:"17px"}}>
          <p className="pt-3">
        Do not do anything to bypass a ban on our servers. Do not try to join with a different account.
Any attempt to do so will result in additional bans. If you were banned, sit it out.

Alternate accounts with Rust EAC Game Bans under 365 days will result in the new acocunt being banned.

If you are over 365 days with only 1 Rust Gameban and no issues since that time you will be able to play.
                </p></div>
      </Collapse>
              </Col>
              <Col xs={12}>
              <button
        onClick={() => setOpen3(!open3)}
        aria-controls="example-collapse-text"
        aria-expanded={open3}
        className="text-white mt-1 p-2"
        style={{fontSize:"20px",width:"100%",backgroundColor:"#23293D",border:"none",borderRadius:"10px 25px 10px 25px"}}
      >
      <div className="d-flex justify-content-between align-items-center"><span className="pl-4"><FaRegArrowAltCircleRight className="mb-1 mr-3" color="red"/></span><b>  VAC And  Non-Rust Bans </b>{open3 === true ? <FaAngleDown className="pr-2" fontSize={30}/> : <FaAngleLeft className="pr-2" fontSize={30}/>}</div>
      </button>
      <Collapse in={open3}>
        <div id="example-collapse-text" className="text-left px-3" style={{fontSize:"17px"}}>
          <p className="pt-3">
      Any Non-Rust Bans (regardless of game) more than 180 days are not allowed.

If you connect with one, you will be auto-banned for 1 month. All appeals will be ignored and denied.
                </p></div>
      </Collapse>
              </Col>
              <Col xs={12}>
              <button
        onClick={() => setOpen4(!open4)}
        aria-controls="example-collapse-text"
        aria-expanded={open4}
        className="text-white mt-1 p-2"
        style={{fontSize:"20px",width:"100%",backgroundColor:"#23293D",border:"none",borderRadius:"10px 25px 10px 25px"}}
      >
      <div className="d-flex justify-content-between align-items-center"><span className="pl-4"><FaRegArrowAltCircleRight className="mb-1 mr-3" color="red"/></span><b>  Bug Abuse </b>{open4 === true ? <FaAngleDown className="pr-2" fontSize={30}/> : <FaAngleLeft className="pr-2" fontSize={30}/>}</div>
      </button>
      <Collapse in={open4}>
        <div id="example-collapse-text" className="text-left px-3" style={{fontSize:"17px"}}>
          <p className="pt-3">
        Do not try to use any unfair advantages which were not intentionally possible within the game.

This includes but is not limited to accessing inaccessible areas, utilizing game objects to allow you to see or shoot through unintended colliders, and creating graphic errors or using graphical adjustments not built into the native game.

Any players found inside of the terrain will also be banned.
                </p></div>
      </Collapse>
              </Col>
              <Col xs={12}>
              <button
        onClick={() => setOpen5(!open5)}
        aria-controls="example-collapse-text"
        aria-expanded={open5}
        className="text-white mt-1 p-2"
        style={{fontSize:"20px",width:"100%",backgroundColor:"#23293D",border:"none",borderRadius:"10px 25px 10px 25px"}}
      >
      <div className="d-flex justify-content-between align-items-center"><span className="pl-4"><FaRegArrowAltCircleRight className="mb-1 mr-3" color="red"/></span><b>  Malicious Behavior </b>{open5 === true ? <FaAngleDown className="pr-2" fontSize={30}/> : <FaAngleLeft className="pr-2" fontSize={30}/>}</div>
      </button>
      <Collapse in={open5}>
        <div id="example-collapse-text" className="text-left px-3" style={{fontSize:"17px"}}>
          <p className="pt-3">
        Any actions that cause substantial performance issues to a server may be grounds for immediate removal of the entities or player bans.

This includes, but is not limited to, spam crafting, mass despawning, and spamming fireworks.
                </p></div>
      </Collapse>
              </Col>
              <Col xs={12}>
              <button
        onClick={() => setOpen6(!open6)}
        aria-controls="example-collapse-text"
        aria-expanded={open6}
        className="text-white mt-1 p-2"
        style={{fontSize:"20px",width:"100%",backgroundColor:"#23293D",border:"none",borderRadius:"10px 25px 10px 25px"}}
      >
      <div className="d-flex justify-content-between align-items-center"><span className="pl-4"><FaRegArrowAltCircleRight className="mb-1 mr-3" color="red"/></span><b>  No Walling Off Outpost </b>{open6 === true ? <FaAngleDown className="pr-2" fontSize={30}/> : <FaAngleLeft className="pr-2" fontSize={30}/>}</div>
      </button>
      <Collapse in={open6}>
        <div id="example-collapse-text" className="text-left px-3" style={{fontSize:"17px"}}>
          <p className="pt-3">
        Due to our servers featuring a combined Bandit Camp and Outpost we do not permit players to wall off or limit access to this safe zone monument.
If you are found to be doing this, entities will be removed without replacement.
                </p></div>
      </Collapse>
              </Col>
              <Col xs={12}>
              <button
        onClick={() => setOpen7(!open7)}
        aria-controls="example-collapse-text"
        aria-expanded={open7}
        className="text-white mt-1 p-2"
        style={{fontSize:"20px",width:"100%",backgroundColor:"#23293D",border:"none",borderRadius:"10px 25px 10px 25px"}}
      >
      <div className="d-flex justify-content-between align-items-center"><span className="pl-4" style={{maxWidth:"100%"}}><FaRegArrowAltCircleRight className="mb-1 mr-3" color="red"/></span><b>  Harrassment & Toxic Behavior </b>{open7 === true ? <FaAngleDown className="pr-2" fontSize={30}/> : <FaAngleLeft className="pr-2" fontSize={30}/>}</div>
      </button>
      <Collapse in={open7}>
        <div id="example-collapse-text" className="text-left px-3" style={{fontSize:"17px"}}>
          <p className="pt-3">
        Rustopia follows all established FacePunch ToS in regards to communication performed in game via voice, text, notes, etc.
If you are found to be breaking this you may be muted or banned from our servers.

Any release of personal real life information (doxxing) will result in the immediate permanent removal from our servers.
                </p></div>
      </Collapse>
              </Col>
              <Col xs={12}>
              <button
        onClick={() => setOpen8(!open8)}
        aria-controls="example-collapse-text"
        aria-expanded={open8}
        className="text-white mt-1 p-2"
        style={{fontSize:"20px",width:"100%",backgroundColor:"#23293D",border:"none",borderRadius:"10px 25px 10px 25px"}}
      >
      <div className="d-flex justify-content-between align-items-center"><span className="pl-4"><FaRegArrowAltCircleRight className="mb-1 mr-3" color="red"/></span><b>  VPN/Proxy Connections </b>{open8 === true ? <FaAngleDown className="pr-2" fontSize={30}/> : <FaAngleLeft className="pr-2" fontSize={30}/>}</div>
      </button>
      <Collapse in={open8}>
        <div id="example-collapse-text" className="text-left px-3" style={{fontSize:"17px"}}>
          <p className="pt-3">
        We do not permit the use of any VPN or Proxy services with the exception of Geforce Now or other cloud gaming systems.
                </p></div>
      </Collapse>
              </Col>
              <Col xs={12}>
              <button
        onClick={() => setOpen9(!open9)}
        aria-controls="example-collapse-text"
        aria-expanded={open9}
        className="text-white mt-1 p-2"
        style={{fontSize:"20px",width:"100%",backgroundColor:"#23293D",border:"none",borderRadius:"10px 25px 10px 25px"}}
      >
      <div className="d-flex justify-content-between align-items-center"><span className="pl-4"><FaRegArrowAltCircleRight className="mb-1 mr-3" color="red"/></span><b>  Stream Sniping </b>{open9 === true ? <FaAngleDown className="pr-2" fontSize={30}/> : <FaAngleLeft className="pr-2" fontSize={30}/>}</div>
      </button>
      <Collapse in={open9}>
        <div id="example-collapse-text" className="text-left px-3" style={{fontSize:"17px"}}>
          <p className="pt-3">
        Repeated offenses may be deemed to be targeted harassment and punishable as excessive toxicity.
This is reviewed on a case by case basis and the burden of proof is on the streamer. The streamer must be using all standard known measures to protect their stream including, but not limited to: streamer mode, map overlay, disabled chat, non-obvious Steam names, etc.

Rustopia staff, as a standard practice, will neither sit and observe a stream nor spectate suspected parties to acquire evidence on behalf of the broadcaster. Decisions to take or not take moderation actions based on the facts available are the sole discretion of the administrator reviewing the report.

Failure to have the basic protections in place on a stream will be cause for closure of the report.
                </p></div>
      </Collapse>
              </Col>
              <Col xs={12}>
              <button
        onClick={() => setOpen10(!open10)}
        aria-controls="example-collapse-text"
        aria-expanded={open10}
        className="text-white mt-1 p-2"
        style={{fontSize:"20px",width:"100%",backgroundColor:"#23293D",border:"none",borderRadius:"10px 25px 10px 25px"}}
      >
      <div className="d-flex justify-content-between align-items-center"><span className="pl-4"><FaRegArrowAltCircleRight className="mb-1 mr-3" color="red"/></span><b>  Hacker Association </b>{open10 === true ? <FaAngleDown className="pr-2" fontSize={30}/> : <FaAngleLeft className="pr-2" fontSize={30}/>}</div>
      </button>
      <Collapse in={open10}>
        <div id="example-collapse-text" className="text-left px-3" style={{fontSize:"17px"}}>
          <p className="pt-3">
        We do not condone playing with cheaters.
Knowing or not you can be banned for this. Be careful who you team with!
Repeat offenders risk being permanently banned.
                </p></div>
      </Collapse>
              </Col>
              <Col xs={12}>
              <button
        onClick={() => setOpen11(!open11)}
        aria-controls="example-collapse-text"
        aria-expanded={open11}
        className="text-white mt-1 p-2"
        style={{fontSize:"20px",width:"100%",backgroundColor:"#23293D",border:"none",borderRadius:"10px 25px 10px 25px"}}
      >
      <div className="d-flex justify-content-between align-items-center"><span className="pl-4"><FaRegArrowAltCircleRight className="mb-1 mr-3" color="red"/></span><b>  Miscellaneous </b>{open11 === true ? <FaAngleDown className="pr-2" fontSize={30}/> : <FaAngleLeft className="pr-2" fontSize={30}/>}</div>
      </button>
      <Collapse in={open11}>
        <div id="example-collapse-text" className="text-left px-3" style={{fontSize:"17px"}}>
          <p className="pt-3">
        Rules are not limited to what is stated above and we reserve the right to take moderation actions based on our discretion in all situations.
        </p>
        </div>
      </Collapse>
              </Col>
            </Row>
          </Container>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
          hehe
        </Tab.Pane>
        <Tab.Pane eventKey="forth">
          hehe
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
                </Col>
            </Row>
        </Container>
    )
}

export default ContentPage;