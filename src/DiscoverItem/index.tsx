import { Avatar, Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useFetch } from "../Utils/useFetch"

const DiscoverItem = () => {
    const { item } = useParams()
    const data = useFetch(Number(item))

    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    height: 300,
                    marginBottom: 6,
                    backgroundImage: `url(${data.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                    },
                }}
            >
                <Avatar alt="apes" src={data.image} sx={{ marginBottom: -4, width: "130px", height: "130px", border: "2px solid white" }} />
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
                {data.name}
            </Typography>
        </Box>
    )
}

export default DiscoverItem