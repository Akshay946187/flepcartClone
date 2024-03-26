import { styled ,Box,CircularProgress} from "@mui/material";
import Navbar from './Navbar'
import Baner from './Baner'
import {getProduts} from '../../redux/actions/productAction'
import { useEffect, useState } from "react";

import {useDispatch, useSelector} from 'react-redux'
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

const Component = styled(Box)`
  padding:20px 10px;

`

const Home = () => {
  const [loading, setLoading] = useState(true);
   const {product} = useSelector(state=>state.getProduts)
   
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getProduts()).then(() => setLoading(false));
  },[dispatch])

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div>
      <Navbar/>
      <Component>
      <Baner/>
      </Component>
       <MidSlide product={product} title={'Deal of the day'} timer={true} />
      <Slide product={product} title={'Deal of the day'} timer={false}/>
      <MidSection/>
      <Slide product={product} title={'Top Picks for you'} timer={false}/>
      <Slide product={product} title={'Sessions top picks'} timer={false} />
      <Slide product={product} title={'Tranding offers'} timer={false}/>
      <Slide product={product} title={'Buggit friendly picks'} timer={false}/>
    </div>
  )
}

export default Home
