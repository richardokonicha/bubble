import { Container, CssBaseline, Button } from '@mui/material'
import Appbar from './Appbar/Appbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useMemo, useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { red, blue, amber, deepOrange, grey } from '@mui/material/colors';

type PaletteMode = "light" | "dark"

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        primary: amber,
        divider: amber[200],
        text: {
          primary: grey[900],
          secondary: grey[800],
        },
      }
      : {
        // palette values for dark mode
        primary: deepOrange,
        divider: deepOrange[700],
        background: {
          default: deepOrange[900],
          paper: deepOrange[900],
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
        <Container maxWidth="lg">
          <Button
            variant='contained'
            // onClick={() => toggleColorMode()}
            sx={{

            }}>
            ddd
          </Button>
        </Container>
      </>
    </ThemeProvider>

  )
}

export default App;
