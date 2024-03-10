import React, { useEffect, useState } from 'react'
const CRYPTO_PRICE_API = 'https://api.frontendexpert.io/api/fe/cryptocurrencies';

export default function App() {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(0);
  const [hasNext, setHasNext] = useState(false);

  async function getCoins(){
    try{
      const url = new URL(CRYPTO_PRICE_API);
      url.searchParams.set('page', page);
      // const response = await fetch(`${CRYPTO_PRICE_API}?page=${page}`);
      const response = await fetch(url);
      if(!response.ok){
        throw new Error('Error fetching the api');
      }
      const coinsApiResponse = await response.json();
      setCoins(coinsApiResponse.coins);
      setHasNext(coinsApiResponse.hasNext);
    }
    catch(err){
      console.error(err)
    }
  }

  useEffect(()=>{
    getCoins();
  }, [page])
  return (
    <>
    <table>
      <tbody>
        
          <tr>
            <th>Coin</th>
            <th>Price</th>
            <th>Market Cap</th>
          </tr>
        {
          coins.map((coin)=>{
            return (
              <tr>
                <td>{coin.name}</td>
                <td>{coin.price}</td>
                <td>{coin.marketCap}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
    <div>
      <button disabled={page === 0} onClick={()=>setPage(page-1)}>
        Prev
      </button>
      <button onClick={()=>setPage(page+1)} disabled={!hasNext}>Next</button>
    </div>
    </>
  )
}
