var userService = require('./userService');
var commanResponseService = require('../../services/responseService');

module.exports.createUserFn = async (req, res)=> {
    try {
        var createUserMsg = await userService.createUser(req.body);
        console.log(createUserMsg);
        commanResponseService.sucessWithMsg(res,createUserMsg);
        
    } catch (error) {
        console.log(error);
        commanResponseService.errorWithMessage(res,"something went wrong");
        
    }
}

module.exports.userLoginFn = async (req, res)=> {
    try {
        // {status: true, msg: "Sucessfully Validated"}
        var loginUserMsg = await userService.loginUser(req.body);
        console.log(loginUserMsg);
        if(loginUserMsg.status){
            commanResponseService.sucessWithMsg(res,loginUserMsg.msg);

        }else{
            commanResponseService.errorWithMessage(res,loginUserMsg.msg);

        }
        
        
    } catch (error) {
        console.log(error);
        commanResponseService.errorWithMessage(res,"something went wrong");
        
    }
}