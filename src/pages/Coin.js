import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

const API_KEY = process.env.REACT_APP_COIN_API_KEY;

export const Coin = () => {
  const {coinId} = useParams();
  const [coinData, setCoinData] = useState();

  useEffect(() => {
    const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;
    const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'x-cg-demo-api-key': API_KEY}
  };

  fetch(url, options)
  .then(res => res.json())
  .then(res => setCoinData(res))
  .catch(err => console.error('error:' + err));
  }, []);  


  if(coinData){
    return (
      <div className="h-[61.1vh]">
        <div className='flex justify-center items-center flex-col mt-20'>
        <img className="w-24" src={coinData.image.large} alt="" />
        <h2 className='text-white text-5xl font-bold mt-8'>{coinData.name} ({coinData.symbol.toUpperCase()})</h2>
      </div>
      </div>
    )
  } else{
    <div className="spinner">
      <div className="spin"></div>
    </div>
  }
}
