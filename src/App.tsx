import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline, Box } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from './pages/Home'

import CustomBackground from './components/Landing/Background'
import './App.css'
import theme from './themes/theme'

function App() {
  return (
    <CustomBackground>
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
    </ThemeProvider>
    </CustomBackground>
  )
}

export default App;