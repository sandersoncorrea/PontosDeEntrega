import axios from "axios";

async function GetGeoInfo(address) {
    // console.log(address);
    try {
        const response = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.API_KEY}`
        );

        return response.data;
    } catch (e) {
        throw new Error("Erro na requisição google-api", e);
    }
}

export default GetGeoInfo;
