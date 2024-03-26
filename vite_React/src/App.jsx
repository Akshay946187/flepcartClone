import { Box } from "@mui/material"
import Header from "./component/header/Header"
import Home from "./component/home/Home"
import DetailView from "./component/DetailView"
import DataProvider from "./component/contaxt/DataProvider"
import {BrowserRouter,Routes,Route} from 'react-router-dom'



function App() {

  return (
    <DataProvider >
  <BrowserRouter>
  <Header/>
  <Box style={{marginTop:90}}>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product/:id" element={<DetailView/>}/>
  
  
  </Routes>
  </Box>
  </BrowserRouter>
 
    
    </DataProvider>
  )
}

export default App
