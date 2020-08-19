/* eslint-disable require-jsdoc */
import GetGeoInfo from "../services/GoogleApi";
import getDistanceFromLatLonInKm from "../utils/DistanciaEmMetros";

class HomeController {
    async index(req, res) {
        const { body } = req;
        const listAddress = new Array();
        let listDistances = new Array();
        console.log({ body });

        for (const ad in body) {
            let address = body[ad];
            let info = await GetGeoInfo(
                `${address.endereco}+${address.numero}+${address.bairro}+${address.cidade}+${address.uf}+${address.cep}+${address.pais}`
            );
            listAddress.push({
                location: info.results[0].geometry.location,
                endereco: info.results[0].formatted_address,
            });
        }

        for (const li in listAddress) {
            for (let i = 0; i < listAddress.length; i++) {
                if (listAddress[i].endereco != listAddress[li].endereco) {
                    listDistances.push({
                        start: listAddress[li].endereco,
                        end: listAddress[i].endereco,
                        distance: getDistanceFromLatLonInKm(
                            {
                                lat: listAddress[li].location.lat,
                                lng: listAddress[li].location.lng,
                            },
                            {
                                lat: listAddress[i].location.lat,
                                lng: listAddress[i].location.lng,
                            }
                        ),
                    });
                }
            }
        }

        listDistances = listDistances.sort(function (a, b) {
            if (a.distance > b.distance) {
                return 1;
            }
            if (a.distance < b.distance) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });

        return res.status(200).json({
            listAddress,
            listDistances,
            maisPerto: listDistances[0],
            maisLonge: listDistances[listDistances.length - 1],
        });
    }
}

export default new HomeController();
