import { Stack, Box, Grid } from '@mui/material'
import { useState } from 'react'

const [isLandingPage,setIsLandingPage] = useState(0)
const [isChoicePage, setIsChoicePage] = useState(!isLandingPage);
function Choice(){
    return( isChoicePage && 
        <>
        </>
    )
}

export default Choice;