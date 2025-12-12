import './App.css'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline, Box } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import theme from './themes/theme'
import HomePage from '../src/pages/Home'
import CustomBackground from './components/Landing/Background';
import CustomLogo from './components/Landing/Logo';
import { Typography, Container } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
        <HomePage />
    </ThemeProvider>
  )
}

export default App;