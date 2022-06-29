import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { connectWithWallet } from '../helper/helper';
import { loadAccount } from '../redux/interactions';
import Web3Modal from 'web3modal';
import { useRef } from 'react';
import { providers } from 'ethers';
export default function Home() {


  const [connectToWallet, setConnectWallet] = useState(false)
  const router = useRouter();
  const dispatch = useDispatch();
  const web3 = useSelector(state => state.web3Reducer.connection)

  const web3ModalRef = useRef();
  const getSignerorProvider = async (needSigner = false) => {
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);
    const {chainId} = await web3Provider.getNetwork();
    if (chainId !== 4) {
      alert('use rinkeby network');
    } 
    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return providers
  }

  const connectWallet = async () => {
   try {
    await getSignerorProvider();
    setConnectWallet(true);
   } catch (e) {
     console.log("error", error)
   }
  }
  
  useEffect(() => {
    web3ModalRef.current = new Web3Modal({
      network: 'rinkeby',
      providerOptions: {}
    });
    console.log("bhf", web3ModalRef.current);
     (async()=>{
      if(web3){
        const account = await loadAccount(web3,dispatch)
        if(account.length > 0){
          router.push('/dashboard')
        }
      }
     })()
  }, [web3])
  

  return (
    <div className="flex flex-col items-center justify-center my-40">
    {/* <button className="p-4 my-10 text-lg font-bold text-white rounded-md w-56 bg-[#8D8DAA] drop-shadow-md hover:bg-[#b1b1d6] hover:drop-shadow-xl" onClick={()=>connect()}>Connect to MetaMask</button> */}
    {/* {active ? <span>Connected with <b>{account}</b></span> : <span>Not connected</span>} */}
    <button onClick={connectWallet}>MetaMask</button>

  </div>
  )
}
