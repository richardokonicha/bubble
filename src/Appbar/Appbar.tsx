import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Container, Avatar } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import me from "./Bored_ape_NFT.webp"
import { display } from '@mui/system';

export default function Appbar({ toggleColorMode }) {

    const theme = useTheme();
    return (
        <Box sx={{ flexGrow: 1, marginBottom: "32px" }}>
            <AppBar position="static"  >

                <Container maxWidth="lg">
                    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                        <IconButton
                            size="large"
                            edge="start"
                            // color="primary"
                            aria-label="menu"
                        >
                            <BubbleChartIcon
                                sx={{ mr: 1, color: "secondary.main" }}

                            />
                            <Typography variant="h6" component="div" sx={{ fontSize: 16, color: "secondary.main" }}>
                                Bubble
                            </Typography>

                        </IconButton>


                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={() => toggleColorMode()}
                        >
                            {theme.palette.mode === "dark" ?
                                <Brightness1Icon /> :
                                <Brightness3Icon />}
                        </IconButton>
                        <Avatar alt="Remy Sharp" src={me} sx={{ width: 24, height: 24 }} />

                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}