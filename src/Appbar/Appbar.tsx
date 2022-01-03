import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Container } from '@mui/material'
import { useTheme } from '@mui/material/styles';
// import MenuIcon from '@mui/icons-material/Menu';

export default function Appbar({ toggleColorMode }) {

    const theme = useTheme();
    return (
        <Box sx={{ flexGrow: 1, marginBottom: "32px" }}>
            <AppBar position="static" color='primary'>

                <Container maxWidth="lg">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            {/* <MenuIcon /> */}
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Bubble
                        </Typography>
                        {theme.palette.mode}
                        <Button color="inherit" onClick={() => toggleColorMode()} >Login</Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}