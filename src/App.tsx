import { Container, CssBaseline, Button } from '@mui/material'
import Appbar from './Appbar/Appbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useMemo, useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { red, blue, amber, blueGrey, grey, yellow } from '@mui/material/colors';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from './Discover';

type PaletteMode = "light" | "dark"

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        text: {
          primary: grey[900],
          secondary: grey[800],
        },
        primary: {
          main: "#eceff1"
        },
        secondary: {
          main: amber[700]
        },
        divider: blueGrey[100],
        background: {
          default: blueGrey[200],
          paper: blueGrey[100],
        },
      }
      : {
        // palette values for dark mode
        primary: blueGrey,
        divider: blueGrey[700],
        secondary: {
          main: yellow[500]
        },
        background: {
          default: blueGrey[900],
          paper: blueGrey[900],
        },
        text: {
          primary: '#fff',
          secondary: grey[500],
        },
      }),
  },
});


function App() {
  const [mode, setMode] = useState<PaletteMode>('light');
  const toggleColorMode = () => {
    setMode((prevMode: PaletteMode) =>
      prevMode === 'light' ? 'dark' : 'light',
    )
  }
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <>
        <Appbar toggleColorMode={toggleColorMode}></Appbar>
        <AppRoute />

      </>
    </ThemeProvider>

  )
}


export default App;


const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}