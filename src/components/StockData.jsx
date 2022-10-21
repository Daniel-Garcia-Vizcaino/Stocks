import { useState, useEffect} from 'react';
import finnHub from "../apis/finnHub";
export const StockData = ({symbol}) => {

  const [stockData, setStockData] = useState()
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await finnHub.get("/stock/profile2", {
          params: {
            symbol
          }
        })
        console.log(response)
        if (isMounted) {
          setStockData(response.data)
        }
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
    return () => (isMounted = false)
  }, [symbol])  
  return <h2>stockdata</h2>
}