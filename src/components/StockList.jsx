import { useState, useEffect } from 'react'
import finnHub from '../apis/finnHub'

export const StockList = () => {
  const [watchList, setWatchList] = useState(["GOOGL", "MSFT", "AMZ"])

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await finnHub.get("/quote", {
          params: {
            symbol: "MSFT"
          }
        })
        console.log(response)
      }catch(err){
        
      }
    }
    fetchData()
  }, [])

  
  return <div>StockList</div>
} 