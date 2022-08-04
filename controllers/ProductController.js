const { Product } = require('../models')

const getProduct=async(req,res)=>{
    try {
        const products = await Product.find()
        res.status(200).json({message:'hello product', data:products})
    } catch (error) {
        res.status(500).json({message:error})
    }
}

const getProductById=async(req,res)=>{
    const { id } = req.params
    try {
        const productById = await Product.findById(id)
        res.status(200).json({product:productById})
    } catch (error) {
        res.status(500).json({message:error})
    }
}

const createProduct=async(req,res)=>{
    const { name, detail, thumbnail, recommendation, discountId, images, deleted } = req.body
    const dataProduct = {
        name, detail, thumbnail, recommendation, discountId, images, deleted 
    }
    try {
        const addProduct = await Product.create(dataProduct)
        res.status(201).json({data: addProduct})
    } catch (error) {
        res.status(500).json({message:error})
    }
}

const editProduct=async(req,res)=>{
    const dataEdit = req.body
    const { id } = req.params 
    try {
        const editedProduct = await Product.updateOne({_id:id}, {$set:dataEdit})
        res.status(201).json({message:'success edit', data:editedProduct})
    } catch (error) {
        res.status(500).json({message:error})
    }
}


const deleteProduct=async(req,res)=>{
    const { id } = req.params 
    
    try {
        const deletedProduct = await Product.findByIdAndDelete(id)
        res.status(401).json({message:'delete success', deletedProduct:deletedProduct})    
    } catch (error) {
        res.status(500).json({message:error})
    }
}

module.exports = {
    getProduct,
    createProduct,
    getProductById,
    editProduct,
    deleteProduct
}