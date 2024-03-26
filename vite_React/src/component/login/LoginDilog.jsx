import { Box, TextField ,Button, Typography,styled} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { useEffect, useState,useContext } from 'react';
import { DataContaxt } from '../contaxt/DataProvider';
import axios from 'axios'

const Contener = styled(Box)`
    height:70vh;
    width:50vw;
    
`
const Image = styled(Box)`
    background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
   
    width:40%;
    padding:45px 35px;
    &>p,&>h5{
        color:#ffffff;
        font-weight:600;
    }
`

const Wraper = styled(Box)`
    display:flex;
    flex-direction:column;
    padding:25px 35px;
    flex : 1;
    & > div ,&>button ,& >p {
        margin-top : 10px;
    }
`
const LoginButton = styled(Button)`
    text-transform : none;
    background : #FB641b;
    color: #fff;
    height:48px;
    border-radius:2px;
    hover:none
`
const RequsetOtp = styled(Button)`
    text-transform : none;
    background : #fff;
    color: #2874f0;
    height:48px;
    border-radius:2px;
`
const Text = styled(Typography)`
    font-size:12px;
`
const CreateAccount = styled(Typography)`
    font-size:14px;
    text-align:center;
    color:#2874f0;
    cursor:pointer;
`

const initelView = {
   login:true,
   signup:true,
   
}

const signupValues = {
    Firstname:'fdsf',
    Lastname:'',
    Email:'',
    Passward:'',
    Phone:'',
    Username:''

}
const loginValue = {
    Passward:'',
    Username:''

}





const LoginDilog = ({open,setopen}) => {

    const[toggleView,settoggleView] = useState(initelView)

    const[signup,setSignup] = useState(signupValues)
    const[login,setLogin] = useState(loginValue)

    const{account,setaccount} = useContext(DataContaxt)

    const handleChange = (e)=>{
        setSignup({
            ...signup,[e.target.name]:e.target.value
        })
       
    }

    const handlelogin = (e)=>{
        setLogin({...login,[e.target.name]:e.target.value})
    }
    
    const handleSubmit = async (e) => {
        try {
            console.log("Submitting signup data:", signup);
            const response = await axios.post('http://localhost:8000/signup', signup);
            console.log("Response:", response.data);
            handleClose()
            setaccount(signup.Firstname)

           
        } catch (error) {
            console.error("Error in handleSubmit:", error);
        }
    }

    const submitlogin = async (e) => {
        try {
            
            const response = await axios.post('http://localhost:8000/login', login);
            console.log("Response:", response);
            handleClose()
            setaccount(login.Username)

           
        } catch (error) {
            console.error("Error in handleSubmit:", error);
        }
    }

    const handleClose = ()=>{
        setopen(false)
    }
    
  return (
    <Dialog open={open} onClose={()=>setopen(false)} PaperProps={{sx : {maxWidth:'unset'}}}>
        <Contener>
            <Box style={{display:'flex',height:'100%'}}>
                {
                    toggleView.login?
                    <Image>
                <Typography variant='h5'>Login</Typography>
                <Typography>Get access to your order, Wislist and Recommendations</Typography>
            </Image>
            :
            <Image>
                <Typography variant='h5'>Looks like you are new here</Typography>
                <Typography>Signup with your mobile number to get started</Typography>
            </Image>

                }
            

            {
                toggleView.login?
                <Wraper >
                <TextField variant='standard' label="Enter username" onChange={handlelogin} name='Username'/>
                <TextField variant='standard' label="Enter passward" onChange={handlelogin} name='Passward'/>
                <Text>By Continunig you agree to filpcarts terms of use and Privacy Policy</Text>
                <LoginButton onClick={submitlogin}>Login</LoginButton>
                <Typography style={{textAlign:'center'}}>OR</Typography>
                <RequsetOtp>Requsest OTP</RequsetOtp>
                <CreateAccount onClick={()=>settoggleView(initelView.signup)}>new to flipcart?Create an account</CreateAccount>
            </Wraper>
            :
            <Wraper >
            <TextField variant='standard' label="Enter Firstname" name='Firstname' onChange={handleChange} value={signup.Firstname}/>
            <TextField variant='standard' label="Enter Lastname" name='Lastname' onChange={handleChange} value={signup.Lastname}/>
            <TextField variant='standard' label="Enter Username" name='Username' onChange={handleChange} value={signup.Username}/>
            <TextField variant='standard' label="Enter Email" name='Email' onChange={handleChange} value={signup.Email}/>
            <TextField variant='standard' label="Enter passward" name='Passward' onChange={handleChange} value={signup.Passward}/>
            <TextField variant='standard' label="Enter Phone" name='Phone' onChange={handleChange} value={signup.Phone}/>
            
            <RequsetOtp>Requsest OTP</RequsetOtp>
            <Button onClick={handleSubmit}>SignUp</Button>
        </Wraper>
            }
            
            </Box>
        </Contener>
    </Dialog>
  )
}

export default LoginDilog
