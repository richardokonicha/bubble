import { Avatar, Box, Typography } from '@mui/material';
import apes from '../Discover/apes.png'


const DiscoverItem = () => {
    return (
        <Box>
            <Box
                sx={{
                    // width: 300,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    height: 300,
                    // backgroundColor: 'primary.dark',
                    marginBottom: 6,
                    backgroundImage: `url(${apes})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    // width: `calc(100vw + 48px)`,
                    '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                    },
                }}
            >
                <Avatar alt="apes" src={apes} sx={{ marginBottom: -4, width: "130px", height: "130px", border: "2px solid white" }} />
            </Box>
            <Typography
                variant='h6'
                textAlign={"center"}
                sx={{
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    color: "text",
                    fontSize: 24,
                }}>
                name
            </Typography>
        </Box>
    )
}

export default DiscoverItem