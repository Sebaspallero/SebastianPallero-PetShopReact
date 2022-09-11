import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './Spinner.css'

const Spinner = () => {
  return (
    <Box sx={{ display: 'flex'}}>
      <CircularProgress className='spinnerColor'/>
    </Box>
  )
}

export default Spinner


