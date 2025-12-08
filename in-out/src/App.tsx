import './App.css'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import theme from './themes/theme'
import HomePage from '../src/pages/Home'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router> */}
      <HomePage />
    </ThemeProvider>
  )
}

export default App
