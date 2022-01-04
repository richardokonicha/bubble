import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import SearchIcon from '@mui/icons-material/Search';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { Button, Card, CardActions, CardContent, CardMedia, Container, Divider, IconButton, InputAdornment, OutlinedInput, Stack, Typography } from '@mui/material';
import superrare from './Superrare.jpeg';
import apes from './apes.png'
import { Link } from 'react-router-dom'

const nfts = [
    {
        name: "Superrare",
        image: superrare,
        describe: "Desert warrior rarest nft"
    },
    {
        name: "Apes",
        image: apes,
        describe: "Angry ape unleash terror nft"
    }
]

const Discover = () => {
    return (
        <Container maxWidth="lg">
            <Typography variant='h6' sx={{
                fontSize: 14,
                color: 'primary'
            }} >Discover</Typography>


            <Typography variant='h5' sx={{
                marginY: 1,
                fontSize: 18,
                fontWeight: 'bold',
                color: 'primary',
            }}>
                Best NFT Marketplace
                <IconButton
                    size="small"
                    color="inherit"
                    aria-label="menu"
                >
                    <AddAlertOutlinedIcon sx={{ marginLeft: 1, color: "secondary.main", width: 16, height: 16 }} />
                </IconButton>
            </Typography>

            <OutlinedInput
                label="Search"
                id="outlined-size-small"
                color="secondary"
                size="small"
                sx={{ flexGrow: 1, marginY: 1, width: { xs: '100%', sm: "280px" } }}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            edge="end"
                        >
                            <SearchIcon />

                        </IconButton>
                    </InputAdornment>}
            />
            <Divider sx={{ marginY: 1, color: "primary" }} />
            <Typography variant='subtitle2' marginY={2}>
                New Deals <WhatshotIcon sx={{ width: 12, height: 12, color: 'secondary.main', flexGrow: 1 }} />
            </Typography>
            <Stack spacing={2} direction={{ xs: "column", sm: "row" }} >

                {
                    nfts.map((nft, index) => (
                        <Card key={index} sx={{
                            width: { xs: "100%", sm: "280px" },

                        }}>
                            <CardMedia
                                component="img"
                                height="280"
                                image={nft.image}
                                alt="green iguana"
                            >

                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {nft.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {nft.describe}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button component={Link} to={`${index}`} size="small" variant='contained' color='secondary'>Purchase</Button>
                            </CardActions>
                        </Card>
                    ))
                }
            </Stack>

            <Divider sx={{ marginY: 2, color: "primary" }} />

        </Container >
    )
}

export { Discover };
export default Discover