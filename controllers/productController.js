import {createNewProduct, deleteProductWithId, findAllProducts, findProductWithId ,updateProductWithId} from '../models/productModel.js';
import {getProductIdFromURL , getRequestBody} from "../utils.js"


export const getALlProducts = async (req, res) => {
    const products = await findAllProducts()
    res.writeHead(200 , {"Content-Type": "application/json"});
    res.end(JSON.stringify(products))
};
export const getProduct = async  (req , res ) => {
    const id = getProductIdFromURL(req.url);
    const product = await  findProductWithId(id);
    res.writeHead(200 , {"Content-Type": "application/json"});
    res.end(JSON.stringify(product))
}

export const createProduct = async (req , res)=> {
    const {name ,  description , price} = await getRequestBody(req)
    const newProduct = await createNewProduct({name ,  description , price})
    res.writeHead(200 , {"Content-Type": "application/json"});
    res.end(JSON.stringify(newProduct))
}

export const deleteProduct = async (req , res) => {
    const id = getProductIdFromURL(req.url);
    const response = await deleteProductWithId(id);
    res.writeHead(200 , {"Content-Type": "application/json"});
    res.end(JSON.stringify(response))
}

export const updateProduct = async (req, res )=> {
    const id = getProductIdFromURL(req.url);
    const pr = await  getRequestBody(req)
    const response = await updateProductWithId(id , pr)
    res.writeHead(200 , {"Content-Type": "application/json"});
    res.end(JSON.stringify(response))
}
