import { createContext, useState } from "react";

 export const DataContaxt = createContext(null)
 console.log(DataContaxt)


const DataProvider = ({children}) => {
    const[account,setaccount] = useState('')
  return (
    <DataContaxt.Provider value={{
        account,
        setaccount
    }}>
      {children}
    </DataContaxt.Provider>
  )
}

export default DataProvider
