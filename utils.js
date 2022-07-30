import fs from "node:fs";

export const getProductIdFromURL = (URL) => {
    return URL.split('/')[2]
}

export const writeData   = (data)  => {
    fs.writeFileSync(process.cwd() + '/data/products.json', JSON.stringify(data), err => {
        console.log(err)
    })
}


export const getRequestBody = (req) => {

    return new Promise((resolve, reject) => {
        let body = ''
        req.on("data" , (chunk) => {
            body += chunk
        });
        req.on("end" , () => {
            resolve(JSON.parse(body))
        })
    })
}