import React, { useEffect, useState } from "react";

import "./StoreCadumSection.css";
import { Row, Col, Container, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import audio from "../../Audio/I Cry Night after Night (Instrumental) - The Egyptian Lover.mp3";
import logo from "../../assetsIMG/logo.png";
import bubble from "../../assetsIMG/BubbleGhost.png";
import arrow from "../../assetsIMG/Arrow.png";
import { Navbar, Nav, Button } from "react-bootstrap";

import music from "../../assetsIMG/pause.png";
import playing from "../../assetsIMG/play.png";
import shopping from "../../assetsIMG/Group 297.png";
import shopingcard from "../../assetsIMG/shoping-card.png";

import artboard from "../../assetsIMG/E44.png";
import Artboard2 from "../../assetsIMG/Artboard 2.png";
import Artboard3 from "../../assetsIMG/Artboard 3.png";

import waving from "../../assetsIMG/Waving_ArCadum.png";
import blowing from "../../assetsIMG/BlowingBubbles_ArCadum.png";
import bubbleImage from "../../assetsIMG/BubbleGhostLogo_ArCadum.png";
import bubbleVideo from "../../assetsIMG/VideoGameImage.png";

import opensea from "../../assetsIMG/opensea w.png";
import opensea2 from "../../assetsIMG/opensea.png";
import discord2 from "../../assetsIMG/discord2.png";
import discord from "../../assetsIMG/discord.png";

import metamaskicon from '../../assetsIMG/MetaMask_Fox.svg.png';
import Modal from 'react-bootstrap/Modal'
import { ethers } from "ethers";
import contract from '../Contract/TestNFT.json';
const contractAddress='0x64a4bdf5733862fe27D042C202EC590d1D435879';
const abi=contract.abi;


export default function StoreCadumSection() {
  const [play, setPlay] = useState(true);
  const [visibl, setVisibl] = useState(false);
  const [scroll, setScroll] = useState(false);
  // const [states, setStates] = useState(opensea);
  const [cord, setCord] = useState(discord);
  const [card, setCard] = useState("");
  const [showalert, setShowalert] = useState(false);
  const[btname,setBtname]=useState("Connect Wallet");
  const [useraddress, setUseraddress] = useState('');
  const [balance, setBalance] = useState('');


  const handleClick = () => {
    document.getElementById("section-store").scrollIntoView({
      behavior: "smooth",
    });
  };

  // const handleMouseOver = () => {
  //   setStates(opensea2);
  // };

  // const handleMouseOut = () => {
  //   setStates(opensea);
  // };

  const disMouseOver = () => {
    setCord(discord2);
  };

  const disMouseOut = () => {
    setCord(discord);
  };

  const shopingMouseOver = () => {
    setCard(shopingcard);
  };

  const shopingMouseOut = () => {
    setCard(shopping);
  };

  useEffect(()=>{ setTimeout(()=>{WalletConnection()},2000)},[])

  const WalletConnection = () => {
      if (typeof window.ethereum !== 'undefined') {
        window.ethereum.request({ method: 'eth_requestAccounts' })
          .then(response => { accountChangeHandler(response[0]);setBtname('Connected') })
      }
      else {
       setShowalert(true)
      }
  }
  const accountChangeHandler = (newAccount) => {
    setUseraddress(newAccount);
  }
  const chainChangeHandler = () => {
    window.location.reload()
  }

  if (typeof window.ethereum !== 'undefined') {
    window.ethereum.on('accountsChanged', accountChangeHandler);
    window.ethereum.on('chainChanged', chainChangeHandler)
  }
  else {}


  const MintNFT = async () => {
    try {
        if (window.ethereum) {
          const a = await window.ethereum.request({ method: 'eth_requestAccounts' })
          const b = await a[0];
          const balance= await window.ethereum.request({ method: "eth_getBalance", params: [b.toString(), "latest"] })
          if(ethers.utils.formatEther(balance) > 0.100000000014995852){
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const nftcontract = new ethers.Contract(contractAddress, abi, signer);
            let nftTxn =  nftcontract.mintTo(b, { value: ethers.utils.parseEther('0.1') })
            console.log(nftTxn)
            console.log(`Mined, tee transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`)
            console.log("Initialize Payment") 
          }
          else{
               alert('Not sufficient Funds')
          }
        }
        else { console.log("Ethereum Object not found") }
    }
    catch (e) {
        alert(JSON.stringify(e))
    }
}

const handleClose = () => setShowalert(false);

  return (
    <>
<Modal
        show={showalert}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header id="modalheader">
          <img src={metamaskicon} id="metaicon" />
          <Modal.Title>Please Install Metamask First</Modal.Title>
        </Modal.Header>
        <Modal.Body id='modalbody'>
          <p>Metamask is available on <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn" style={{paddingleft:"10"}}>Chrome</a>, <a href="https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/" style={{padding:"10"}}>Firefox</a>. You can choose anyone.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>Close</Button>
          {/* <Button variant="primary">Understood</Button> */}
        </Modal.Footer>
      </Modal>

      <div className="store-cadum" id="store">
        <div className="overlay">
          <Row className="arcade-image-store">
            <Col sm={12} lg={12} md={12}>
              <img src={artboard} alt="image" />
            </Col>
          </Row>
          <Row className="arcade-image-store-12">
            <Col sm={12} lg={12} md={12}>
              <img src={Artboard2} alt="image" />
            </Col>
          </Row>
          <Navbar collapseOnSelect expand="lg" variant="dark" id="nav-web">
            <Container>
              <div
                className="wow fadeInLeftBig "
                data-wow-delay=".50s logo-img"
                id="store-cadum"
              >
                <a href="/">
                  <img src={logo} alt="image" />
                </a>
              </div>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  {play == false ? (
                    <div
                      className="music-play-audio wow fadeInLeftBig"
                      data-wow-delay=".50s"
                      id="play"
                      onClick={() => {
                        setPlay(true);
                        document.getElementById("myaudio").play();
                      }}
                    >
                      <img src={playing} alt="image" />
                    </div>
                  ) : (
                    <div
                      class="music-play-audio"
                      id="play"
                      onClick={() => {
                        setPlay(false);
                        document.getElementById("myaudio").pause();
                      }}
                    >
                      <img src={music} alt="image" />
                    </div>
                  )}
                </Nav>
                <Nav className="wow fadeInRightBig " data-wow-delay=".50s">
                  <ul className="button-header">
                    <li>
                      <a
                        href="https://twitter.com/arcadumverse"
                        target="_blank"
                      >
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    {/* <li>
                      <a
                        href=""
                        onMouseOver={() => handleMouseOver()}
                        onMouseOut={() => handleMouseOut()}
                      >
                        <img className="opensea" src={states} />
                      </a>
                    </li> */}
                    <li>
                      <a
                        href="https://discord.com/channels/914886027536138270/915243460745912390"
                        target="_blank"
                        onMouseOver={() => disMouseOver()}
                        onMouseOut={() => disMouseOut()}
                      >
                        <img className="discord" src={cord} />
                      </a>
                    </li>
                  </ul>
                  <Button onClick={()=>{WalletConnection()}} className="connect-wallet">{btname}</Button>
                  <audio
                    autoplay="autoplay"
                    loop="loop"
                    id="myaudio"
                    src={audio}
                    preload="auto"
                  ></audio>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Navbar expand={false} id="nav-responsive">
            <Container fluid>
              <Navbar.Brand>
                {play == false ? (
                  <div
                    class="music-play-audio"
                    id="play"
                    onClick={() => {
                      setPlay(true);
                      document.getElementById("myaudio").play();
                    }}
                  >
                    <img src={playing} alt="image" />
                  </div>
                ) : (
                  <div
                    class="music-play-audio"
                    id="play"
                    onClick={() => {
                      setPlay(false);
                      document.getElementById("myaudio").pause();
                    }}
                  >
                    <img src={music} alt="image" />
                  </div>
                )}
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="offcanvasNavbar" />
              <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav
                    className="justify-content-end flex-grow-1 pe-3"
                    id="nav-icon-responsive"
                  >
                    <ul className="button-header-responsive">
                      <li>
                        <a href="https://twitter.com/arcadumverse">Twitter</a>
                      </li>
                      {/* <li>
                        <a href="">OpenSea</a>
                      </li> */}
                      <li>
                        <a href="https://discord.com/channels/914886027536138270/915243460745912390">
                          DisCord
                        </a>
                      </li>
                    </ul>
                    <Button className="connect-wallet" id="connect-wallet">
                      {" "}
                      Connect Wallet{" "}
                    </Button>

                    <audio id="myaudio" src={audio} preload="auto"></audio>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>

          <Row className="arcade-image-store-1">
            <Col sm={12} lg={12} md={12}>
              <img src={Artboard2} alt="image" />
            </Col>
          </Row>
          <div className="container">
            <div className="store-subheading">
              <Row>
                <Col sm={12} lg={6} md={6} className="stor-random">
                  <div className="bubble-image-store">
                    <img src={bubble} alt="image" />
                  </div>
                  <p>
                    You will receive a random game sprite, you won't know
                    <br /> which sprite you will receive until after payment.
                  </p>
                </Col>
                <Col sm={12} lg={6} md={6}>
                  <div className="subheading-bubble-store">
                    <h2 className="pt-4">
                      <span>Bubble Ghost</span>(1987)
                    </h2>
                    <p>
                      In Bubble Ghost you must help a <br />
                      mischievous littele spook blow a <br />
                      delicate bubble through a <br />
                      castle filed with diabolical
                      <br />
                      devices and demons.
                    </p>
                    <button
                      className="store-btn"
                      onClick={()=>{MintNFT()}}
                      onMouseOver={() => shopingMouseOver()}
                      onMouseOut={() => shopingMouseOut()}
                    >
                      0.148 ETH | Buy Now
                      <img className="shoping-card" src={card} alt="card" />
                    </button>
                  </div>
                </Col>
              </Row>
              <Row className="arcade-image-store-2">
                <Col sm={12} lg={12} md={12}>
                  <img src={Artboard3} alt="image" />
                </Col>
              </Row>
              <Row className="arcade-image-store-22">
                <Col sm={12} lg={12} md={12}>
                  <img src={Artboard3} alt="image" />
                </Col>
              </Row>
              <div
                className="store-arrow-btn wobble-vertical-on-hover"
                onClick={() => handleClick()}
              >
                <img src={arrow} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="store-video" id="section-store">
        <div className="container">
          <Row>
            <Col sm={12} lg={6} md={6}>
              <div className="card">
                <Link to="/account?name=waving">
                  <div className="image-waving">
                    <img src={waving} alt="image" />
                  </div>
                </Link>
                <div className="button-bottom">
                  <button className="btn-waving">
                    <h6>Bubble Ghost Waving</h6>
                    <p>0.1 ETH</p>
                  </button>
                  <button className="btn-rarity">
                    <h6>Rarity</h6>
                    <p>Secret</p>
                  </button>
                </div>
              </div>
            </Col>
            <Col sm={12} lg={6} md={6}>
              <div className="card">
                <Link to="/account?name=blowing">
                  <div className="image-waving">
                    <img src={blowing} alt="image" />
                  </div>
                </Link>
                <div className="button-bottom">
                  <button className="btn-waving">
                    <h6>Blowing a Bubble</h6>
                    <p>0.1 ETH</p>
                  </button>
                  <button className="btn-rarity">
                    <h6>Rarity</h6>
                    <p>Power-Up</p>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} lg={6} md={6}>
              <div className="card">
                <Link to="/account?name=bubble">
                  <div className="image-waving">
                    <img src={bubbleImage} alt="image" />
                  </div>
                </Link>
                <div className="button-bottom">
                  <button className="btn-waving">
                    <h6>Bubble Ghost Logo</h6>
                    <p>0.1 ETH</p>
                  </button>
                  <button className="btn-rarity">
                    <h6>Rarity</h6>
                    <p>Retro</p>
                  </button>
                </div>
              </div>
            </Col>
            <Col sm={12} lg={6} md={6}>
              <div className="card">
                <Link to="/account?name=bubblevideo">
                  <div className="image-waving">
                    <img src={bubbleVideo} alt="image" />
                  </div>
                </Link>
                <div className="button-bottom">
                  <button className="btn-waving">
                    <h6>Bubble Ghost Screen</h6>
                    <p>0.1 ETH</p>
                  </button>
                  <button className="btn-rarity">
                    <h6>Rarity</h6>
                    <p>Classic</p>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
// }
