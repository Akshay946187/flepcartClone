import styled from '@emotion/styled';
import { Box, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { getProduts } from '../../redux/actions/productAction';
import{ListItem,List} from '@mui/material'
import { Link } from 'react-router-dom';

const Boxcss = styled(Box)`
  background-color : #fff;
  width: 400px;
  margin-left:1rem;
  border-radius: 6px;
  display:flex;

`
const Styleinput = styled(InputBase)`
  width : 100%
`
const SearchIconwraper = styled(Box)`
  color:blue;
  margin-top: 5px;
  padding: 5px;
  display : flex;
`



const Search = () => {
  const[text,setText] = useState('')
  const[loading,setLoading] = useState(true)
  const {product} = useSelector(state=>state.getProduts)
  console.log(product)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getProduts()).then(()=>setLoading(false))
  },[dispatch])
  console.log(text)
  return (
   <Boxcss>
    <Styleinput placeholder='Search for products,brands and more' onChange={(e)=>setText(e.target.value)}></Styleinput>
    <SearchIconwraper>
      <SearchIcon/>
    </SearchIconwraper>
    {
      text && 
      <List style={{ position: 'absolute' , color:'black',background:'#FFFFFF',top:'3.5rem', }}>     
        {
         product.filter((item)=>item.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(({title,id})=>(
          
        <ListItem style={{listStyle:'none'}}>
          <Link to={`/product/${id}`}>
          {title.longTitle}
          </Link>
        </ListItem>
        
      ))
         }
      </List>

    }
   </Boxcss>
  )
}

export default Search
