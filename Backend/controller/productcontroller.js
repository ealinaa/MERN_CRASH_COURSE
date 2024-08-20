import mongoose from "mongoose"
import Product from "../models/productmodel.js"
export const getProducts = async (req, res ) => {
    try {
        const products = await Product.find({}) 
        res.status(200).json({success: true, data: products})

    } catch(error) {
        res.status(500).json({ success: false, message: "Server Error"})

    }
}
export const createProduct = async(req, res) => {
    
    const product = req.body //user will send this data
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success: false, message: "please provide all fields"})
    }
    const newProduct = new Product(product); // Capitalized the model name
try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
} catch (error) {
    console.error("Error in creating product", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
}

//     res.send("Server is ready")
// console.log(process.env.MONGO_URL)
}

export const updateProduct = async (req, res) => {
    const { id } = req.params
    const product = req.body
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message: "Invalid Product Id"})
    }
    try{

      const updatedProduct=  await Product.findByIdAndUpdate(id, product,{new:true})
      res.status(200).json({ success: true, data: updatedProduct})

    }catch(error) {
        res.status(500).json({ success: false, message: "Server Error"})

    }
}
export const deleteProduct = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message: "Invalid Product Id"})
    }
    // console.log("id:", id)
    try {
        await Product.findByIdAndDelete(id)
        res.status(200).json({ success: true, message: "Product deleted"})
    }catch (error) {
        console.log("error in deleting products", error.message)

        res.status(404).json({ succsess: false , message: "Server Error"})
    }
}