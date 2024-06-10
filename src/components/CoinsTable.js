    import React, { useEffect, useState } from 'react';
    import { useNavigate } from 'react-router';

    const API_KEY = process.env.REACT_APP_COIN_API_KEY;


    const CoinsTable = ({coins, setCoins, currency, setCurrency}) => {
        
        const navigate = useNavigate();
        
        useEffect(() => {
            const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.currency}`;
            const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': API_KEY}
    };

    fetch(url, options)
    .then(res => res.json())
    .then(res => setCoins(res))
    .catch(err => console.error('error:' + err));
    }, []);  

    return (
        <div className='mt-20 coins-table md:w-[800px] sm:w-[640px] xs:w-[400px] mx-auto rounded-md'>
            <div className='flex justify-between items-center p-4 border-b-2 border-gray-500 text-white'>
                <h2>Coins</h2>
                <h2>Price</h2>
                <h2>24H Change</h2>
                <h2>Market Cap</h2>
                </div>
                
        {coins.slice(0, 10).map((coin) => (
            <div onClick={() => {navigate(`coin/${coin.id}`)}} className="flex main-table p-4 border-b-2 border-gray-500 justify-between items-center">
                
                <div className="coin flex items-center cursor-pointer sm:w-[30%] xs:w-[40%]">
                <img src={coin.image} className='w-6 rounded-md' alt="" />
                <h2 className='text-white flex items-center ml-4'>{coin.name}</h2>
                </div>

                <div className="coin flex items-center w-[30%] cursor-pointer">
                <h2 className='text-white'>{currency.symbol}{coin.current_price}</h2>
                </div>

                <div className="coin flex items-center w-[30%] cursor-pointer">
                <h2 className='text-white flex items-center ml-4' 
                style={coin.current_price < coin.price_change_percentage_24h
                    ? {color: 'green'} : {color: 'red'}}
                >{coin.price_change_percentage_24h}</h2>
                </div>

                <div className="coin flex items-center w-[18%] cursor-pointer">
                <h2 className='text-white flex items-center ml-4'>{currency.symbol} 
                {coin.market_cap}</h2>
                </div>
            </div>
        ))}
        </div>
    )
    }
    export default CoinsTable