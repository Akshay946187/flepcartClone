import { useState,useContext } from 'react';
import { Box ,Button,Typography,styled} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDilog from '../login/LoginDilog';
import { DataContaxt } from '../contaxt/DataProvider';
import Profile from './Profile';


const Wraper = styled(Box)`
    display:flex;
    margin : 0 3% 0 auto;
    & > button,& > p, & > div{
        margin-right:40px;
        font-size:16px;
        align-item:center;
    }
`
const LoginButton = styled(Button)`
    color:#2874f0;
    background:#fff;
    padding : 5px 25px;
    font-weight:600
    height: 32px;
    text-transform: lowercase

`

const CustomButton = () => {
    const[open,setopen] = useState(false)
    const {account,setaccount} = useContext(DataContaxt)

   
  return (
    <Wraper>
        {
            account ? <Profile account={account} setaccount= {setaccount}/>:<LoginButton variant='contained' onClick={()=>setopen(true)}>login</LoginButton>
        }
        
        <Typography style={{width:130,marginTop:3}}>Become a saller</Typography>
        <Typography>More</Typography>
        <Box style={{display:'flex',padding:5}}>
        <ShoppingCartIcon/>
            <Typography>Cart</Typography>
        </Box>
        <LoginDilog open={open} setopen={setopen}/>
    </Wraper>
  )
}

export default CustomButton
