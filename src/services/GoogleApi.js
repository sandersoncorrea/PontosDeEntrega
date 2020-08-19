import axios from "axios";

async function GetGeoInfo(address) {
    // console.log(address);
    try {
        const response = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBj-IupmNO0aIenQF8fd2TBCd14teRv_UU`
        );

        return response.data;
    } catch (e) {
        throw new Error("Erro na requisição google-api", e);
    }
}

export default GetGeoInfo;
