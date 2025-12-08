import './App.css'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline, Box } from '@mui/material'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import theme from './themes/theme'
import HomePage from '../src/pages/Home'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{
        width: '100%',
        height: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
      }}>
        {/* <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router> */}
        <HomePage />
      </Box>
    </ThemeProvider>
  )
}

export default App
