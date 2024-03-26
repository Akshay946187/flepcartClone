import React, { useState } from 'react'
import {Box,Typography} from '@mui/material'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Profile = ({account,setaccount}) => {
    const[open,setopen] = useState(false)

    const handleClick = (event)=>{
        setopen(event.currentTarget)
    }
    const handleClose= ()=>{
        setopen(false)
    }
    const Logout = ()=>{
        setaccount('')
    }
  return (
    <Box>
      <Typography onClick={handleClick}>{account}</Typography>
      <Menu
        
        anchorEl={open}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        
        <MenuItem onClick={()=>{handleClose(); Logout()}}>Logout</MenuItem>
      </Menu>
    </Box>
  )
}

export default Profile
