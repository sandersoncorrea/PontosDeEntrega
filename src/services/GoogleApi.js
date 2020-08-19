import axios from "axios";

async function GetGeoInfo(address) {
    const response = await axios.get(
        "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyBj-IupmNO0aIenQF8fd2TBCd14teRv_UU"
    );

    return response.data;
}

export default GetGeoInfo;
