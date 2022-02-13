import Boreal from './boreal.jpg';
import Temperate from './temp.jpg'
import Tropical from './tropical.jpg'
import Amazon from './amazon.jpg'
import { useEffect, useState } from 'react';
import { response } from 'express';
import axios from 'axios';

const nfts = [
    {
        forest_name: "Boreal",

        thumbnail_image: Boreal,
        forest_type: "conservation",
        brief_description: "bgfhgc",
        location: { lat: -3.8, lng: -38.5 },
        area_covered: "1,000,000 sq km / hectares,",
        country: "Brazil",
        long_description: " Amazon forests are located at mid- latitudes, which gives them their characteristic four seasons.Very few patches of old- growth temperate forest remain; the zone is dominated by secondary forests.8 As of 2020, temperate forests accounted for 16 % of the Earth’s total forest cover. Temperate forests are inhabited by species adapted for seasonality.Deciduous trees like maples, hickories, oaks, and many others drop their leaves and become dormant in the fall and winter to save energy.Bears, bobcats, squirrels, and deer make their homes in temperate forests and can store food, adapt their diet, or hibernate to cope with the lack of nutritious foods in the winter. ",
        health_metrics: {
            current_amount: "(tonnes of CO2)",
            change_in_carbon: "the last 30 days.",
        },
    },
    {
        forest_name: "string",

        thumbnail_image: Temperate,
        forest_type: "reforestation.",
        brief_description: " Temperate forests",
        location: { lat: -3.8, lng: -38.5 },
        area_covered: "1,000,000 sq km / hectares,",
        country: "Brazil",
        long_description: "",
        health_metrics: {
            current_amount: "(tonnes of CO2)",
            change_in_carbon: "the last 30 days.",
        },
    },
    {
        forest_name: "Tropical",

        thumbnail_image: Tropical,
        forest_type: "reforestation.",
        brief_description: " Temperate forests are located at mid- latitudes, which gives them their characteristic four seasons.Very few patches of old- growth temperate forest remain; the zone is dominated by secondary forests.8 As of 2020, temperate forests accounted for 16 % of the Earth’s total forest cover. Temperate forests are inhabited by species adapted for seasonality.Deciduous trees like maples, hickories, oaks, and many others drop their leaves and become dormant in the fall and winter to save energy.Bears, bobcats, squirrels, and deer make their homes in temperate forests and can store food, adapt their diet, or hibernate to cope with the lack of nutritious foods in the winter. ",


        location: { lat: -3.8, lng: -38.5 },
        area_covered: "1,000,000 sq km / hectares,",
        country: "Brazil",
        long_description: "",
        health_metrics: {
            current_amount: "(tonnes of CO2)",
            change_in_carbon: "the last 30 days.",
        },

    },
    {
        forest_name: "Amazon",

        thumbnail_image: Amazon,
        forest_type: "reforestation.",
        brief_description: " Temperate forests are located at mid- latitudes, which gives them their characteristic four seasons.Very few patches of old- growth temperate forest remain; the zone is dominated by secondary forests.8 As of 2020, temperate forests accounted for 16 % of the Earth’s total forest cover. Temperate forests are inhabited by species adapted for seasonality.Deciduous trees like maples, hickories, oaks, and many others drop their leaves and become dormant in the fall and winter to save energy.Bears, bobcats, squirrels, and deer make their homes in temperate forests and can store food, adapt their diet, or hibernate to cope with the lack of nutritious foods in the winter. ",


        location: { lat: -3.8, lng: -38.5 },
        area_covered: "1,000,000 sq km / hectares,",
        country: "Brazil",
        long_description: "",
        health_metrics: {
            current_amount: "(tonnes of CO2)",
            change_in_carbon: "the last 30 days.",
        },

    },



]


const useFetch = (slug: string) => {
    const [forest, setForest] = useState(null)
    useEffect(() => {
        const refreshList = () => {
            axios
                .get("http://localhost:8000/api/" + slug)
                .then((res) => setForest(res.data))
                .catch((err) => console.log(err, "ppf"));
        };
        refreshList()
    }, [slug]);
    return forest
}


const useFetchAll = () => {
    const [forests, setForests] = useState<any[]>([])
    useEffect(() => {
        const refreshList = () => {
            axios
                .get("http://localhost:8000/api/")
                .then((res) => setForests(res.data))
                .catch((err) => console.log(err));
        };
        refreshList()
    }, []);

    return forests
}

export { useFetch, useFetchAll }
export default useFetch