var productModel = require('./productModel');

module.exports.getAllDataFn = () => {
    return new Promise((resolve, reject) => {
        productModel.find({},(error, dataValue)=> {
            if(error){
                reject(error);
            }else{
                resolve(dataValue);
            }
        });
    });
}


module.exports.createProduct = (data) => {
    return new Promise((resolve, reject) => {
        const productModelCreate = new productModel();
        productModelCreate.item_name = data.item;
        productModelCreate.description = data.description;
        productModelCreate.qty = data.qty;
        productModelCreate.save((error, dataValue)=> {
            if(error){
                reject(error);
            }else{
                resolve("sucessfully create product");
            }

        });
    });
}
