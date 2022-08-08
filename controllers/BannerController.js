const { Banner } = require('../models/index')

// banner halaman admin
exports.GetBanner = async (req, res) => {
    try {
        let banner = await Banner.find()
        if (banner.length == 0) { 
            res.status(400).json({
                message: 'banner is empty',
                statusCode: 400,
            })
        } else {
            res.status(200).json({
                message: 'successfull to get data',
                statusCode: 200,
                result: banner
            })
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: "error",
            statusCode: 400
        })
    }
}

// tambah banner
exports.addBanner = async (req, res) => {
    const { image, active, deleted } = req.body
    let dataBanner = {
        image: image,
        active: active,
        deleted: deleted
    }
    try {
        let addBanner = await Banner.create(dataBanner)
        res.status(200).json({
            message: 'succesfull add data',
            statusCode: 200,
            result: addBanner
        })

    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: "Error",
            statusCode: 400
        })
    }
}
// banner Home page
exports.bannerHomePage = async (req,res)=> {
    try {
        let banner = await Banner.find({ active: true })
        if (banner.length == 0) {
            res.status(400).json({
                message: 'banner belum diatur'
            })
        } else {
            console.log(banner)
            banner.forEach(element => {
                res.status(200).json({
                    message: 'succesfull get data',
                    statusCode: 200,
                    result: element.image
                })
            });
        }
    } catch (error) {
        console.log(error)
    }
}

// edit active/unactive
exports.activeBanner = async (req, res) => {
    const id = req.params.id
    let { active } = req.body
    try {
        let findbanner = await Banner.findOne({_id:id})
        if (findbanner.length == 0) {
            res.status(400).json({
                message: 'id tdk ditemukan',
                statusCode: 400
            })
        } else { 
            let editBanner = await Banner.findByIdAndUpdate({ _id: id }, { active: active})
            res.status(200).json({
                message: 'berhasil edit data',
                result: editBanner
            })
        }
    } catch (error) {
        console.log(error)
    }
}

// delete
exports.deleteBanner = async (req, res) => {
    const id = req.params.id
    try {
        let delBanner = await Banner.findOneAndUpdate({_id:id},{deleted:1})
        res.status(200).json({
            message: 'successfull Delete data'
        })
        console.log(delBanner)
    } catch (error) {
        console.log(error)
    }
}

