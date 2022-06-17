import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import { Grid } from '@mui/material';


const BaseLayout = ({children}) => {
  return (
    <React.Fragment>
    <CssBaseline />
        <Grid container className="dark:bg-black bg-white ">
            {children}
        </Grid>
        
    </React.Fragment>
  )
}

export default BaseLayout;