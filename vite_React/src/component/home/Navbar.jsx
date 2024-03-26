import { Box ,Typography,styled} from '@mui/material'
import { navData } from '../../constants/data'


const Component = styled(Box)`
display: flex;
margin: 90px 130px 0 130px;
justify-content: space-evenly;
text-align:center;
`
const Container = styled(Box)`
padding:12px 8px;
`
const Text = styled(Typography)`
font-size:14px;
font-weight:600;
font-family: inherit
`
const Navbar = () => {
  return (
   <Component>
    {
        navData.map((data,i)=>(
            <Container key={i}>
                <img src={data.url}  style={{width:64}}/>
                <Text>{data.text}</Text>
            </Container>
        ))
     }
   </Component>
  )
}

export default Navbar
