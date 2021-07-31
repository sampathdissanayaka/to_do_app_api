var productService = require('./productService');
var commanResponseService = require('../../services/responseService');

 module.exports.getAllProductFn = async (req, res)=> {
    // console.log(req.params.id);

    try {
      var data = await productService.getAllDataFn();
      console.log(data);
      commanResponseService.sucessWithData(res,data);
      
     
    } catch (error) {
      console.log()
      commanResponseService.errorWithMessage(res,"something went wrong");
     
       
    }

}

module.exports.createProductFn = async (req, res)=> {
  // console.log(req.params.id);

  try {
    var createProductMsg = await productService.createProduct(req.body);
    console.log(createProductMsg);
    commanResponseService.sucessWithData(res,createProductMsg);
    
   
  } catch (error) {
    console.log(error);
    commanResponseService.errorWithMessage(res,"something went wrong");
   
     
  }

}

//  module.exports = {getAllProductFn};