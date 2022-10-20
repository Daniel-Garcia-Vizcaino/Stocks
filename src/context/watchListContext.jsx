import { createContext } from "react"

export const watchListContext = createContext()

export const watchListContextProvider = (props) => {

  const [watchList, setWatchList] = useState(["GOOGL", "MSFT", "AMZN"])
  
  return <watchListContext.Provider value={{ watchList }}>
  </watchListContext.Provider> 
}