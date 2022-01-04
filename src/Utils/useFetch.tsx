import superrare from './Superrare.jpeg';
import apes from './apes.png'

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

const useFetch = (index: number) => {
    return nfts[index]
}


const useFetchAll = () => {
    return nfts
}

export { useFetch, useFetchAll }
export default useFetch