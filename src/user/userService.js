var userModel = require('./userModel');


/**
 * 
 * @param {request body} data 
 * @returns --> 
 */
module.exports.createUser = (data) => {
    return new Promise(async (resolve, reject) => {
        const userModelData = new userModel();
        userModelData.email = data.email;
        userModelData.password = await userModelData.encryptPassword(data.password);
        userModelData.name = data.name;
        
        userModelData.save((error, dataValue)=> {
            if(error){
                reject(error);
            }else{
                resolve("sucessfully create user");
            }

        });
    });
}

module.exports.loginUser = (resBody) => {
    return new Promise((resolve, reject) => {
       
        userModel.findOne({email: resBody.email}, async (error,dataValue) => {
            if(error){
                reject(error);
            }else{
                if(dataValue != undefined || dataValue != null){
                    
                    let userModelData = new userModel();
                    // validate password using encryptBd password and request password
                    let validationStatus = await userModelData.validatePassword(dataValue.password, resBody.password);
                    if(validationStatus){
                        resolve({status: true, msg: "Sucessfully Validated"});

                    }else{
                        resolve({status: false, msg: "Password id incorrect"});

                    }

                }else{
                    resolve({status: false, msg: " Invalidated user"});
                }
            }

        });
    });
}