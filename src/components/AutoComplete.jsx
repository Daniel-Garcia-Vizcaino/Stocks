export const AutoComplete = () => {
  return <div className="w-50 rounded mx-auto">
    <div className="form-floating dropdown">
      <input style={{backgroundColor: "rgba(146, 157, 172, 0.04)"}} id="search" type="text" className="form-control" placeholder="Search" autoComplete="off"></input>
      <label htmlFor="search">Search</label>
    </div>  
  </div>
} 