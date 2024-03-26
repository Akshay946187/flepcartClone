import { AppBar, Toolbar,styled,Box ,Typography} from '@mui/material'
import Search from './Search'
import CustomButton from './CustomButton'

const StyledHeader = styled(AppBar)`
    background :#2874f0;
    padding : 12px 28px;
    min-height : 55.5px
`
const Component = styled(Box)`
  margin-left : 12%;
  line-height:0;
  
`
const Subheading = styled(Typography)`
  font-size:0.8rem;
  font-style:italic;
`
const Plusimage = styled('img')({
  width:11,
  height:11,
  marginLeft:4
})

const CustomBotton = styled(Box)`
  margin : 0 5% 0 auto;
`
const Header = () => {

const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  return (
    <div>
      <StyledHeader>
        <Toolbar>
            <Component>
              <img src={logoURL} alt="logo" style={{width:'75px'}} />
              <Box style={{display:'flex'}}>
                <Subheading>Explor 
                  <Box component='span' style={{color:'yellow'}}>Plus</Box>

                </Subheading>
                <img src={subURL} alt="sublogo" />
              </Box>
            </Component>
            <Search/>
           <CustomBotton>
           <CustomButton/>
           </CustomBotton>
           
        </Toolbar>
      </StyledHeader>
    </div>
  )
}

export default Header
