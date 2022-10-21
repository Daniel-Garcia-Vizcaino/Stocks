import { AutoComplete } from '../components/AutoComplete'
import { StockList } from '../components/StockList'
export const StockOverviewPage = () => {
  return <div>
    <h1 className="text-center mb-5">Choose your stocks</h1>
    <AutoComplete />
    <StockList />
  </div>
} 