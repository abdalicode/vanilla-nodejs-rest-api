import {v4 as uuid} from 'uuid'
import products from '../data/products.json' assert {type: 'json'};
import {writeData} from '../utils.js'

export const findAllProducts = () => {
    return new Promise((resolve, reject) => {
        resolve(products)
    })
}

export const findProductWithId = (id) => {
    return new Promise((resolve, reject) => {
        const product = products.find((pr) => pr.id === id);
        resolve(product)
    })
}

export const createNewProduct = (product) => {
    return new Promise((resolve, reject) => {
        const newProduct = {...product, id: uuid()}
        const newList = [...products, newProduct]
        writeData(newList)
        resolve(newProduct)
    })
}

export const deleteProductWithId = (id) => {
    return new Promise((resolve, reject) => {
        const newList = products.filter((pr) => pr.id !== id);
        writeData(newList)
        resolve({message: `Success! Product with id: ${id} deleted`})
    })
}

export const updateProductWithId = (id, pr) => {
    return new Promise((resolve, reject) => {
        const index = products.findIndex((p) => p.id === id)
        if(index < 0) reject({message: "Given id not found!"})
        const prevProduct = products[index]
        const newProduct = {
            name: pr.name || prevProduct.name,
            price: pr.price || prevProduct.price,
            description: pr.description || prevProduct.description,
            id
        }
        const newList = [...products ]
        newList[index] = newProduct
        writeData(newList)
        resolve(newProduct)
    })
}