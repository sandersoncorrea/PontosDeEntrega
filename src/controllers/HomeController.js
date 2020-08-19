import GetGeoInfo from "../services/GoogleApi";

class HomeController {
    async index(req, res) {
        const info = await GetGeoInfo();
        return res.status(200).json(info);
    }
}

export default new HomeController();
