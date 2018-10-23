var WastebinController = {};

WastebinController.postData = (req, res) => {
    console.log('post')
    console.log(req.query.vol)

    return res.status(200).json({ status: true, message: "Berhasil" })
}

module.exports = WastebinController;