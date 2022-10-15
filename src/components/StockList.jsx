import { useState, useEffect } from 'react'
import finnHub from '../apis/finnHub'

export const StockList = () => {
  const [watchList, setWatchList] = useState(["GOOGL", "MSFT", "AMZ"])

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await finnHub.get("/quote?symbol=MSFT&token=cd5f85aad3i5nc8nu3a0cd5f85aad3i5nc8nu3ag")
        console.log(response)
      }catch(err){
        
      }
    }
    fetchData()
  }, [])

  
  return <div>StockList</div>
} 