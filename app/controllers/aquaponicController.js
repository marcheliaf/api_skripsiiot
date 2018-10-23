var AquaponicController = {};

AquaponicController.postData = (req, res) => {
    console.log('aquaponic post')
    console.log(req.query.ph, req.query.temp, req.query.tds)

    return res.status(200).json({status: true, message: "Berhasil"})
}

module.exports = AquaponicController;