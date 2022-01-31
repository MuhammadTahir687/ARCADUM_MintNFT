import React, { useEffect, useState } from "react";
import TimerSection from "../components/TimerSection/TimerSection";
import { BubbleGhost } from "../components/BubbleGhost/BubbleGhost";
import { CarouselSection } from "../components/CarouselSection/CarouselSection";
import { RoadMapSection } from "../components/RoadMapSection/RoadMapSection";
import { TeamCreativeSection } from "../components/TeamCreativeSection/TeamCreativeSection";
import { TeamMemberSection } from "../components/TeamMemberSection/TeamMemberSection";
import { CommunitySection } from "../components/CommunitySection/CommunitySection";
import { FooterSection } from "../components/FooterSection/FooterSection";
import { ethers } from "ethers";
import contract from '../components/Contract/TestNFT.json';
const contractAddress='0x959e9A259Aa39E34663968dE62CBC17247a8D70d';
const abi=contract.abi;

export const Sections = () => {
const [show,setShow]=useState(false)
const [time,setTime]=useState('')
const [showalert, setShowalert] = useState(false);
  const[btname,setBtname]=useState("Connect Wallet");
  const [useraddress, setUseraddress] = useState('');
  const [balance, setBalance] = useState('');


  useEffect(() => {
    const intervalId = setInterval(() => {
      var timestamp = new Date().getTime();
      var starttimestamp = new Date('2022-02-01T04:00:00z').getTime();
      var endtimestamp = new Date('2022-02-01T12:00:00z').getTime();

      setTime(timestamp)
      console.log("Timestamp=========", timestamp)
      if (timestamp >= starttimestamp) {
        setShow(true)
      }
      if (timestamp >= endtimestamp) {
        setShow(false)
      }

    }, 1000)
    return () => clearInterval(intervalId);
  }, [show, time])


  const RunPresale = async () => {
    try {
        if (window.ethereum) {
          const a = await window.ethereum.request({ method: 'eth_requestAccounts' })
          const b = await a[0];
          const balance= await window.ethereum.request({ method: "eth_getBalance", params: [b.toString(), "latest"] })
          if(ethers.utils.formatEther(balance) > 0.0100000000014995852){
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const nftcontract = new ethers.Contract(contractAddress, abi, signer);
            let nftTxn =  nftcontract.Presale(b, { value: ethers.utils.parseEther('0.01') })
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


  return (
    <div>
      <div className="timer-section-bubble_ghost">
        <div className="overlay">
          <TimerSection />
          {show==true?<button   
          onClick={()=>{RunPresale()}}  
                      className="store-btn-presale"
                      style={{padding:'10px 60px',
                        fontSize: '20px',
                        fontWeight: '500',
                        border: '1px solid #fff',
                        textDecoration: 'none',
                        color: '#000',
                        backgroundColor: '#fff',
                        display: 'block',
                        margin: '0px auto'}}
                    >
                      0.01 ETH | Run Presale
                  
                    </button>:<></>}
        </div>
        
      </div>
      <div className="box-all">
        <BubbleGhost />
        <CarouselSection
          className2="buy-drop-btn"
          to1="explore"
          className1="drop-btn"
        />
        <RoadMapSection />
        {/* <TeamCreativeSection />
        <TeamMemberSection /> */}
        <CommunitySection />
        <FooterSection />
      </div>
    </div>
  );
};

