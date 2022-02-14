import Flashloan from './artifacts/contracts/Flashloan.sol/Flashloan.json'
import { ethers } from 'ethers';
import {useState} from 'react';
import Navbar from './Navbar';
import {
  BrowserRouter as Router
} from "react-router-dom";

 function App() {

  const Flashloanaddress="0x7e90999F74d88334218d696B9Bc6125fEEf3CF28";// Contrct Adress
const   _addressprovider=  "0x506B0B2CF20FAA8f38a4E2B524EE43e1f4458Cc5";// Deployed address provider
 const _flashloanaddress= "0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD"; //(Kovan Testnet Dai Contract/asset)

  const[account,setaccount]=useState();
  const[execute, getExecute] = useState();
  //const[flashloanaddress,setflashloanaddress]=useState();
 // setflashloanaddress(Flashloanaddress)
     async function getAddress()
    {
      console.log("Hello")
      const [account]= await window.ethereum.request({ method: 'eth_requestAccounts' })
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(Flashloanaddress, Flashloan.abi, signer);
    //  const _flashloanaddress =await contract.getContractAddress();
    //await contract.flashloan();
      console.log(contract)
      setaccount(account)
  //    setflashloanaddress(_flashloanaddress);
    }
    
    getAddress();

    const flashloanFunction =async () =>{
      try {
        const [account]= await window.ethereum.request({ method: 'eth_requestAccounts' })
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(Flashloanaddress, Flashloan.abi, signer);
          await contract.flashloan();
          getExecute('Flashoan executed successfully. Check on Etherscan');
      } catch (error) {
          console.log(error);
      }
  }   

    
  return (
    <>
    <Router>
      <div className="App">
      <Navbar account={account}/>
      <div className="navbar-brand">Deployed Address Provider := {_addressprovider}</div><br/>
      <div className="navbar-brand">FlashLoan Address := {_flashloanaddress}</div>

      <button type="button" className="button" onClick ={() => flashloanFunction()}> Flashloan </button>
            <h5 className ="boxed">{execute}</h5> 
      </div>
    </Router>
     </>
  );
}

export default App;
