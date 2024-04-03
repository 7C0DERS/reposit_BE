const folderService = require('../service/repFolder')



exports.createFolderApi = async function createApi(req, res) {

    try {
        const service = await folderService.folderServ(req.body)
        return res.send(service)
    }
    catch (err) {
        console.log(err);
    }

}