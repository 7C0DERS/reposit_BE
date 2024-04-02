const regservice = require('../service/registerService')



exports.registerApi = async function registerApi(req, res) {

    try {
        const service = await regservice.registerSer(req.body)
        return res.send(service)
    }
    catch (err) {
        console.log(err);
    }

}

exports.loginApi = async function loginApi (req,res) {
    try {
        const login = await regservice.loginSer(req.body);
        return res.send(login)
    } catch (error) {
        console.log(error);
    }

    
}
exports.confirmationApi = async function confirmationApi(req, res) {
    try {
        const confirmationCode = req.params.confirmationCode;
        const confirmed = await regservice.confirmEmail(confirmationCode);
        if (confirmed) {
            res.send('Email confirmed successfully.');
        } else {
            res.status(400).send('Invalid confirmation code.');
        }
    } catch (error) {
        console.error('Error confirming email:', error);
        res.status(500).send('Internal Server Error');
    }
}

